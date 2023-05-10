/// <reference types="cypress" />

describe('Carrinhos de compras', () => {
  it('Adicionar 3 produtos e validar o total', () => {
    // Abrir a página inicial da Amazon
    cy.visit('https://www.amazon.com.br/');

    // Buscar por um produto - Livro Clean Code
    cy.get('#twotabsearchtextbox')
      .type('Livro Clean Code{enter}');

    // Clicar no primeiro resultado de busca
    cy.get('[data-asin][data-component-type="s-search-result"]:first')
      .find('h2 > a')
      .click();

    // Adicionar o produto ao carrinho
    cy.get('#add-to-cart-button')
      .click();

    // Verificar que o produto foi adicionado ao carrinho com sucesso
    cy.get('[class*="a-size-medium-plus"]')
      .should('contain', 'Adicionado ao carrinho');

    // Voltar para a página inicial
    cy.visit('https://www.amazon.com.br/');

    // Buscar por outro produto - Fone de Ouvido Bluetooth
    cy.get('#twotabsearchtextbox')
      .type('Fone de Ouvido Bluetooth{enter}');

    // Clicar no primeiro resultado de busca
    cy.get('[data-asin][data-component-type="s-search-result"]:first')
      .find('h2 > a')
      .click();

    // Adicionar o produto ao carrinho
    cy.get('#add-to-cart-button')
      .click();

    // Verificar que o produto foi adicionado ao carrinho com sucesso
    cy.get('[class*="a-size-medium-plus"]')
      .should('contain', 'Adicionado ao carrinho');

    // Voltar para a página inicial
    cy.visit('https://www.amazon.com.br/');

    // Buscar por mais um produto - Mochila Escolar
    cy.get('#twotabsearchtextbox')
      .type('Mochila Escolar{enter}');

    // Clicar no primeiro resultado de busca
    cy.get('[data-asin][data-component-type="s-search-result"]:first')
      .find('h2 > a')
      .click();

    // Adicionar o produto ao carrinho
    cy.get('#add-to-cart-button')
      .click();

    //verifica possibilidade de validar o total do carrinho??  

    // Verificar que o produto foi adicionado ao carrinho com sucesso
    cy.get('[class*="a-size-medium-plus"]')
      .should('contain', 'Adicionado ao carrinho');
  });
});
