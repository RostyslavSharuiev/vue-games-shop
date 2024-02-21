<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

interface Props {
  carouselData: {
    id: string;
    title: string;
    imageUrl: string;
  }[];
}

const { carouselData } = defineProps<Props>();
</script>

<template>
  <carousel
    :autoplay="1000"
    :wrap-around="true"
    :pause-autoplay-on-hover="true"
  >
    <slide
      v-for="slide in carouselData"
      :key="slide.id"
    >
      <RouterLink :to="`games/${slide.id}`">
        <img
          :src="slide.imageUrl"
          :alt="slide.title"
          class="rounded-xl"
        >
      </RouterLink>
    </slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>
