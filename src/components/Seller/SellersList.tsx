import { PlusSquareFill } from "react-bootstrap-icons";
import { Seller } from "./Seller";
import { useNavigate } from "react-router-dom";

export default function SellersList({ sellers }: { sellers: Array<Seller> }) {
  const navigate = useNavigate();

  return (
    <table className="table table-hover pr-3">
      <thead style={{ backgroundColor: "pink" }}>
        <tr>
          <th scope="col" style={{ color: "#cb2468" }}>
            id
          </th>
          <th scope="col" style={{ color: "#cb2468" }}>
            Name
          </th>
          <th scope="col" style={{ color: "#cb2468" }}>
            Street
          </th>
          <th scope="col" style={{ color: "#cb2468" }}>
            City
          </th>
          <th scope="col" style={{ color: "#cb2468" }}>
            Country
          </th>
          <th>
            <a href="/addSeller" className="algin-content-center">
              <PlusSquareFill size={25} color="black" />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {sellers.map((seller) => {
          const sellerId = seller.id;
          return (
            <tr
              key={sellerId}
              onClick={() => navigate(`/updateSeller/${sellerId}`)}
            >
              <th scope="row">{seller.id}</th>
              <td>{seller.name}</td>
              <td>{seller.address.street}</td>
              <td>{seller.address.city}</td>
              <td>{seller.address.country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
