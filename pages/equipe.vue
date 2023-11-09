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
      <img src="/images/equipe.png" alt="" class="rounded-md" />
    </div>

    <div class="flex flex-col justify-center items-center sm:items-start">
      <h3>Notre équipe d'expers</h3>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-4">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="w-9/12 sm:w-full"
        >
          <img :src="member.image" alt="" class="rounded-md h-auto w-full" />
          <h4>{{ member.name }}</h4>
          <p>{{ member.job }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = Array(3).fill({
  name: "Audes Legravre",
  job: "CEO",
  image: "/images/profil.png",
});
</script>

<script>
export default {
  name: "Equipe",
};
</script>
