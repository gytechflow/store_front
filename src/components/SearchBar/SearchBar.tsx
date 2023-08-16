import { MDBInput } from "mdb-react-ui-kit";

export default function SearchBar({
  searchResultPage,
}: {
  searchResultPage: (searchTerm: string) => void;
}) {
  return (
    <div className="input-group mt-5 pt-5 w-25">
      <MDBInput
        label="search"
        id="form1"
        type="search"
        onChange={(e) => searchResultPage(e.target.value)}
      />
      {/* <input type="search" id="form1" className="form-control" /> */}
      <button type="button" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
