export type Games = {
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
}[];
