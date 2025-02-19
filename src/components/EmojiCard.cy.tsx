import React from 'react'
import { CartProvider } from '../context/CartContext'
import { EmojiCard } from './EmojiCard'

describe('<EmojiCard />', () => {
  const emoji = {
      id: '999',
      symbol: '💀',
      name: 'Skull',
      description: 'A whitish-gray, cartoon-styled human skull with large, black eye sockets.',
      price: 999.99,
      category: 'Halloween',
  }

  beforeEach(() => {
    const spyFn = cy.spy().as('onAddToCartMock')

    cy.mount(
      <CartProvider>
        <EmojiCard emoji={emoji} onClick={spyFn} />
      </CartProvider>
    )
  })

  it('renders', () => {
    cy.get('[data-testid="emoji-card"')
      .as('emojiCard')
      .should('contain', '💀')
      .and('be.visible')
    cy.get('@emojiCard').within(() => {
      cy.contains('h3', 'Skull').should('be.visible')
      cy.contains('p', 'A whitish-gray, cartoon-styled human skull with large, black eye sockets.')
        .should('be.visible')
      cy.contains('span', '$999.99').should('be.visible')
      cy.contains('button', 'Add to Cart')
        .should('be.visible')
        .find('svg.lucide-shopping-cart')
        .should('be.visible')
    })
  })
})
