describe('User Authentication Tests - Negative', () => {
  
  it('TC-004: Login with Invalid Credentials', () => {
    const invalidEmail = 'wronguser@example.com';
    const invalidPassword = 'WrongPassword123';

    cy.visit('https://automationexercise.com'); 

    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');

    cy.get('input[data-qa="login-email"]').type(invalidEmail); 
    cy.get('input[data-qa="login-password"]').type(invalidPassword);

    cy.get('button[data-qa="login-button"]').click();

    cy.contains('incorrect', { matchCase: false }).should('be.visible');
    cy.screenshot('login-error-state');
  });
});
