import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>©2023 Created by Aliaksandra Piakhota</p>
      </div>
    </footer>
  );
};
