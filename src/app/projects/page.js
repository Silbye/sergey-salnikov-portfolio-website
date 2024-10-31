import styles from "../styles/projects.module.css";
import ProjectCard from "@/app/components/ProjectCard";

export const metadata = {
  title: "Проекты",
};

export default async function Projects() {
  const res = await fetch(
    "https://projectsforportfolio-cd82.restdb.io/rest/projectsru",
    {
      headers: {
        "X-Apikey": "6722cf095c99dc22289ca821",
      },
    }
  ).then((res) => res.json());

  const projects = res.sort((a, b) => a.id - b.id);

  return (
    <section className={styles.projects}>
      <div className={`${styles.projectsContainer} container`}>
        <h1 className={styles.projectsHeader}>Проекты</h1>
        <div className={styles.projectsItems}>
          {projects.map((element) => (
            <ProjectCard project={element} />
          ))}
        </div>
      </div>
    </section>
  );
}
