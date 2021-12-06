/// <reference types="cypress"/>

context("Home Page", () => {
  before(() => {
    cy.visit("/");
  });

  it("should render text", () => {
    cy.get("a").contains("Learn React");
  });

  it("should navigate to React page", () => {
    cy
        .get('a')
        .invoke('attr','href')
        .should('eq','https://reactjs.org')
  });
});
