import styles from "../styles/background.module.css";

const Background = () => {
  let bubbles = [];
  for (let i = 0; i < 40; ++i) {
    bubbles.push(
      <span
        style={{
          "--i":
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * (20 - 1 + 1) + 1),
        }}
        key={i}
      ></span>
    );
  }

  return (
    <div className={styles.bg}>
      <div className={styles.bubbles}>{bubbles}</div>
    </div>
  );
};

export default Background;
