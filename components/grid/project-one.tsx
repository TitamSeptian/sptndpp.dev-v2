import { useState } from 'react';
import projectImage from '@/public/projects/next-blog-starter.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';
import { Client } from '@notionhq/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
export const getServerSideProps: GetServerSideProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });

    let pageId = 'ffaf0cda2ca54fc7bde9e0541f0ed8fb'; // replace with your page id

    try {
        const res = await notion.pages.retrieve({ page_id: pageId });
        return { props: { response: res } };
    } catch (err) {
        console.error(err);
        return { props: { response: {} } };
    }
};
export default function ProjectOne() {
    
    return (
        <Card className='group relative bg-red-100 dark:bg-red-100'>
            <Image
                src={projectImage}
                alt='next-blog-starter'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover'
                placeholder='blur'
                priority
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                    href='/projects/next-blog-starter'
                    aria-label='Blog Starter'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                        Blog Starter
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Button>
            </div>
        </Card>
    );
}
