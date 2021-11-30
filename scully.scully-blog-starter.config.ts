import { ScullyConfig } from '@scullyio/scully';
import { environment } from './src/environments/environment';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-blog-starter',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'json',
      slug: {
        url: 'https://api.flotiq.com/api/v1/content/blogpost',
        property: 'slug',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => rawData.data
      }
    },
    '/:page': {
      type: 'json',
      page: {
        url: 'https://api.flotiq.com/api/v1/content/blogpost?page=1&limit=8',
        property: 'page',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => {
          const pages = [];
          for (let i = 1; i <= rawData.total_pages; i++) {
            pages.push({page: i});
          }
          return pages;
        }
      }
    }
  }
};
