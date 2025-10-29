
export enum ProductCategory {
  MENS = "Men's",
  WOMENS = "Women's",
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ProductCategory;
}

export interface CartItem extends Product {
  quantity: number;
}
