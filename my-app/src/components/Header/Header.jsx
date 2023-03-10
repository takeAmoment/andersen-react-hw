import { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className={styles.header__container}>
          <a href="/" className={styles.header__logo}>
            <p className={styles.logo__text}>JobVey</p>
          </a>
        </div>
      </header>
    );
  }
}
