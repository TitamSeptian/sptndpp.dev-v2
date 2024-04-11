'use client';

import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
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
                <div className='inline-flex items-center justify-center gap-1'>
                    <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#1DB954]' />
                </div>
                <p className='text-sm'>
                    {'Offline. Last Played'}
                </p>
            </div>
            <Link
                className='cancel-drag'
                href={me.spotifyTrack}
                target='_blank'
                rel='nofollow noopener noreferrer'>
                <h2 className='line-clamp-3 text-2xl font-semibold'>
                    {me.spotifyArtist}
                </h2>
            </Link>
            <p>{me.spotifySong}</p>
        </div>
    )
}

export default function Spotify() {
    return (
        <Card className='flex h-full flex-col justify-between gap-3 p-8'>
            <FaSpotify size='3.5rem' color='#1DB954' />
            <NowPlaying />
        </Card>
    );
}
