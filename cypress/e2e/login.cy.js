describe('template spec', () => {

  beforeEach( () => {
    cy.visit('/')
  })

  const {
    email,
    pass,
  } = require("../fixtures/all.json");

  it ('test login', () => {
    cy.login(email,pass)
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
  })

  it ('test empty email', () => {
    cy.login(null,pass)
    cy.contains('have fun!').should('be.visible')
  })

  it ('test empty password', () => {
    cy.login(email, null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it ('test the window add new book', () => {
    cy.login(email,pass)
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible') 
    cy.get('.p-0 > .btn').click()
    cy.contains('Book description').should('be.visible') 
  })

  it ('test add new book', () => {
    cy.login(email,pass)
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible') 
    cy.get('.p-0 > .btn').click()
    cy.contains('Book description').should('be.visible') 
    cy.get('#title').type('Денискины рассказы')
    cy.get('#description').type('Рассказы для детей')
    cy.get('#authors').type('Виктор Драгунский')
    cy.get('.form-check-label').click()
    cy.get('#favorite').click()
    cy.get('form > .ml-2').click()
  })
})