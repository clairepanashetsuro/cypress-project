describe('Product Details Tests', () => {

  it('TC-006: Verify First Product Details', () => {
    cy.visit('https://automationexercise.com'); 

    cy.contains('Products').click();
    
    cy.get('.choose > .nav > li > a').first().click();
    cy.url().should('include', '/product_details');

    cy.get('.product-information > h2').should('be.visible'); 
    cy.get('.product-information').contains('Category:').should('be.visible');
    cy.get('.product-information span span').should('be.visible'); 
    cy.get('.product-information').contains('Availability:').should('be.visible');
    cy.get('.product-information').contains('Condition:').should('be.visible');
    cy.get('.product-information').contains('Brand:').should('be.visible');

    cy.screenshot('product-details-page');
  });
});
