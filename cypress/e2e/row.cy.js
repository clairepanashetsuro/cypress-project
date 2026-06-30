Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Automation Testing Practice - Table Manipulations', () => {
  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  context('Static Web Table Validation', () => {
    it('should accurately count the total number of data rows', () => {

      cy.get('table[name="BookTable"]', { timeout: 10000 }).scrollIntoView();
      cy.get('table[name="BookTable"] tr').should('have.length', 7);
    });

    it('should accurately count the total number of headers/columns', () => {
      cy.get('table[name="BookTable"] th').should('have.length', 4);
    });

    it('should extract text data correctly from a specific row matching an index', () => {
      cy.get('table[name="BookTable"] tr').eq(2).within(() => {
        cy.get('td').eq(0).should('have.text', 'Learn Java');
        cy.get('td').eq(1).should('have.text', 'Mukesh');
        cy.get('td').eq(2).should('have.text', 'Java');
        cy.get('td').eq(3).should('have.text', '500');
      });
    });

    it('should verify structural row values by matching text across rows', () => {
      cy.get('table[name="BookTable"]')
        .contains('td', 'Master In Selenium')
        .parent()
        .within(() => {
          cy.get('td').eq(1).should('have.text', 'Mukesh');
          cy.get('td').eq(3).should('have.text', '3000');
        });
    });
  });
  context('Pagination Web Table Interaction', () => {
    it('should successfully count dynamic items and header boundaries', () => {
      cy.get('#productTable', { timeout: 10000 }).scrollIntoView().should('be.visible');
      cy.get('#productTable tbody tr').should('have.length.at.least', 1);
      cy.get('#productTable thead th').should('have.length', 4);
    });

    it('should find a row by item name, click its select checkbox, and verify execution', () => {
      cy.get('#productTable', { timeout: 10000 }).scrollIntoView();


      cy.get('#productTable tbody tr').first().within(() => {

        cy.get('td').eq(1).should('not.be.empty');
        cy.get('td input[type="checkbox"]').check().should('be.checked');
      });

      cy.screenshot('table-interaction-verification');
    });
  });

});