/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating with get", () => {
    //Get all elements by tag name
    cy.get("button");

    //Get all elements by className
    cy.get(".btn-with-class");

    //Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    //Get all elements by id, # this symbol is for id
    cy.get("#btn-with-id");

    //Get all elements by specific attribute
    cy.get("[type= 'submit']");

    //Get all elements by tag name && class
    cy.get("button.Elements-btn");

    //Get all elements by tag name && class && id
    cy.get("button.Elements-btn#btn-with-id");

    //Get all elements by tag name && class && type attribute
    cy.get("button.Elements-btn[type='submit']");

    //Get all elements with specific data test id
    cy.get("[data-cy='btn-id-1']");

    //We can add && use custom commands too
    cy.getByTestId("btn-id-1");
  });

  it("locating elements with contains", () => {
    //Get elements by text
    cy.contains("Just Another Button");
    //Get elements by text
    cy.contains("Not Unique Text");

    //With selector
    cy.contains("[type='submit']", "Not Unique Text");

    cy.get("[type='submit']").contains("Not Unique Text");
  });

  it("locating elements find", () => {
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");
  });
});
