<script setup lang="ts">
// import { vAutoAnimate } from '@formkit/auto-animate';
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';

import { Drawer, Footer, Header } from '@/widgets';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

provide('drawer', { toggleDrawer });
</script>

<template>
  <Drawer
    v-if="isDrawerOpen"
    @toggle-drawer="toggleDrawer"
  />

  <div class="relative flex flex-col w-screen min-h-screen bg-light-gray dark:bg-dark">
    <Header class="sticky top-0 z-10" />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
