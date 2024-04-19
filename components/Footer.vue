<template>
  <footer class="bg-black py-16">
    <div class="max-w-default h-fit mx-auto px-x-default">
      <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-center my-6">
        <NuxtLink to="/" aria-label="Logo de l'entreprise BEL">
          <svg width="97" height="40" viewBox="0 0 97 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="stroke-white hover:stroke-gold transition-colors">
            <path d="M7.84616 20.7692V21.7692H8.84616H29.3846V39H1V1H29.3846V17.0769H8.84616H7.84616V18.0769V20.7692Z"
              stroke-width="2" />
            <path
              d="M40.9228 23.8462V24.8462H41.9228H62.0767V39H34.0767V1H62.0767V13.6154H41.9228H40.9228V14.6154V18.0769V19.0769H41.9228H47.8459V19.7692H41.9228H40.9228V20.7692V23.8462Z"
              stroke-width="2" />
            <path d="M72.3442 20.7692V21.7692H73.3442H95.5384V39H67.1538V1H72.3442V20.7692Z" stroke-width="2" />
            <line x1="11" y1="9" x2="19" y2="9" stroke-width="2" />
            <line x1="11" y1="30" x2="19" y2="30" stroke-width="2" />
          </svg>
        </NuxtLink>
        <p class="text-white text-xl  mt-6 md:mt-0">Demande de renseignements</p>
      </div>
      <div class="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center my-6">
        <div class="flex flex-wrap gap-4 mt-3 md:mt-0">
          <p class="text-white flex items-center mr-8">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

            </span>
            <a href="mailto:etudes@be-legavre.fr">etudes@be-legavre.com</a>
          </p>
          <p class="text-white flex items-center mr-8">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                <circle cx="12" cy="8" r="2" />
                <path
                  d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
              </svg>
            </span>
            7 rue Surcouf – ZA D’Atlantheix - 56450 THEIX-NOYALO
          </p>
          <p class="text-white flex items-center mr-8">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <a href="tel:0297475327">02 97 47 53 27</a>
          </p>
        </div>
        <NuxtLink to="/contact"
          class="bg-white hover:bg-gold !text-black hover:!text-white transition-colors px-10 py-1 rounded-small uppercase font-inter-semi-bold">
          Contact
        </NuxtLink>
      </div>
      <hr class="text-white my-16">
      <div class="flex flex-col-reverse md:flex-row items-start md:items-center justify-between text-white">
        <p class="text-sm text-white mt-3 md:mt-0">© 1988 - {{ dateYear }} Bureau Études Legavre. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      dateYear: new Date().getFullYear(),
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
