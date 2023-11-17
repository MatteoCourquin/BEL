<template>
  <section
    class="h-screen-header min-h-[800px] max-w-default py-y-default mx-auto px-x-default relative flex sm:block flex-col gap-20 justify-between">
    <div>
      <p class="font-michroma">Maitres d'oeuvre depuis 1988</p>
      <h1 class="uppercase py-8 sm:whitespace-nowrap">Bureau d'études <br>Legavre</h1>
      <p class="w-full sm:w-2/3 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit quos sint
        laborum placeat optio voluptatibus veritatis aliquid accusamus dolorem.</p>
      <ButtonScroll />
    </div>
    <div
      class="border-image m-4 relative sm:absolute w-full sm:w-[30vw] h-52 -translate-x-4 min-w-[250px] sm:h-[30vh] min-h-[150px] sm:bottom-[10%] sm:right-x-default">
      <img src="/images/architect.jpg" alt="illustration d'architecture"
        class="rounded-small object-cover w-full h-full" />
    </div>
  </section>
  <Section title="projets">
    <div ref="slider" class="flex gap-8 md:gap-14 overflow-x-scroll md:pt-10 no-scrollbar">
      <div ref="sliderItem" v-for="(project, index) in projects" :key="index"
        class="margin-x-slider w-3/4 sm:w-2/4 lg:w-1/3 min-w-[200px] aspect-square shrink-0 rounded-bl-small rounded-tr-small relative group max-w-md">
        <Nuxt-Link :to="'projet/' + project.title.replace(/\s+/g, '-').toLowerCase()">
          <div class="hidden md:block w-24 h-24 rounded-full absolute top-0 right-0 translate-x-10 -translate-y-10 z-10">
            <img src="/circles/projects.svg" alt="" class="animate-spin-circle">
          </div>
          <img
            class="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-bl-small rounded-tr-small overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
            src="/images/architect.jpg" :alt="'Illustration du projet ' + project.title">
          <div
            class="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 rounded-bl-small">
            <h4 class="!text-white pb-2 md:pb-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ project.title }}</h4>
            <p class="!text-gray md:pb-2 whitespace-nowrap overflow-hidden text-ellipsis">#{{ project.tags }}</p>
          </div>
        </Nuxt-Link>
      </div>
    </div>
    <div class="flex gap-10 justify-center pt-10 items-center">
      <Arrow color="black" direction="left" @click="scrollLeft" />
      <Arrow color="black" direction="right" @click="scrollRight" />
    </div>
  </Section>
  <Section title="valeurs">
    <div class="px-x-default max-w-default mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
      <div v-for="(advantage, index) in advantages" :key="index"
        class="border border-gold rounded-medium p-10 lg:last-of-type:col-start-auto lg:last-of-type:col-end-auto last-of-type:col-start-auto last-of-type:col-end-auto sm:last-of-type:col-start-1 sm:last-of-type:col-end-3">
        <img :src="'icons' + advantage.logo" :alt="'icone pour ' + advantage.title">
        <h4 class="py-4 !text-gold !text-lg">{{ advantage.title }}</h4>
        <p class="!text-gold !text-sm">{{ advantage.description }}</p>
      </div>
    </div>
  </Section>
  <Section title="partenaires">
    <div class="overflow-hidden">
      <div class="flex flex-nowrap">
        <div ref="partenaireContainerRight1"
          class="right flex flex-nowrap gap-8 md:gap-14 md:pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-32 md:h-32 object-contain rounded-full"
              :src="'/images/partenaires/' + partenaire.img" alt="logo partenaire" />
          </div>
        </div>
        <div ref="partenaireContainerRight2"
          class="right flex flex-nowrap gap-8 md:gap-14 md:pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-32 md:h-32 object-contain rounded-full"
              :src="'/images/partenaires/' + partenaire.img" alt="logo partenaire" />
          </div>
        </div>
      </div>
      <div class="flex flex-nowrap flex-row-reverse">
        <div ref="partenaireContainerLeft1"
          class="left flex flex-nowrap gap-8 md:gap-14 md:pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-32 md:h-32 object-contain rounded-full"
              :src="'/images/partenaires/' + partenaire.img" alt="logo partenaire" />
          </div>
        </div>
        <div ref="partenaireContainerLeft2"
          class="left flex flex-nowrap gap-8 md:gap-14 md:pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-32 md:h-32 object-contain rounded-full"
              :src="'/images/partenaires/' + partenaire.img" alt="logo partenaire" />
          </div>
        </div>
      </div>
    </div>
  </Section>
  <Section title="services">
    <div class="px-x-default max-w-default mx-auto grid grid-services gap-10">
      <div v-for="(service, index) in services" :key="index" class="flex gap-4">
        <div class="w-10 flex justify-center"><img class="w-auto" :src="'/icons/' + service.logo"
            :alt="'icone pour ' + service.title" /></div>
        <p>{{ service.title }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup>
const projects = useProjects();
const advantages = [
  {
    title: "Communication",
    description: "Offrir une attention personnalisée, plaçant les clients dans la meilleure position possible pour tirer le meilleur parti de notre logiciel.",
    logo: "/communication.svg"
  },
  {
    title: "Vitesse de décision",
    description: "Offrir une attention personnalisée, plaçant les clients dans la meilleure position possible pour tirer le meilleur parti de notre logiciel.",
    logo: "/decision.svg"
  },
  {
    title: "Flexibilité",
    description: "Offrir une attention personnalisée, plaçant les clients dans la meilleure position possible pour tirer le meilleur parti de notre logiciel.",
    logo: "/flexibility.svg"
  }
]
const services = [
  {
    title: "Aménagements urbains",
    logo: "/map.svg"
  },
  {
    title: "Lotissement",
    logo: "/house.svg"
  },
  {
    title: "Aménagements paysagers",
    logo: "/landscape.svg"
  },
  {
    title: "Equipements sportifs",
    logo: "/run.svg"
  },
  {
    title: "Cimetière",
    logo: "/cemetery.svg"
  },
  {
    title: "Equipements collectifs",
    logo: "/building.svg"
  },
]
const partenaires = [
  {
    img: "/staze.svg",
  },
  {
    img: "/daasity.svg",
  },
  {
    img: "/photoaid.svg",
  },
  {
    img: "/promoted.svg",
  },
  {
    img: "/waydev.svg",
  },
  {
    img: "/staze.svg",
  },
  {
    img: "/daasity.svg",
  },
  {
    img: "/photoaid.svg",
  },
  {
    img: "/promoted.svg",
  },
  {
    img: "/waydev.svg",
  },
];
</script>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Index",
  data() {
    return {
      paddingProjects: 0,
    };
  },
  methods: {
    scrollRight() {
      const container = this.$refs.slider;
      this.paddingProjects = window.innerWidth >= 768 ? 56 : 32;
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
        ? container.scrollTo({
          behavior: "smooth",
          left: 0,
        })
        : container.scrollTo({
          behavior: "smooth",
          left:
            container.scrollLeft +
            (this.$refs.sliderItem[0].clientWidth + this.paddingProjects) * 1,
        });
    },
    scrollLeft() {
      const container = this.$refs.slider;
      this.paddingProjects = window.innerWidth >= 768 ? 56 : 32;
      container.scrollLeft <= 1
        ? container.scrollTo({
          behavior: "smooth",
          left: container.scrollWidth - container.clientWidth,
        })
        : container.scrollTo({
          behavior: "smooth",
          left:
            container.scrollLeft -
            (this.$refs.sliderItem[0].clientWidth + this.paddingProjects) * 1,
        });
    },
  },
  mounted() {
    const partenaireContainer = [
      this.$refs.partenaireContainerRight1,
      this.$refs.partenaireContainerRight2,
      this.$refs.partenaireContainerLeft1,
      this.$refs.partenaireContainerLeft2,
    ];

    partenaireContainer.forEach((container) => {
      gsap.to(container, {
        x: container.className.includes("right") ? "-100%" : "100%",
        ease: "linear",
        repeat: -1,
        duration: 20,
      });
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/main.scss";

.border-image {

  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 1px solid $color-gold;
    border-radius: $radius-small;
    z-index: -1;
  }

  &::after {
    top: -16px;
    right: -16px;
    width: 100%;
    height: 30%;
    border-top-right-radius: $radius-medium;
  }

  &::before {
    bottom: -16px;
    left: -16px;
    width: 100%;
    height: 35%;
    border-bottom-left-radius: $radius-medium;
  }
}

.grid-services {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.animate-spin-circle {
  animation: spin-circle 4s linear infinite;
}
</style>
