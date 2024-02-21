/**
 * ! Mockapi returns Array<Object> type
 * ! this part needs to refactoring, if use a real data
 */
export type Game = {
  id: string;
  title: string;
  price: number;
  image: string;
  video: string;
  genres: {
    en: string[];
    ua: string[];
  };
  description: {
    en: string;
    ua: string;
  };
};
