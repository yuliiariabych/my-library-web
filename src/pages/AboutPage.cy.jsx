import React from 'react'
import AboutPage from './AboutPage'
import { BrowserRouter } from 'react-router-dom'

describe('<AboutPage />', () => {
  it('renders correctly', () => {
    cy.mount(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    )

    cy.contains('My Library').should('be.visible')
    cy.contains('Про нас').should('be.visible')
  })
})