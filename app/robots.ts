import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://portfolio-phi-ten-5v9g6mtd5x.vercel.app/sitemap.xml',
    };
}
