import { Component } from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import styles from './Form.module.css';
import Modal from '../Modal/Modal';
import SuccessNotification from '../Notifications/SuccessNotification/SuccessNotification';

export default class Form extends Component {
  constructor(props) {
    super(props);
    const { initialState } = this.props;
    this.state = initialState;
  }

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      isOpen: true,
    });
  };

  onClose = (e) => {
    e.preventDefault();
    this.setState(this.props.initialState);
  };

  render() {
    const { formData } = this.props;
    return (
      <div className={styles.form__container}>
        <form onSubmit={this.handleSubmit}>
          {formData.map((item) => {
            return (
              <InputField
                key={item.id}
                item={item}
                handleChange={this.handleChange}
                value={this.state[item.name]}
              />
            );
          })}
          <Button
            buttonType="submit"
            classname={styles.form__submitButton}
            text="Submit"
            disabled={false}
          />
        </form>
        {this.state.isOpen && (
          <Modal onOpen={this.state.isOpen} onClose={this.onClose}>
            <SuccessNotification
              message={`${this.state.name}, you survay was saved!!`}
              name={this.state.name}
            />
          </Modal>
        )}
      </div>
    );
  }
}
