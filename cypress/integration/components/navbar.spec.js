/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

"use strict";

describe("Navbar content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays logo", () => {
    cy.get("[data-cy=logo]").click;
  });
});
