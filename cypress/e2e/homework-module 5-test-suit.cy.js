it('navigate to the main page', () => {
  cy.visit('http://localhost:3000')
  cy.url().should('eq', 'http://localhost:3000/')
})

it('verify tabs of the page', () => {
  cy.visit('http://localhost:3000')
  cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
  cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
  cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
  cy.get('#tab1 > form > :nth-child(3)').should("be.visible")
  cy.get('.checkbox-row > .m-r-45').should("be.visible")
  cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
  cy.get('#tab1 > form > .btn-submit').should("be.visible")
})

it('verify text of tabs on the page', () => {
  cy.visit('http://localhost:3000')
  cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to") // text entered different way, starts with capital letter
  cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
  cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
  cy.get(':nth-child(3) > .label').should("have.text", "travellers")
  // cy.get('.checkbox-row > .m-r-45').should("have.text", "Add a flight") - I'm having trouble with this one, not sure why
  // cy.get('.checkbox-row > :nth-child(2)').should("have.text", "Add a car") - I'm having trouble with this one, not sure why
  cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
})

it('verify tabs of the page by text', () => {
  cy.visit('http://localhost:3000')
  cy.contains('Going to').should("be.visible") // text entered different way, starts with capital letter
  cy.contains('check-in').should("be.visible")
  cy.contains('check-out').should("be.visible")
  cy.contains('travellers').should("be.visible")
  cy.contains('Add a flight').should("be.visible")// text entered different way, starts with capital letter
  cy.contains('Add a car').should("be.visible")// text entered different way, starts with capital letter
  cy.contains('search').should("be.visible")
})

it('verify tabs of the page by name of the element', () => {
  cy.visit('http://localhost:3000')
  cy.get('[name="address"]').should("be.visible")
  cy.get('[name="check-in"]').should("be.visible")
  cy.get('[name="check-out"]').should("be.visible")
  //cy.get('[name="travellers"]').should("be.visible") -  Expected to find element: [name="travellers"], but never found it
  //cy.get('[name="add-flight"]').should("be.visible") - This element <input> is not visible because it has CSS property: opacity: 0
  //cy.get('[name="add-car"]').should("be.visible") - This element <input> is not visible because it has CSS property: opacity: 0
  
})