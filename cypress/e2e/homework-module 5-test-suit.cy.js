///<reference types = "cypress"/>

it('verify tabs of the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Hotels"]').should("be.visible")
    cy.get('[data-cy="Car"]').should("be.visible")
    cy.get('[data-cy="Flight"]').should("be.visible")
  })

  it('verify text of tabs of the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
    cy.get('[data-cy="Car"]').should("have.text", "car")
    cy.get('[data-cy="Flight"]').should("have.text", "flight")

  })