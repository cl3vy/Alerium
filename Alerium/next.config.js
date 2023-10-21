/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack (config) {
    config.module.rules.push (
      {
        test: /\.svg$/,
        use: [ {loader: '@svgr/webpack', options: {icon: true}}]
      }
    )
    return config
  },
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
    },
}

module.exports = nextConfig
