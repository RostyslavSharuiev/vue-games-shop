<script setup lang="ts">
import { Container, Icon } from '@/shared/ui';
</script>

<template>
  <container class="mx-auto mt-auto">
    <footer
      class="px-4 py-10 mt-16 border-t bg-light-gray dark:bg-dark border-t-dark dark:border-t-mid-gray"
    >
      <div class="flex items-center justify-between lg:flex-col lg:gap-4 lg:items-end">
        <span class="font-bold text-black dark:text-mid-gray">{{ $t('contact us') }}:</span>

        <div class="flex gap-3">
          <Icon
            :type="'chat'"
            classes="text-black dark:text-mid-gray"
          />
          <Icon
            :type="'mail'"
            classes="text-black dark:text-mid-gray"
          />
          <Icon
            :type="'phone'"
            classes="text-black dark:text-mid-gray"
          />
        </div>
      </div>

      <div class="mt-4 text-center">
        <p class="text-lg font-bold text-black dark:text-mid-gray">
          &#169; {{ $t('all rights reserved') }}
        </p>
        <p class="text-lg font-bold text-black dark:text-mid-gray">
          {{ $t('country') }}, 2024
        </p>
      </div>
    </footer>
  </container>
</template>
