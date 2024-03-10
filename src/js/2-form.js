const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const textarea = form.querySelector('textarea');

function updatedLocalStorage(event) {
  event.preventDefault();
  const message = textarea.value.trim();
  const email = form.elements.email.value.trim();
  const data = JSON.stringify({ message, email });
  localStorage.setItem(storageKey, data);
}
form.addEventListener('input', updatedLocalStorage);
const savedData = localStorage.getItem(storageKey);
if (savedData) {
  try {
    const data = JSON.parse(savedData);
    textarea.value = data.message;
    form.elements.email.value = data.email;
  } catch {
    console.log('No saved data');
  }
}
function formReset(event) {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  const message = textarea.value.trim();
  const email = form.elements.email.value.trim();
  if (email === '' || message === '') {
    alert('All form fields must be filled in');
  } else {
    const data = JSON.parse(savedData);
    console.log(data);
    form.reset();
  }
}
form.addEventListener('submit', formReset);
