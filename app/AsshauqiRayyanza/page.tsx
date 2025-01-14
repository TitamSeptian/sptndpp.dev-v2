import { siteConfig } from '@/config/site';
import Button from '@/components/button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import GridLayout from '@/components/layout/grid-layout-aa';
import Card from '@/components/card';
import { lgLayout, smLayout } from '@/config/projectLayouts';




const post = {
    metadata: {
        title: 'Undangan Tasyakuran Khitan Asshauqi Rayyanza',
        description:
            'Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan Tasyakuran Khitan putra kami',
        date: '2025-01-17',
        tags: ['tasyakuran', 'khitan'],
        name: 'Asshauqi Rayyanza'
    },
};
import Image from 'next/image';


const images = [
    {
        i: 'images-1',
        alt: post.metadata.name,
        url: "/aa/aa (1).jpg"
    },
    {
        i: 'images-2',
        alt: post.metadata.name,
        url: "/aa/aa (2).jpg"
    },
    {
        i: 'images-3',
        alt: post.metadata.name,
        url: "/aa/aa (3).jpg"
    },
    {
        i: 'images-4',
        alt: post.metadata.name,
        url: "/aa/aa (4).jpg"
    },
    {
        i: 'images-5',
        alt: post.metadata.name,
        url: "/aa/aa (5).jpg"
    },
    {
        i: 'images-6',
        alt: post.metadata.name,
        url: "/aa/aa (6).jpg"
    },
    {
        i: 'images-7',
        alt: post.metadata.name,
        url: "/aa/aa (7).jpg"
    },
    {
        i: 'images-8',
        alt: post.metadata.name,
        url: "/aa/aa (8).jpg"
    },
    {
        i: 'images-9',
        alt: post.metadata.name,
        url: "/aa/aa (9).jpg"
    },
    {
        i: 'images-10',
        alt: post.metadata.name,
        url: "/aa/aa (10).jpg"
    },
]
  

interface PostProps {
    params: { slug: string };
}


export const generateMetadata = ({ params }: PostProps) => {

    const { title, description, date } = post.metadata;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${siteConfig.url}`,
            authors: siteConfig.nickname,
            images: siteConfig.image,
        },
        twitter: {
            title,
            description,
            images: siteConfig.image,
        },
        alternates: {
            canonical: `${siteConfig.url}`,
        },
    };
};
interface SearchParams {
    invite?: string;
    // Add other search parameters if needed
}

export default function PostPage({ searchParams } : { searchParams: SearchParams }) {
    const { invite } = searchParams as { invite: string | undefined };
    const name = invite?.replace(/\+/g, ' ');
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.metadata.title,
        "description": post.metadata.description,
        "datePublished": post.metadata.date,
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className='text-center'>
                <h1 className='text-3xl font-bold leading-relaxed'>
                    Undangan Tasyakuran Khitan
                </h1>
                <small className='mt-2 text-gray-600 dark:text-gray-400'>
                    <time dateTime={post.metadata.date}>
                        {new Date(post.metadata.date).toLocaleDateString(
                            'en-us',
                            {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }
                        )}
                    </time>
                </small>
            </section>
            <section className='prose px-4 py-8 dark:prose-invert'>
                <h1 className="text-3xl font-bold mb-4">Tasyakuran Khitan Asshauqi Rayyanza</h1>

                <p className="mb-2">Untuk, <span className='font-bold'> {name ?? 'Anda'}</span></p>
                <p className="mb-2">Bismillahirrahmanirrahim</p>
                <p className="mb-2">Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>

                <p className="mb-4">
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Tasyakuran Khitan putra kami:
                </p>

                <h2 className="text-2xl font-semibold mb-2">{post.metadata.name}</h2>

                <p className="mb-4">Yang insya Allah akan diselenggarakan pada:</p>

                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Hari, Tanggal:</strong> Jumat, 17 Januari 2025
                    </li>
                    <li>
                        <strong>Waktu:</strong> 10.00 - selesai WIB
                    </li>
                    <li>
                        <strong>Tempat:</strong> Babakan bandung 43, 41212, Subang, Jawa Barat
                    </li>
                    <li>
                        <Button
                            key={"maps"}
                            as={Link}
                            href={'https://maps.app.goo.gl/VsvFsWXtRuGHnRis8'}
                            target='_blank'
                            rel='noreferrer nofollow noopener'
                            className='inline-flex px-5 py-3 text-sm'>
                                Buka Peta
                            <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                        </Button>
                    </li>
                </ul>

                <p className="mb-2">
                    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
                </p>

                <p className="mb-2">Atas kehadiran dan doa restunya, kami ucapkan terima kasih.</p>

                <p className="mb-2">Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>

                <p className="mt-4">Hormat Kami,</p>
                <p>Keluarga {post.metadata.name}</p>
            </section>
            {images && (
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={lgLayout}
                    smLayout={smLayout}
                    className='-mt-8 pb-16'>
                    {images.map(
                        (image, index) => (
                            <div key={image.i}>
                                <Card className='relative'>
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
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

