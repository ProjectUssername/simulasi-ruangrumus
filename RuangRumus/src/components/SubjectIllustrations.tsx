export function SubjectHeroArt({
  type,
}: {
  type: 'geometry' | 'history' | 'biology' | 'dance'
}) {
  if (type === 'geometry') {
    return (
      <div className="hero-art" aria-hidden="true">
        <div className="blueprint-circle" />
        <span className="axis-label axis-x">x</span>
        <span className="axis-label axis-y">y</span>
        <span className="hero-cross cross-a">+</span>
        <span className="hero-cross cross-b">+</span>
        <img
          src="/images/geometry.webp"
          alt=""
          width="993"
          height="850"
          fetchPriority="high"
        />
      </div>
    )
  }

  if (type === 'history') {
    return (
      <div className="hero-art" aria-hidden="true">
        <div className="blueprint-circle history-circle" />
        <span className="axis-label axis-x">1511</span>
        <span className="axis-label axis-y">1945</span>
        <span className="hero-cross cross-a">+</span>
        <span className="hero-cross cross-b">+</span>
        <img
          src="/images/sejarah.png"
          alt="3D Ilustrasi Sejarah Indonesia"
          width="993"
          height="850"
          fetchPriority="high"
        />
      </div>
    )
  }

  if (type === 'biology') {
    return (
      <div className="hero-art" aria-hidden="true">
        <div className="blueprint-circle biology-circle" />
        <span className="axis-label axis-x">μm</span>
        <span className="axis-label axis-y">DNA</span>
        <span className="hero-cross cross-a">+</span>
        <span className="hero-cross cross-b">+</span>
        <img
          src="/images/biologi.png"
          alt="3D Ilustrasi Biologi"
          width="993"
          height="850"
          fetchPriority="high"
        />
      </div>
    )
  }

  return (
    <div className="hero-art" aria-hidden="true">
      <div className="blueprint-circle dance-circle" />
      <span className="axis-label axis-x">3/4</span>
      <span className="axis-label axis-y">4/4</span>
      <span className="hero-cross cross-a">+</span>
      <span className="hero-cross cross-b">+</span>
      <img
        src="/images/seni-tari.png"
        alt="3D Ilustrasi Seni Tari"
        width="993"
        height="850"
        fetchPriority="high"
      />
    </div>
  )
}
