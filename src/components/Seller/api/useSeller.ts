import { getSeller } from "./getSeller";
import { useEffect, useState } from "react";
import { Seller } from "../Seller";
import { AxiosError } from "axios";

export default function useSeller(sellerId: number) {
  const [seller, setSeller] = useState<Seller>();

  function fetch() {
    return getSeller(sellerId)
      .then((response) => {
        setSeller(response.data);
      })
      .catch((e: Error | AxiosError) => {
        console.error("Error while fetching articleList: ", e);
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  return { seller };
}
