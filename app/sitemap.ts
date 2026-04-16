import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages = PROJECTS.map((project) => ({
        url: `https://portfolio-phi-ten-5v9g6mtd5x.vercel.app/projects/${project.slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: 'https://portfolio-phi-ten-5v9g6mtd5x.vercel.app',
            lastModified: new Date(),
        },
        ...projectPages,
    ];
}
