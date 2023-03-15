export default function validateSurveyForm(type, fieldValue) {
  const value = fieldValue.trim();
  let message = '';
  switch (type) {
    case 'name':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.slice(0, 1) !== value.slice(0, 1).toUpperCase()) {
        message = 'Первая буква должна быть заглавной';
      } else if (!value.match(/[a-zа-я ]+$/iu)) {
        message = 'Допустимы только буквы';
      }
      break;
    case 'surname':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.slice(0, 1) !== value.slice(0, 1).toUpperCase()) {
        message = 'Первая буква должна быть заглавной';
      } else if (!value.match(/[a-zа-я ]+$/iu)) {
        message = 'Допустимы только буквы';
      }
      break;
    case 'dateOfBirthday':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      }
      break;
    case 'phone':
      console.log(value.length);
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.length > 12) {
        message = 'Допустимая длинна 12 символов';
      } else if (value.length < 12) {
        message = 'Не менее 9 цифр';
      }
      break;
    case 'site':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (
        !value.match(
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/
        )
      ) {
        message = 'Введите ссылку. Ссылка должна начинаться с https://';
      }
      break;
    case 'about':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.length > 600) {
        message = 'Превышен лимит символов в поле';
      }
      break;
    case 'technologies':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.length > 600) {
        message = 'Превышен лимит символов в поле';
      }
      break;
    case 'project':
      if (value.length === 0) {
        message = 'Поле пустое. Заполните пожалуйста';
      } else if (value.length > 600) {
        message = 'Превышен лимит символов в поле';
      }
      break;
    default:
      return message;
  }
  return message;
}
