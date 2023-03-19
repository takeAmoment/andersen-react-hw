import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Button from '../Button/Button';

const moduleRoot = document.getElementById('root');

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal} role="button" tabIndex={0} onClick={onClose} onKeyDown={onClose}>
      <div className={styles.modal__container}>
        {children}
        <Button classname={styles.modal__button} type="button" onClick={onClose} text="Закрыть" />
      </div>
    </div>,
    moduleRoot
  );
};

export default Modal;
