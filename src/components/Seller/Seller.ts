export interface Seller {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    country: string;
  };
  iban: string;
}
