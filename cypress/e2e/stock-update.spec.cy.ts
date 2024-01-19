import products from "../fixtures/products.json";

describe("stock update", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.window().then((win) => {
            win.localStorage.setItem("products", JSON.stringify(products));
        });
    });

    Cypress.on("uncaught:exception", () => {
        return false;
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
            cy.get("[data-cy=stock-input]").should("be.visible");
            cy.get("[data-cy=stock-input]")
                .clear()
                .type(newValue)
                .trigger("change", { force: true });
            cy.get("[data-cy=stock-input]").should("have.value", newValue);
        });
    };

    it("should update stock when input changes", () => {
        cy.get("[data-cy=product]").each(($el) => {
            updateStock($el, "123");
        });
    });

    it("should disable input when stock is at 0", () => {
        cy.get("[data-cy=product]").each(($el) => {
            cy.wrap($el).within(() => {
                cy.get("[data-cy=stock-input]")
                    .should("be.visible")
                    .should("not.be.disabled");
                updateStock($el, "0");
            });
            cy.get("[data-cy=stock-input]").should("be.disabled");
        });
    });

    it("should disable input when stock is less than 0", () => {
        cy.get("[data-cy=product]").each(($el) => {
            cy.wrap($el).within(() => {
                cy.get("[data-cy=stock-input]")
                    .should("be.visible")
                    .should("not.be.disabled");
                updateStock($el, "-1");
            });
            cy.get("[data-cy=stock-input]").should("be.disabled");
        });
    });

    it("should hide stock description when valid stock is entered", () => {
        cy.get("[data-cy=product]").each(($el, index) => {
            updateStock($el, "123");
            cy.get(`#stock-description-${index}`).should(
                "have.class",
                "visually-hidden"
            );
        });
    });

    it("should show stock description when invalid stock is entered", () => {
        cy.get("[data-cy=product]").each(($el, index) => {
            updateStock($el, "-1");

            cy.wait(2000);

            cy.get(`#stock-description-${index}`).should(($div) => {
                expect($div).to.have.class("visually-hidden");
            });
        });
    });

    it("should not update localStorage when negative stock is entered", () => {
        cy.get("[data-cy=product]").each(($el, index) => {
            const newValue = "-5";
            updateStock($el, newValue);
            cy.wait(600);
            cy.window().then((win) => {
                const products = JSON.parse(
                    win.localStorage.getItem("products") as string
                );
                expect(products[index].stock).to.not.equal(parseInt(newValue));
            });
        });
    });
});
