import { Seller } from "../Seller";
import axios from "axios";

export async function getSeller(sellerId: number) {
  console.log(`${Config.apiBaseUrl}/api/sellers/${sellerId}`);
  return axios.get<Seller>(`${Config.apiBaseUrl}/api/sellers/${sellerId}`);
}
