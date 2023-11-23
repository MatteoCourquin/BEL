<template>
  <section
    class="h-screen-header min-h-[800px] max-w-default py-y-default px-x-default mx-auto flex flex-col lg:flex-row justify-between items-center">
    <div v-if="!isFormSend" class="flex flex-col w-full lg:w-1/2 ">
      <h3>Demander un devis</h3>
      <form method='' ref='form' @submit.prevent='sendEmail'>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 mt-4">
          <div class="w-full flex flex-col items-start">
            <label for='firstname' class="w-full">Prénom</label>
            <input type='text' placeholder='Jean'  class="w-full p-2 rounded-md bg-white border-dark-grey border focus-border-gold invalid:border-red-500" ref="firstname"
              name="firstname" v-model="formData.firstname" @input="validateForm" />
          </div>
          <div class="w-full flex flex-col items-start">
            <label for='lastname' class="w-full">Nom</label>
            <input type='text' placeholder='Dupont' class="w-full  p-2 rounded-md bg-white border-dark-grey border focus-border-gold invalid:border-red-500" ref="lastname"
              name="lastname" v-model="formData.lastname" @input="validateForm" />
          </div>
        </div>
        <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 mt-4">
          <div class="w-1/2 flex flex-col items-start">
            <label for='mail' class="w-full">Mail</label>
            <input type='email' placeholder='jean.dupont@gmail.com' class="w-full p-2 rounded-md bg-white border-dark-grey border focus-border-gold invalid:border-red-500"
              ref="mail" name="mail" v-model="formData.mail" @input="validateForm" />
          </div>
          <div class="w-1/2 flex flex-col items-start">
            <label for='tel' class="w-full">Téléphone</label>
            <input type='tel' placeholder='0612121212' class="w-full p-2 rounded-md bg-white border-dark-grey border focus-border-gold invalid:border-red-500" ref="tel"
              name="tel" v-model="formData.tel" @input="validateForm" />
          </div>
        </div>
        <div class="w-full mt-4 flex flex-col items-start">
          <label for='description' class="w-full">Description</label>
          <textarea placeholder='Je vous contact pour ...' class="w-full p-2 rounded-md bg-white border-dark-grey border focus-border-gold invalid:border-red-500"
            ref="description" name="description" v-model="formData.description" @input="validateForm"></textarea>
        </div>
        <button type='submit' :class="{ 'bg-gold': isFormValid, 'bg-dark-gray': !isFormValid }" :disabled="!isFormValid"
          class="mt-6 px-10 py-1 !text-white rounded-md">Envoyer</button>
      </form>
    </div>
    <div v-else class="flex flex-col w-full lg:w-1/2 ">
      <h3>Merci, nous vous recontacterons très vite !</h3>
    </div>
    <div class="flex justify-end w-full lg:w-1/2">
      <div class="border-image m-4 w-full lg:w-1/2 min-w-[250px] h-48 min-h-[16vh] sm:h-[30vh]  -translate-x-4">
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
    return {
      isFormValid: false,
      isFormSend: false,
      formData: {
        firstname: '',
        lastname: '',
        mail: '',
        tel: '',
        description: '',
      },
    };
  },
  methods: {
    validateForm() {
      // verifie que formData.tel est bien un numero de tel avec une regex
      this.isFormValid = Object.values(this.formData).every(value => value !== '');
    },
    sendEmail() {
      emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, this.formData, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          this.isFormSend = true;
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
        }, (error) => {
          console.log('FAILED GROS NUL', error);
          alert('Une erreur est survenue, veuillez réessayer');
        });
    },
  }
}
</script>

<style scoped lang='scss'>
@import "@/scss/main.scss";
.focus-border-gold:focus {
  border-color: gold;
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