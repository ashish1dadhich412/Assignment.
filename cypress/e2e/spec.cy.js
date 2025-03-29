describe('Chai - Yah Website Tests', () => {
  beforeEach(() => {
      cy.visit('https://pallavi-2410.github.io/Chai-iayah/index.html');
  });

  it('Should load the homepage', () => {
      cy.url().should('include', 'Chai-iayah');
      cy.get('h1').should('contain', 'Chai - Yah');
  });

  it('Should display the navigation menu', () => {
      cy.get('nav').should('be.visible');
      cy.contains('Chai').should('be.visible');
      cy.contains('Coffee').should('be.visible');
      cy.contains('Chat-pat').should('be.visible');
  });

  it('Should perform a search', () => {
      cy.get('input[type="text"]').type('Masala Chai{enter}');
      cy.url().should('include', 'search');
  });

  it('Should log in a user', () => {
      cy.contains('Hello,').click();
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Hello, testuser').should('be.visible');
  });

  it('Should add an item to the cart', () => {
      cy.contains('Add to Cart').first().click();
      cy.contains('Cart').click();
      cy.get('.cart-items').should('contain', 'Masala Chai');
  });
});
