describe('Automation Testing Practice - Form Submission', () => {
  beforeEach(() => {
    cy.visit('https://blogspot.com');
  });

  it('Should successfully fill out and submit the data entry form', () => {
    cy.get('#name').type('Clae Nashe');
    cy.get('#email').type('claenashe@example.com');
    cy.get('#phone').type('1234567890');
    cy.get('#address').type('123 Test Street, Automation City');

    cy.get('#male').check().should('be.checked');

    cy.get('#monday').check().should('be.checked');
    cy.get('#friday').check().should('be.checked');

    cy.get('#country').select('Canada').should('have.value', 'canada');
    cy.get('#colors').select('Blue').should('have.value', 'blue');

    cy.get('#datepicker').type('06/30/2026{enter}').should('have.value', '06/30/2026');

    cy.screenshot('form-submission-verification');
  });
});
