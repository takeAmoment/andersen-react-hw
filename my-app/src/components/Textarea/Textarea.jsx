import { Component } from 'react';

export class Textarea extends Component {
  render() {
    const { item, handleChange, value } = this.props;

    return (
      <textarea
        rows={7}
        placeholder={item.placeholder}
        name={item.name}
        id={item.id}
        onChange={handleChange}
        value={value}
      />
    );
  }
}
