import { Spinner } from "react-bootstrap";

export default function ({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
