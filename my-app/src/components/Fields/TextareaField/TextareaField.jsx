import { Textarea } from '../../index';
import styles from '../InputField.module.css';

export const TextareaField = ({ item, handleChange, value, classname, error, isShow }) => {
  const showMessage = () => {
    if (!error) {
      return true;
    }
    if (!isShow) {
      return true;
    }
    return false;
  };

  return (
    <div className={classname ? `${styles.input__field} ${styles.active}` : styles.input__field}>
      <label htmlFor={item.name} className={styles.field__label}>
        {item.label} <span className={styles.label__note}>*</span>
      </label>
      <Textarea item={item} handleChange={handleChange} value={value} />
      {showMessage() && (
        <p className={styles.textarea__text}>Осталось {600 - value.trim().length}/600 символов</p>
      )}
      <p className={styles.field__error}>{isShow ? error : ''}</p>
    </div>
  );
};
