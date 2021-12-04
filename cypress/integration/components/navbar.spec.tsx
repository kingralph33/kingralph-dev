import NavBar from "../../../components/navbar";

describe("Navbar content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays logo", () => {
    cy.get("[data-cy=logo]").click;
  });
});

export { };
