<template>
  <section
    class="h-screen-header min-h-[800px] max-w-default py-y-default px-x-default mx-auto flex flex-col lg:flex-row justify-between items-center">
    <div class="flex flex-col w-full lg:w-1/2 ">
      <h3>Demander un devis</h3>
      <form method='' ref='form' @submit.prevent='sendEmail'>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 mt-4">
          <input type='text' placeholder='Jean' class="w-full sm:w-1/2 p-2 rounded-md border-dark-grey border" />
          <input type='text' placeholder='Dupont' class="w-full sm:w-1/2  p-2 rounded-md border-dark-grey border" />
        </div>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 mt-4">
          <input type='text' placeholder='jean.dupont@gmail.com' class="w-full sm:w-1/2 p-2 rounded-md border-dark-grey border" />
          <input type='text' placeholder='0612121212' class="w-full sm:w-1/2 p-2 rounded-md border-dark-grey border" />
        </div>
        <textarea placeholder='Je vous contact pour ...'
          class="mt-4 w-full p-2 rounded-md border-dark-grey border"></textarea>
        <button type='submit' class="bg-gold mt-6 px-10 py-1 !text-white rounded-md">Envoyer</button>
      </form>
    </div>
    <div class="flex justify-end w-full lg:w-1/2">
      <div class="border-image m-4 w-1/2 lg:w-1/2 min-w-[250px] min-h-[16vh] sm:h-[30vh]  -translate-x-4">
        <img src="/images/architect.jpg" alt="illustration d'architecture"
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
    return {};
  },
  methods: {
    sendEmail() {
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, this.$refs.form, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/scss/main.scss";

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