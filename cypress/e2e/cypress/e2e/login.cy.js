describe('User Authentication Tests', () => {
  
  it('TC-003: Login with Valid Credentials and Logout Flow', () => {
    const validEmail = 'Nashee@gmail.com';
    const validPassword = 'claeNashy1234';

    cy.visit('https://automationexercise.com'); 

    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');

    cy.get('input[data-qa="login-email"]').type(validEmail); 
    cy.get('input[data-qa="login-password"]').type(validPassword);

    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('be.visible');
    cy.screenshot('logged-in-state');

    cy.contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('button[data-qa="login-button"]').should('be.visible');
    cy.screenshot('logged-out-state');
  });
});
