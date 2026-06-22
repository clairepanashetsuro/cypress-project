describe('Contact Us Tests', () => {

  it('TC-009: Submit Contact Us Form and Handle Dialog', () => {
    cy.visit('https://automationexercise.com'); 

    cy.contains('Contact us').click();
    cy.url().should('include', '/contact_us');

    cy.get('input[data-qa="name"]').type('Test User');
    cy.get('input[data-qa="email"]').type('testuser@example.com');
    cy.get('input[data-qa="subject"]').type('Support Request');
    cy.get('textarea[data-qa="message"]').type('This is an automated test message.');

    cy.get('input[name="upload_file"]').selectFile({
      contents: Cypress.Buffer.from('test file content'),
      fileName: 'testfile.txt',
      mimeType: 'text/plain',
    });

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Press OK to proceed');
      return true;
    });

    cy.get('input[data-qa="submit-button"]').click();

    cy.get('.status.alert.alert-success').should('be.visible');
    cy.get('.status.alert.alert-success').should('contain', 'Success! Your details have been submitted successfully.');
    
    cy.screenshot('contact-form-success');
  });
});
