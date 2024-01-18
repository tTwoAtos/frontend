describe("stock update", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    /**
     * Function Helper -
     * Updates the stock value of an element.
     *
     * @param {$el} $el - The element to update the stock for.
     * @param {string} newValue - The new stock value.
     */
    const updateStock = ($el: JQuery<HTMLElement>, newValue: string) => {
        cy.wrap($el).within(() => {
            cy.get("[data-cy=stock-input]").invoke("val").as("initialStock");
            cy.get("[data-cy=stock-input]").type(`{selectall}${newValue}`);
            cy.get("[data-cy=stock-input]").trigger("change");
            cy.get("[data-cy=stock-input]").should("have.value", newValue);
        });
    };

    it("should update stock when input changes", () => {
        cy.get("[data-cy=product]").each(($el) => {
            updateStock($el, "123");
        });
    });
});
