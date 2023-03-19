import { Component } from 'react';
import { Textarea, Input } from '../index';
import styles from './InputField.module.css';

export class InputField extends Component {
  render() {
    const { item, handleChange, value, classname } = this.props;
    return (
      <div
        className={
          classname === 'active' ? `${styles.input__field} ${styles.active}` : styles.input__field
        }
      >
        <label htmlFor={item.name} className={styles.field__label}>
          {item.label}
        </label>
        {item.type === 'input' ? (
          <Input item={item} handleChange={handleChange} value={value} />
        ) : (
          <Textarea item={item} handleChange={handleChange} value={value} />
        )}
      </div>
    );
  }
}
