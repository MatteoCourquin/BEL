import * as contentful from 'contentful';
const createClient = (contentful as any).createClient || (contentful as any).default?.createClient;

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