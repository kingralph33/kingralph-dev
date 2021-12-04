/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

"use strict";

describe("Homepage content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Have the correct page title", () => {
    cy.title().should("eq", "KingRalph.dev");
  });

  it("Displays profile image", () => {
    cy.get("[data-cy=homepage-profileImage]").should("be.visible");
  });

  it("Displays twitter icon", () => {
    cy.get("[data-cy=homepage-twitter]").should("be.visible");
  });
  it("Displays linkedin icon", () => {
    cy.get("[data-cy=homepage-linkedin]").should("be.visible");
  });
  it("Displays github icon", () => {
    cy.get("[data-cy=homepage-github]").should("be.visible");
  });
  it("Displays email icon", () => {
    cy.get("[data-cy=homepage-email]").should("be.visible");
  });
});
