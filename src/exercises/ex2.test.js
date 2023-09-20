// Importez jsdom pour simuler un environnement DOM
const { JSDOM } = require('jsdom');

// Configuration minimale pour Jest
jest.setTimeout(10000); // Augmentez le délai d'attente si nécessaire

// Créez un DOM simulé
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <button id="click-me-button">Click Me</button>
      <div id="message"></div>
    </body>
  </html>
`);

// Exposez les objets globaux de jsdom dans le contexte global de Node.js
global.document = dom.window.document;
global.window = dom.window;
global.clickMeButton = document.getElementById('click-me-button');
global.message = document.getElementById('message');

// Importez la fonction que vous souhaitez tester
const { showMessage } = require('./ex2'); // Remplacez par le chemin de votre fichier

// Testez la fonction
test('should update the message when button is clicked', () => {
  // Appelez la fonction
  showMessage();

  // Vérifiez si le contenu de l'élément message a été mis à jour
  expect(message.textContent).toBe('message modifié');
});
