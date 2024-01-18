describe("Component Device Design", () => {
    beforeEach(() => {
        cy.viewport("iphone-6");
        cy.visit("http://localhost:3000/");
    });

    it(`should display properly on mobile device`, () => {
        cy.get("[data-cy=product").should("have.length.greaterThan", 0);
    });

    it(`should update stock on input change`, () => {
        cy.get("[data-cy=product]").first().type("10").blur();
    });
});
