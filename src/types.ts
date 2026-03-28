export interface Product {
  id: string;
  name: string;
  seriesId: string;
  price: number;
  description: string;
  image: string;
  nrcRating: number;
  material: string;
  depth?: string;
  density?: string;
  status: 'IN_STOCK' | 'LOW_SUPPLY' | 'RESTRICTED';
  stockCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
