const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = "message modifié"
}

clickMeButton.addEventListener('click', showMessage);

module.exports = { showMessage }