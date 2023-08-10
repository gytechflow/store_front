import { AxiosError } from "axios";
import { Alert } from "react-bootstrap";

export function ErrorComponent({ error }: { error?: Error | AxiosError }) {
  if (!error) {
    return null;
  } else if (error instanceof AxiosError) {
    return (
      <Alert variant="danger" dismissible>
        Oops, une erreur réseau est arrivée, essaie de rafraîchir la page..
      </Alert>
    );
  }
  return (
    <Alert variant="danger" dismissible>
      Oops, une erreur est survenue, retente plus tard.
    </Alert>
  );
}
