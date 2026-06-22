describe('Cart Management Tests - Remove Product', () => {

  it('TC-008: Remove Product from Cart and Verify Empty State', () => {
    cy.visit('https://automationexercise.com'); 

    cy.contains('Products').click();

    cy.get('.productinfo a.add-to-cart').first().click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');

    cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);

    cy.get('.cart_quantity_delete').first().click();

    cy.get('#empty_cart').should('be.visible');
    cy.contains('Cart is empty!').should('be.visible');
    cy.get('#cart_info_table tbody tr').should('not.exist');

    cy.screenshot('empty-cart-page');
  });
});
