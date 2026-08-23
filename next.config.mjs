/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exporta o site como ficheiros estáticos (HTML/CSS/JS puros).
  // Compatível com Cloudflare Pages, Vercel, ou qualquer hospedagem simples,
  // sem precisar de um servidor Node.js a correr.
  output: "export",
};

export default nextConfig;
