import { Component } from 'react';
import styles from './SuccessNotification.module.css';

export default class SuccessNotification extends Component {
  render() {
    return (
      <div className={styles.success}>
        <div className={styles.success__header}>
          <span className={styles.success__icon} />
          <h4>Успешно!!!</h4>
        </div>
        <p className={styles.success__message}>{this.props.message}</p>
      </div>
    );
  }
}
