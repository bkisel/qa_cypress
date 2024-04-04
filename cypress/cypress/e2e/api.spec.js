import user from '../fixtures/user.json'
import article from '../fixtures/article.json'
describe('API tests', async() => {

it("API test",()=>{
    cy.request("POST","https://conduit-api.bondaracademy.com/api/users/login",user).then(response =>{
       const token = response.body.user.token
       cy.request({
        url:"https://conduit-api.bondaracademy.com/api/articles/",
        headers: {
          'Authorization': "Token "+token,
          "Content-Type": "application/json"
        },
        body: article,
        method: "POST"
      }).then(response=>{
        expect(response.status).to.equal(201)
      })
    })
  })
  it("Mocking",()=>{
    const tags = {
      "tags": [
          "Ilya",
          "Studigrad",
          "Cypress tests"
      ]
  }
        cy.intercept("GET","https://conduit-api.bondaracademy.com/api/tags",{"tags":[]})
        cy.visit("https://conduit.bondaracademy.com/login")
        cy.get('[placeholder="Email"]').type(user.user.email)
        cy.get('[placeholder="Password"]').type(user.user.password)
        cy.get('[type="submit"]').click()
})
})