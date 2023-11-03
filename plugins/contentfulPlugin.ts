// DEV
// import { createClient } from 'contentful';

// PROD
import contentful from 'contentful';
const { createClient } = contentful;


export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient({
        space: 'y2z892aueigm',
        accessToken: 'Li_fXscKxPbUtnyC0qBy7wf9F8QVNVcri_hklL1gOyk'
      })
    }
  }
})
