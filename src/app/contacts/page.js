import styles from "../styles/contacts.module.css";

export const metadata = {
  title: "Контакты",
  description: "Мои контакты",
};

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={`${styles.contactsContainer} container`}>
        <h1 className={styles.contactsHeader}>Контакты</h1>
        <ul className={styles.contactsList}>
          <li className={styles.contact}>
            <h1 className={styles.contactHeader}>Телефон:</h1>
            <p className={styles.contactData}>+7(968)-486-04-77</p>
          </li>
          <li className={styles.contact}>
            <h1 className={styles.contactHeader}>Telegram:</h1>
            <a href="https://t.me/sealthebee" className={styles.contactData}>
              @sealthebee
            </a>
          </li>
          <li className={styles.contact}>
            <h1 className={styles.contactHeader}>Email:</h1>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sergey.salnikov46@gmail.com"
              className={styles.contactData}
            >
              sergey.salnikov46@gmail.com
            </a>
          </li>
          <li className={styles.contact}>
            <h1 className={styles.contactHeader}>GitHub:</h1>
            <a href="https://github.com/Silbye" className={styles.contactData}>
              https://github.com/Silbye
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
