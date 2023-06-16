describe("Test login", { testIsolation: false }, () => {
    const wrongUser= 'ADMINISTRADOR';
    const wrongPass= 'PASSWORD';
    const empty = "";
    const elementP = "p"
    const user = 'Admin';
    const pass = 'admin123';
    const invalidMessage = 'Invalid credentials'
    const requireMessage = 'Required'
  it("Visitar pagina", () => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it('User y Pass Incorrectos',()=>{
    // cy.get('input[name="username"]').clear().type(wrongUser)
    // cy.get('input[name="password"]').clear().type(wrongPass);
    // cy.get('.oxd-button').click()
    // cy.get('p').contains('Invalid credentials')
    cy.loginTests(wrongUser,wrongPass,elementP,invalidMessage)
  })

  it('Sin Password',()=>{
    // cy.get('input[name="username"]').clear().type(wrongUser);
    // cy.get('.oxd-button').click()
    // cy.get('span').contains('Required')
    cy.loginTests(wrongUser,empty,empty,requireMessage)
  })

  it('Sin Usser',()=>{
    // cy.get('input[name="username"]').clear()
    // cy.get('input[name="password"]').clear().type(wrongPass);
    // cy.get('.oxd-button').click()
    // cy.get('span').contains('Required')
    cy.loginTests(empty,wrongPass,empty,requireMessage)
  })

  it('Ambos campos vacios',()=>{
    // cy.get('input[name="username"]').clear()
    // cy.get('input[name="password"]').clear()
    // cy.get('.oxd-button').click()
    // cy.get('span').contains('Required').should('have.length', 1)
    cy.loginTests(empty,empty,empty,requireMessage)
  })
  


});