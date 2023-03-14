import { Component } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import styles from './InputField.module.css';

export default class InputField extends Component {
  render() {
    const { item, handleChange, value, classname, error, isFormValid } = this.props;
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
          <Textarea item={item} handleChange={handleChange} value={value} />
        )}
        <p className={styles.field__error}>{!isFormValid ? error : ''}</p>
      </div>
    );
  }
}
