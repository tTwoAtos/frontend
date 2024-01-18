describe("stock update", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("should update stock when input changes", () => {
        // Assuming there are products loaded in local storage
        cy.get("[data-cy=product]").each(($el) => {
            cy.wrap($el).within(() => {
                // Get the initial stock value
                cy.get("[data-cy=stock-input]")
                    .invoke("val")
                    .as("initialStock");

                // Change the stock value
                cy.get("[data-cy=stock-input]").type("{selectall}123");

                // Trigger the change event
                cy.get("[data-cy=stock-input]").trigger("change");

                // Verify that the stock value is updated in the UI
                cy.get("[data-cy=stock-input]").should("have.value", "123");
            });
        });
    });
});
