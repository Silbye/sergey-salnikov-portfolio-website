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
            <b>FRONTEND</b> DEVELOPER
          </h1>
          <button
            onClick={() => download(fileUrl, filename)}
            className={`${styles.downloadButton} roboto-black`}
          >
            Download CV
          </button>
        </div>
        <div className={styles.homeRightSide}>
          <img className={styles.homeImage} src="/img/computer.png" />
          <img className={styles.ImageOnHover} src="/img/loading.png" />
        </div>
      </div>
    </section>
  );
}
