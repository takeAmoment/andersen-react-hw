import { useEffect, useState } from 'react';
import { Button, InputField, Modal, SuccessNotification, TextareaField } from '../index';
import styles from './Form.module.css';
import validateSurveyForm from '../../utilities/formValidation';
import createMaskForPhone from '../../utilities/createMaskForPhone';
import useIndices from '../../hooks/useIndices';

export const Form = ({ initialState, formData, saveSurvey }) => {
  const [formFields, setFormFields] = useState(initialState.formFields);
  const [formErrors, setFormErrors] = useState(initialState.formErrors);
  const [formInfo, setFormInfo] = useState(initialState.formInfo);
  const totalCount = Math.ceil(formData.length / formInfo.amountPerPage);
  const indices = useIndices(formInfo.page, formInfo.amountPerPage, formData);

  const checkIsValid = () => {
    let isValid = true;
    for (let i = indices.firstIndex; i <= indices.lastIndex; i += 1) {
      const { name } = formData[i];
      if (formErrors[name]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  useEffect(() => {
    const isValid = checkIsValid();
    if (isValid) {
      setFormInfo((prevState) => ({
        ...prevState,
        isDisabled: false,
        isValid: true,
      }));
    } else {
      setFormInfo((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    }
  }, [formErrors, formInfo.isValid]);

  const checkIsActive = (index) => {
    return index >= indices.firstIndex && index <= indices.lastIndex;
  };

  const checkValidation = (name, value) => {
    const message = validateSurveyForm(name, value);
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: message,
    }));
  };

  const createMask = (name, value) => {
    const format = createMaskForPhone(value);
    setFormFields((prevState) => ({
      ...prevState,
      [name]: format,
    }));
  };

  const handleChange = async (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'phone') {
      createMask(name, value);
    } else {
      setFormFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    checkValidation(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formInfo.isValid) {
      setFormInfo((prevState) => ({
        ...prevState,
        isOpen: true,
      }));
      document.body.style.overflow = 'hidden';
    } else {
      setFormInfo((prevState) => ({
        ...prevState,
        isDisabled: true,
        isShow: true,
      }));
    }
  };

  const onClose = (e) => {
    e.preventDefault();
    saveSurvey(formFields);
    setFormFields(initialState.formFields);
    setFormErrors(initialState.formErrors);
    setFormInfo(initialState.formInfo);
    document.body.style.overflow = 'auto';
  };

  const getNextPage = async (e) => {
    e.preventDefault();
    if (formInfo.isValid) {
      setFormInfo({
        ...formInfo,
        isShow: false,
        isValid: false,
        page: formInfo.page + 1,
      });
    } else {
      setFormInfo((prevState) => ({
        ...prevState,
        isDisabled: true,
        isShow: true,
      }));
    }
  };

  const getPrevPage = (e) => {
    e.preventDefault();
    setFormInfo((prevState) => ({
      ...prevState,
      isValid: true,
      isDisabled: false,
      page: prevState.page - 1,
    }));
  };

  const reset = (e) => {
    e.preventDefault();
    setFormFields(initialState.formFields);
    setFormErrors(initialState.formErrors);
    setFormInfo(initialState.formInfo);
  };

  return (
    <div className={styles.form__container}>
      <div className={styles.form__info}>
        {formInfo.page > 0 && (
          <button
            type="button"
            aria-label="previous"
            onClick={getPrevPage}
            className={styles.info__icon}
          />
        )}
        <p className={styles.info__text}>
          Шаг <span>{formInfo.page + 1}</span> из {totalCount}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => {
          const component =
            item.type === 'input' ? (
              <InputField
                key={item.id}
                item={item}
                classname={checkIsActive(index)}
                handleChange={handleChange}
                value={formFields[item.name]}
                error={formErrors[item.name]}
                isShow={formInfo.isShow}
              />
            ) : (
              <TextareaField
                key={item.id}
                item={item}
                classname={checkIsActive(index)}
                handleChange={handleChange}
                value={formFields[item.name]}
                error={formErrors[item.name]}
                isShow={formInfo.isShow}
              />
            );
          return component;
        })}
        {formInfo.page < totalCount - 1 ? (
          <Button
            buttonType="button"
            classname={`${styles.form__button} ${styles.button_next}`}
            text="Вперед"
            disabled={formInfo.isDisabled}
            onClick={getNextPage}
          />
        ) : (
          <div className={styles.buttons}>
            <Button
              buttonType="submit"
              classname={`${styles.form__button} ${styles.button_submit}`}
              text="Сохранить"
              disabled={formInfo.isDisabled}
            />
            <Button
              buttonType="reset"
              classname={`${styles.form__button} ${styles.button_reset}`}
              text="Отмена"
              disabled={false}
              onClick={reset}
            />
          </div>
        )}
      </form>
      {formInfo.isOpen && (
        <Modal onOpen={formInfo.isOpen} onClose={onClose}>
          <SuccessNotification message={`${formFields.name}, ваша анкета была сохранена!`} />
        </Modal>
      )}
    </div>
  );
};
