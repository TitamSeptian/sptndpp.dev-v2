import { siteConfig } from '@/config/site';
import { getAllPosts, getAllProjects } from '@/lib/mdx';
import { articleServices, IArticle } from '@/lib/ArticleServices';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [''].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));

    const articles = articleServices().map((article) => ({
        url: `${siteConfig.url}/articels/${article.slug}`,
        lastModified: article.date,
    }));

    return [...routes, ...articles];
}
