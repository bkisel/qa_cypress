import SearchPage from "../page-object/SearchPage"

describe('Search Tests', () => {
  const searchPage = new SearchPage();

  beforeEach(() => {
    searchPage.visit();
  });

  it('should search by ID', () => {
    searchPage.fillId('1');
  });

  it('should search by First Name', () => {
    searchPage.fillFirstName('John');
  });

  it('should search by Last Name', () => {
    searchPage.fillLastName('Doe');
  });

  it('should search by Username', () => {
    searchPage.fillUserName('@snow');
  });

  it('should search by Email', () => {
    searchPage.fillEmail('mdo@gmail.com');
  });

  it('should search by Age', () => {
    searchPage.fillAge('30');
  });
});

//Search test for new user
describe('Table tests', () => {
  const searchPage = new SearchPage()
  describe('New row', () => {
  it('Create user and find him by email', () => {
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
    searchPage.fillEmail('tshev@gmail.com')
    })
  })
})