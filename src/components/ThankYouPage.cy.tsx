import React from 'react'
import { ThankYouPage } from './ThankYouPage'

describe('<ThankYouPage />', () => {
  it('renders with order number', () => {
    cy.mount(<ThankYouPage orderNumber='ABCDE12345' />)

    cy.contains('h1', 'Thank You for Your Purchase!').should('be.visible')
    cy.contains('p', `Your order has been successfully placed. We've sent a confirmation email with your order details.`)
      .should('be.visible')
    cy.contains('Order Number').should('be.visible')
    cy.contains('ABCDE12345').should('be.visible')
  })

  it('calls the Back to Store onClick function', () => {
    const spyFn = cy.spy().as('onBackToStoreSpyFn')

    cy.mount(<ThankYouPage orderNumber='ABCDE12345' onBackToStore={spyFn} />)

    cy.contains('button', 'Back to Store')
      .should('be.visible')
      .click()

    cy.get('@onBackToStoreSpyFn').should('have.been.calledOnce')
  })
})