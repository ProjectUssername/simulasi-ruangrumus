"""End-to-end tests for the prepared Next.js static export. The local test server exits with this script."""
import contextlib
import functools
import http.server
import json
import pathlib
import re
import threading
from playwright.sync_api import sync_playwright, expect

ROOT = pathlib.Path(__file__).resolve().parents[1]
KEY = 'ruangrumus.study.v1'
OUT = ROOT / 'out'
ARTIFACTS = ROOT / '.checks'
ARTIFACTS.mkdir(exist_ok=True)
assert (OUT / 'index.html').exists(), 'Jalankan npm run build terlebih dahulu.'

class QuietServer(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

@contextlib.contextmanager
def test_server():
    server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietServer, directory=OUT))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f'http://127.0.0.1:{server.server_port}'
    finally:
        server.shutdown()
        server.server_close()
        thread.join(2)

with test_server() as base, sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True, args=['--no-sandbox'])
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, locale='id-ID')
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda err: errors.append(str(err)))
    page.set_default_timeout(7000)
    def state():
        return page.evaluate('(k) => JSON.parse(localStorage.getItem(k))', KEY)
    def nav(label):
        page.locator('.desktop-nav').get_by_role('link', name=label, exact=True).click()
    def fit():
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Overflow: ' + page.url
    def shot(name):
        page.evaluate('document.fonts.ready')
        page.screenshot(path=str(ARTIFACTS / name), full_page=True)
    page.goto(base)
    expect(page.get_by_role('heading', name='Beranda belajar')).to_be_visible()
    expect(page.get_by_role('button', name='Buka profil belajar')).to_be_enabled()
    fit(); shot('desktop.png')
    assert page.locator('img').evaluate_all('(imgs) => imgs.every(i => i.complete && i.naturalWidth > 0)')
    page.get_by_role('button', name='Buka profil belajar').click()
    page.get_by_label('Nama panggilan').fill('Nisa')
    page.get_by_role('button', name='Simpan nama').click()
    expect(page.locator('.profile-name')).to_have_text('Nisa')
    page.get_by_role('button', name='Lihat semua', exact=True).click()
    assert page.locator('.topic-row').count() == 9
    page.get_by_role('button', name='Tampilkan ringkas').click()
    page.get_by_role('button', name='Tentang perhitungan progres').click()
    expect(page.get_by_role('dialog')).to_be_visible()
    page.keyboard.press('Escape')
    expect(page.get_by_role('dialog')).to_have_count(0)
    nav('Materi')
    page.get_by_role('button', name='Tandai sudah dipelajari').click()
    assert state()['lessons'] == [1]
    page.get_by_role('textbox', name='Cari kisi-kisi').fill('bunga')
    assert page.locator('.lesson-list a').count() == 2
    page.get_by_role('textbox', name='Cari kisi-kisi').fill('tidakditemukan')
    expect(page.get_by_text('Tidak ada kisi-kisi yang cocok.')).to_be_visible()
    page.get_by_role('button', name='Lihat semua kisi-kisi').click()
    page.get_by_role('link', name='Lihat contoh soal', exact=True).click()
    page.get_by_role('button', name='Lihat pembahasan').click()
    expect(page.locator('.steps-list li')).to_have_count(3)
    page.get_by_role('button', name='Tandai sudah dipahami').click()
    assert state()['examples'] == [1]
    nav('Beranda')
    expect(page.locator('.progress-ring')).to_have_attribute('aria-label', '11% progres belajar')
    nav('Cara Pengerjaan')
    page.get_by_role('button', name='Kesalahan umum', exact=True).click()
    expect(page.get_by_role('heading', name='Kesalahan yang sering terjadi')).to_be_visible()
    page.get_by_text('Urutan fungsi komposisi', exact=True).click()
    page.get_by_role('button', name='Tentang try out', exact=True).click()
    expect(page.locator('.guide-accordions details')).to_have_count(4)
    nav('Hasil')
    expect(page.get_by_role('heading', name='Belum ada hasil try out')).to_be_visible()
    page.get_by_role('link', name='Mulai try out', exact=True).click()
    page.get_by_role('button', name='Mulai pengerjaan').click()
    expect(page.get_by_role('timer')).to_be_visible()
    page.locator('label.option').nth(2).click()
    page.get_by_role('button', name='Ragu-ragu', exact=True).click()
    page.get_by_role('button', name='Selanjutnya', exact=True).click()
    page.locator('label.option').nth(0).click()
    page.get_by_role('button', name=re.compile(r'^Soal 26,')).click()
    page.get_by_label('Jawaban dan langkah pengerjaan').fill('b = 3, a = 5, S15 = 390. Lima selisih bernilai 15.')
    initial_end = state()['draft']['endsAt']
    page.reload()
    expect(page.get_by_label('Jawaban dan langkah pengerjaan')).to_have_value(re.compile('390'))
    assert state()['draft']['cursor'] == 25
    assert state()['draft']['endsAt'] == initial_end
    assert state()['draft']['flags'] == [1]
    nav('Beranda')
    page.get_by_role('link', name='Lanjutkan try out', exact=True).click()
    expect(page.get_by_label('Jawaban dan langkah pengerjaan')).to_have_value(re.compile('390'))
    page.get_by_role('button', name=re.compile(r'^Soal 1,')).click()
    expect(page.locator('.option.is-chosen')).to_contain_text('51')
    expect(page.get_by_role('button', name='Ditandai ragu-ragu')).to_have_attribute('aria-pressed', 'true')
    shot('exam.png')
    page.get_by_role('button', name='Selesaikan try out').click()
    expect(page.get_by_role('dialog')).to_contain_text('27 soal masih kosong')
    page.get_by_role('button', name='Periksa lagi').click()
    page.get_by_role('button', name='Selesaikan try out').click()
    page.get_by_role('button', name='Kumpulkan jawaban', exact=True).click()
    expect(page.get_by_text('1 dari 25 jawaban benar')).to_be_visible()
    expect(page.locator('.score-main h2')).to_have_text('4 / 100')
    assert state()['draft'] is None and len(state()['history']) == 1
    expect(page.locator('.review-item')).to_have_count(30)
    page.locator('.review-item summary').first.click()
    expect(page.locator('.review-item[open]')).to_contain_text('Kunci jawaban')
    page.get_by_label('Filter pembahasan').select_option('Salah')
    expect(page.locator('.review-item')).to_have_count(1)
    page.get_by_role('button', name='Buka rubrik esai').click()
    expect(page.locator('.review-item')).to_have_count(5)
    page.locator('.review-item summary').first.click()
    page.locator('.review-item[open] .rubric input').first.check()
    assert state()['history'][0]['selfMarks']['26'] == [0]
    page.get_by_role('button', name='Per kisi-kisi', exact=True).click()
    expect(page.locator('.topic-result')).to_have_count(9)
    page.get_by_role('button', name='Riwayat', exact=True).click()
    expect(page.locator('.history-row')).to_have_count(1)
    page.locator('.history-row').click()
    page.get_by_role('link', name='Ulangi try out', exact=True).click()
    page.get_by_role('button', name='Mulai pengerjaan').click()
    # An expired, previously saved attempt must be submitted upon reopening.
    page.evaluate('''k=>{const s=JSON.parse(localStorage.getItem(k)); s.draft.startedAt=Date.now()-5402000;s.draft.endsAt=Date.now()-2000;localStorage.setItem(k,JSON.stringify(s))}''', KEY)
    page.reload()
    expect(page.get_by_text('Waktu habis. Jawaban terakhir dikumpulkan otomatis.')).to_be_visible()
    assert len(state()['history']) == 2 and state()['history'][0]['timedOut']
    # Verify total score 100 and all 25 links from a completed full practice.
    key = [2,3,1,4,0,3,2,1,3,0,2,4,1,0,3,2,2,0,4,2,1,3,4,0,1]
    nav('Try Out'); page.get_by_role('button', name='Mulai pengerjaan').click()
    for index, correct in enumerate(key):
        page.locator('label.option').nth(correct).click()
        page.get_by_role('button', name='Selanjutnya', exact=True).click()
    for index in range(5):
        page.get_by_label('Jawaban dan langkah pengerjaan').fill('Jawaban uji: langkah ' + str(index+1))
        if index < 4:
            page.get_by_role('button', name='Selanjutnya', exact=True).click()
    page.get_by_role('button', name='Selesai', exact=True).click()
    page.get_by_role('button', name='Kumpulkan jawaban', exact=True).click()
    expect(page.locator('.score-main h2')).to_have_text('100 / 100')
    assert len(state()['history']) == 3
    # Real mobile viewport, clean first visit, deep links, navigation and forms.
    mobile = browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,locale='id-ID')
    phone=mobile.new_page(); phone.on('pageerror',lambda e:errors.append(str(e)))
    phone.goto(base);expect(phone.get_by_role('button',name='Buka profil belajar')).to_be_enabled()
    phone.evaluate('document.fonts.ready');phone.screenshot(path=str(ARTIFACTS/'mobile.png'),full_page=True)
    for width in [320,375,390,600,768,1024,1440]:
        phone.set_viewport_size({'width':width,'height':850})
        assert phone.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'Homepage width {width}'
    phone.set_viewport_size({'width':390,'height':844})
    phone.get_by_role('button',name='Buka menu',exact=True).click()
    phone.locator('#mobile-nav').get_by_role('link',name='Materi',exact=True).click()
    phone.get_by_label('Pilih kisi-kisi').select_option('9')
    expect(phone.get_by_role('heading',name='Invers dari fungsi komposisi',exact=True)).to_be_visible()
    for route in ['materi/?topik=9','contoh-soal/?topik=8','cara-pengerjaan/','try-out/','hasil/']:
        phone.goto(base+'/'+route);phone.wait_for_load_state('networkidle')
        assert phone.evaluate('document.documentElement.scrollWidth <= innerWidth'),route
    phone.goto(base+'/try-out/');phone.get_by_role('button',name='Mulai pengerjaan').click()
    phone.get_by_role('button',name='Tampilkan nomor soal').click()
    phone.get_by_role('button',name=re.compile(r'^Soal 30,')).click()
    phone.get_by_label('Jawaban dan langkah pengerjaan').fill('h(x) = (2x + 2) / (2x - 1)')
    assert phone.evaluate('document.documentElement.scrollWidth <= innerWidth')
    phone.screenshot(path=str(ARTIFACTS/'mobile-exam.png'),full_page=True)
    assert not errors,errors
    browser.close()
    print('LULUS: 6 halaman, 30 nomor soal, progres, profil, pencarian, autosave, pemulihan sesi, penanda, timer, skor 4/100 dan 100/100, rubrik, riwayat, dan layout 320–1440 px. Tidak ada galat JavaScript.')
