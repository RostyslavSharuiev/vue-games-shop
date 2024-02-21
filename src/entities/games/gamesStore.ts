import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Games } from './types';

import { API } from '@/shared/api';

/**
 * ! Mockapi does not return the amount of data, so you need to make 2 get requests:
 * ! the first to get the total number of products on the server,
 * ! and the second to get a certain amount of data
 */
export const useGamesStore = defineStore('gamesStore', () => {
  const games = ref<Games>([]);

  const getAllDataForPagination = async () => {
    const data = (await API.fetchGames<Games>()).length;

    return data;
  };

  const getGames = async (page: number, searchQuery?: string) => {
    const data = await API.fetchGames<Games>(page, searchQuery);
    games.value = data;

    return data;
  };

  return { games, getGames, getAllDataForPagination };
});
