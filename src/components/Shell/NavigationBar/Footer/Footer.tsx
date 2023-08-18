import styles from "../NavigationBar.module.scss";
import { HeartFill } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div className={styles.navigationBar} style={{ justifyContent: "center" }}>
      <span>
        Made with <HeartFill color="red" /> By Takima @YD
      </span>
    </div>
  );
}
