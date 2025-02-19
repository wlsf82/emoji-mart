import React from 'react'
import { Cart } from './Cart'
import { CartProvider } from '../context/CartContext'

describe('<Cart />', () => {
  it('renders empty', () => {
    cy.mount(
      <CartProvider>
        <Cart onCheckout={() => {}} />
      </CartProvider>
    )

    cy.contains('p', 'Your cart is empty').should('be.visible')
  })
})
