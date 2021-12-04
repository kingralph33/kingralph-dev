import Footer from "../../../components/footer";

describe("Footer content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays footer message", () => {
    cy.get("[data-cy=footer-message]").should("be.visible");
  });
});

export { };
