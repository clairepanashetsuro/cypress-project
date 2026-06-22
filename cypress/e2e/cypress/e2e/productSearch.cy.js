describe('Product Search Tests', () => {

  it('TC-005: Search Product and Verify Results', () => {
    const searchTerm = 'dress';

    cy.visit('https://automationexercise.com'); 

    cy.contains('Products').click();
    cy.url().should('include', '/products');

    cy.get('input[id="search_product"]').type(searchTerm); 
    cy.get('button[id="submit_search"]').click();

    cy.contains('Searched Products').should('be.visible');
    cy.screenshot('search-results-page');

    cy.get('.product-image-wrapper').each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        expect(text.toLowerCase()).to.include(searchTerm);
      });
    });
  });
});
