import { Component } from 'react';

export default class Input extends Component {
  render() {
    const { item, handleChange, value } = this.props;
    return (
      <input
        type={item.inputType}
        placeholder={item.placeholder}
        name={item.name}
        onChange={handleChange}
        value={value}
      />
    );
  }
}
