/// <reference types="cypress" />
context("Administrator have to generate credentials", () => {
  const ENDPOINT = Cypress.env("api_server");
  beforeEach(() => {
    cy.clearLocalStorage();

    cy.intercept("POST", `${ENDPOINT}/authentication/admin`, {
      statusCode: 201,
      delay: 1000,
    }).as("Authentication");

    cy.intercept("GET", `${ENDPOINT}/responsables`, {
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

    cy.get("[data-testid=email]").type("user01").should("have.value", "user01");

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
  });
  it("Create credentials for manager", () => {
    cy.intercept("POST", `${ENDPOINT}/manager`, {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
      },
      delay: 1000,
    }).as("CreateCredentials");

    cy.get('[data-testid="nav-create-credentials"]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/generate-credentials");
    });

    cy.get("[data-testid=name]")
      .type("Jair Orlando")
      .should("have.value", "Jair Orlando");

    cy.get("[data-testid=lastname]")
      .type("Huaman Bellido")
      .should("have.value", "Huaman Bellido");

    cy.get("[data-testid=documentId]")
      .type("12345678")
      .should("have.value", "12345678");

    cy.get("[data-testid=email]")
      .type("micorreo@gmail.com")
      .should("have.value", "micorreo@gmail.com");

    cy.get("[data-testid=form]").submit();

    cy.wait("@CreateCredentials");

    // cy.visit("/");
    // cy.location().should((loc) => {
    //   expect(loc.pathname).to.eq("/");
    // });

    cy.wait("@GetManagers");
    cy.get("table").should("exist");
  });
});
