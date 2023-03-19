import styles from './SuccessNotification.module.css';

const SuccessNotification = ({ message }) => {
  return (
    <div className={styles.success}>
      <div className={styles.success__header}>
        <span className={styles.success__icon} />
        <h4>Успешно!!!</h4>
      </div>
      <p className={styles.success__message}>{message}</p>
    </div>
  );
};

export default SuccessNotification;
