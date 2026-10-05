<template>
  <div class="h-6 w-6 flex items-center justify-center overflow-visible">
    <!-- 1. Aménagements urbains : la puce/pin de localisation fait un va-et-vient vertical entre son état initial et -3px -->
    <svg v-if="name === 'map'" class="h-6 w-6 overflow-visible" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 26C7.6075 26 4.66125 26 2.83 24.1687C1 22.34 1 19.3925 1 13.5C1 7.6075 1 4.66125 2.83 2.83C4.6625 1 7.6075 1 13.5 1C19.3925 1 22.3387 1 24.1687 2.83C26 4.6625 26 7.6075 26 13.5C26 19.3925 26 22.3387 24.1687 24.1687C22.34 26 19.3925 26 13.5 26Z" stroke="black" stroke-width="1.8"/>
      <g class="pin-bounce">
        <path d="M5.375 9.44625C5.375 7.1975 7.33375 5.375 9.75 5.375C12.1662 5.375 14.125 7.1975 14.125 9.44625C14.125 11.6775 12.7288 14.2812 10.55 15.2125C10.297 15.3199 10.0249 15.3753 9.75 15.3753C9.47511 15.3753 9.20304 15.3199 8.95 15.2125C6.77125 14.2812 5.375 11.6775 5.375 9.44625Z" stroke="black" stroke-width="1.8"/>
        <path d="M11 9.75C11 10.0815 10.8683 10.3995 10.6339 10.6339C10.3995 10.8683 10.0815 11 9.75 11C9.41848 11 9.10054 10.8683 8.86612 10.6339C8.6317 10.3995 8.5 10.0815 8.5 9.75C8.5 9.41848 8.6317 9.10054 8.86612 8.86612C9.10054 8.6317 9.41848 8.5 9.75 8.5C10.0815 8.5 10.3995 8.6317 10.6339 8.86612C10.8683 9.10054 11 9.41848 11 9.75Z" fill="black"/>
      </g>
      <path d="M15.9999 16.0001L24.1249 24.1251M15.9999 16.0001L6.49365 25.5063M15.9999 16.0001L25.5087 6.49255" stroke="black" stroke-width="1.8" stroke-linecap="round"/>
    </svg>

    <!-- 2. Aménagements autour de l'habitat : le toit fait un va-et-vient vertical entre son état initial et -3px -->
    <svg v-else-if="name === 'house'" class="h-6 w-6 overflow-visible" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.22165 9.97379L5.22165 22.4742C5.22165 23.3589 5.93825 24.0768 6.8212 24.0768L19.6176 24.0768C20.5005 24.0768 21.2171 23.3589 21.2171 22.4742L21.2171 9.97378" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="roof-bounce" d="M1.00007 14.2035L13.2194 1.96069L25.4387 14.2035" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- 3. Zones d'activités : les petits points carrés (fenêtres) font un scale va-et-vient de 0 à 1 -->
    <svg v-else-if="name === 'building'" class="h-6 w-6 overflow-visible" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.22414 5.83329V5.33329H1.72414L8.12073 5.33329V4.66663L1.72414 4.66663C1.39411 4.66663 1.08086 4.79352 0.852491 5.01428C0.624697 5.23448 0.499991 5.52945 0.499991 5.83329L0.499991 24.5H8.12073V23.8333H1.72414H1.22414V23.3333L1.22414 5.83329Z" stroke="black"/>
      <path d="M11.2068 23.8333C10.9307 23.8333 10.7068 23.6095 10.7068 23.3333L10.7068 1.76667C10.7068 1.68547 10.7234 1.6055 10.7551 1.53148C10.7868 1.45748 10.8328 1.39137 10.8896 1.33646C10.9464 1.2816 11.0128 1.23893 11.0848 1.2101C11.1568 1.18129 11.2333 1.16667 11.3103 1.16667L23.1724 1.16667C23.2493 1.16667 23.3259 1.18129 23.3979 1.21011C23.4698 1.23893 23.5363 1.28159 23.5931 1.33646C23.6499 1.39137 23.6959 1.45747 23.7276 1.53146L23.7276 1.53147C23.7593 1.6055 23.7759 1.68547 23.7759 1.76667L23.7759 23.3333C23.7759 23.6095 23.552 23.8333 23.2759 23.8333H20.6896C20.4135 23.8333 20.1896 23.6095 20.1896 23.3333V21.3333H14.293L14.293 23.3333C14.293 23.6095 14.0692 23.8333 13.793 23.8333H11.2068ZM23.1724 0.5L11.3103 0.5C10.9528 0.5 10.6132 0.637428 10.3655 0.87694C10.1183 1.11589 9.98267 1.4363 9.98267 1.76667L9.98267 24.5L24.5 24.5L24.5 1.76667C24.5 1.4363 24.3644 1.11589 24.1172 0.87694C23.8694 0.637428 23.5299 0.5 23.1724 0.5Z" stroke="black" stroke-linejoin="round"/>
      <g class="windows-scale">
        <path d="M21.0518 4.66663H20.3276V5.33329H21.0518V4.66663Z" fill="black" stroke="black"/>
        <path d="M17.6034 4.66663H16.8792V5.33329H17.6034V4.66663Z" fill="black" stroke="black"/>
        <path d="M14.1553 4.66663H13.4311V5.33329H14.1553V4.66663Z" fill="black" stroke="black"/>
        <path d="M21.0518 8.83337H20.3276V9.50004H21.0518V8.83337Z" fill="black" stroke="black"/>
        <path d="M17.6034 8.83337H16.8792V9.50004H17.6034V8.83337Z" fill="black" stroke="black"/>
        <path d="M14.1553 8.83337H13.4311V9.50004H14.1553V8.83337Z" fill="black" stroke="black"/>
        <path d="M21.0518 13H20.3276V13.6667H21.0518V13Z" fill="black" stroke="black"/>
        <path d="M17.6034 13H16.8792V13.6667H17.6034V13Z" fill="black" stroke="black"/>
        <path d="M14.1553 13H13.4311V13.6667H14.1553V13Z" fill="black" stroke="black"/>
        <path d="M21.0518 17.1665H20.3276V17.8332H21.0518V17.1665Z" fill="black" stroke="black"/>
        <path d="M17.6034 17.1665H16.8792V17.8332H17.6034V17.1665Z" fill="black" stroke="black"/>
        <path d="M14.1553 17.1665H13.4311V17.8332H14.1553V17.1665Z" fill="black" stroke="black"/>
        <path d="M8.12073 8.83337H7.39658V9.50004H8.12073V8.83337Z" fill="black" stroke="black"/>
        <path d="M4.67236 8.83337H3.94822V9.50004H4.67236V8.83337Z" fill="black" stroke="black"/>
        <path d="M8.12073 13H7.39658V13.6667H8.12073V13Z" fill="black" stroke="black"/>
        <path d="M4.67236 13H3.94822V13.6667H4.67236V13Z" fill="black" stroke="black"/>
        <path d="M8.12073 17.1665H7.39658V17.8332H8.12073V17.1665Z" fill="black" stroke="black"/>
        <path d="M4.67236 17.1665H3.94822V17.8332H4.67236V17.1665Z" fill="black" stroke="black"/>
      </g>
    </svg>

    <!-- 4. Aménagements paysagers : le soleil fait un va-et-vient vertical entre son état initial et -3px -->
    <svg v-else-if="name === 'landscape'" class="h-6 w-6 overflow-visible" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9039 2.05615L26 20H16.1342L11.8344 12.0641L16.9039 2.05615ZM6.52788 9.81889L12.0558 20H1L6.52788 9.81889Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
      <circle class="sun-bounce" cx="4" cy="2" r="2" fill="black"/>
    </svg>

    <!-- 5. Voiries : la ligne centrale pointillée fait un va-et-vient vertical entre son état initial et +3px -->
    <svg v-else-if="name === 'road'" class="h-6 w-6 overflow-visible" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V51M45.6667 3V51" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <g class="road-dash">
        <path d="M24.3333 3V8.33333M24.3333 21.6667V32.3333M24.3333 45.6667V51" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style>
/* Va-et-vient continu tant que le parent .group est au survol */

/* 1. Pin Map */
.group:hover .pin-bounce {
  animation: movePin 0.65s ease-in-out infinite alternate;
}
@keyframes movePin {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
}

/* 2. Toit House */
.group:hover .roof-bounce {
  animation: moveRoof 0.65s ease-in-out infinite alternate;
}
@keyframes moveRoof {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
}

/* 3. Fenêtres carrées Building : scale de 0 à 1 en va-et-vient avec stagger */
.windows-scale path {
  transform-box: fill-box;
  transform-origin: center;
}
.group:hover .windows-scale path {
  animation: scaleSquare 0.65s ease-in-out infinite alternate;
}
.group:hover .windows-scale path:nth-child(1)  { animation-delay: 0.00s; }
.group:hover .windows-scale path:nth-child(2)  { animation-delay: 0.04s; }
.group:hover .windows-scale path:nth-child(3)  { animation-delay: 0.08s; }
.group:hover .windows-scale path:nth-child(4)  { animation-delay: 0.12s; }
.group:hover .windows-scale path:nth-child(5)  { animation-delay: 0.16s; }
.group:hover .windows-scale path:nth-child(6)  { animation-delay: 0.20s; }
.group:hover .windows-scale path:nth-child(7)  { animation-delay: 0.24s; }
.group:hover .windows-scale path:nth-child(8)  { animation-delay: 0.28s; }
.group:hover .windows-scale path:nth-child(9)  { animation-delay: 0.32s; }
.group:hover .windows-scale path:nth-child(10) { animation-delay: 0.36s; }
.group:hover .windows-scale path:nth-child(11) { animation-delay: 0.40s; }
.group:hover .windows-scale path:nth-child(12) { animation-delay: 0.44s; }
.group:hover .windows-scale path:nth-child(13) { animation-delay: 0.48s; }
.group:hover .windows-scale path:nth-child(14) { animation-delay: 0.52s; }
.group:hover .windows-scale path:nth-child(15) { animation-delay: 0.56s; }
.group:hover .windows-scale path:nth-child(16) { animation-delay: 0.60s; }
.group:hover .windows-scale path:nth-child(17) { animation-delay: 0.64s; }
.group:hover .windows-scale path:nth-child(18) { animation-delay: 0.68s; }

@keyframes scaleSquare {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}

/* 4. Soleil Landscape */
.group:hover .sun-bounce {
  animation: moveSun 0.65s ease-in-out infinite alternate;
}
@keyframes moveSun {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
}

/* 5. Ligne pointillée Road */
.group:hover .road-dash {
  animation: moveRoad 0.65s ease-in-out infinite alternate;
}
@keyframes moveRoad {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(3.5px);
  }
}
</style>
