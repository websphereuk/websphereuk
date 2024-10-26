const Sitemap = () => { };

export const getServerSideProps = async ({ res }) => {

  const baseUrl = 'https://websphereuk.com';

  const staticPagesPath = [
    '/',
    'favicon.ico',
    'about-us',
    'our-services',
    'our-portfolio',
    'contact-us',
    'careers',
    'services/app-development',
    'services/web-development',
    'services/ui-ux-design',
    'services/digital-marketing',
    'services/cloud-computing',
    'services/devops',
    'services/data-analytics',
    'services/e-commerce-solutions',
    'services/blockchain-development',
    'services/artificial-intelligence',
    'services/software-maintenance',
  ].map((staticPagePath) => `${baseUrl}${staticPagePath}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPagesPath.map((url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod> 
          <changefreq>weekly</changefreq> 
          <priority>1.0</priority>
        </url>`).join('')}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
