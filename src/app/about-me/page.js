import styles from "../styles/aboutme.module.css";

export const metadata = {
  title: "Обо мне",
};

export default function AboutMe() {
  return (
    <section className={styles.aboutme}>
      <div className={`${styles.aboutmeContainer} container`}>
        <img
          className={styles.aboutmeImage}
          src="https://i.ibb.co/BHJ703z/laptop.png"
        ></img>
        <div className={styles.aboutmeInfo}>
          <h1>ОБО МНЕ</h1>
          <h2>Сергей Сальников - Frontend Разработчик</h2>
          <p>
            Изучаю программирование уже 2 года. <br />
            <br />
            Учусь в Московском финансово-юридическом университете МФЮА. Закончил
            курс "Разработчик - Frontend разработка" на платформе GeekBrains.
            <br />
            <br />
            Люблю играть в видеоигры, смотреть различные спортивные
            соревнования, и выкладывать ролики на YouTube.
          </p>
          <h3>
            Навыки: HTML, CSS, SCSS, JavaScript, TypeScript, Vue.JS, React.JS,
            Next.JS, REST API, Photoshop, Figma, Git, GitHub, Docker
          </h3>
        </div>
      </div>
      <div className={styles.aboutme__certificate}>
        <img src="certificate.png" />
      </div>
    </section>
  );
}
