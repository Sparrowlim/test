/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // X-Powered-By header 보안 이슈 해결
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 eslint 무시
  },
}

export default nextConfig
