import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

//   formEmail: document.querySelector('.feedback-form [name="email"]'),
//   formMessage: document.querySelector('.feedback-form [name="message"]'),

const LOCALSTORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);

// refs.formMessage.addEventListener('input', handleEnter);
// refs.formSubmit.addEventListener('submit', submitEnter);
// refs.form.elements.email.value = localStorage.getItem(LOCALSTORAGE_KEY);
// refs.form.elements.message.value = localStorage.getItem(LOCALSTORAGE_KEY);
const cash = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedCash = JSON.parse(cash);

let formData = parsedCash;
if (parsedCash) {
  form.elements.email.value = parsedCash.email;
  form.elements.message.value = parsedCash.message;
}

function formInput(evt) {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  return (formData = data);
}
function formSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
}

// function submitEnter(evt) {
//   evt.preventDefault();
//   console.log('~ evt.Target;', evt.currentTarget);
//   console.log(evt.target(), '123123132123');
// }
// }
// event.currentTarget;
// event.currentTarget.elements.email.value;
// const form = document.querySelector('#message-form');
// const output = document.querySelector('#output');
// const LOCALSTORAGE_KEY = 'goit-example-message';

// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
// const refs = {
//   form: document.querySelector('.login-form'),
// };
// refs.form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('All fields must be filled');
//   }
//   const formData = {};
//   const getMail = event.currentTarget.elements.email.value;
//   const getPassword = event.currentTarget.elements.password.value;
//   formData.email = getMail;
//   formData.password = getPassword;
//   console.log(formData);
//   event.currentTarget.reset();
// }
