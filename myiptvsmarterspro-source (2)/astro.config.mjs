import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://myiptvsmarterspro.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      serialize(item) {
        const url = item.url;
        if (url === `${SITE}/`) item.priority = 1;
        else if (url.startsWith(`${SITE}/blog/`) && url !== `${SITE}/blog/`) item.priority = 0.7;
        else if (url === `${SITE}/blog/`) item.priority = 0.7;
        else if (/abonnement-iptv|iptv-france/.test(url)) item.priority = 0.9;
        else if (/installation|chaines|faq|revendeur/.test(url)) item.priority = 0.8;
        else if (url === `${SITE}/contact/`) item.priority = 0.5;
        else if (/termes|confidentialite|remboursement/.test(url)) { item.priority = 0.2; item.changefreq = 'yearly'; }
        else item.priority = 0.8;
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
