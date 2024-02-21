<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

import { useGameStore } from '@/entities/game';
import { BuyGame } from '@/features';
import { useGameLocalization } from '@/shared/hooks';
import { Container, Genre, Spinner } from '@/shared/ui';

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const store = useGameStore();
const isError = ref(false);
const isLoading = ref(true);

const { id } = route.params;

const game = computed(() => ({
  id: store.game!.id,
  title: store.game!.title,
  price: store.game!.price,
  imageUrl: store.game!.image,
  video: store.game!.video,
  description: useGameLocalization(locale.value, store.game!.description) as string,
  genres: useGameLocalization(locale.value, store.game!.genres) as string[],
}));

const buyGame = computed(() => ({
  id: store.game!.id,
  title: store.game!.title,
  price: store.game!.price,
  image: store.game!.image,
}));

onMounted(async () => {
  try {
    isLoading.value = true;

    await store.getGame(id as string);

    isError.value = false;
  } catch (error) {
    isError.value = true;
    console.warn(error);
  } finally {
    isLoading.value = false;
  }
});

watch(isError, () => {
  isError.value ? router.push({ name: 'error' }) : router.push({ name: 'home' });
});
</script>

<template>
  <template v-if="isLoading">
    <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Spinner />
    </div>
  </template>

  <template v-else>
    <container class="px-4 mx-auto mt-16">
      <h1 class="mb-12 text-2xl font-bold text-black dark:text-white">
        {{ game.title }}
      </h1>

      <div class="flex flex-wrap-reverse gap-12 mb-12 md:grid md:grid-cols-2">
        <iframe
          allowfullscreen
          frameborder="0"
          :src="game.video"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          class="w-full aspect-video"
        />

        <img
          :src="game.imageUrl"
          :alt="game.title"
          class="rounded-t-2xl"
        >
      </div>

      <div class="flex flex-col items-center gap-4">
        <p class="text-black dark:text-white">
          {{ game.description }}
        </p>

        <span class="text-black dark:text-white">{{ $t('tags') }}:</span>

        <div class="flex flex-wrap gap-4 p-4 bg-black rounded-xl dark:bg-transparent">
          <Genre
            v-for="genre in game.genres"
            :key="genre"
            :genre="genre"
          />
        </div>

        <BuyGame :game="buyGame" />
      </div>
    </container>
  </template>
</template>
