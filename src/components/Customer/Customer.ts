export interface Customer {
  id: number;
  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    country: string;
  };
  iban: string;
}
