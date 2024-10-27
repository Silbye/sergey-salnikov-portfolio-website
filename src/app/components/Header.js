import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link className={`${styles.headerLogo} roboto-black`} href="/">
          Сергей Сальников
        </Link>
        <div className={styles.headerMenuButton}>
          <label for="check">
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                fill="#E8E8E8"
              />
            </svg>
          </label>
        </div>
        <input
          type="checkbox"
          className={styles.checkbox}
          name="Menu"
          id="check"
        />
        <ul className={styles.mobileMenu}>
          <label for="check" className={styles.menuCloseButton}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
                fill="#FFFFFF"
              />
            </svg>
          </label>
          <li>
            <Link href="/about-me">Обо мне</Link>
          </li>
          <li>
            <Link href="/projects">Проекты</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
        <ul className={`${styles.headerLinks} roboto-medium`}>
          <li>
            <Link href="/about-me">Обо мне</Link>
          </li>
          <li>
            <Link href="/projects">Проекты</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
