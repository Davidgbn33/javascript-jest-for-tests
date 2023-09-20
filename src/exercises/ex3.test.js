/*  const { JSDOM } = require('jsdom');

 jest.setTimeout(10000);

 const dom = new JSDOM(`
 <!DOCTYPE html>
 <html>
 <body>
 <form id="email-form">
        <input type="text" id="email-input" placeholder="Enter your email">
        <button type="submit">Submit</button>
    </form>
    <p id="validation-message"></p>
</body>
</html>
 `)

 global.document = dom.window.document;
 global.window = dom.window;

 global.emailForm = document.querySelector("#email-form");
 global.emailInput = document.querySelector("#email-input");
 global.validationMessage = document.querySelector("#validation-message");
 
 import validateEmail from './ex3';

 Text(' validate vérification email', () => {

    validateEmail(email);



    expect()
 }) */