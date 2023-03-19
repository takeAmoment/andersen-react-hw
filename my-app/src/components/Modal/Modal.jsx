import ReactDOM from 'react-dom';
import { Component } from 'react';
import styles from './Modal.module.css';
import { Button } from '../index';

const moduleRoot = document.getElementById('root');

export class Modal extends Component {
  render() {
    const { onClose, children } = this.props;

    return ReactDOM.createPortal(
      <div
        className={styles.modal}
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={onClose}
      >
        <div className={styles.modal__container}>
          {children}
          <Button classname={styles.modal__button} type="button" onClick={onClose} text="Close" />
        </div>
      </div>,
      moduleRoot
    );
  }
}
