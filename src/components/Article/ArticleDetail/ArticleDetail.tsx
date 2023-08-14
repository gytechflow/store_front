import "./ArticleDetail.module.scss";

import { MDBContainer } from "mdb-react-ui-kit";
import { Article } from "../Article";

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    // <MDBContainer className="m-3 w-100 justify-content-center">
    // <div className="{styles.articlePage}">
    // <section className="w-100" style={{backgroundColor: "#eee"}}>
    // <div className="container py-5 md-10">
    <div
      className="h-100 row justify-content-center py-5 mb-3"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="col-md-10 col-xl-9 p-5">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row md-10">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    src={`http://localhost:2020/assets/${article?.product.image}`}
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{article?.product.name}</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>5</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>Vendeur</span>
                  <span className="text-primary"> • </span>
                  <span>{article?.seller.name}</span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Ref</span>
                  <span className="text-primary"> • </span>
                  <span>{article?.product.ref}</span>
                </div>
                <p className="text-wrap mt-5 pt-3 mb-4 mb-md-0">
                  {article?.product.description}
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${article?.price.amount}</h4>
                  <span className="text-danger">
                    <s>${article?.product.basePrice.amount}</s>
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-5 pt-5">
                  <button
                    className="btn btn-primary btn-sm mt-4"
                    style={{ backgroundColor: "#cb2468" }}
                    type="button"
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    style={{ borderColor: "#cb2468", color: "#cb2468" }}
                    type="button"
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </section>
    //     {/* {typeof {article} === "undefined" ? <ErrorComponent error={error} /> : {article} } */}
    // // </div>
    // // </MDBContainer>
  );
}
