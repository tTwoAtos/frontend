import { shallowMount, VueWrapper } from "@vue/test-utils";
import StockProductUpdateVue from "@/components/StockProduct-Update.vue";
import { expect } from "chai";

describe("StockProductUpdateVue", () => {
    let wrapper: VueWrapper<typeof StockProductUpdateVue>;

    beforeEach(() => {
        wrapper = shallowMount(StockProductUpdateVue);
    });

    it("renders correctly", () => {
        expect(wrapper.exists()).to.be.true;
    });

    it("displays products with correct data-cy attribute", () => {
        const productElements = wrapper.findAll('[data-cy="product"]');
        expect(productElements.length).to.equal(wrapper.vm.products.length);
    });

    it("updates stock when input changes", async () => {
        const input = wrapper.find('[data-cy="stock-input"]');
        const initialStock = wrapper.vm.products[0].stock;

        await input.setValue("42");
        expect(wrapper.vm.products[0].stock).equal(42);

        await input.setValue("24");
        expect(wrapper.vm.products[0].stock).equal(24);

        // Ensure debouncing is working
        jest.advanceTimersByTime(500);
        expect(localStorage.setItem).toHaveBeenCalledWith("stock", "24");

        // Restore initial stock value
        wrapper.vm.products[0].stock = initialStock;
    });

    it("disables input when stock is 0", async () => {
        const input = wrapper.find('[data-cy="stock-input"]');
        expect(input.attributes("disabled")).equal(false);

        // Set stock to 0
        wrapper.vm.products[0].stock = 0;

        // Update stock to trigger @change event
        await input.setValue("42");

        expect(input.attributes("disabled")).equal(true);
    });

    it("debounces the updateStock method", async () => {
        const spyUpdateStock = jest.spyOn(wrapper.vm, "updateStock");

        const input = wrapper.find('[data-cy="stock-input"]');
        await input.setValue("42");

        // Advance timers less than the debounce time
        jest.advanceTimersByTime(400);
        expect(spyUpdateStock).not.toHaveBeenCalled();

        // Advance timers beyond the debounce time
        jest.advanceTimersByTime(100);
        expect(spyUpdateStock).toHaveBeenCalled();

        // Restore initial state
        wrapper.vm.products[0].stock = 0;
    });

    afterAll(() => {
        jest.clearAllTimers();
    });
});
