/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  devIndicators: false,
  images: { unoptimized: true },
  experimental: { cpus: 2 },
}
export default config
