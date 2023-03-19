import { Component } from 'react';
import styles from '../InputField.module.css';
import { Textarea } from '../../index';

export class TextareaField extends Component {
  render() {
    const { item, handleChange, value, classname, error, isShow } = this.props;

    return (
      <div className={classname ? `${styles.input__field} ${styles.active}` : styles.input__field}>
        <label htmlFor={item.name} className={styles.field__label}>
          {item.label} <span className={styles.label__note}>*</span>
        </label>
        <Textarea item={item} handleChange={handleChange} value={value} />
        {!isShow && (
          <p className={styles.textarea__text}>Осталось {value.trim().length}/600 символов</p>
        )}
        <p className={styles.field__error}>{isShow ? error : ''}</p>
      </div>
    );
  }
}
