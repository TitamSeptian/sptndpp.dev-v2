'use client';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import Container from '../container';
import {me} from '@/config/me';

export default function FooterLayout() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className={isMounted ? 'opacity-100' : 'opacity-0'}>
            <Container className='pb-8'>
                <p className='text-center text-sm'>
                    Crafted by{' '}
                    <Link
                        href={me.github}
                        target='_blank'
                        className='font-semibold'>
                        {me.alias}
                    </Link>
                </p>
            </Container>
        </footer>
    );
}
