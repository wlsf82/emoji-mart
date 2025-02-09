import React from 'react'
import { ThankYouPage } from './ThankYouPage'

describe('<ThankYouPage />', () => {
  it('renders with order number', () => {
    cy.mount(<ThankYouPage orderNumber='ABCDE12345' />)

    cy.contains('Order Number').should('be.visible')
    cy.contains('ABCDE12345').should('be.visible')
  })

  it('calls the Back to Store onClick function', () => {
    const spyFn = cy.spy().as('onBackToStoreSpyFn')

    cy.mount(<ThankYouPage orderNumber='ABCDE12345' onBackToStore={spyFn} />)

    cy.contains('button', 'Back to Store').click()

    cy.get('@onBackToStoreSpyFn').should('have.been.calledOnce')
  })
})