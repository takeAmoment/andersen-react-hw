import { Component } from 'react';
import { InputField, TextareaField, Button, Modal, SuccessNotification } from '../index';
import styles from './Form.module.css';
import validateSurveyForm from '../../utilities/formValidation';
import createMaskForPhone from '../../utilities/createMaskForPhone';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;
  }

  findIndex = () => {
    const firstIndex = this.state.page * this.state.amountPerPage;
    let lastIndex = firstIndex + (this.state.amountPerPage - 1);
    if (lastIndex >= this.props.formData.length) {
      lastIndex = this.props.formData.length - 1;
    }
    return { firstIndex, lastIndex };
  };

  isActive = (index) => {
    const indices = this.findIndex();
    return index >= indices.firstIndex && index <= indices.lastIndex;
  };

  checkIsFormValid = () => {
    const { formData } = this.props;
    let isValid = true;
    const indices = this.findIndex();

    for (let i = indices.firstIndex; i <= indices.lastIndex; i += 1) {
      const { name } = formData[i];
      if (this.state.formErrors[name]) {
        isValid = false;
        break;
      }
    }
    this.setState({
      isValid,
    });
    if (isValid) {
      this.setState({
        isDisabled: false,
      });
    }
  };

  checkValidation = (name, value) => {
    const message = validateSurveyForm(name, value);
    const formErrors = { ...this.state.formErrors };
    formErrors[name] = message;
    this.setState((prevState) => ({
      ...prevState,
      formErrors,
    }));
  };

  createMask = (name, value) => {
    const format = createMaskForPhone(name, value);
    const formFields = { ...this.state.formFields };
    formFields[name] = format;
    this.setState((prevState) => ({
      ...prevState,
      formFields,
    }));
  };

  handleChange = async (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const formFields = { ...this.state.formFields };
    if (name === 'phone') {
      this.createMask(name, value, formFields);
    } else {
      formFields[name] = value;
      this.setState((prevState) => ({
        ...prevState,
        formFields,
      }));
    }
    await this.checkValidation(name, value);
    this.checkIsFormValid();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.isValid) {
      this.setState({
        isOpen: true,
      });
      document.body.style.overflow = 'hidden';
    } else {
      this.setState({
        isDisabled: true,
        isShow: true,
      });
    }
  };

  onClose = (e) => {
    e.preventDefault();
    this.props.saveSurvey(this.state.formFields);
    this.setState(this.props.initialState);
    document.body.style.overflow = 'auto';
  };

  getNextPage = async (e) => {
    e.preventDefault();
    await this.checkIsFormValid();
    if (this.state.isValid) {
      this.setState((prevState) => {
        return { page: prevState.page + 1 };
      });
      this.setState({
        isShow: false,
        isValid: false,
      });
    } else {
      this.setState({
        isDisabled: true,
        isShow: true,
      });
    }
  };

  getPrevPage = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page - 1 };
    });
    this.setState({
      isValid: true,
      isDisabled: false,
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.setState(this.props.initialState);
  };

  render() {
    const { formData } = this.props;
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
            const component =
              item.type === 'input' ? (
                <InputField
                  key={item.id}
                  item={item}
                  classname={this.isActive(index)}
                  handleChange={this.handleChange}
                  value={this.state.formFields[item.name]}
                  error={this.state.formErrors[item.name]}
                  isShow={this.state.isShow}
                />
              ) : (
                <TextareaField
                  key={item.id}
                  item={item}
                  classname={this.isActive(index)}
                  handleChange={this.handleChange}
                  value={this.state.formFields[item.name]}
                  error={this.state.formErrors[item.name]}
                  isShow={this.state.isShow}
                />
              );
            return component;
          })}
          {this.state.page < totalCount - 1 ? (
            <Button
              buttonType="button"
              classname={`${styles.form__button} ${styles.button_next}`}
              text="Вперед"
              disabled={this.state.isDisabled}
              onClick={this.getNextPage}
            />
          ) : (
            <div className={styles.buttons}>
              <Button
                buttonType="submit"
                classname={`${styles.form__button} ${styles.button_submit}`}
                text="Сохранить"
                disabled={this.state.isDisabled}
              />
              <Button
                buttonType="reset"
                classname={`${styles.form__button} ${styles.button_reset}`}
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
              message={`${this.state.formFields.name}, ваша анкета была сохранена!`}
              name={this.state.name}
            />
          </Modal>
        )}
      </div>
    );
  }
}
