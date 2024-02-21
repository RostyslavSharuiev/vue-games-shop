type Games = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}[];

export const calcTotalPrice = (games: Games): number =>
  games.reduce((acc, game) => (acc += game.price), 0);
