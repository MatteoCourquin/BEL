// DEV
// import { createClient } from 'contentful';

// PROD
import contentful from 'contentful';
const { createClient } = contentful;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
      }),
    },
  };
});