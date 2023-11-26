<template>
  <section class="min-h-screen-header">
    <Head>
      <Title>Projets - BEL Bureau d'Études Legavre</Title>
      <Meta name="title" content="Projets - BEL Bureau d'Études Legavre" />
      <Meta name="description" content="Projets réalisés par BEL Bureau d'Études Legavre" />
      <Link rel="canonical" href="https://bel-self.vercel.app/projets" />
    </Head>
    <Tabs @update:activeTab="setActiveTab" />
    <section class="mx-auto max-w-default px-x-default pb-y-default">
      <div v-for="(project, index) in computedProjects" :key="index" class="w-full">
        <div v-if="shouldShowYear(index)" class="flex items-center gap-4 pb-10 pt-16">
          <div class="w-full bg-gray h-[1px]"></div>
          <h4 class="font-michroma text-3xl">{{ getYear(project.date) }}</h4>
          <div class="hidden md:block w-1/6 bg-gray h-[1px]"></div>
        </div>
        <NuxtLink :to="'/projet/' + formatSlug(project.title)"
          class="grid gap-4 grid-cols-projects h-44 pb-4 ml-auto">
          <div class="flex">
            <span class="font-inter-black text-5xl">{{ getDay(project.date) }}</span>
            <span class="pl-2">{{ getMonth(project.date) }}</span>
          </div>
          <img class="rounded-small aspect-video object-cover h-full w-full" :src="'https:' + project.photos[0]" alt="">
          <div class="w-full">
            <p class="text-gold">#{{ project.tags }}</p>
            <h3 class="!text-2xl py-2 md:whitespace-nowrap text-ellipsis w-full overflow-hidden">{{ project.title }}</h3>
            <p class="overflow-hidden text-ellipsis projects-description w-full">{{ project.shortdescription }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'tous',
    };
  },
  methods: {
    setActiveTab(activeTab) {
      this.activeTab = activeTab;
    },
    shouldShowYear(index) {
      return index === 0 || this.getYear(useProjects().value[index - 1].date) !== this.getYear(useProjects().value[index].date)
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
  },
  computed: {
    computedProjects() {
      if (this.activeTab === 'tous') {
        return useProjects().value
      }
      return useProjects().value.filter(project => formatSlug(project.tags) === this.activeTab)
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
}
</style>