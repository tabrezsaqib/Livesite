module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    AUTH_URL: process.env.AUTH_URL,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/glossary": { page: "/glossary" },
      "/resources": { page: "/resources" },
      "/admin": { page: "/admin" },
      "/contact": { page: "/contact" },
      "/search": { page: "/search" },
      "/login": { page: "/login" },
      "/plants": { page: "/plants" },
      "/plants/[id]": { page: "/plants/[id]" },
    }
  },
  trailingSlash: true,
}
