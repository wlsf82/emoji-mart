import React from 'react'
import { SearchBar } from './SearchBar'

describe('<SearchBar />', () => {
  it('renders empty', () => {
    cy.mount(<SearchBar onChange={() => {}}/>)

    cy.get('input[type="text"][placeholder="Search emojis..."]')
      .should('be.visible')
      .and('have.value', '')
  })

  it('renders with a value', () => {
    cy.mount(<SearchBar value='rainbow' onChange={() => { }} />)

    cy.get('input[type="text"][placeholder="Search emojis..."]')
      .should('be.visible')
      .and('have.value', 'rainbow')
  })

  it('focus when clicking the input field', () => {
    cy.mount(<SearchBar value='' onChange={() => { }} />)

    cy.get('input[type="text"][placeholder="Search emojis..."]')
      .click()
      .should('be.focused')
  })
})
