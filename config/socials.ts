import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';
import { me } from './me';

interface Socials {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Socials[] = [
    {
        name: 'Instagram',
        url: me.instagram,
        icon: FaInstagram,
    },
    {
        name: 'Github',
        url: me.github,
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        url: me.linkedin,
        icon: FaLinkedin,
    },
];

export default socials;
