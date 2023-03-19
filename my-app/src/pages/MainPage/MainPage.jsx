import { Component } from 'react';
import { Form } from '../../components/index';
import styles from './MainPage.module.css';
import { initialState, surveyData } from '../../data/surveyData';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <div className={styles.main__container}>
          <h1>Создание анкеты</h1>
          <Form initialState={initialState} formData={surveyData} />
        </div>
      </main>
    );
  }
}
