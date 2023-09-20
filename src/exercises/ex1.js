
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  element.classList.add("text-danger")
}

addButton.addEventListener('click', addClassToElement);

module.exports = { addClassToElement }
 