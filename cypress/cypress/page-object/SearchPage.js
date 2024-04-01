class SearchPage {
    visit() {
        cy.visit("")
        cy.contains("Tables & Data").click()
        cy.contains("Smart Table").click()
    }
  
    fillId(id) {
        cy.get('[placeholder="ID"]').type(id);
    }
  
    fillFirstName(firstname) {
        cy.get('[placeholder="First Name"]').type(firstname);
    }

    fillLastName(lastname) {
        cy.get('[placeholder="Last Name"]').type(lastname);
    }

    fillUserName(username) {
        cy.get('[placeholder="Username"]').type(username);
     }

    fillEmail(email) {
        cy.get('[placeholder="E-mail"]').type(email);
    }

    fillAge(age) {
        cy.get('[placeholder="Age"]').type(age);
    }  
  
    search(id, firstname, lastname, username, email, age) {
      this.visit();
      this.fillId(id);
      this.fillFirstName(firstname);
      this.fillLastName(lastname);
      this.fillUserName(username);
      this.fillEmail(email);
      this.fillAge(age);
    }
  }
  
  export default SearchPage;
  