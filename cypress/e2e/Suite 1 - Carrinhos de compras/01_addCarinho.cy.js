/// <reference types="cypress" />

describe('Carrinhos de compras', () => {
  it('Busca por produto e adiciona ao carrinho', () => {
    // Abrir a página inicial da Amazon
    cy.visit('https://www.amazon.com.br/');

    // Buscar por um produto
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
    .should('contain', 'Adicionado ao carrinho')
  });
});

 

  