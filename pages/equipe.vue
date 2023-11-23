<template>
  <section class="h-screen-header min-h-[800px] max-w-default pt-y-default mx-auto flex flex-col px-x-default">
    <h3 class="pb-4">Lorem ipsum dolor - Bureau d’études legavre</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repudiandae
      neque harum porro excepturi maiores molestiae consequuntur alias cum
      deserunt minus, ad modi temporibus fugiat,
    </p>
    <img src="/images/equipe.png" alt="Équipe du Bureau d'études Legavre"
      class="rounded-md object-cover translate-y-10 h-full" />
  </section>
  <section
    class="flex flex-col justify-center sm:items-start min-h-[800px] max-w-default py-y-default mx-auto items-center px-x-default">
    <h3 class="pb-10">Notre équipe d'expers</h3>
    <div class="w-full grid grid-equipe justify-items-center justify-center gap-10">
      <div v-for="(member, index) in team" :key="index" class="w-full">
        <img :src="member.image" :alt="'Photo de ' + member.name" class="rounded-md h-auto w-full" />
        <h4 class="py-2 md:py-4">{{ member.name }}</h4>
        <p>{{ member.job }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Equipe",
  data() {
    return {
      team: [
        {
          name: "Audes Legravre",
          job: "SEO",
          image: "/images/profil.png",
        },
        {
          name: "Audes Legravre",
          job: "CEO",
          image: "/images/profil.png",
        },
        {
          name: "Audes Legravre",
          job: "CTO",
          image: "/images/profil.png",
        },
      ]
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.grid-equipe {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
