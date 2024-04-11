'use client';

import Link from 'next/link';
import { SiValorant } from "react-icons/si";
import Card from '../card';
import {me} from '@/config/me';

interface Spotify {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

function NowPlaying() {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <p className='text-xs font-semibold'>
                    {'VALORANT'}
                </p>
            </div>
            <Link
                className='cancel-drag'
                href={me.spotifyTrack}
                target='_blank'
                rel='nofollow noopener noreferrer'>
                <h2 className='line-clamp-3 text-2xl font-semibold'>
                    {me.valorant}
                </h2>
            </Link>
            <p className='text-xs'>in game name</p>
        </div>
    )
}

export default function Spotify() {
    return (
        <Card className='flex h-full flex-col justify-between gap-3 p-6 md:px-10 md:py-6'>
            <SiValorant size='3.5rem' color='#fa4454' />
            <NowPlaying />
        </Card>
    );
}
