describe('Challenge Suite - Add Multiple Products', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('TC-010: Add Multiple Products to Cart and Verify Presence', () => {
    cy.contains('Products').click();

    cy.get('.productinfo a.add-to-cart').eq(0).click();
    cy.get('.modal-content').should('be.visible');
    cy.contains('Continue Shopping').click();

    cy.get('.productinfo a.add-to-cart').eq(1).click();
    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').click();

    cy.url().should('include', '/view_cart');
    cy.get('#cart_info_table tbody tr').should('have.length.at.least', 2);
    cy.screenshot('multiple-products-cart');
  });
});
