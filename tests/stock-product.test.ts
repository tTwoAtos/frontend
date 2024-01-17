import { mount } from "@vue/test-utils";
import StockProductUpdate from "@/components/StockProduct-Update.vue";

describe("StockProduct-Update.vue", () => {
    it("loads products and updates stock", async () => {
        const mockProducts = [{ id: 1, name: "Product 1", stock: 10 }];
        const fetchProducts = jest.fn().mockResolvedValue(mockProducts);
        const updateProductStock = jest.fn().mockResolvedValue(true);

        const wrapper = mount(StockProductUpdate, {
            mocks: {
                fetchProducts,
                updateProductStock
            }
        });

        // Vérifie que les produits sont chargés
        expect(fetchProducts).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain("Product 1");

        // Simule un clic sur le bouton de modification du stock
        wrapper.find("button").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.dialog).toBe(true);

        // Simule la soumission du formulaire avec une nouvelle quantité en stock
        wrapper.vm.selectedProduct.stock = 20;
        wrapper.find("form").trigger("submit");
        await wrapper.vm.$nextTick();
        expect(updateProductStock).toHaveBeenCalledWith(mockProducts[0]);
        expect(wrapper.vm.products[0].stock).toBe(20);

        // Simule une erreur lors de la mise à jour du stock
        updateProductStock.mockRejectedValue(
            new Error("Failed to update stock")
        );
        wrapper.find("form").trigger("submit");
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain("Failed to update stock");
    });
});
