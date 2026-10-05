import * as contentful from 'contentful';
const createClient = (contentful as any).createClient || (contentful as any).default?.createClient;

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const space = (config.public.contentfulSpaceId as string) || (import.meta.env.VITE_CONTENTFUL_SPACE_ID as string);
  const accessToken = (config.public.contentfulAccessToken as string) || (import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string);

  return {
    provide: {
      client: createClient({
        space,
        accessToken,
      }),
    },
  };
});