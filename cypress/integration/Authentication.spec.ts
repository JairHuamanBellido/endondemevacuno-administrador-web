/// <reference types="cypress" />

context("Administrator have to authenticate", () => {
  const ENDPOINT = "http://fake-endpoint:3001/auth";
  beforeEach(() => {
    cy.clearLocalStorage();

    cy.visit("/login");

    cy.get("[data-testid=submit-btn]").should("exist");
    cy.get("[data-testid=loading]").should("not.exist");

    cy.get("[data-testid=username]")
      .type("user01")
      .should("have.value", "user01");

    cy.get("[data-testid=password]")
      .type("123456")
      .should("have.value", "123456");

  });

  it("credentials are correct and show dashboard", () => {
    cy.intercept("POST", ENDPOINT, {
      statusCode: 201,
      delay: 500,
    }).as("Authentication");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=submit-btn]").should("not.exist");
    cy.get("[data-testid=loading]").should("exist");
    cy.wait(["@Authentication"]);

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("credentials are incorrect", () => {
    cy.intercept("POST", `${ENDPOINT}`, {
      statusCode: 400,
      body: { message: "Credenciales incorrectas" },
      headers: {
        "Content-Type": "application/json",
      },
      delay: 500,
    }).as("AuthenticationError");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=submit-btn]").should("not.exist");
    cy.get("[data-testid=loading]").should("exist");
    cy.get("[data-testid=error]").should("not.exist");

    cy.wait("@AuthenticationError");

    cy.get("[data-testid=submit-btn]").should("exist");
    cy.get("[data-testid=loading]").should("not.exist");
    cy.get("[data-testid=error]").should("exist");

    cy.get("[data-testid=error]").contains("Credenciales incorrectas");
  });

  it("account is blocked", () => {
    cy.intercept("POST", `${ENDPOINT}`, {
      statusCode: 403,
      body: { message: "Cuenta bloqueada" },
      headers: {
        "Content-Type": "application/json",
      },
      delay: 500,
    }).as("AuthenticationError");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=submit-btn]").should("not.exist");
    cy.get("[data-testid=loading]").should("exist");
    cy.get("[data-testid=error]").should("not.exist");

    cy.wait("@AuthenticationError");

    cy.get("[data-testid=submit-btn]").should("exist");
    cy.get("[data-testid=loading]").should("not.exist");
    cy.get("[data-testid=error]").should("exist");

    cy.get("[data-testid=error]").contains("Cuenta bloqueada");
  });

  it("hidde error message after retry", () => {
    cy.intercept("POST", `${ENDPOINT}`, {
      statusCode: 400,
      body: { message: "Credenciales incorrectas" },
      headers: {
        "Content-Type": "application/json",
      },
      delay: 500,
    }).as("AuthenticationError");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=submit-btn]").should("not.exist");
    cy.get("[data-testid=loading]").should("exist");
    cy.get("[data-testid=error]").should("not.exist");

    cy.wait("@AuthenticationError");

    cy.get("[data-testid=submit-btn]").should("exist");
    cy.get("[data-testid=loading]").should("not.exist");
    cy.get("[data-testid=error]").should("exist");

    cy.get("[data-testid=form]").submit();

    cy.get("[data-testid=error]").should("not.exist");

    cy.wait("@AuthenticationError");
  });
});
