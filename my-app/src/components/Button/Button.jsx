import { Component } from 'react';

export default class Button extends Component {
  render() {
    const { buttonType, classname, disabled, text, onClick } = this.props;
    return (
      <button
        type={buttonType === 'submit' ? 'submit' : 'button'}
        className={classname}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
