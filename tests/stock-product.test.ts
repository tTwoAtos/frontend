import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import StockProductUpdateVue from "@/components/Stock_Product/StockProduct-Update.vue";

describe("StockProductUpdateVue", () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(StockProductUpdateVue);
        expect(wrapper.exists()).to.be.true;
    });

    it("updates the stock correctly", () => {
        const wrapper = shallowMount(StockProductUpdateVue);
        const product: { stock: number } = wrapper.vm.products[0];
        const initialStock = product.stock;

        // Simulate stock update
        product.stock = initialStock + 1;
        wrapper.vm.$emit("StockProductUpdateVue", 0);

        // Check if the stock is updated in the component's data
        expect(wrapper.vm.products[0].stock).to.equal(initialStock + 1);

        // Check if the stock is updated in the localStorage
        const storedProducts = JSON.parse(
            localStorage.getItem("products") ?? "[]"
        );
        expect(storedProducts[0].stock).to.equal(initialStock + 1);
    });

    it("disables the stock input when stock is 0", () => {
        const wrapper = shallowMount(StockProductUpdateVue);
        const product = wrapper.vm.products[0];

        // Set stock to 0
        product.stock = 0;

        // Check if the stock input is disabled
        const stockInput = wrapper.find('[data-cy="stock-input"]');
        expect(stockInput.attributes("disabled")).to.equal("disabled");
    });
});
