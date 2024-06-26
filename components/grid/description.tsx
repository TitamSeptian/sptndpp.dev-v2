import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../card';
import { me } from '@/config/me';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt={me.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='leading-relaxed'>
                I&apos;m <span className='text-xl font-semibold'>{me.alias}</span>, {me.description}
            </p>
        </Card>
    );
}
