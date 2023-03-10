/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import styles from './Form.module.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;
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
      </div>
    );
  }
}
