/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const baseUrl = "http://localhost:3000";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Checking empty form", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("form");
    cy.get("input#text").should("be.empty");
    cy.get("input#delay").should("be.empty");
    cy.get("button#btn");
    cy.get("div#output").should("be.empty");
  });

  it("Checking values - 1", () => {
    const delay = 1000;
    const text = "Test - 1";
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("input#text").type(text);
    cy.get("input#delay").type(delay);
    cy.get("button#btn").click();
    cy.get("div#output").should("be.empty");

    cy.wait(delay);

    cy.get("div#output").then((txt) => {
      expect(txt.text()).equals(text);
    });
  });

  it("Checking values - 2", () => {
    const delay = 2000;
    const text = "Test - 2";
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("input#text").type(text);
    cy.get("input#delay").type(delay);
    cy.get("button#btn").click();
    cy.get("div#output").should("be.empty");

    cy.wait(delay);

    cy.get("div#output").then((txt) => {
      expect(txt.text()).equals(text);
    });
  });
});
