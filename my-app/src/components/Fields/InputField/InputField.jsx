import { Input } from '../../index';
import styles from '../InputField.module.css';

export const InputField = ({ item, handleChange, value, classname, error, isShow }) => {
  return (
    <div className={classname ? `${styles.input__field} ${styles.active}` : styles.input__field}>
      <label htmlFor={item.name} className={styles.field__label}>
        {item.label} <span className={styles.label__note}>*</span>
      </label>
      <Input item={item} handleChange={handleChange} value={value} />
      <p className={styles.field__error}>{isShow ? error : ''}</p>
    </div>
  );
};
