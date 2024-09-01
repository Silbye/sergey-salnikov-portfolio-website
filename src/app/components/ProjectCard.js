"use client";

import Link from "next/link";
import styles from "../styles/projects.module.css";

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/projects/` + project.id}
      key={project.id}
      className={styles.projectsItem}
    >
      <img
        className={styles.projectsItemImage}
        src={`/img/${project.id}.png`}
        alt={project.name}
      />
      <div className={styles.shadow}></div>
      <p className={styles.projectsItemText}>{project.name}</p>
    </Link>
  );
};

export default ProjectCard;
