import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages = PROJECTS.map((project) => ({
        url: `https://namanharbola.me/projects/${project.slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: 'https://namanharbola.me',
            lastModified: new Date(),
        },
        ...projectPages,
    ];
}
