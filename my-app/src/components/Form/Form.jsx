import { Component } from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import styles from './Form.module.css';
import Modal from '../Modal/Modal';
import SuccessNotification from '../Notifications/SuccessNotification/SuccessNotification';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;
  }

  findIndex = () => {
    const firstIndex = this.state.page * this.state.amountPerPage;
    const lastIndex = firstIndex + (this.state.amountPerPage - 1);
    return { firstIndex, lastIndex };
  };

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const formFields = { ...this.state.formFields };
    formFields[name] = value;
    this.setState((prevState) => ({
      ...prevState,
      formFields,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.formFields);
    this.setState({
      isOpen: true,
    });
    document.body.style.overflow = 'hidden';
  };

  onClose = (e) => {
    e.preventDefault();
    this.setState(this.props.initialState);
    document.body.style.overflow = 'auto';
  };

  getNextPage = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  getPrevPage = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page - 1 };
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.setState(this.props.initialState);
  };

  render() {
    const { formData } = this.props;
    const indices = this.findIndex();
    const totalCount = Math.ceil(formData.length / this.state.amountPerPage);
    return (
      <div className={styles.form__container}>
        <div className={styles.form__info}>
          {this.state.page > 0 && (
            <button
              type="button"
              aria-label="previous"
              onClick={this.getPrevPage}
              className={styles.info__icon}
            />
          )}
          <p className={styles.info__text}>
            Шаг <span>{this.state.page + 1}</span> из {totalCount}
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          {formData.map((item, index) => {
            return (
              <InputField
                key={item.id}
                item={item}
                classname={
                  index >= indices.firstIndex && index <= indices.lastIndex ? 'active' : ''
                }
                handleChange={this.handleChange}
                value={this.state.formFields[item.name]}
              />
            );
          })}
          {this.state.page < totalCount - 1 ? (
            <Button
              buttonType="button"
              classname={styles.form__nextButton}
              text="Вперед"
              disabled={false}
              onClick={this.getNextPage}
            />
          ) : (
            <div className={styles.buttons}>
              <Button
                buttonType="submit"
                classname={styles.form__submitButton}
                text="Сохранить"
                disabled={false}
              />
              <Button
                buttonType="reset"
                classname={styles.form__resetButton}
                text="Отмена"
                disabled={false}
                onClick={this.reset}
              />
            </div>
          )}
        </form>
        {this.state.isOpen && (
          <Modal onOpen={this.state.isOpen} onClose={this.onClose}>
            <SuccessNotification
              message={
                this.state.formFields.name
                  ? `${this.state.formFields.name}, you survay was saved!`
                  : 'Friend, your survay was saved!'
              }
              name={this.state.name}
            />
          </Modal>
        )}
      </div>
    );
  }
}
