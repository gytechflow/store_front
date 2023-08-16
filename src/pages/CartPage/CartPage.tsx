import { Heart, HeartFill } from "react-bootstrap-icons";

export default function CartPage() {
  return (
    <div
      className="{styles.navigationBar}"
      style={{ justifyContent: "center" }}
    >
      <span>
        Made with <HeartFill color="red" /> By Takima @YD
      </span>
    </div>
  );
}
