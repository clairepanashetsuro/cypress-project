describe('verify that home page loads successfully', () => {
 it('passes', () => {

   
    cy.visit('https://automationexercise.com',)

    cy.get('img[src="/static/images/home/logo.png"]')
     .should('be.visible')

    cy.get('.shop-menu')
      .should('be.visible')

    cy.contains('a', 'Signup / Login')
      .should('be.visible')

    cy.screenshot('homepage-loaded-successfully');
  })
})
