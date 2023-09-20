const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail(email) {
  const Regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return Regex.test(email);
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value;

  if (validateEmail(email)) {
    validationMessage.textContent = 'email is valid';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'email is not valid';
    validationMessage.style.color = 'red';
  }
});

module.exports = validateEmail;