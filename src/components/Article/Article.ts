export interface Article {
  id: number;
  price: { amount: number; currency: string };
  seller: { id: number; name: string };
  product: {
    "@type": string;
    id: number;
    ref: string;
    name: string;
    brand: string | null;
    description: string;
    image: string;
    basePrice: { amount: number; currency: string };
  };
}
