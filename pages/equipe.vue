<template>
  <Head>
    <Title>Équipe • BEL Bureau d'Études Legavre</Title>
    <Meta name="title" content="Équipe • BEL Bureau d'Études Legavre" />
    <Meta name="description" content="Présentation de nos maîtres d'oeuvre VRD et des membres de l'équipe BEL." />
    <Meta name="robots" content="index" />
    <Link rel="canonical" href="https://www.be-legavre.com/equipe" />
  </Head>
  <section class="h-screen-header max-w-default pt-y-default mx-auto flex flex-col px-x-default relative">
    <h3 class="pb-4 grow-0">Une équipe soudée et une entité à taille humaine.</h3>
    <p class="grow-0">
      Le BET LEGAVRE est en mesure d’apporter son expertise technique, ses compétences de conception, de suivi de travaux
      et de coordination pour l’aménagement des opérations liées aux voiries, réseaux mais également au paysage. Depuis
      une dizaine d’années, l’intégration de l’environnement dans les projets d’aménagement du territoire s’est imposée.
      Pour exemple, la gestion de l’eau a pris une place importante dans la vie de nos communes et la question de la
      préservation de la biodiversité devient peu à peu elle aussi l’un des enjeux de l’aménagement.
    </p>
    <Circle orientation="bottom" @click="scroll"
      className="cursor-pointer hidden md:block top-2/3 right-1 -translate-x-1/2 -translate-y-1/2" variant="team">
    </Circle>
    <div class="translate-y-10 h-full grow flex overflow-hidden">
      <img src="/images/equipe.webp" alt="Équipe du Bureau d'études Legavre" class="rounded-md object-cover w-full" />
    </div>
  </section>
  <section
    class="flex flex-col justify-center sm:items-start min-h-[800px] max-w-default py-y-default mx-auto items-center px-x-default">
    <h3 class="py-10">Notre équipe d'expers</h3>
    <div class="w-full grid grid-equipe justify-items-center justify-center gap-10">
      <div v-for="(member, index) in  team " :key="index" class="w-full">
        <img :src="member.image" :alt="'Photo de ' + member.name" class="rounded-md aspect-square object-cover w-full" />
        <h4 class="py-2 md:py-4">{{ member.name }}</h4>
        <p class="font-inter-bold">{{ member.job }}</p>
        <div :ref="'description' + index" class="equipe-description pt-2 md:pt-4" v-html=member.description></div>
        <button class="link pt-2 md:pt-4" @click="showDescription('description' + index)">En voir plus</button>
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
          name: "Franck",
          job: "Maître d’œuvre VRD • Gérant du Bureau d’Etudes VRD depuis 2008",
          description: `
              <p>Responsable du développement des études VRD Franck apporte toute sa réactivité et sa connaissance des techniques routières et des réseaux. Gérant du bureau d'études depuis 2008, il est votre interlocuteur privilégié pour toutes les questions d'aménagements VRD.</p>
              <p class="pt-4 pb-2">Ses missions :</p>
              <ul class="list-disc pl-4">
                <li>diriger la conception du projet VRD en veillant à la pertinence des choix technico-économiques et au respect des objectifs de coûts</li>
                <li>piloter les études, assurer leur planification et le respect des délais</li>
                <li>organiser la production et mobiliser les spécialistes utiles au projet</li>
                <li>assurer le suivi technique, financier et la coordination auprès des entreprises chargées des travaux</li>
                <li>Développer la relation commerciale avec les partenaires et maîtres d’ouvrages</li>
              </ul>`,
          image: "/images/franck.webp",
        },
        {
          name: "Audes",
          job: "Dessinatrice • Projeteuse aménagements paysagers",
          description: `
            <p>Audes est votre interlocutrice privilégiée pour toutes les questions d'aménagements paysagers</p>
            <p class="pt-4 pb-2">Ses missions :</p>
            <ul class="list-disc pl-4">
              <li>conception informatique des projets</li>
              <li>suivi administratif du projet</li>
              <li>conceptrice des aménagements paysagers</li>
            </ul>
          </p>`,
          image: "/images/audes.webp",
        },
        {
          name: "Alexandre",
          job: "Assistant Maître d’œuvre • Conducteur de travaux depuis 2022",
          description: `
            <p>Alexandre sera votre interlocuteur pour toutes questions ayant trait aux travaux</p>
            <p class="pt-4 pb-2">Ses missions :</p>
            <ul class="list-disc pl-4">
              <li>organisation du suivi et du bon achèvement des projets VRD</li>
              <li>suivi technique, financier et coordination auprès des entreprises chargées des travaux</li>
              <li>Développer la relation commerciale avec les partenaires et maîtres d’ouvrages</li>
            </ul>
            `,
          image: "/images/alex.webp",
        },
      ]
    };
  },
  methods: {
    showDescription(ref) {
      this.$refs[ref][0].classList.toggle("equipe-description")
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.grid-equipe {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.equipe-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 3;
  }
}

.equipe-description-format {
  p {
    margin-bottom: 1rem;
    background: red;
  }

  ul {
    margin-left: 1rem;

    li {
      margin-bottom: 0.5rem;
      list-style: disc;
    }
  }
}
</style>
