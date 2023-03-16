import { Component } from 'react';
import { InputField, Button, Modal, SuccessNotification } from '../index';
import styles from './Form.module.css';
import validateSurveyForm from '../../utilities/formValidation';

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

  checkValidation = (name, value) => {
    const message = validateSurveyForm(name, value);
    const formErrors = { ...this.state.formErrors };
    formErrors[name] = message;
    this.setState((prevState) => ({
      ...prevState,
      formErrors,
    }));
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
  };

  createMaskForPhone = (name, value) => {
    const val = value.replace(/\D/g, '');
    const nums = val.split('');
    const format = `${nums[0] ? nums[0] : ''}${nums[1] ? `-${nums[1]}` : ''}${
      nums[2] ? nums[2] : ''
    }${nums[3] ? nums[3] : ''}${nums[4] ? nums[4] : ''}${nums[5] ? `-${nums[5]}` : ''}${
      nums[6] ? nums[6] : ''
    }${nums[7] ? `-${nums[7]}` : ''}${nums[8] ? nums[8] : ''}${nums[9] ? nums[9] : ''}`;
    const formFields = { ...this.state.formFields };
    formFields[name] = format;
    this.setState((prevState) => ({
      ...prevState,
      formFields,
    }));
  };

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const formFields = { ...this.state.formFields };
    if (name === 'phone') {
      this.createMaskForPhone(name, value, formFields);
      // formFields.phone = value.replace(/(\d{1})(\d{4})(\d{2})(\d{2})/, '$1-$2-$3-$4');
      // this.setState((prevState) => ({
      //   ...prevState,
      //   formFields,
      // }));
    } else {
      formFields[name] = value;
      this.setState((prevState) => ({
        ...prevState,
        formFields,
      }));
    }
    this.setState({
      isDisabled: false,
    });
    this.checkValidation(name, value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.checkIsFormValid();
    if (this.state.isValid) {
      this.setState({
        isOpen: true,
      });
      document.body.style.overflow = 'hidden';
    } else {
      this.setState({
        isDisabled: true,
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
    } else {
      this.setState({
        isDisabled: true,
      });
    }
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
                error={this.state.formErrors[item.name]}
                isFormValid={this.state.isValid}
              />
            );
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
