<template>
  <section class="min-h-screen-header">
    <Tabs v-if="projects.length != 0" />
    <section class="mx-auto max-w-default px-x-default pb-y-default">
      <div v-if="projects.length != 0" v-for="(project, index) in projects" :key="index" class="w-full">
        <h4 class="font-michroma text-3xl pb-10 pt-16" v-if="shouldShowYear(index)">{{ getYear(project.date) }}</h4>
        <NuxtLink :to="'/projet/' + formatSlug(project.title)"
          class="grid gap-4 grid-cols-projects h-44 pb-4 w-cards-projects ml-auto">
          <p>
            <span class="font-inter-black text-5xl">{{ getDay(project.date) }}</span>
            <span class="pl-2">{{ getMonth(project.date) }}</span>
          </p>
          <img class="rounded-small aspect-video object-cover h-full w-full" :src="'https:' + project.photos[0]" alt="">
          <div class="w-full">
            <p class="text-gold">#{{ project.tags }}</p>
            <h3 class="!text-2xl py-2 whitespace-nowrap text-ellipsis w-full overflow-hidden">{{ project.title }}</h3>
            <p class="overflow-hidden text-ellipsis projects-description w-full">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas inventore rem veniam qui labore aliquam nobis modi quam dolorem est praesentium
              minima vel, asperiores fugiat magnam? Quae soluta molestias quasi architecto cupiditate totam ut voluptate
              et. Magni modi excepturi vel possimus nesciunt itaque aliquam distinctio corrupti. Esse officiis magni minus
              inventore ipsa obcaecati error repudiandae facere non voluptate, optio maiores, in illum reiciendis
              explicabo quis asperiores maxime suscipit corrupti corporis laborum quod quaerat rem? Repellendus quo rem ab
              alias distinctio cumque, delectus voluptatibus atque sapiente iure modi quisquam nostrum et voluptas culpa,
              aliquid molestias ea nam aperiam minima! Laboriosam sunt eos ad nulla excepturi, illum nihil explicabo
              consequuntur deserunt architecto rem aspernatur odit quaerat possimus culpa placeat temporibus vel ratione!
              Expedita recusandae hic repellat omnis libero? Obcaecati accusamus voluptates fuga nihil fugiat culpa soluta
              eos quibusdam? Iure laborum rerum eius facilis harum assumenda similique quae nesciunt aliquid consectetur,
              id labore perspiciatis sit distinctio rem illo ab neque. Illo maxime ad dolorum sint voluptas dignissimos
              voluptatibus corrupti dolor placeat, cum soluta aspernatur. Ullam nam eaque, soluta possimus dicta cumque
              accusamus et itaque provident repellat ab asperiores laboriosam molestias rerum nemo praesentium dolor hic,
              quidem adipisci cupiditate quia iure vitae rem ut.</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </section>
</template>

<script setup>
const projects = useProjects()
</script>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    shouldShowYear(index) {
      return index === 0 || this.getYear(useProjects().value[index - 1].date) !== this.getYear(useProjects().value[index].date)
    },
    shouldShowYear(index) {
      const projects = useProjects().value;
      return index === 0 || projects[index - 1].date.slice(0, 4) !== projects[index].date.slice(0, 4);
    },
    getDay(dateString) {
      const dateObj = new Date(dateString);
      const options = { day: "2-digit" };
      return dateObj.toLocaleDateString("fr-FR", options);
    },
    getMonth(dateString) {
      const dateObj = new Date(dateString);
      const options = { month: "short" };
      return dateObj.toLocaleDateString("fr-FR", options);
    },
    getYear(dateString) {
      const dateObj = new Date(dateString);
      const options = { year: "numeric" };
      return dateObj.toLocaleDateString("fr-FR", options);
    }
  }
};
</script>

<style scoped lang="scss">
.grid-cols-projects {
  grid-template-columns: 110px minmax(200px, 1.4fr) 4fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
}

.projects-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 3;
  }
}

.w-cards-projects {
  width: calc(100% - 3vw);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}</style>