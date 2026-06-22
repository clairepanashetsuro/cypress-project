// Paste this directly at the very top of your test file
Cypress.Commands.add('login', (email, password) => {
  cy.contains('Signup / Login').click();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

describe('User Authentication and Account Security Tests', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('TC-003: Login with Valid Credentials and Logout Flow', () => {
    const validEmail = 'testuser@example.com';
    const validPassword = 'SecurePassword123';

    cy.login(validEmail, validPassword);

    cy.contains('Logged in as').should('be.visible');
    cy.screenshot('logged-in-state');

    cy.contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('[data-qa="login-button"]').should('be.visible');
    cy.screenshot('logged-out-state');
  });

  it('TC-004: Login with Invalid Credentials', () => {
    const invalidEmail = 'wronguser@example.com';
    const invalidPassword = 'WrongPassword123';

    cy.login(invalidEmail, invalidPassword);

    cy.contains('incorrect', { matchCase: false }).should('be.visible');
    cy.screenshot('login-error-state');
  });
});
