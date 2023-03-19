import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.header__container}>
        <a href="/" className={styles.header__logo}>
          <span className={styles.logo__icon} />
          <p className={styles.logo__text}>JobVey</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
