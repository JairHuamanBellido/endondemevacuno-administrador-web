/// <reference types="cypress" />

context("Administrator have to", () => {
  const ENDPOINT = "http://fake-endpoint:3001/";

  before(() => {
    cy.clearLocalStorage();

    cy.intercept("POST", `${ENDPOINT}/auth`, {
      statusCode: 201,
      delay: 1000,
    }).as("Authentication");

    cy.intercept("GET", `${ENDPOINT}/managers`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      delay: 1000,
      fixture: "manager.json",
    }).as("GetManagers");

    cy.visit("/login");
    cy.get("[data-testid=submit-btn]").should("exist");
    cy.get("[data-testid=loading]").should("not.exist");

    cy.get("[data-testid=username]")
      .type("user01")
      .should("have.value", "user01");

    cy.get("[data-testid=password]")
      .type("123456")
      .should("have.value", "123456");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=submit-btn]").should("not.exist");
    cy.get("[data-testid=loading]").should("exist");

    cy.wait(["@Authentication"]);

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    window.localStorage.setItem("token", "ANOTHER_TOKEN");

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetManagers");

    cy.get("table").should("exist");
  });

  beforeEach(() => {
    cy.intercept("PUT", `${ENDPOINT}/manager`, {
      statusCode: 201,
      delay: 1000,
    }).as("UpdateManager");
  });

  it("Disable account", () => {
    const MANAGER_ID = 1;
    cy.intercept("PUT", `${ENDPOINT}/manager`, {
      statusCode: 201,
      delay: 1000,
    }).as("UpdateManager");

    cy.get(
      `[data-testid="manager-${MANAGER_ID}"] > :nth-child(5) > [data-testid="toggle"]`
    ).click();

    cy.get("[data-testid=modal").should("exist");

    cy.get("[data-testid=confirm-modal]").click();

    cy.wait("@UpdateManager");

    cy.get("[data-testid=modal").should("not.exist");

    cy.get(`[data-testid=manager-${MANAGER_ID}]`).contains("Desactivado");
  });

  it("Enable account", () => {
    const MANAGER_ID = 2;

    cy.get(
      `[data-testid="manager-${MANAGER_ID}"] > :nth-child(5) > [data-testid="toggle"]`
    ).click();

    cy.get("[data-testid=modal").should("exist");

    cy.get("[data-testid=confirm-modal]").click();

    cy.wait("@UpdateManager");

    cy.get("[data-testid=modal").should("not.exist");

    cy.get(`[data-testid=manager-${MANAGER_ID}]`).contains("Activo");
  });
});
