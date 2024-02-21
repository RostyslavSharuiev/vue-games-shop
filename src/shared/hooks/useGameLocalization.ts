interface Game {
  en: string | string[];
  ua: string | string[];
}

export const useGameLocalization = (locale: string, game: Game) => {
  return game[locale as 'en' | 'ua'];
};
