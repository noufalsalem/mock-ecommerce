export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
