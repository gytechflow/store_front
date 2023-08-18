import "./AddSellerPage.module.scss";
import sellerImg from "./img.avif";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface sellerFom {
  name: string;
  iban: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    country: string;
  };
}

export default function AddSellerPage() {
  const [data, setData] = useState<sellerFom>({
    name: "",
    iban: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
      country: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    level1: boolean,
  ) => {
    const value = e.target.value;
    const formData: sellerFom = { ...data };
    if (level1) {
      const field = e.target.name as keyof typeof formData.address;
      formData.address[field] = value;
    }
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      iban: data.iban,
      address: {
        street: data.address.street,
        city: data.address.city,
        zipcode: data.address.zipcode,
        country: data.address.country,
      },
    };
    axios
      .post(`${Config.apiBaseUrl}/api/sellers`, userData)
      .then((response) => {
        console.log(response.status, response.data.token);
      });
    navigate("/sellers");
  };

  return (
    <div className="row d-flex justify-content-evenly align-items-start h-100">
      <div className="col-md-8 col-lg-6 col-xl-4 flex-grow-1 m-3">
        <form className="m-3">
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Add a New Seller</p>
          </div>

          <div className="form-outline mb-4 text-dark">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control form-control-md border w-75"
              placeholder="Enter a valid email address"
            />
          </div>

          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="form-control form-control-md border w-75"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e, false)}
            />
          </div>

          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Iban
            </label>
            <input
              type="text"
              id="Iban"
              className="form-control form-control-md border w-75"
              placeholder="Iban"
              name="iban"
              value={data.iban}
              onChange={(e) => handleChange(e, false)}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center w-75">
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Street
              </label>
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-md border"
                placeholder="Street"
                name="street"
                value={data.address.street}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
            <div className="m-3"></div>
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                City
              </label>
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-md border"
                placeholder="City"
                name="city"
                value={data.address.city}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center w-75">
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Zip code
              </label>
              <input
                type="text"
                id="ZipCode"
                className="form-control form-control-md border"
                placeholder="Zip Code"
                name="zipcode"
                value={data.address.zipcode}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
            <div className="m-3"></div>
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Country
              </label>
              <input
                type="text"
                id="Country"
                className="form-control form-control-md border"
                placeholder="Enter password"
                name="country"
                value={data.address.country}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={handleSubmit}
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
