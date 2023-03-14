export const initialState = {
  formFields: {
    name: '',
    surname: '',
    dateOfBirth: '',
    phone: '',
    about: '',
    site: '',
    technologies: '',
    project: '',
  },
  formErrors: {
    name: 'Please fill this field!',
    surname: 'Please fill this field!',
    dateOfBirth: 'Please fill this field!',
    phone: 'Please fill this field!',
    about: 'Please fill this field!',
    site: 'Please fill this field!',
    technologies: 'Please fill this field!',
    project: 'Please fill this field!',
  },
  isValid: true,
  isDisabled: false,
  isOpen: false,
  amountPerPage: 3,
  page: 0,
};

export const surveyData = [
  {
    id: 0,
    type: 'input',
    inputType: 'text',
    name: 'name',
    label: 'Имя:',
    placeholder: 'Введите ваше имя...',
  },
  {
    id: 1,
    type: 'input',
    inputType: 'text',
    name: 'surname',
    label: 'Фамилия:',
    placeholder: 'Введите вашу фамилию...',
  },
  {
    id: 2,
    type: 'input',
    inputType: 'date',
    name: 'dateOfBirth',
    label: 'Дата рождения:',
    placeholder: 'Введите дату рождения...',
  },
  {
    id: 3,
    type: 'input',
    inputType: 'tel',
    name: 'phone',
    label: 'Телефон:',
    placeholder: 'Введите ваш номер...',
  },
  {
    id: 4,
    type: 'input',
    inputType: 'text',
    name: 'site',
    label: 'Сайт:',
    placeholder: 'Введите сайт...',
  },
  {
    id: 5,
    type: 'textarea',
    inputType: 'textarea',
    name: 'about',
    label: 'О себе:',
    placeholder: 'Расскажите нам о себе...',
  },
  {
    id: 6,
    type: 'textarea',
    inputType: 'textarea',
    name: 'technologies',
    label: 'Стек технологий:',
    placeholder: 'Какие технологии вы используете?',
  },
  {
    id: 7,
    type: 'textarea',
    inputType: 'textarea',
    name: 'project',
    label: 'Описание последнего проекта:',
    placeholder: 'Опишите свой последний проект...',
  },
];
