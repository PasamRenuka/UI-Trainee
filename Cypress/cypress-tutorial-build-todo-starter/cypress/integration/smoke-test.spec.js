const hostUrl = "http://localhost:50175";
describe("The application loads", () => {
  it("navigates to the / route", () => {
    cy.visit(hostUrl);
  });

  it("has the basic Todo list container", () => {
    cy.visit(hostUrl);
    cy.get(".todo-list").should("exist");
  });
});
