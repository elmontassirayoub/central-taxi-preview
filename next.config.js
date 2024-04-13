/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
    images: {
        domains: ["logo.gralon.net"]
    }
}

module.exports = nextConfig
