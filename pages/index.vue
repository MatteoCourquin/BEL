<template>
  <Head>
    <Title itemprop="name">BEL Bureau d'Études Legavre</Title>
    <Meta name="title" content="BEL Bureau d'Études Legavre" />
    <Meta name="description"
      content="BEL développe ses compétences et améliore ses moyens techniques dans le domaine de la maîtrise d’oeuvre VRD." />
    <Meta name="robots" content="index" />
    <Link rel="canonical" href="https://www.be-legavre.com/" />
  </Head>
  <section itemscope itemtype="http://schema.org/Organization"
    class="h-screen-header min-h-[800px] max-w-default py-y-default mx-auto px-x-default relative flex sm:block flex-col gap-20 justify-between">
    <div itemprop="additionalProperty">
      <p itemprop="value" class="font-michroma">Maitres d'oeuvre depuis 1988</p>
      <h1 itemprop="name" class="uppercase py-8 sm:whitespace-nowrap">Bureau d'études <br>Legavre</h1>
      <p itemprop="description" class="w-full sm:w-2/3 pb-8">Notre bureau d’études n’a de cesse de développer ses
        compétences et d’améliorer sa technicité dans le domaine de la maîtrise d’oeuvre des infrastructures VRD (Voirie
        et Réseaux Divers) pour l’aménagement des territoires Morbihannais, Breton et limitrophe</p>
      <ButtonScroll />
    </div>
    <div
      class="border-image m-4 relative sm:absolute w-full sm:w-[30vw] h-52 -translate-x-4 min-w-[250px] sm:h-[30vh] min-h-[150px] sm:bottom-[10%] sm:right-x-default">
      <img src="/images/architect.webp" alt="illustration d'architecture"
        class="rounded-small object-cover w-full h-full" />
    </div>
  </section>
  <Section variant="heading3" title="réalisations">
    <div ref="slider" class="flex gap-8 md:gap-14 overflow-x-scroll md:pt-10 no-scrollbar">
      <div ref="sliderItem" v-for="(project, index) in computedProjects" :key="index"
        class="margin-x-slider w-3/4 sm:w-2/4 lg:w-1/3 min-w-[200px] aspect-square shrink-0 rounded-bl-small rounded-tr-small relative group max-w-md">
        <NuxtLink :to="'realisation/' + formatSlug(project.title)">
          <Circle orientation="right" className="hidden md:block top-0 right-0 translate-x-10 -translate-y-10"
            variant="project"></Circle>
          <img
            class="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-bl-small rounded-tr-small overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
            :src="'https:' + project.photos[0]" :alt="'Illustration du projet ' + project.title">
          <div
            class="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 rounded-bl-small">
            <h4 class="!text-white pb-2 md:pb-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ project.title }}</h4>
            <p class="!text-gray md:pb-2 whitespace-nowrap overflow-hidden text-ellipsis">#{{ project.tags }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-10 justify-center pt-10 items-center">
      <Arrow color="black" direction="left" @click="scrollLeft" />
      <Arrow color="black" direction="right" @click="scrollRight" />
    </div>
  </Section>
  <Section variant="heading3" title="Domaines d'intervention">
    <div class="px-x-default max-w-default mx-auto grid grid-services gap-8 md:gap-10">
      <div v-for="(service, index) in services" :key="index" class="flex gap-2 md:gap-4">
        <div class="w-10 shrink-0 flex justify-center"><img class="h-6" :src="'/icons/' + service.logo"
            :alt="'icone pour ' + service.title" /></div>
        <p class="shrink">{{ service.title }}</p>
      </div>
    </div>
  </Section>
  <Section variant="heading3" title="valeurs">
    <div class="px-x-default max-w-default mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ">
      <div v-for="(advantage, index) in advantages" :key="index"
        class="border border-gold rounded-medium p-8 md:p-10 lg:last-of-type:col-start-auto lg:last-of-type:col-end-auto last-of-type:col-start-auto last-of-type:col-end-auto sm:last-of-type:col-start-1 sm:last-of-type:col-end-3">
        <img :src="'icons' + advantage.logo" :alt="'icone pour ' + advantage.title">
        <p class="py-4 !text-gold !text-xl font-inter-bold">{{ advantage.title }}</p>
        <p class="!text-gold !text-sm">{{ advantage.description }}</p>
      </div>
    </div>
  </Section>
  <Section variant="heading3" title="Nos clients">
    <div class="overflow-hidden">
      <div class="flex flex-nowrap">
        <div ref="partenaireContainerRight1"
          class="right flex flex-nowrap gap-8 md:gap-14 pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-28 md:h-28 object-contain" :src="'/images/partenaires/' + partenaire.img"
              alt="logo partenaire" />
          </div>
        </div>
        <div ref="partenaireContainerRight2"
          class="right flex flex-nowrap gap-8 md:gap-14 pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-28 md:h-28 object-contain" :src="'/images/partenaires/' + partenaire.img"
              alt="logo partenaire" />
          </div>
        </div>
      </div>
      <div class="flex flex-nowrap flex-row-reverse">
        <div ref="partenaireContainerLeft1"
          class="left flex flex-nowrap gap-8 md:gap-14 pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-28 md:h-28 object-contain" :src="'/images/partenaires/' + partenaire.img"
              alt="logo partenaire" />
          </div>
        </div>
        <div ref="partenaireContainerLeft2"
          class="left flex flex-nowrap gap-8 md:gap-14 pt-10 min-w-max pr-8 md:pr-14">
          <div class="shrink-0" v-for="(partenaire, index) in partenaires" :key="index">
            <img class="w-20 h-20 md:w-28 md:h-28 object-contain" :src="'/images/partenaires/' + partenaire.img"
              alt="logo partenaire" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Index",
  data() {
    return {
      paddingProjects: 0,
      services: [
        {
          title: "Aménagements urbains",
          logo: "/map.svg"
        },
        {
          title: "Aménagements autour de l’habitat",
          logo: "/house.svg"
        },
        {
          title: "Zones d’activités et centres techniques",
          logo: "/building.svg"
        },
        {
          title: "Aménagements paysagers autour d’Equipements Publics",
          logo: "/landscape.svg"
        },
        {
          title: "Programmes de voirie communales",
          logo: "/road.svg"
        },
      ],
      advantages: [
        {
          title: "Proximité",
          description: "Connaissance du territoire, des concessionnaires, des syndicats, des entreprises. 80 % de nos projets se font dans le Morbihan.",
          logo: "/communication.svg"
        },
        {
          title: "Réactivité",
          description: "Communication fluide et directe. Chaque projet est identifié et personnalisé. Un seul intervenant par opération.",
          logo: "/decision.svg"
        },
        {
          title: "Responsabilité",
          description: "Nous accompagnons le maître d’ouvrage du début à la fin de chaque projet dans un soucis constant d’exécuter chaque tâche dans les règles de l’Art.",
          logo: "/flexibility.svg"
        }
      ],
      partenaires: [
        {
          img: "/arzon.svg",
        },
        {
          img: "/nivillac.svg",
        },
        {
          img: "/erdeven.svg",
        },
        {
          img: "/locoal-mendon.svg",
        },
        {
          img: "/malansac.svg",
        },
        {
          img: "/arradon.svg",
        },
        {
          img: "/artz.svg",
        },
        {
          img: "/peaule.svg",
        },
        {
          img: "/sarzeau.svg",
        },
        {
          img: "/baden.svg",
        },
        {
          img: "/questembert.svg",
        },
        {
          img: "/iut.svg",
        },
        {
          img: "/ministere.svg",
        },
        {
          img: "/port.svg",
        },
        {
          img: "/morbihan.svg",
        },
      ],
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
        duration: 40,
      });
    });
  },
  computed: {
    computedProjects() {
      return useProjects().value
    }
  }
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
</style>