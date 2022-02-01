import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);

let formData = { email: '', message: '' };
if (localStorage[LOCALSTORAGE_KEY]) {
  formData = JSON.parse(localStorage[LOCALSTORAGE_KEY]);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

function formInput() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  return (formData = data);
}

function formSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
}
