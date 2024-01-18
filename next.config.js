/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV !== 'development'

const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    reactStrictMode: false,
    // basePath: isProd ? 'http://localhost' : undefined
}

module.exports = nextConfig
