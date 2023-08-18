import sellerImg from "./img.avif";
import Pagination from "../../components/Pagination/Pagination";
import { useSellerPagination } from "../../components/Seller/api/getSellers";
import SellersList from "../../components/Seller/SellersList";
import { ErrorComponent } from "../../components/Error/Error";
import { Spinner } from "react-bootstrap";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function SellersPage() {
  const {
    isLoading,
    error,
    currentPageContent,
    currentPageNumber,
    totalPages,
    goToPage,
    previousPage,
    nextPage,
  } = useSellerPagination();
  return (
    <div
      className="row justify-content-evenly align-items-start m-3"
      style={{ minHeight: "100%" }}
    >
      <div className="col-md-8 col-lg-6 col-xl-4 flex-grow-1 hv-100 ">
        <ErrorComponent error={error} />
        {!error &&
          (isLoading ? (
            <Spinner />
          ) : (
            <SellersList sellers={currentPageContent} />
          ))}
        <nav aria-label="..." className="mb-5 p-3">
          <MDBPagination circle>
            <MDBPaginationItem onClick={() => previousPage()}>
              <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
                Previous
              </MDBPaginationLink>
            </MDBPaginationItem>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPageNumber}
              goToPage={goToPage}
            />
            <MDBPaginationItem onClick={() => nextPage()}>
              <MDBPaginationLink href="#">Next</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
      </div>
      <div className=" col-md-7 col-lg-5 col-xl-4 offset-xl-1">
        <img
          src={sellerImg}
          className="img-fluid align-self-center"
          alt="Sample image"
        />
      </div>
    </div>
  );
}
