import socials from '@/config/socials';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';
import { me } from '@/config/me';

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='text-2xl font-semibold max-md:text-center'>
                Have an interesting project in mind? 👋
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                Got a project idea you&apos;re excited about? Need a hand with something? Or just want to say hello? I&apos;d love to hear from you! Reach out and let&apos;s chat.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <Button
                    as={Link}
                    className='cancel-drag px-4 py-2'
                    href={`mailto:${me.email}`}
                    target='_blank'
                    rel='noreferrer'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    Contact Me
                </Button>
            </div>
        </Card>
    );
}
