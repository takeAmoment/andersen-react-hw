import { Component } from 'react';

export class Button extends Component {
  render() {
    const { buttonType, classname, disabled, text, onClick } = this.props;

    return (
      // eslint-disable-next-line react/button-has-type
      <button type={buttonType} className={classname} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  }
}
