import Link from 'next/link';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';
import {me} from '@/config/me';

export default function LinkedIn() {
    return (
        <Card className='relative flex h-full flex-col items-center justify-center bg-[#0A66C2] dark:bg-[#0A66C2]'>
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag'
                    href={me.linkedin}
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>LinkedIn</span>
                </Button>
            </div>
            <FaLinkedin size='4rem' color='white' />
        </Card>
    );
}
