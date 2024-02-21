<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Button, Container } from '@/shared/ui';
</script>

<template>
  <container class="mx-auto">
    <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div class="flex flex-col items-center gap-5">
        <p class="text-9xl">
          😢
        </p>
        <b class="text-center text-black dark:text-white">{{
          $t('Ooops! Something went wrong...')
        }}</b>
        <span class="text-center text-black dark:text-white">{{ $t('try again') }}</span>

        <router-link to="/">
          <Button
            :type="'button'"
            class="p-3 text-white bg-button-purple"
          >
            {{ $t('go to main page') }}
          </Button>
        </router-link>
      </div>
    </div>
  </container>
</template>
