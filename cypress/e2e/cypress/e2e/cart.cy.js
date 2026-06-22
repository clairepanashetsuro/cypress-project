describe('Cart Management Tests', () => {

  it('TC-007: Add Product to Cart and Verify Details', () => {
    cy.visit('https://automationexercise.com'); 

    cy.contains('Products').click();

    cy.get('.productinfo a.add-to-cart').first().click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');

    cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);

    cy.get('.cart_price').first().should('be.visible');
    cy.get('.cart_quantity').first().should('be.visible');

    cy.screenshot('cart-verification-page');
  });
});

