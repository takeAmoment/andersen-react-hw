import { useState } from 'react';
import Form from '../../components/Form/Form';
import styles from './MainPage.module.css';
import { initialState, surveyData } from '../../data/surveyData';
import Survey from '../../components/Survey/Survey';

const MainPage = () => {
  const [formFields, setFormFields] = useState(initialState.formFields);

  const saveSurvey = (data) => {
    setFormFields(data);
  };

  return (
    <main>
      <div className={styles.main__container}>
        {!formFields.name ? (
          <>
            <h1>Создание анкеты</h1>
            <Form initialState={initialState} formData={surveyData} saveSurvey={saveSurvey} />
          </>
        ) : (
          <Survey props={formFields} data={surveyData} />
        )}
      </div>
    </main>
  );
};

export default MainPage;
