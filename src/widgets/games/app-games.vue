<script setup lang="ts">
import { GameCard } from '@/entities';

interface Props {
  games: {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    genres: string[];
  }[];
}

const { games } = defineProps<Props>();
</script>

<template>
  <div
    class="grid w-full grid-cols-1 px-4 mx-auto gap-y-16 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 xl:gap-x-15"
  >
    <GameCard
      v-for="game in games"
      :id="game.id"
      :key="game.id"
      :title="game.title"
      :price="game.price"
      :image-url="game.imageUrl"
      :genres="game.genres"
    />
  </div>
</template>
