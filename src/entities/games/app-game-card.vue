<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { BuyGame } from '@/features';
import { Cover, Genre } from '@/shared/ui';

interface Props {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  genres: string[];
}

const { id, title, price, imageUrl, genres } = defineProps<Props>();

const game = { id, title, price, image: imageUrl };
</script>

<template>
  <div
    class="relative text-sm transition hover:scale-110 rounded-2xl bg-dark dark:bg-dark-gray h-max"
  >
    <router-link
      :to="`games/${id}`"
      aria-label="Link to game"
    >
      <Cover
        :image-url="imageUrl"
        class="h-56 rounded-t-2xl"
      />
    </router-link>

    <div class="p-4 pb-6">
      <b class="text-lg text-white">{{ title }}</b>

      <div class="flex flex-wrap items-center gap-4 mt-4">
        <Genre
          v-for="genre in genres"
          :key="genre"
          :genre="genre"
        />
      </div>
    </div>

    <div class="absolute right-0 -bottom-3">
      <BuyGame
        :game="game"
        class="pt-2 pl-3 bg-dark rounded-2xl dark:bg-dark-gray"
        :text-color="'text-white'"
      />
    </div>
  </div>
</template>
