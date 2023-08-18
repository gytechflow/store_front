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

export interface ArticleDto {
  id: number;
  price: string;
  seller: { id: number; name: string };
  product: {
    "@type": string;
    id: number;
    ref: string;
    name: string;
    brand: string | null;
    description: string;
    image: string;
    basePrice: { price: string };
  };
}

export function convertArticleDto(data: ArticleDto) {
  let price = {
    amount: parseFloat(data.price.split(" ")[1]),
    currency: data.price.split(" ")[0],
  };
  let basePrice = {
    amount: parseFloat(data.product.basePrice.price.split(" ")[0]),
    currency: data.product.basePrice.price.split(" ")[1],
  };
  console.log(price);
  console.log(data.price.split(" ")[0]);
  console.log(parseInt(data.price.split(" ")[0]));
  const article: Article = {
    id: data.id,
    price: price,
    seller: { id: data.seller.id, name: data.seller.name },
    product: {
      "@type": data.product["@type"],
      id: data.product.id,
      ref: data.product.ref,
      name: data.product.name,
      brand: data.product.brand,
      description: data.product.description,
      image: data.product.image,
      basePrice: basePrice,
    },
  };
  return article;
}
