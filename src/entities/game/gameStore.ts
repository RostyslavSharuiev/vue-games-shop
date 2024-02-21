import { defineStore } from 'pinia';
import { ref } from 'vue';

import { API } from '@/shared/api';
import type { Game } from './types';

/**
 * ! Mockapi returns Array<Object> type
 * ! this part needs to refactoring, if use a real data
 */
export const useGameStore = defineStore('gameStore', () => {
  const game = ref<Game | null>(null);

  const getGame = async (id: string) => {
    const [data] = await API.fetchGame<Game[]>(id);

    game.value = data;

    return data;
  };

  return { game, getGame };
});
