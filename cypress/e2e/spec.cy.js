describe('Authentication and Database Testing', () => {
  it('Should sign up a new user', () => {
    cy.visit('http://127.0.0.1:3000/'); // Adjust URL accordingly
    cy.get('.lighten-3');
    cy.get('.lighten-3 > .grey');
    cy.get('.nav-wrapper');
    cy.get(':nth-child(5) > .grey-text').click();
    cy.get('#modal-signup > .modal-content');
    cy.get('#signup-email').type('test@example.com');
    cy.get('#signup-password').type('testuser123');
    cy.get('#signup-bio').type('This is a test bio');
    cy.get('#signup-form > .btn').click();

    cy.contains('Login to view guides').should('be.visible');
  });

  it('Should log in a user', () => {
    cy.visit('http://127.0.0.1:3000/');
    cy.get('.lighten-3');
    cy.get('.lighten-3 > .grey');
    cy.get('.nav-wrapper');
    cy.get(':nth-child(4) > .grey-text').click();
    cy.get('#modal-login > .modal-content');
    cy.get('#login-email').type('bagusnararya@gmail.com');
    cy.get('#login-password').type('12345678');
    cy.get('#login-form > .btn').click();

    cy.contains('Login to view guides').should('be.visible');
  });

  it('Should create a new guide', () => {
    cy.visit('http://127.0.0.1:3000/');
    cy.get('.lighten-3');
    cy.get('.lighten-3 > .grey');
    cy.get('.nav-wrapper');
    cy.get(':nth-child(4) > .grey-text').click();
    cy.get('#modal-login > .modal-content');
    cy.get('#login-email').type('bagusnararya@gmail.com');
    cy.get('#login-password').type('12345678');
    cy.get('#login-form > .btn').click();

    cy.get(':nth-child(3) > .grey-text').click();
    cy.get('#modal-create > .modal-content');
    cy.get('#title').type('test rule');
    cy.get('#content').type(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nam.'
    );
    cy.get('#create-form > .btn').click();
    cy.contains('test rule');
  });
});
