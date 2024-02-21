<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Navigation } from '@/features';
import { Container } from '@/shared/ui';

const emit = defineEmits(['toggleDrawer']);
</script>

<template>
  <container class="z-0 mx-auto">
    <header
      class="flex flex-col items-center justify-between gap-5 px-4 py-10 border-b border-b-dark dark:border-b-mid-gray md:flex-row md:gap-0 bg-light-gray dark:bg-dark"
    >
      <router-link
        to="/"
        class="text-2xl font-bold text-black uppercase dark:text-white"
      >
        Vue Games Store
      </router-link>

      <Navigation />
    </header>
  </container>
</template>
