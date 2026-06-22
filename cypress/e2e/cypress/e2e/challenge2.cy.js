describe('Challenge Suite - Verify Product Quantity', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('TC-011: Change Product Details Quantity and Verify in Cart', () => {
    cy.contains('Products').click();
    
    cy.get('.choose > .nav > li > a').first().click();
    cy.url().should('include', '/product_details');

    cy.get('#quantity').clear().type('3');
    cy.get('button.cart').click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').click();

    cy.url().should('include', '/view_cart');
    cy.get('.cart_quantity').first().should('contain.text', '3');
    cy.screenshot('quantity-3-verification');
  });
});
