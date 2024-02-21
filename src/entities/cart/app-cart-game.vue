<script setup lang="ts">
import { Icon } from '@/shared/ui';

interface Props {
  game: {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
  };
}

const { game } = defineProps<Props>();

const emit = defineEmits(['removeFromCart']);
</script>

<template>
  <div class="flex items-center gap-4 p-4 border border-black rounded-xl dark:border-mid-gray">
    <img
      :src="game.imageUrl"
      :alt="game.title"
      class="w-16 rounded-md"
    >

    <div class="flex flex-col flex-1">
      <h2 class="text-black dark:text-white">
        {{ game.title }}
      </h2>

      <div class="flex justify-between mt-2">
        <b class="flex-1 text-black dark:text-white">{{ game.price }}&#8372;</b>
        <div
          class="p-1 transition border border-black rounded-xl dark:border-mid-gray opacity-40 hover:opacity-100"
          @click="() => emit('removeFromCart')"
        >
          <Icon
            :type="'cross'"
            classes="text-black dark:text-mid-gray cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
