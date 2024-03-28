describe('Table tests', () => {
  describe('New row', () => {
  it('create and find test', () => {
    cy.visit("")
    cy.contains("Tables & Data").click()
    cy.contains("Smart Table").click()
    cy.get(".ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted").click()
    cy.get('[ng-reflect-name="id"]').type('61')
    cy.get('[ng-reflect-name="firstName"]').type('Taras')
    cy.get('[ng-reflect-name="lastName"]').type('Shevchenko')
    cy.get('[ng-reflect-name="username"]').type('tshev')
    cy.get('[ng-reflect-name="email"]').type('tshev@gmail.com')
    cy.get('[ng-reflect-name="age"]').type('33')
    cy.get('.nb-checkmark').click()
    cy.contains("Smart Table").click()
    cy.get('[placeholder="E-mail"]').type('tshev@gmail.com').click()
    })
  })
})