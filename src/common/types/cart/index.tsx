export interface ICartSlice {
  cartData: ICartItem[];
  totalPrice: number;
  count?: number;
}

export interface ICartItem {
  count: number;
  description: string;
  id: number;
  price: number;
  images: string[];
  title: string;
}
