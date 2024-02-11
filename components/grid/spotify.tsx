'use client';

import { Spotify } from '@/types/spotify';
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
import useSWR from 'swr';
import Card from '../card';

function NowPlaying() {
    const { data } = useSWR<Spotify>('/api/now-playing', (url: string) =>
        fetch(url).then((r) => r.json())
    );

    if (!data)
        return (
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='inline-flex gap-1 justify-center items-center'>
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                        </div>
                        <div className='animate-pulse h-4 rounded-md bg-gray-300'>
                            <span className='invisible'>Now Playing</span>
                        </div>
                    </div>
                    <div className='animate-pulse h-6 rounded-md bg-gray-300'>
                        <span className='invisible'>Song Title</span>
                    </div>
                    <div className='animate-pulse h-4 rounded-md bg-gray-300'>
                        <span className='invisible'>Artist</span>
                    </div>
                </div>
            </div>
        );

    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='inline-flex gap-1 justify-center items-center'>
                    {data?.isPlaying ? (
                        <>
                            <div className='bg-[#1DB954] w-1 rounded-full animate-[playing_0.85s_ease_infinite]' />
                            <div className='bg-[#1DB954] w-1 rounded-full animate-[playing_1.26s_ease_infinite]' />
                            <div className='bg-[#1DB954] w-1 rounded-full animate-[playing_0.62s_ease_infinite]' />
                        </>
                    ) : (
                        <>
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                            <div className='bg-[#1DB954] w-1 h-1 rounded-full' />
                        </>
                    )}
                </div>
                <p className='text-sm'>
                    {data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}
                </p>
            </div>
            <Link
                className='cancel-drag text-2xl font-semibold line-clamp-3'
                href={
                    data?.isPlaying
                        ? data?.songUrl
                        : 'https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=15c53cbc7c774697'
                }
                target='_blank'
                rel='nofollow noopener noreferrer'>
                {data?.isPlaying ? data?.title : 'Pink + White'}
            </Link>
            <p>{data?.isPlaying ? data?.artist : 'Frank Ocean'}</p>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-3 justify-between'>
                <FaSpotify size='3.5rem' color='#1DB954' />
                <NowPlaying />
            </div>
        </Card>
    );
}