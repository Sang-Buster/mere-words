import avatarImage from '../assets/images/avatar.jpg';
import heroImage from '../assets/images/hero.jpg';
import previewImage from '../assets/images/preview.jpg';
import type { SiteConfig } from '../types';
import settings from './site-settings.json';

/**
 * Site configuration built from CMS-editable settings (src/data/site-settings.json)
 * with fallback defaults for images that require Astro asset imports.
 *
 * Edit general settings via Decap CMS at /admin under "Site Settings".
 */

/** Returns true when the CMS image path is a real uploaded URL (not a local asset reference) */
function isCmsUpload(src: string | undefined): src is string {
    return !!src && !src.startsWith('../../assets/') && src !== '';
}

const siteConfig: SiteConfig = {
    website: settings.website,
    avatar: {
        src: isCmsUpload(settings.avatar?.src) ? settings.avatar.src : avatarImage,
        alt: settings.avatar?.alt || 'Avatar'
    },
    title: settings.title,
    subtitle: settings.subtitle,
    description: settings.description,
    image: {
        src: isCmsUpload(settings.previewImage?.src) ? settings.previewImage.src : previewImage,
        alt: settings.previewImage?.alt || 'Preview Image'
    },
    headerNavLinks: settings.headerNavLinks,
    footerNavLinks: settings.footerNavLinks,
    socialLinks: settings.socialLinks,
    hero: {
        title: settings.hero?.title,
        text: settings.hero?.text,
        image: {
            src: isCmsUpload(settings.hero?.image?.src) ? settings.hero.image.src : heroImage,
            alt: settings.hero?.image?.alt || ''
        },
        actions: settings.hero?.actions
    },
    subscribe: {
        enabled: settings.subscribe?.enabled ?? true,
        title: settings.subscribe?.title,
        text: settings.subscribe?.text,
        form: {
            action: settings.subscribe?.formAction || '#'
        }
    },
    notesPerPage: settings.notesPerPage ?? 8,
    poemsPerPage: settings.poemsPerPage ?? 8
};

export default siteConfig;
