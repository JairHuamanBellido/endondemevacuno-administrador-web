/// <reference types="cypress" />

context("Get Managers", () => {
  const ENDPOINT = "http://fake-endpoint:3001/";

  beforeEach(() => {
    cy.clearLocalStorage();

    cy.intercept("POST", `${ENDPOINT}/auth`, {
      statusCode: 201,
      delay: 1000,
    }).as("Authentication");

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
  });
  it("Get Managers and return at least 1", () => {
    cy.intercept("GET", `${ENDPOINT}/managers`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      delay: 1000,
      fixture: "manager.json",
    }).as("GetManagers");

    cy.visit("/");

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetManagers");

    cy.get("table").should("exist");
  });

  it("Get Managers and return empty", () => {
    cy.intercept("GET", `${ENDPOINT}/managers`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      delay: 1000,
      fixture: "manager-empty.json",
    }).as("GetManagers");

    cy.visit("/");

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetManagers");

    cy.get("table").should("not.exist");
    cy.get("p").contains("No hay responsables");
  });

  it("Refresh ang get managers updated", () => {
    cy.intercept("GET", `${ENDPOINT}/managers`, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      delay: 1000,
      fixture: "manager.json",
    }).as("GetManagers");

    cy.visit("/");

    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetManagers");

    cy.get("table").should("exist");

    cy.get("[data-testid=refresh").click();

    cy.get("table").should("not.exist");
    cy.get("[data-testid=spinner]").should("exist");

    cy.wait("@GetManagers");

    cy.get("[data-testid=spinner]").should("not.exist");
    cy.get("table").should("exist");
  });
});
