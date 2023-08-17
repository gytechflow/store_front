import { HeartFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { CartItem } from "../../models/CartItem";
import { RootState } from "../../stores/redux";
import "./CartPage.module.scss";
import CartPageItem from "../../components/CartPageItem/CartPageItem";

export default function CartPage() {
  const items = useSelector((state: RootState) => state.cart.items);

  const getTotalQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity * item.article.price.amount;
    });
    return total;
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">
                          {getTotalQuantity()}
                        </h6>
                      </div>

                      {items.map((item) => (
                        <CartPageItem item={item} />
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="/" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          items {getTotalQuantity()}
                        </h5>
                        <h5>$ {getTotalPrice()}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Examplea2"
                          >
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>$ {getTotalPrice()}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
