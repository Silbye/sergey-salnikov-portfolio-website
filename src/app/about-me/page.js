import styles from "../styles/aboutme.module.css";
export default function AboutMe() {
  return (
    <section className={styles.aboutme}>
      <div className={`${styles.aboutmeContainer} container`}>
        <img
          className={styles.aboutmeImage}
          src="https://i.ibb.co/BHJ703z/laptop.png"
        ></img>
        <div className={styles.aboutmeInfo}>
          <h1>ABOUT ME</h1>
          <h2>Sergey Salnikov - Frontend Developer</h2>
          <p>
            Learning programming for 2 years now. <br />
            <br />
            Studying in the Moscow University of Finance and Law MFUA. Completed
            the "Developer - Frontend development" course on the GeekBrains
            platform. <br />
            <br />
            My hobbies include playing videogames, watching various sports,
            creating videos on YouTube.
          </p>
          <h3>
            Skills: HTML, CSS, JS, Vue.JS, REST API, Photoshop, Figma, Git,
            GitHub
          </h3>
        </div>
      </div>
    </section>
  );
}
