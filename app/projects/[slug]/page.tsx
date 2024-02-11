import Button from '@/components/button';
import Card from '@/components/card';
import Container from '@/components/container';
import GridLayout from '@/components/layout/grid-layout';
import { CustomMDX } from '@/components/mdx';
import { lgLayout, smLayout } from '@/config/projectLayouts';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaX } from 'react-icons/fa6';

interface ProjectProps {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }: ProjectProps) => {
    const project = getAllProjects().find(
        (project) => project.slug === params.slug
    );
    if (!project) return;

    const { title, description } = project.metadata;

    return {
        title: `${title} — Projects`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${siteConfig.url}/projects/${project.slug}`,
            authors: 'Maulana',
            images: siteConfig.image,
        },
        twitter: {
            title,
            description,
            images: siteConfig.image,
        },
        alternates: {
            canonical: `${siteConfig.url}/projects/${project.slug}`,
        },
    };
};

const ProjectPage = ({ params }: ProjectProps) => {
    const project = getAllProjects().find(
        (project) => project.slug === params.slug
    );

    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [
            {
                '@type': 'Person',
                name: 'Maulana',
                url: siteConfig.url,
            },
        ],
    };

    console.log(getAllProjects());

    return (
        <>
            <Container className='py-8'>
                <header className='flex justify-center items-center pb-10'>
                    <Button
                        as={Link}
                        className='inline-flex hover:scale-125 hover:mb-6'
                        href='/'>
                        <FaX />
                        <div className='sr-only'>Close</div>
                    </Button>
                </header>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <h1 className='text-3xl font-bold leading-relaxed'>
                    {project.metadata.title}
                </h1>
                <div className='grid grid-cols-2 gap-10 max-[799px]:grid-cols-1 pb-8'>
                    <div>
                        <p className='text-xl font-medium leading-relaxed'>
                            {project.metadata.description}
                        </p>
                        <div className='flex items-center flex-wrap gap-3 pt-4'>
                            {JSON.parse(project.metadata.links).map(
                                (link: { url: string; name: string }) => (
                                    <Button
                                        key={link.url}
                                        as={Link}
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer nofollow noopener'
                                        className='inline-flex py-3 px-5 text-sm'>
                                        {link.name}
                                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                    <article className='prose dark:prose-invert'>
                        <CustomMDX source={project.content} />
                    </article>
                </div>
            </Container>
            {project.metadata.images && (
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
            )}
        </>
    );
};

export default ProjectPage;