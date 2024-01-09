describe('template spec', () => {

    beforeEach( () => {
      cy.visit('/')
    })
  
    const {
      email,
      pass,
    } = require("../fixtures/all.json");
  
   it('Add to favorite', () => { 
      cy.login(email,pass);
      cy.get('.d-flex');
      cy.contains('Delete from favorite').click();
      cy.contains('Add to favorite').click();
      cy.contains('Favorites').click();
      cy.contains('Денискины рассказы').should('be.visible');
    });
    
    it('Delete from favorite', () => {
      cy.login(email,pass);
      cy.get('.d-flex');
      cy.contains('Favorites').click();
      cy.contains('Delete from favorite').click();
      cy.contains('Please add some book to favorit on home page!').should('be.visible');
      cy.contains('Books list').click();
      cy.contains('Add to favorite').click();
    });
  })