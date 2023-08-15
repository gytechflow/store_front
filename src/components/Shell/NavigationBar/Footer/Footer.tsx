import styles from "../NavigationBar.module.scss";
import { Heart } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div className={styles.navigationBar} style={{ justifyContent: "center" }}>
      <span>
        Made with <Heart /> By @YD
      </span>
    </div>
  );
}
