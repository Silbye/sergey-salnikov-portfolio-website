"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={`${styles.container} container`}>
        <div className={styles.homeLeftSide}>
          <h1 className={`roboto-black`}>
            <b>FRONTEND</b> РАЗРАБОТЧИК
          </h1>
          <a
            href="https://drive.google.com/file/d/1h6giRzmOjV8a7Fz-o9x3bxy4clK5o34c/view?usp=sharing"
            download
            target="_blank"
            className={`${styles.downloadButton} roboto-black`}
          >
            Скачать резюме
          </a>
        </div>
        <div className={styles.homeRightSide}>
          <img
            className={styles.homeImage}
            src="https://i.ibb.co/gyPt94V/computer.png"
          />
          <img
            className={styles.ImageOnHover}
            src="https://i.ibb.co/tm9nh7D/loading.png"
          />
        </div>
      </div>
    </section>
  );
}
