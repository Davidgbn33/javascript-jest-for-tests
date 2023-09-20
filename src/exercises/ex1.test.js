// import jsdom pour simuler le un environnement DOM
const {JSDOM } =require('jsdom');

jest.setTimeout(10000);
/* 
création d'un DOM  */

const dom = new JSDOM(`
<!DOCTYPE html>
  <html>
    <body>
    <button id="add-class-button">Add Class</button>
    <div id="element" class="initial-class">essais</div>
    </body>
  </html>
`)

/* EXpo sez les objets globaux de jsdom dans le contexte global de node js */

global.document = dom.window.document;
global.window = dom.window;
global.addClassButton = document.getElementById("add-class-button");
global.element = document.getElementById('element');

const { addClassToElement } = require('./ex1');

test(' add class in the div with id = element', () => {

    addClassToElement();

    expect(element.classList.contains('text-danger')).toBe(true)
}); 