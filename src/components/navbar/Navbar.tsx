import { FC } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Products</Link>
      <Link to="/add">Add product</Link>
    </div>
  );
};

export default Navbar;
