import Button from '@/components/button';
import Card from '@/components/card';
import Container from '@/components/container';
import { CustomMDX } from '@/components/mdx';
import { siteConfig } from '@/config/site';
import { articleServices } from '@/lib/ArticleServices';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaX } from 'react-icons/fa6';
import GridLayout from '@/components/layout/grid-layout';
import { lgLayout, smLayout } from '@/config/layouts';

interface ArticleProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
    articleServices().map((article) => ({ slug: article.slug }));

export const generateMetadata = ({ params }: ArticleProps) => {
  const article = articleServices().find(
      (article) => article.slug === params.slug,
  );
  if (!article) return;

  const { title, description } = article;

  return {
    title: `${title} — Articles`,
    description: description,
    url: `${siteConfig.url}/articles/${article.slug}`,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      locale: 'en-US',
      siteName: title,
      url: `${siteConfig.url}/articles/${article.slug}`,
      authors: siteConfig.nickname,
      images: [
        {
          url: `${siteConfig.url}/${article.cover}`,
        },
      ],
    },
    twitter: {
      title: title,
      description: description,
      images: article.cover,
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}/articles/${article.slug}`,
    },
  };
};

const ArticlePage = ({ params }: ArticleProps) => {
  const article = articleServices().find(
      (article) => article.slug === params.slug,
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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Container className="py-8">
          <header className="flex items-center justify-center pb-10">
            <Button
                as={Link}
                className="inline-flex hover:mb-6 hover:scale-125"
                href="/">
              <FaX />
              <div className="sr-only">Close</div>
            </Button>
          </header>
          <Card className="group relative bg-red-100 dark:bg-red-100">
            <Image
                src={article.cover}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // placeholder='blur'
                priority
            />
          </Card>
          <h1 className="text-3xl font-bold leading-relaxed">
            {article.title}
          </h1>
          <div className="grid grid-cols-2 gap-10 pb-8 max-md:grid-cols-1">
            <div>
              <p className="text-xl font-medium leading-relaxed">
                {article.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {article.links.map(
                    (link: { url: string; name: string }) => (
                        <Button
                            key={link.url}
                            as={Link}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer nofollow noopener"
                            className="inline-flex px-5 py-3 text-sm">
                          {link.name}
                          <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                        </Button>
                    ),
                )}
              </div>
            </div>
            <article className="prose dark:prose-invert">
              <CustomMDX source={article.content} />
            </article>
          </div>
        </Container>
        {article.gallery && (
            <GridLayout
                lgLayout={lgLayout}
                mdLayout={lgLayout}
                smLayout={smLayout}
                className="-mt-8 pb-16">
              {article.gallery.map(
                  (image: { src: string; alt: string; title: string }, i) => (
                      <div key={i}>
                        <Card className="relative">
                          <Image
                              src={image.src}
                              alt={image.src}
                              fill
                              objectFit="cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </Card>
                      </div>
                  ),
              )}
            </GridLayout>
        )}
      </>
  );
};

export default ArticlePage;
