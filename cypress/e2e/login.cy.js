describe('template spec', () => {

  beforeEach( () => {
    cy.visit('/')

  })

  it ('test login', () => {
    cy.login('bropet@mail.ru','123')
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
  })

  it ('test empty email', () => {
    cy.login(null,'123')
    cy.contains('have fun!').should('be.visible')
  })

  it ('test empty password', () => {
    cy.login('bropet@mail.ru', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it ('test the window add new book', () => {
    cy.login('bropet@mail.ru','123')
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible') 
    cy.get('.p-0 > .btn').click()
    cy.contains('Book description').should('be.visible') 
  })

  it('test add new book', () => {
    cy.login('bropet@mail.ru','123')
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

  it ('test delite from favorite', () => {
    cy.login('bropet@mail.ru','123')
    cy.get('[href="book/cceec804-6561-4e75-9915-8d4ac309228b"] > .h-100 > .card-body')
    cy.get('[href="book/cceec804-6561-4e75-9915-8d4ac309228b"] > .h-100 > .card-footer > .btn').click()
    cy.contains('Add to favorite').should('be.visible')
  })
})