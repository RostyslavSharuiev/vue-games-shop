import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { CartItem, CartResponse, Order } from './types';

import { API } from '@/shared/api/api';

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref<CartItem[]>([]);
  const gamesInLocalStorage = localStorage.getItem('cart');

  if (gamesInLocalStorage) {
    cart.value = JSON.parse(gamesInLocalStorage)._value;
  }

  const isItemInCart = (id: string) => {
    return cart.value.some((game) => game.id === id);
  };

  const addToCart = (game: CartItem) => {
    cart.value.push(game);
  };

  const removeFromCart = (id: string) => {
    cart.value = cart.value.filter((game) => game.id !== id);
  };

  const clearCart = () => {
    cart.value = [];
  };

  const makeOrder = async (order: Order) => {
    const data = await API.sendCart<CartResponse, Order>(order);

    return data;
  };

  watch(
    () => cart,
    (state) => {
      localStorage.setItem('cart', JSON.stringify(state));
    },
    { deep: true }
  );

  return { cart, addToCart, removeFromCart, clearCart, isItemInCart, makeOrder };
});
