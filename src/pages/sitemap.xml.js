// pages/sitemap.xml.js

const Sitemap = () => {};

export const getStaticProps = async ({ res }) => {
  const baseUrl = "https://websphereuk.com"; // No trailing slash

  const staticPaths = [
    "/",                          
    "/about-us",
    "/our-services",
    "/our-portfolio",
    "/contact-us",
    "/careers",
    "/services/app-development",
    "/services/web-development",
    "/services/ui-ux-design",
    "/services/digital-marketing",
    "/services/cloud-computing",
    "/services/devops",
    "/services/data-analytics",
    "/services/e-commerce-solutions",
    "/services/blockchain-development",
    "/services/artificial-intelligence",
    "/services/software-maintenance",
  ];

  // ✅ Make sure every path starts with "/"
  const urls = staticPaths.map((path) => {
    const formattedPath = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl}${formattedPath}`;
  });



  const today = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
