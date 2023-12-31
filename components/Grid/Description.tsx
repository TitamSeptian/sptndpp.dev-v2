import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../Card';

export default function Description() {
    return (
        <Card>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-4 justify-center'>
                <div className='relative size-14 sm:size-16 overflow-hidden rounded-full'>
                    <Image
                        src={profile}
                        alt='Maulana Ahmad Aji Triadi'
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        placeholder='blur'
                        priority
                    />
                </div>
                <p className='leading-relaxed'>
                    I&apos;m{' '}
                    <span className='text-xl font-semibold'>Maulana</span>, a
                    web developer from Yogyakarta, Indonesia. I&apos;m
                    interested in Laravel, Node, Go, and React.
                </p>
            </div>
        </Card>
    );
}
