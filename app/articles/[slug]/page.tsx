import Button from '@/components/button';
import Card from '@/components/card';
import Container from '@/components/container';
import { CustomMDX } from '@/components/mdx';
import { siteConfig } from '@/config/site';
import { getArticles } from '@/lib/getArticles';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaX } from 'react-icons/fa6';

interface ArticleProps {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    getArticles().map((article) => ({ slug: article.slug }));

export const generateMetadata = ({ params }: ArticleProps) => {
    const article = getArticles().find(
        (article) => article.slug === params.slug
    );
    if (!article) return;

    const { title, description } = article;

    return {
        title: `${title} — Articles`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${siteConfig.url}/articles/${article.slug}`,
            authors: siteConfig.nickname,
            images: article.cover,
        },
        twitter: {
            title,
            description,
            images: article.cover,
        },
        alternates: {
            canonical: `${siteConfig.url}/articles/${article.slug}`,
        },
    };
};

const ArticlePage = ({ params }: ArticleProps) => {
    const article = getArticles().find(
        (article) => article.slug === params.slug
    );

    if (!article) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        author: [
            {
                '@type': 'Person',
                name: siteConfig.nickname,
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <Container className='py-8'>
                <header className='flex items-center justify-center pb-10'>
                    <Button
                        as={Link}
                        className='inline-flex hover:mb-6 hover:scale-125'
                        href='/'>
                        <FaX />
                        <div className='sr-only'>Close</div>
                    </Button>
                </header>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Card className='group relative bg-red-100 dark:bg-red-100'>
                    <Image
                        src={article.cover}
                        alt='next-blog-starter'
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover'
                        // placeholder='blur'
                        priority
                    />
                </Card>
                <h1 className='text-3xl font-bold leading-relaxed'>
                    {article.title} ~~
                </h1>
                <div className='grid grid-cols-2 gap-10 pb-8 max-md:grid-cols-1'>
                    <div>
                        <p className='text-xl font-medium leading-relaxed'>
                            {article.description}
                        </p>
                        <div className='flex flex-wrap items-center gap-3 pt-4'>
                            {article.links.map(
                                (link: { url: string; name: string }) => (
                                    <Button
                                        key={link.url}
                                        as={Link}
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer nofollow noopener'
                                        className='inline-flex px-5 py-3 text-sm'>
                                        {link.name}
                                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                    <article className='prose dark:prose-invert'>
                        <CustomMDX source={article.content} />
                    </article>
                </div>
            </Container>
            {/* {project.metadata.images && (
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={lgLayout}
                    smLayout={smLayout}
                    className='-mt-8 pb-16'>
                    {JSON.parse(project.metadata.images).map(
                        (image: { i: string; url: string }) => (
                            <div key={image.i}>
                                <Card className='relative'>
                                    <Image
                                        src={image.url}
                                        alt={project.metadata.title}
                                        fill
                                        objectFit='cover'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </Card>
                            </div>
                        )
                    )}
                </GridLayout>
            )} */}
        </>
    );
};

export default ArticlePage;
