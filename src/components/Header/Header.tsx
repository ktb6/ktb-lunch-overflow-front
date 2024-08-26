import Link from "next/link";
import styles from "./Header.module.scss";
import Dropdown from "../Dropdown/Dropdown";
interface HeaderProps {
  type?: "full" | "short";
}

const Header = ({ type = "full" }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.navItem}>
        <h1 className={styles.title}>Lunch Overflow 🍲</h1>
      </Link>
      <Dropdown items={["판교 유스페이스1"]} />
    </header>
  );
};

export default Header;
