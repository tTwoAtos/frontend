export default class UpdateProduct {
    private products: any[];

    /**
     * Creates an instance of the constructor.
     *
     * @param {any[]} initialProducts - The initial products for the instance.
     */
    constructor(initialProducts: any[]) {
        this.products = initialProducts;
    }

    /**
     * Retrieves the list of products.
     *
     * @return {Array} The array of products.
     */
    getProducts() {
        return this.products;
    }

    /**
     * Update the stock of a product at the specified index.
     *
     * @param {number} index - The index of the product.
     * @param {number} newStock - The new stock value.
     * @return {boolean} - Returns true if the stock was updated successfully, false otherwise.
     */
    updateStock(index: number, newStock: number) {
        const product = this.products[index];
        if (!isNaN(newStock) && Number.isInteger(newStock) && newStock >= 0) {
            product.stock = newStock;
            return true;
        }
        return false;
    }

    /**
     * Saves the products to local storage.
     *
     * No parameters.
     * @return {void} - No return value.
     */
    saveProductsToLocalStorage() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }
}
