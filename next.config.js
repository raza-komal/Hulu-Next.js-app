/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["www.pinpng.com/" , "image.tmdb.org"]
  }
}

module.exports = nextConfig
