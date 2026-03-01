import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://poetry.singsongaftermath.com',
    avatar: {
        src: avatar,
        alt: 'Isabelle'
    },
    title: 'Isabelle',
    subtitle: 'Lines for the in-between',
    description: 'Mere-Words is a quiet collection of poems and reflections on faith, longing, doubt, and the slow work of becoming. These are not polished answers, only honest words.',
    image: {
        src: '/preview.jpg',
        alt: 'Preview Image'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Poems',
            href: '/poems'
        },
        {
            text: 'Notes',
            href: '/notes'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Categories',
            href: '/categories'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'Twitter/X',
            href: 'https://twitter.com/'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/'
        }
    ],
    hero: {
        title: 'You\'ve found a quiet place.',
        text: "I'm **Isabelle**.\nI write poems, sometimes spiritual, sometimes not about the things that linger.\nAbout faith, doubt, longing, and ordinary days.\n\nYou can find more of my words on [Instagram](https://instagram.com/) or follow me on [Twitter/X](https://twitter.com/).",
        image: {
            src: hero,
            alt: 'Charlie Brown'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to my newsletter',
        text: 'All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
