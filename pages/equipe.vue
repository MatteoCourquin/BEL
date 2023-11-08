<template>
  <section
    class="hero min-h-[800px] max-w-default py-y-default mx-auto items-center px-x-default"
  >
    <div class="h-screen flex flex-col">
      <h3>Lorem ipsum dolor - Bureau d’études legavre</h3>
      <p class="my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repudiandae
        neque harum porro excepturi maiores molestiae consequuntur alias cum
        deserunt minus, ad modi temporibus fugiat,
      </p>
      <img src="/images/equipe.png" alt="" class="rounded-md"/>
    </div>

    <div class="flex flex-col justify-center items-center sm:items-start">
      <h3>Notre équipe d'expers</h3>
      <div class="flex flex-wrap justify-between w-full gap-4" >
        <div v-for="(member, index) in team" :key="index" class="w-fit shrink">
          <img :src="member.image" alt="" class="rounded-md h-auto max-w-ful" />
          <p>{{ member.name }}</p>
          <span>{{ member.job }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const team = Array(3).fill({
  name: "M. Legravre",
  job: "CEO",
  image: "/images/profil.png",
});
</script>

<script>
export default {
  name: "Equipe",
};
</script>
