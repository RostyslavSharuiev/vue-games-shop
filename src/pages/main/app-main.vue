<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
import { useMediaQuery } from '@vueuse/core';
import debounce from 'lodash.debounce';
import { computed, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { useGamesStore } from '@/entities/games';
import { Pagination } from '@/features';
import { PAGE_LIMIT } from '@/shared/constants/constants';
import { useGameLocalization } from '@/shared/hooks';
import { Container, Spinner } from '@/shared/ui';
import { Carousel, Games } from '@/widgets';

const { locale } = useI18n();
const router = useRouter();
const store = useGamesStore();
const isLoading = ref(true);
const searchQuery = ref('');
const isError = ref(false);
const gamesAmount = ref(0);
const currentPaginationPage = ref(1);
const isLargeScreen = useMediaQuery('(min-width: 768px)');

const games = computed(() =>
  store.games.map((game) => ({
    id: game.id,
    title: game.title,
    price: game.price,
    imageUrl: game.image,
    genres: useGameLocalization(locale.value, game.genres) as string[],
  }))
);

const carouselData = computed(() =>
  store.games.map((game) => ({
    id: game.id,
    title: game.title,
    imageUrl: game.image,
  }))
);

const paginationPages = computed(() => Math.ceil(gamesAmount.value / PAGE_LIMIT));

const onChangePaginationPage = (page: number) => {
  if (page > 0 && page <= paginationPages.value) {
    currentPaginationPage.value = page;
  }
};

/**
 * ! Mockapi does not return the amount of data, so you need to make 2 get requests:
 * ! the first to get the total number of products on the server,
 * ! and the second to get a certain amount of data
 */
onMounted(async () => {
  try {
    isLoading.value = true;
    await store.getGames(currentPaginationPage.value);

    gamesAmount.value = await store.getAllDataForPagination();

    isError.value = false;
  } catch (error) {
    isError.value = true;
    console.warn(error);
  } finally {
    isLoading.value = false;
  }
});

watch(
  [searchQuery, currentPaginationPage],
  debounce(async () => {
    await store.getGames(currentPaginationPage.value, searchQuery.value);
  }, 100)
);

watch(isError, () => {
  isError.value ? router.push({ name: 'error' }) : router.push({ name: 'home' });
});
</script>

<template>
  <!-- <suspense> component doesn't work, so I made rendering by flag -->

  <template v-if="isLoading">
    <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Spinner />
    </div>
  </template>

  <template v-else>
    <container class="px-4 mx-auto mt-16">
      <div class="flex flex-col items-center gap-16">
        <Carousel
          v-if="isLargeScreen && !searchQuery.length && currentPaginationPage === 1"
          :carousel-data="carouselData"
          class="md:max-w-md lg:max-w-lg xl:max-w-xl"
        />

        <input
          v-model="searchQuery"
          type="text"
          :placeholder="$t('search')"
          class="w-11/12 px-3 py-1 text-white rounded-full outline-none bg-dark dark:bg-light-gray placeholder:text-white dark:placeholder:text-black dark:text-black md:w-1/2 lg:w-1/3 xl:w-1/4 placeholder:text-center"
        >

        <Games
          v-auto-animate
          :games="games"
        />

        <Pagination
          v-if="!searchQuery"
          :pagination-pages="paginationPages"
          @on-change-pagination-page="(page) => onChangePaginationPage(page)"
        />
      </div>
    </container>
  </template>
</template>
