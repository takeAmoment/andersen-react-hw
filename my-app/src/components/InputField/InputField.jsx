import { Input, Textarea } from '../index';
import styles from './InputField.module.css';

export const InputField = ({ item, handleChange, value, classname, error, isShow }) => {
  return (
    <div
      className={
        classname === 'active' ? `${styles.input__field} ${styles.active}` : styles.input__field
      }
    >
      <label htmlFor={item.name} className={styles.field__label}>
        {item.label} <span className={styles.label__note}>*</span>
      </label>
      {item.type === 'input' ? (
        <Input item={item} handleChange={handleChange} value={value} />
      ) : (
        <>
          <Textarea item={item} handleChange={handleChange} value={value} />
          {!error && (
            <p className={styles.textarea__text}>Осталось {value.trim().length}/600 символов</p>
          )}
        </>
      )}
      <p className={styles.field__error}>{isShow ? error : ''}</p>
    </div>
  );
};
