const form = document.querySelector(`.feedback-form`);
const storageKey = 'feedback-form-state';
const textarea = form.querySelector('textarea');

function formSubmitHandler(event) {
  event.preventDefault();
  const message = textarea.value.trim();
  const email = form.elements.email.value.trim();
  const data = JSON.stringify({ message, email });
  localStorage.setItem(storageKey, data);
}
form.addEventListener('input', formSubmitHandler);
const jsn = localStorage.getItem(storageKey) ?? '';
try {
  const data = JSON.parse(jsn);
  console.log(data);
  textarea.value = data.message;
  form.elements.email.value = data.email;
} catch {
  console.log('No saved data');
}
function formReset(event) {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  form.reset();
  const message = textarea.value.trim();
  const email = form.elements.email.value.trim();
  if (email === '' || message === '') {
    alert('All form fields must be filled in');
  }
}
form.addEventListener('submit', formReset);
