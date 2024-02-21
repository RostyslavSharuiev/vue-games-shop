``
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';

import { useCartStore, type CartItem } from '@/entities/cart';
import { Button } from '@/shared/ui';

interface Props {
  game: CartItem;
  textColor?: string;
}

const { game } = defineProps<Props>();

const { t } = useI18n();
const toast = useToast();
const store = useCartStore();

const isItemInCart = computed(() => store.isItemInCart(game.id));

const handleClick = () => {
  if (isItemInCart.value) {
    store.removeFromCart(game.id);
    toast.error(t('removed'));
  } else {
    store.addToCart(game);
    toast.success(t('added'));
  }
};
</script>

<template>
  <div class="flex items-center gap-4">
    <span
      class="font-bold text-black dark:text-white"
      :class="textColor"
    >{{ game.price }}&#8372;</span>
    <Button
      :type="'button'"
      class="px-3"
      :class="!isItemInCart ? 'bg-button-purple text-white' : 'bg-mid-gray text-black'"
      name="theme toggler"
      @click="handleClick"
    >
      {{ isItemInCart ? $t('remove from cart') : $t('add to cart') }}
    </Button>
  </div>
</template>
