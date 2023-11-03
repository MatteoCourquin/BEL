
let environement: string;

if (typeof window !== 'undefined') {
  environement = window.location.hostname.includes('localhost') ? 'DEV' : 'PROD';
}

export default defineNuxtPlugin(async () => {
  let createClient;

  if (environement === 'DEV') {
    const devModule = await import('contentful');
    createClient = devModule.createClient;
    console.log('DEV');
    
  } else {
    const prodModule = await import('contentful');
    createClient = prodModule.createClient;
    console.log('PROD');
  }

  return {
    provide: {
      client: createClient({
        space: 'y2z892aueigm',
        accessToken: 'Li_fXscKxPbUtnyC0qBy7wf9F8QVNVcri_hklL1gOyk'
      })
    }
  }
})








// const environement = window.location.hostname.includes('localhost') ? 'DEV' : 'PROD'

// // // DEV
// // import { createClient } from 'contentful';

// // // PROD
// // import contentful from 'contentful';
// // const { createClient } = contentful;


// export default defineNuxtPlugin(() => {
//   return {
//     provide: {
//       client: createClient({
//         space: 'y2z892aueigm',
//         accessToken: 'Li_fXscKxPbUtnyC0qBy7wf9F8QVNVcri_hklL1gOyk'
//       })
//     }
//   }
// })
