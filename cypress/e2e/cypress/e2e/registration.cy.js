describe('End-to-End: User Registration with Date Timestamp', () => {

  
  const uniqueTimestamp = Date.now();
  const email = `nashe_${uniqueTimestamp}@gmail.com`;
  
  const testName = 'Clae Panashe';
  const testPassword = 'claeNashy123';

  it('should register and delete the user using a timestamped email', () => {
    
    cy.visit('https://automationexercise.com');

    cy.contains('a', 'Signup / Login').click();

    
    cy.get("input[data-qa='signup-name']").type(testName);
    cy.get("input[data-qa='signup-email']").type(email); 
    cy.get("button[data-qa='signup-button']").click();

    cy.get('#id_gender1').check();
    cy.get('#password').type(testPassword);

    cy.get('#days').select('17');
    cy.get('#months').select('April');
    cy.get('#years').select('2001');

    
    cy.get('#first_name').type('QA');
    cy.get('#last_name').type('Student');
    cy.get('#address1').type('101 Automation Drive');
    cy.get('#country').select('United States');
    cy.get('#state').type('California');
    cy.get('#city').type('Los Angeles');
    cy.get('#zipcode').type('90001');
    cy.get('#mobile_number').type('+12135550199');

    cy.get("button[data-qa='create-account']").click();

    cy.get("h2[data-qa='account-created']")
      .should('be.visible')
      .and('contain.text', 'Account Created!');
    cy.screenshot('The account created is displayed');

    cy.get("a[data-qa='continue-button']").click();

    cy.get('.shop-menu', { timeout: 10000 }).should('be.visible');

    
    cy.contains(`Logged in as ${testName}`, { timeout: 10000 }).should('be.visible');
    

    
    cy.contains('a', 'Delete Account').click();

    
    cy.get("h2[data-qa='account-deleted']", { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Account Deleted!');
      
    cy.screenshot('The account deleted is displayed');

    
    cy.get("a[data-qa='continue-button']").click({ force: true });
  });
});
