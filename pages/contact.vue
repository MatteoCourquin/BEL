<template>
  <Head>
    <Title>Contact • BEL Bureau d'Études Legavre</Title>
    <Meta name="title" content="Contact • BEL Bureau d'Études Legavre" />
    <Meta name="description" content="Formulaire de contact et demande de devis pour Bureau d'Études Legavre." />
    <Meta name="robots" content="index" />
    <Link rel="canonical" href="https://www.be-legavre.com/contact" />
  </Head>
  <section
    class="min-h-screen-header max-w-default py-y-default px-x-default mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10">
    <div v-if="!isFormSend" class="w-full">
      <h3 class="pb-10">Demande de renseignements</h3>
      <div>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4">
          <div class="w-full flex flex-col items-start relative">
            <label for='firstname' class="font-michroma text-sm pb-2">Prénom <span class="!text-red-500">*</span></label>
            <input type='text' placeholder='Jean'
              class="placeholder-input w-full p-2 rounded-md bg-white focus:outline-gold border-gray border-dark-grey border"
              ref="firstname" name="firstname" />
            <span v-if="isError.firstname" class="!text-red-500 text-sm pt-2">Le prénom est requis</span>
          </div>
          <div class="w-full flex flex-col items-start relative">
            <label for='lastname' class="font-michroma text-sm pb-2">Nom</label>
            <input type='text' placeholder='Dupont'
              class="placeholder-input w-full  p-2 rounded-md bg-white focus:outline-gold border-gray border-dark-grey border"
              ref="lastname" name="lastname" />
          </div>
        </div>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 mt-4">
          <div class="w-full flex flex-col items-start relative">
            <label for='email' class="font-michroma text-sm pb-2">Mail <span class="!text-red-500">*</span></label>
            <input type='email' placeholder='jean.dupont@gmail.com'
              class="placeholder-input w-full p-2 rounded-md bg-white focus:outline-gold border-gray border-dark-grey border"
              ref="email" name="email" />
            <span v-if="isError.email" class="!text-red-500 text-sm pt-2">Le mail est requis</span>
            <span v-if="isError.isValidEmail" class="!text-red-500 text-sm pt-2">Votre email n'est pas valide</span>
          </div>
          <div class="w-full flex flex-col items-start relative">
            <label for='tel' class="font-michroma text-sm pb-2">Téléphone</label>
            <input type='tel' placeholder='06 00 00 00 00'
              class="placeholder-input w-full p-2 rounded-md bg-white focus:outline-gold border-gray border-dark-grey border"
              ref="tel" name="tel" />
          </div>
        </div>
        <div class="w-full mt-4 flex flex-col items-start relative">
          <label for='description' class="font-michroma text-sm pb-2">Description</label>
          <textarea placeholder='Je vous contact pour...'
            class="placeholder-input w-full p-2 min-h-[120px] rounded-md bg-white focus:outline-gold border-gray border-dark-grey border focus-border-gold"
            ref="description" name="description"></textarea>
        </div>
        <button @click="sendEmail"
          class="hover:bg-gray transition-colors cursor-pointer mt-10 w-full md:w-auto px-10 !text-white py-1 rounded-small uppercase font-inter-semi-bold bg-gold">Envoyer</button>
      </div>
    </div>
    <div v-else class="flex flex-col w-full">
      <h3>Merci, nous vous recontacterons très vite !</h3>
      <p class="py-2 md:py-4">Si vous ne faites rien, vous allez être redirigé sur la page d'accueil dans {{ timeout }} {{
        timeout === 1 ?
        'seconde' : 'secondes' }}
      </p>
      <NuxtLink to="/"
        class="bg-gold hover:bg-gray transition-colors px-10 !text-white py-1 rounded-small uppercase font-inter-semi-bold w-fit">
        accueil</NuxtLink>
    </div>
    <div class="lg:flex justify-end hidden h-2/3 min-h-[200px] max-h-[450px] self-end -translate-x-4 -translate-y-4">
      <div class="border-image w-8/12 h-full translate-x-4">
        <img src="/images/architect.webp" alt="illustration d'architecture"
          class="rounded-small object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {
      isFormSend: false,
      isError: { firstname: false, email: false, isValidEmail: false },
      timeout: 10,
      intervalId: null,
    };
  },
  methods: {
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    startCountdown() {
      this.intervalId = setInterval(() => {
        this.timeout--;
        if (this.timeout <= 0) {
          clearInterval(this.intervalId);
          this.$router.push('/');
        }
      }, 1000);
    },
    sendEmail() {
      const templateParams = {
        firstname: this.$refs.firstname.value,
        lastname: this.$refs.lastname.value,
        email: this.$refs.email.value,
        tel: this.$refs.tel.value,
        description: this.$refs.description.value,
      };

      templateParams.firstname ? this.isError.firstname = false : this.isError.firstname = true
      templateParams.email ? this.isError.email = false : this.isError.email = true
      !this.isValidEmail(templateParams.email) && templateParams.email ? this.isError.isValidEmail = true : this.isError.isValidEmail = false

      if (templateParams.firstname && this.isValidEmail(templateParams.email) && templateParams.email) {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then(() => {
            this.isFormSend = true;
            this.startCountdown();
          })
          .catch((error) => {
            console.error('FAILED : ', error);
            alert('Une erreur est survenue, veuillez réessayer');
          });
      }
    },
  },
};
</script>


<!-- <script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {
      isFormSend: false,
      isError: { firstname: false, email: false, isValidEmail: false },
      timeout: 10000
    };
  },
  methods: {
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    sendEmail() {
      const templateParams = {
        firstname: this.$refs.firstname.value,
        lastname: this.$refs.lastname.value,
        email: this.$refs.email.value,
        tel: this.$refs.tel.value,
        description: this.$refs.description.value,
      };

      templateParams.firstname ? this.isError.firstname = false : this.isError.firstname = true
      templateParams.email ? this.isError.email = false : this.isError.email = true
      !this.isValidEmail(templateParams.email) && templateParams.email ? this.isError.isValidEmail = true : this.isError.isValidEmail = false

      if (templateParams.firstname && this.isValidEmail(templateParams.email) && templateParams.email)
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then(() => {
            this.isFormSend = true;
            setTimeout(() => {
              this.$router.push('/');
            }, this.timeout);
          }, (error) => {
            console.error('FAILED : ', error);
            alert('Une erreur est survenue, veuillez réessayer');
          });
    }
  }
}
</script> -->

<style scoped lang='scss'>
@import "@/scss/main.scss";

.placeholder-input::placeholder {
  color: $color-gray;
  font-family: $font-inter;
  font-weight: $font-light;
  font-size: 14px;
}

.border-image {
  &::before {
    content: "";
    position: absolute;
    border: 1px solid $color-gold;
    border-radius: $radius-small;
    z-index: -1;
  }

  &::before {
    bottom: -16px;
    left: -16px;
    width: 100%;
    height: 35%;
    border-bottom-left-radius: $radius-medium;
  }
}
</style>