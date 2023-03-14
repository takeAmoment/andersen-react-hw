export default function validateSurveyForm(type, value) {
  let message = '';
  switch (type) {
    case 'name':
      value.trim();
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.slice(0, 1) !== value.slice(0, 1).toUpperCase()) {
        message = 'The first letter must be capitalized';
      }
      break;
    case 'surname':
      value.trim();
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.slice(0, 1) !== value.slice(0, 1).toUpperCase()) {
        message = 'The first letter must be capitalized';
      }
      break;
    case 'dateOfBirthday':
      if (value.length === 0) {
        message = 'Please fill this field!';
      }
      break;
    case 'phone':
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.length >= 12) {
        message = 'Max length 12';
      } else if (!value.match(/[0-9]{3}-[0-9]{3}-[0-9]{3}/)) {
        message = 'Your number should be';
      }
      break;
    case 'site':
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (
        !value.match(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/
        )
      ) {
        message = 'Your link should be';
      }
      break;
    case 'about':
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.length >= 600) {
        message = 'Max length 600';
      }
      break;
    case 'technologies':
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.length >= 600) {
        message = 'Max length 600';
      }
      break;
    case 'project':
      if (value.length === 0) {
        message = 'Please fill this field!';
      } else if (value.length >= 600) {
        message = 'Max length 600';
      }
      break;
    default:
      return message;
  }
  return message;
}
