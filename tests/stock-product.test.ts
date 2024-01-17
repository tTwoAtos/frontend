import { shallowMount } from "@vue/test-utils";
import StockProduct from "@/components/StockProduct-Update.vue";
import products from "@/assets/products.json";
import { expect } from "chai";

describe("StockProduct-Update.vue", () => {
    it("renders the component", () => {
        const wrapper = shallowMount(StockProduct);
        expect(wrapper.html()).to.contain("Update Stock");
    });

    it("updates stock correctly", async () => {
        const wrapper = shallowMount(StockProduct);
        wrapper.setData({ products: [...products] });

        // Simulate a change in the stock of the first product
        await wrapper.vm.updateStock(0);
        expect(wrapper.vm.$data.products[0].stock).to.equal(products[0].stock);
    });
});
