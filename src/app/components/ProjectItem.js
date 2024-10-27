"use client";

import Link from "next/link";
import styles from "../styles/project.module.css";

function checkBack(id) {
  if (id > 0) {
    return (
      <Link href={`/projects/` + (id - 1)} className={styles.goBack}>
        предыдущий проект
      </Link>
    );
  }
}

function checkForward(id, length) {
  if (id < length - 1) {
    return (
      <Link href={`/projects/` + (id + 1)} className={styles.goForward}>
        следующий проект
      </Link>
    );
  }
}

const ProjectItem = ({ project, length }) => {
  return (
    <section className={styles.project}>
      {checkBack(project.id)}
      <div className={`${styles.projectContainer} container`}>
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <div className={styles.projectWrapper}>
          <a
            className={styles.projectImage}
            href={project.site_link}
            target="_blank"
          >
            <img
              className={styles.projectImage}
              src={project.img}
              alt={project.name}
            />
            <div className={styles.projectImageHover}>
              <p>Сайт</p>
            </div>
          </a>
          <div className={styles.projectWrapperSide}>
            <p className={styles.projectDescr}>{project.desc}</p>
            <Link className={styles.projectLink} href={project.link}>
              Код на GitHub{" "}
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 0C6.94012 0 0 7.04879 0 15.7427C0 23.1195 5.00133 29.2919 11.7438 31C11.6715 30.7875 11.625 30.5408 11.625 30.2352V27.5445C10.996 27.5445 9.94196 27.5445 9.67717 27.5445C8.61671 27.5445 7.67379 27.0814 7.21654 26.2208C6.70892 25.2644 6.62108 23.8017 5.363 22.9069C4.98971 22.6091 5.27387 22.2694 5.704 22.3153C6.49837 22.5435 7.15712 23.0972 7.77712 23.9184C8.39454 24.741 8.68517 24.9273 9.83862 24.9273C10.3979 24.9273 11.2349 24.8945 12.0228 24.7685C12.4465 23.6757 13.1789 22.6695 14.074 22.1946C8.9125 21.6554 6.44929 19.0474 6.44929 15.5066C6.44929 13.9821 7.08867 12.5076 8.17496 11.2652C7.81846 10.032 7.37025 7.51714 8.31188 6.55946C10.6343 6.55946 12.0383 8.08912 12.3755 8.50237C13.5328 8.09962 14.8038 7.87135 16.1394 7.87135C17.4775 7.87135 18.7537 8.09962 19.9136 8.50499C20.2469 8.09437 21.6522 6.55946 23.9798 6.55946C24.9253 7.51845 24.4719 10.0438 24.1115 11.2744C25.1914 12.5141 25.8269 13.9848 25.8269 15.5066C25.8269 19.0447 23.3675 21.6515 18.2138 22.1933C19.632 22.945 20.6667 25.0571 20.6667 26.6485V30.2352C20.6667 30.3716 20.637 30.47 20.6215 30.5868C26.6613 28.4366 31 22.6118 31 15.7427C31 7.04879 24.0599 0 15.5 0Z"
                  fill="#A40000"
                />
              </svg>
            </Link>
          </div>
        </div>
        <h2 className={styles.projectStack}>Стек: {project.stack}</h2>
      </div>
      {checkForward(project.id, length)}
    </section>
  );
};

export default ProjectItem;
