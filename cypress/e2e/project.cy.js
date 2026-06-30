Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Automation Testing Practice - Comprehensive E2E Test Suite', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
    cy.screenshot('1-initial-page-load');
  });

  it('Should successfully interact with all form types, fields, file paths, and view triggers', () => {
    cy.get('#name').type('Jane Doe');
    cy.get('#email').type('jane.doe@example.com');
    cy.get('#phone').type('0987654321');
    cy.get('#textarea').type('456 Automation Avenue');
    cy.get('#name').should('have.value', 'Jane Doe');
    cy.screenshot('2-form-text-fields');

    cy.get('#female').check().should('be.checked');
    cy.screenshot('3-radio-selection');

    cy.get('#tuesday').check().should('be.checked');
    cy.get('#tuesday').uncheck().should('not.be.checked');
    cy.get('#sunday').check().should('be.checked');
    cy.screenshot('4-checkbox-toggles');

    cy.get('#country').select('Japan');
    cy.get('#country').find('option:selected').should('contain.text', 'Japan');
    cy.screenshot('5-dropdown-selection');

    cy.get('#colors').select('Red');

    cy.get('#datepicker').type('12/25/2026{enter}');

    cy.get('#singleFileInput').selectFile({
      contents: Cypress.Buffer.from('mock file content'),
      fileName: 'test_document.txt',
      mimeType: 'text/plain',
    });
    cy.screenshot('6-file-upload-action');

    cy.get('footer').scrollIntoView().should('be.visible');

    cy.screenshot('7-scroll-to-bottom');

    cy.get('.submit-btn').scrollIntoView().click({ force: true });

    cy.screenshot('8-final-submission-verification');
  });
});