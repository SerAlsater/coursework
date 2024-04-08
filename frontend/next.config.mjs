/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "api.seralaster.ru"], 
    formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
