<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photos"
      tabindex="-1"
      ref="dialog"
    >
      <div class="lightbox__backdrop" @click="close" />

      <button
        type="button"
        class="lightbox__close"
        aria-label="Fermer la galerie"
        @click="close"
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        v-if="images.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--prev"
        aria-label="Photo précédente"
        @click="goToPrevious"
      >
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true" class="rotate-90">
          <path stroke="currentColor" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
            stroke-linecap="square" />
        </svg>
      </button>

      <button
        v-if="images.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--next"
        aria-label="Photo suivante"
        @click="goToNext"
      >
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true" class="-rotate-90">
          <path stroke="currentColor" d="M12.7335 1.70813L7.20209 7.2396L1.67065 1.70813" stroke-width="1.77796"
            stroke-linecap="square" />
        </svg>
      </button>

      <div class="lightbox__stage">
        <Transition :name="slideName" mode="out-in">
          <img
            :key="activeIndex"
            class="lightbox__image"
            :src="fullUrl(images[activeIndex])"
            :alt="`Photo ${activeIndex + 1}`"
          />
        </Transition>
      </div>

      <div v-if="images.length > 1" class="lightbox__strip" ref="strip">
        <button
          v-for="(image, index) in images"
          :key="image + index"
          type="button"
          :ref="(el) => setThumbRef(el, index)"
          class="lightbox__thumb"
          :class="{ 'lightbox__thumb--active': index === activeIndex }"
          :aria-label="`Voir la photo ${index + 1}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          @click="selectImage(index)"
        >
          <img :src="thumbUrl(image)" alt="" loading="lazy" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'ProjectLightbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue', 'update:index'],
  data() {
    return {
      slideDirection: 'next',
      thumbRefs: [],
    };
  },
  computed: {
    activeIndex() {
      if (!this.images.length) return 0;
      return ((this.index % this.images.length) + this.images.length) % this.images.length;
    },
    slideName() {
      return this.slideDirection === 'next' ? 'lightbox-slide-next' : 'lightbox-slide-prev';
    },
  },
  watch: {
    modelValue(isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) {
        this.$nextTick(() => {
          this.scrollActiveThumbIntoView();
          this.$refs.dialog?.focus?.();
        });
      }
    },
    activeIndex() {
      this.$nextTick(() => this.scrollActiveThumbIntoView());
    },
  },
  methods: {
    fullUrl(path) {
      if (!path) return '';
      return path.startsWith('http') ? path : `https:${path}`;
    },
    thumbUrl(path) {
      const base = this.fullUrl(path);
      const separator = base.includes('?') ? '&' : '?';
      return `${base}${separator}w=240&fm=webp&q=70`;
    },
    setThumbRef(el, index) {
      if (el) this.thumbRefs[index] = el;
    },
    close() {
      this.$emit('update:modelValue', false);
    },
    selectImage(index) {
      if (index === this.activeIndex) return;
      this.slideDirection = index > this.activeIndex ? 'next' : 'prev';
      this.$emit('update:index', index);
    },
    goToNext() {
      if (this.images.length < 2) return;
      this.slideDirection = 'next';
      this.$emit('update:index', (this.activeIndex + 1) % this.images.length);
    },
    goToPrevious() {
      if (this.images.length < 2) return;
      this.slideDirection = 'prev';
      this.$emit('update:index', (this.activeIndex - 1 + this.images.length) % this.images.length);
    },
    scrollActiveThumbIntoView() {
      const thumb = this.thumbRefs[this.activeIndex];
      thumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    },
    onKeydown(event) {
      if (!this.modelValue) return;
      if (event.key === 'Escape') this.close();
      if (event.key === 'ArrowLeft') this.goToPrevious();
      if (event.key === 'ArrowRight') this.goToNext();
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
    document.body.style.overflow = '';
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 210;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 4.5rem 7.5rem;
  outline: none;
}

.lightbox__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
}

.lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #111;
  font-size: 1.75rem;
  line-height: 1;
  display: grid;
  place-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #fff;
    transform: scale(1.04);
  }
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #111;
  display: grid;
  place-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

  &:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.05);
  }

  &--prev {
    left: 1rem;
  }

  &--next {
    right: 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;

    &--prev {
      left: 1.5rem;
    }

    &--next {
      right: 1.5rem;
    }
  }
}

.lightbox__stage {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(100%, 1200px);
  height: min(70vh, 780px);
  overflow: hidden;
}

.lightbox__image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: $radius-small;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
}

.lightbox__strip {
  position: absolute;
  left: 50%;
  bottom: 1.25rem;
  z-index: 2;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  max-width: min(92vw, 720px);
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.lightbox__thumb {
  flex: 0 0 auto;
  width: 4rem;
  height: 2.75rem;
  padding: 0;
  overflow: hidden;
  border-radius: calc(#{$radius-small} - 2px);
  border: 1px solid transparent;
  opacity: 0.7;
  transition: width 0.35s ease, opacity 0.25s ease, border-color 0.25s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    opacity: 1;
  }

  &--active {
    width: 7rem;
    opacity: 1;
    border-color: $color-gold;
  }
}

.lightbox-slide-next-enter-active,
.lightbox-slide-next-leave-active,
.lightbox-slide-prev-enter-active,
.lightbox-slide-prev-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}

.lightbox-slide-next-enter-from {
  opacity: 0;
  transform: translateX(2rem);
}

.lightbox-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}

.lightbox-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-2rem);
}

.lightbox-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}

@media screen and (max-width: 768px) {
  .lightbox {
    padding: 4rem 0.75rem 6.5rem;
  }

  .lightbox__nav {
    width: 2.5rem;
    height: 2.5rem;

    &--prev {
      left: 0.5rem;
    }

    &--next {
      right: 0.5rem;
    }
  }

  .lightbox__stage {
    height: min(58vh, 520px);
  }

  .lightbox__thumb {
    width: 3.5rem;
    height: 2.5rem;

    &--active {
      width: 5.75rem;
    }
  }
}
</style>
