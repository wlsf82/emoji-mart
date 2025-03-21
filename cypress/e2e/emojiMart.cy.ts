describe('Emoji Mart App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of emojis at the homepage', () => {
    cy.get('h1').contains('EmojiMart');
    cy.get('input[placeholder="Search emojis..."]').should('be.visible');
    cy.get('[data-testid="emoji-card"]')
      .should('have.length', 6) // Assuming there are 6 emojis
      .and('be.visible');
  });

  it('filters emojis based on search input', () => {
    cy.get('input[placeholder="Search emojis..."]').type('Rocket');

    cy.get('[data-testid="emoji-card"]').should('have.length', 1);
    cy.get('[data-testid="emoji-card"]')
      .contains('🚀')
      .should('be.visible');
  });

  it('adds an emoji to the cart', () => {
    cy.get('[data-testid="emoji-card"]').contains('😊').click();

    cy.contains('button', 'Add to Cart').click();
    cy.get('.lucide-shopping-cart').click(); // Open cart

    cy.get('[data-testid="cart-item"]')
      .contains('😊')
      .should('be.visible');
  });

  it('removes an emoji from the cart', () => {
    cy.get('[data-testid="emoji-card"]').contains('😊').click();
    cy.contains('button', 'Add to Cart').click();
    cy.get('.lucide-shopping-cart').click(); // Open cart

    cy.get('[data-testid="cart-item"]')
      .contains('😊')
      .should('be.visible');

    cy.get('button svg.lucide-trash2').click();

    cy.get('[data-testid="empty-cart"]')
      .contains('Your cart is empty')
      .should('be.visible');
  });

  it('updates the quantity of an emoji in the cart', () => {
    cy.get('[data-testid="emoji-card"]')
      .contains('😊')
      .click();
    cy.contains('button', 'Add to Cart').click();
    cy.get('.lucide-shopping-cart').click(); // Open cart

    cy.get('[data-testid="cart-item"]')
      .contains('😊')
      .should('be.visible');

    cy.get('button svg.lucide-plus-circle').click();

    cy.get('[data-testid="cart-item-counter"]')
      .contains('2')
      .should('be.visible');
  });
});
