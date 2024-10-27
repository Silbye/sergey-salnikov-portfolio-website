"use client";

import styles from "./page.module.css";
import useDownloader from "react-use-downloader";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "/cv.pdf";
  const filename = "cv.pdf";

  return (
    <section className={styles.home}>
      <div className={`${styles.container} container`}>
        <div className={styles.homeLeftSide}>
          <h1 className={`roboto-black`}>
            <b>FRONTEND</b> РАЗРАБОТЧИК
          </h1>
          <a
            href="https://projectsforportfolio-cd82.restdb.io/media/cv.pdf"
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
