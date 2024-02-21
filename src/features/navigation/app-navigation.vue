<script setup lang="ts">
import { inject } from 'vue';

import { useDark, useToggle } from '@vueuse/core';

import { Language } from '@/features';
import { Icon } from '@/shared/ui';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { toggleDrawer } = inject<() => void>('drawer');

const onUserClick = () => {
  alert("Api service don't provide more than 2 resources");
};
</script>

<template>
  <nav class="flex items-center gap-10">
    <Icon
      :type="'cart'"
      classes="text-black dark:text-mid-gray cursor-pointer"
      @toggle-drawer="toggleDrawer"
    />

    <Icon
      :type="'user'"
      classes="text-black dark:text-mid-gray cursor-pointer"
      @on-user-click="onUserClick"
    />

    <Language />

    <Icon
      v-if="isDark"
      :type="'sun'"
      classes="text-black dark:text-mid-gray cursor-pointer"
      @toggle-dark="toggleDark"
    />
    <Icon
      v-else
      :type="'moon'"
      classes="text-black dark:text-mid-gray cursor-pointer"
      @toggle-dark="toggleDark"
    />
  </nav>
</template>
