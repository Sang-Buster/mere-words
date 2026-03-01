import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkDeflist from 'remark-deflist';
import remarkGfm from 'remark-gfm';
import remarkSupersub from 'remark-supersub';
import siteConfig from './src/data/site-config';
import rehypeAbbr from './src/utils/rehype-abbr.mjs';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    vite: {
        plugins: [tailwindcss()]
    },
    markdown: {
        gfm: false,
        remarkPlugins: [
            [remarkGfm, { singleTilde: false }],
            remarkDeflist,
            remarkSupersub
        ],
        rehypePlugins: [rehypeAbbr]
    },
    integrations: [mdx(), sitemap()]
});
