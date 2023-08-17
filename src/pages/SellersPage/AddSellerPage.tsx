import { Heart, HeartFill } from "react-bootstrap-icons";
import "./AddSellerPage.module.scss";
import sellerImg from "./img.avif";
export default function AddSellerPage() {
  return (
    <div className="row d-flex justify-content-evenly align-items-start h-100">
      <div className="col-md-8 col-lg-6 col-xl-4 flex-grow-1 m-3">
        <form>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Add a New Seller</p>
          </div>

          <div className="form-outline mb-4 text-dark">
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              style={{ outlineColor: "pink" }}
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>

          <div className="form-outline mb-3">
            <input
              type="text"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
            <label className="form-label" htmlFor="form3Example4">
              Name
            </label>
          </div>

          <div className="form-outline mb-3">
            <input
              type="text"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
            <label className="form-label" htmlFor="form3Example4">
              Name
            </label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" htmlFor="form3Example4">
                Street
              </label>
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" htmlFor="form3Example4">
                City
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" htmlFor="form3Example4">
                Zip code
              </label>
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" htmlFor="form3Example4">
                Country
              </label>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-9 col-lg-6 col-xl-5 offset-xl-1">
        <img src={sellerImg} className="img-fluid" alt="Sample image" />
      </div>
    </div>
  );
}
