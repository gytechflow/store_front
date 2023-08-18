import { Spinner } from "react-bootstrap";
import ArticleList from "../../components/Article/ArticleList/ArticleList";
import { ErrorComponent } from "../../components/Error/Error";
import "./HomePage.module.scss";
import { useArticlePagination } from "../../components/Article/api/searchArticle";
import Pagination from "../../components/Pagination/Pagination";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage() {
  const {
    isLoading,
    error,
    currentPageContent,
    currentPageNumber,
    totalPages,
    goToPage,
    previousPage,
    nextPage,
    searchResultPage,
  } = useArticlePagination();

  return (
    <div className="row d-flex justify-content-center">
      <SearchBar searchResultPage={searchResultPage} />
      <ErrorComponent error={error} />
      {!error &&
        (isLoading ? (
          <Spinner />
        ) : (
          <ArticleList articles={currentPageContent} />
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
  );
}

export default HomePage;
