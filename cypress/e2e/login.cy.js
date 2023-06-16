describe("Test login", { testIsolation: false }, () => {
    const wrongUser= 'ADMINISTRADOR';
    const wrongPass= 'PASSWORD';
    const user = 'Admin';
    const pass = 'admin123';
  it("Visitar pagina", () => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it.skip('User y Pass Incorrectos',()=>{
    cy.get('input[name=""]').clear()
    cy.get('input[name=""]').clear().type(wrongPass);
    cy.get('.oxd-button').click()
    cy.get('p').contains('Invalid credentials')
  })

  it.skip('Sin Password',()=>{
    cy.get('input[name=""]').clear().type(wrongUser);
    cy.get('.oxd-button').click()
    cy.get('span').contains('Required')
  })

  it.skip('Sin Usser',()=>{
    cy.get('input[name=""]').clear()
    cy.get('input[name=""]').clear().type(wrongPass);
    cy.get('.oxd-button').click()
    cy.get('span').contains('Required')
  })

  it.skip('Ambos campos vacios',()=>{
    cy.get('input[name=""]').clear()
    cy.get('input[name=""]').clear()
    cy.get('.oxd-button').click()
    cy.get('span').contains('Required').should('have.length', 1)
  })
  

  it("Completar Username", () => {
    cy.get('input[name=""]').type(user);
    cy.get('input[name=""]').type(pass);
    cy.get('.oxd-button')
  });
});