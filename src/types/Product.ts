export interface Product {
  id?: string;
  name?: string;
  gtin?: string;
  value?: number;
  lotsize?: number;
  hidden?: boolean;
}

export type ProductState = Product[] | [];

export type ProductAction = {
  type: string;
  data: Product | Product[];
};
