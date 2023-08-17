import { Heart, HeartFill } from "react-bootstrap-icons";
import { Seller } from "./Seller";

export default function SellersList({ sellers }: { sellers: Array<Seller> }) {
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
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "50px" }}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </tr>
      </thead>
      <tbody>
        {sellers.map((seller) => {
          return (
            <tr>
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
