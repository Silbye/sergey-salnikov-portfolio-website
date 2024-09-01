import styles from "../styles/projects.module.css";
import ProjectCard from "@/app/components/ProjectCard";

export default async function Projects() {
  const res = await fetch(
    "https://projectsforportfolio-cd82.restdb.io/rest/projects",
    {
      headers: {
        "X-Apikey": "66d46681b1ce2734094e47a0",
      },
    }
  ).then((res) => res.json());

  const projects = res;

  return (
    <section className={styles.projects}>
      <div className={`${styles.projectsContainer} container`}>
        <h1 className={styles.projectsHeader}>Projects</h1>
        <div className={styles.projectsItems}>
          {projects.map((element) => (
            <ProjectCard project={element} />
          ))}
        </div>
      </div>
    </section>
  );
}
