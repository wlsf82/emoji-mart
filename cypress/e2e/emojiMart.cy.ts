describe('Emoji Mart App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the homepage with a list of emojis', () => {
    cy.get('h1').contains('EmojiMart');
    cy.get('input[placeholder="Search emojis..."]').should('exist');
    cy.get('.text-6xl').should('have.length', 6); // Assuming there are 6 emojis
  });

  it('should filter emojis based on search input', () => {
    cy.get('input[placeholder="Search emojis..."]').type('Rocket');
    cy.get('.text-6xl').should('have.length', 1);
    cy.get('.text-6xl').contains('🚀');
  });

  it('should add an emoji to the cart', () => {
    cy.get('.text-6xl').contains('😊').click();
    cy.get('button').contains('Add to Cart').click();
    cy.get('.p-2').click(); // Open cart
    cy.get('.text-4xl').contains('😊');
  });

  it('should remove an emoji from the cart', () => {
    cy.get('.text-6xl').contains('😊').click();
    cy.get('button').contains('Add to Cart').click();
    cy.get('.p-2').click(); // Open cart
    cy.get('.text-4xl').contains('😊');
    cy.get('button svg.lucide-trash2').click();
    cy.get('.text-center').contains('Your cart is empty');
  });

  it('should update the quantity of an emoji in the cart', () => {
    cy.get('.text-6xl').contains('😊').click();
    cy.get('button').contains('Add to Cart').click();
    cy.get('.p-2').click(); // Open cart
    cy.get('.text-4xl').contains('😊');
    cy.get('button svg.lucide-plus-circle').click();
    cy.get('.w-8').contains('2');
  });
});