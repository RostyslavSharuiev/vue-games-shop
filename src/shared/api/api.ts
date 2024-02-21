import { PAGE_LIMIT } from '@/shared/constants/constants';
import { instance } from './instance';

export const API = {
  fetchGames: async <T>(page?: number, searchQuery?: string) => {
    const { data } = await instance.get<T>('games', {
      params: {
        title: searchQuery,
        limit: PAGE_LIMIT,
        page: page,
      },
    });
    return data;
  },

  fetchGame: async <T>(id?: string) => {
    const { data } = await instance.get<T>('games', {
      params: {
        id,
      },
    });

    return data;
  },

  sendCart: async <T, I>(cart: I) => {
    const { data } = await instance.post<T>('cart', cart);

    return data;
  },
};
