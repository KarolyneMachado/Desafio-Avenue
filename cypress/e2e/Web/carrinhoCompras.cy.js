/// <reference types="cypress" />

describe('Carrinhos de compras', () => {
  it('CT01- Busca por produto e adiciona ao carrinho', () => {

    cy.visit('https://www.amazon.com.br/');
    cy.get('#twotabsearchtextbox')
      .type('Livro Clean Code{enter}');
    cy.get('[data-asin][data-component-type="s-search-result"]:first')
      .find('h2 > a')
      .click();
    cy.get('#add-to-cart-button')
      .click();
    cy.get('[class*="a-size-medium-plus"]')
      .should('contain', 'Adicionado ao carrinho')
  });

  it('CT02 - Adicionar 3 produtos e validar o total', () => {
    cy.visit('https://www.amazon.com.br/')
    cy.get('#twotabsearchtextbox')
      .type('livro Clean Code{enter}')
    cy.get('[data-asin][data-component-type="s-search-result"]:first')
      .find('h2 > a')
      .click();
      cy.get('#quantity')
      .select('3', { force: true });    
    cy.get('#add-to-cart-button')
      .click()
    cy.get('#nav-cart-count')
      .should('have.text', '3')
    cy.get('[class="ewc-unit-price ewc-wider-compact-view-only"]')
      .find('[class="a-size-base a-text-bold"]')
      .invoke('text')
      .then(price => {
        const subtotal = parseFloat(price.replace(',', '.').replace('R$', '').trim())
        cy.get('[id="nav-cart-count-container"]')
          .click()

        cy.get('[id="sc-subtotal-amount-buybox"]')
          .invoke('text')
          .then(total => {
            const totalAmount = parseFloat(total.replace(',', '.').replace('R$', '').trim())
            expect(totalAmount).to.be.closeTo(subtotal * 3, 0.01); // Tolerance of 0.01
          })
      })
  })
});