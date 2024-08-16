/// <reference types="cypress" />

describe('Cadastro de usuário na Amazon', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com.br')
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#createAccountSubmit').click()
  })

  it('CT01- Preencher uma conta com informações válidas', () => {
    cy.get('#ap_customer_name').type('Teste')
    cy.get('#ap_email').type('teste@example.com')
    cy.get('#ap_password').type('senha123')
    cy.get('#ap_password_check').type('senha123')
  })
})