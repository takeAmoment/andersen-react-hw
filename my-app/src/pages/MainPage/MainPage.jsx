import { Component } from 'react';
import { Form } from '../../components/index';
import styles from './MainPage.module.css';
import { initialState, surveyData } from '../../data/surveyData';
import Survey from '../../components/Survey/Survey';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState.formFields;
  }

  saveSurvey = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <main>
        <div className={styles.main__container}>
          {!this.state.name ? (
            <>
              <h1>Создание анкеты</h1>
              <Form
                initialState={initialState}
                formData={surveyData}
                saveSurvey={this.saveSurvey}
              />
            </>
          ) : (
            <Survey props={this.state} data={surveyData} />
          )}
        </div>
      </main>
    );
  }
}
