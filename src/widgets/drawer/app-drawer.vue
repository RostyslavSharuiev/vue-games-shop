<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
import { onClickOutside } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

import { CartGame, useCartStore } from '@/entities/cart';
import { MakeOrder } from '@/features';
import { Icon } from '@/shared/ui';
import { calcTotalPrice } from '@/shared/utils';
import { InfoBlock } from '@/widgets';

const store = useCartStore();
const router = useRouter();
const toast = useToast();
const { t } = useI18n();
const target = ref(null);
const isCreating = ref(false);
const isError = ref(false);
const orderId = ref('');

const removeFromCart = store.removeFromCart;
const emit = defineEmits(['toggleDrawer']);

onClickOutside(target, () => emit('toggleDrawer'));

const games = computed(() =>
  store.cart.map((game) => ({
    id: game.id,
    title: game.title,
    price: game.price,
    imageUrl: game.image,
  }))
);

const totalPrice = computed(() => calcTotalPrice(games.value));
const taxPrice = computed(() => Math.round(totalPrice.value * 20) / 100);
const buttonDisabled = computed(() => isCreating.value || store.cart.length === 0);

const removeFromCartHandler = (id: string) => {
  removeFromCart(id);
  toast.error(t('removed'));
};

const makeOrder = async () => {
  try {
    isCreating.value = true;
    isError.value = false;

    const data = await store.makeOrder({
      items: store.cart,
      totalPrice: totalPrice.value,
    });

    orderId.value = data.id;
    store.clearCart();
  } catch (error) {
    isError.value = true;
    console.warn(error);
  } finally {
    isCreating.value = false;
  }
};

watch(isError, () => {
  isError.value ? router.push({ name: 'error' }) : router.push({ name: 'home' });
});
</script>

<template>
  <div class="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-70" />
  <aside
    ref="target"
    class="fixed top-0 right-0 z-50 flex flex-col justify-between w-full gap-5 p-4 h-3/5 bg-light-gray dark:bg-dark lg:h-full lg:w-1/3 2xl:w-1/4"
  >
    <div class="flex items-center justify-between p-4">
      <span class="text-2xl font-bold text-black dark:text-white">{{ $t('cart') }}</span>
      <div
        class="p-1 border border-black rounded-xl dark:border-mid-gray"
        @click="() => emit('toggleDrawer')"
      >
        <Icon
          :type="'cross'"
          classes="text-black dark:text-mid-gray cursor-pointer"
        />
      </div>
    </div>

    <template v-if="!totalPrice || orderId">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        image-url="/package-icon.webp"
        :title="$t('cart is empty')"
        :description="$t('add one or more game to make order')"
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      />
      <InfoBlock
        v-if="orderId"
        image-url="/order-success-icon.webp"
        :title="$t('order success')"
        :description="`${$t('your order')} #${orderId} ${$t('has been completed')}`"
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      />
    </template>

    <template v-else>
      <div
        v-auto-animate
        class="flex flex-col flex-1 gap-4 overflow-scroll"
      >
        <CartGame
          v-for="game in games"
          :key="game.id"
          :game="game"
          @remove-from-cart="() => removeFromCartHandler(game.id)"
        />
      </div>

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span class="text-black dark:text-white">{{ $t('total') }}:</span>
          <div class="flex-1 border-b border-dashed border-b-black dark:border-b-white" />
          <b class="text-black dark:text-white">{{ totalPrice }}&#8372;</b>
        </div>

        <div class="flex gap-2">
          <span class="text-black dark:text-white">{{ $t('tax') }} 20%:</span>
          <div class="flex-1 border-b border-dashed border-b-black dark:border-b-white" />
          <b class="text-black dark:text-white">{{ taxPrice }}&#8372;</b>
        </div>

        <MakeOrder
          :disabled="buttonDisabled"
          @make-order="makeOrder"
        />
      </div>
    </template>
  </aside>
</template>
