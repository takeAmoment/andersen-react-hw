import { Component } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

export default class InputField extends Component {
  render() {
    const { item, handleChange, value } = this.props;
    return (
      <div>
        <label htmlFor={item.name}>{item.label}</label>
        {item.type === 'input' ? (
          <Input item={item} handleChange={handleChange} value={value} />
        ) : (
          <Textarea item={item} handleChange={handleChange} value={value} />
        )}
      </div>
    );
  }
}
