// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('loginTests', (user, password,element,error) => {
    const inputUser = 'input[name="username"]'
    const inputPassword = 'input[name="password"]'
    password
    user
    if (user == "" && password == "") {
        cy.get(inputUser).clear()
        cy.get(inputPassword).clear()
        // user = 0
        // password = 0
    }else if(password == ""){
        cy.get(inputUser).clear().type(user)
        cy.get(inputPassword).clear();
        // password = 0
    }else if (user == "") {
        cy.get(inputUser).clear()
        cy.get(inputPassword).clear().type(password);  
        // user = 0
    }else {
        cy.get(inputUser).clear().type(user)
        cy.get(inputPassword).clear().type(password);
    }
    cy.get('.oxd-button').click()
    if( element == "p"){
        cy.get('p').contains(error)
    }else {
        cy.get('span').contains(error)
    }
 })

 
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })