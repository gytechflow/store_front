import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function Pagination({
  totalPages,
  currentPage,
  goToPage,
}: {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
}) {
  return (
    <>
      {Array.from(Array(totalPages).keys())
        .map((x) => x + 1)
        .map((page) => {
          if (page === currentPage) {
            return (
              <MDBPaginationItem active onClick={() => goToPage(page)}>
                <MDBPaginationLink href="#">
                  {page} <span className="visually-hidden">(current)</span>
                </MDBPaginationLink>
              </MDBPaginationItem>
            );
          }
          return (
            <MDBPaginationItem onClick={() => goToPage(page)}>
              <MDBPaginationLink href="#">{page}</MDBPaginationLink>
            </MDBPaginationItem>
          );
        })}
    </>
  );
}
