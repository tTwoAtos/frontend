import StockProductUpdate from "./StockProduct-Update.vue";

describe("<StockProductUpdate />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(StockProductUpdate);
    });
});
