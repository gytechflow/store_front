import { useEffect, useState } from "react";
import { Customer } from "../Customer";
import axios, { AxiosError } from "axios";

function getCustomer(id: number) {
  return axios.get<Customer>(`${Config.apiBaseUrl}/api/customers/${id}`);
}

export default function useCustomer(id: number) {
  const [isLoading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<Customer>();
  const [error, setError] = useState<Error | AxiosError>();

  function fetch() {
    setLoading(true);

    return getCustomer(id)
      .then((response) => setCustomer(response.data))
      .catch((e: Error | AxiosError) => {
        console.error(`Error while fetching customer with id ${id}`);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading, error, customer };
}
