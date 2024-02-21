export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type Order = {
  items: CartItem[];
  totalPrice: number;
};

export type CartResponse = {
  id: string;
  createdAt: string;
  items: CartItem[];
  totalPrice: number;
};
