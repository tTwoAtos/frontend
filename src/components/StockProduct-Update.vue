<template>
  <div>
    <h2>Update Stock</h2>
    <div v-for="(item, index) in products" :key="index" data-cy="product">
      <h4>{{ item.name }}</h4>
      <label for="stock">Stock: </label>
      <input type="number" id="stock" v-model="item.stock" :disabled="item.stock === 0" @change="updateStock(index)" data-cy="stock-input">
    </div>
  </div>
</template>

<script lang="ts">
import products from '@/assets/products.json';

export default {
  /**
   * Initializes the data for the component.
   *
   * @return {Object} - The initial data object.
   */
  data() {
    return {
      products: JSON.parse(localStorage.getItem('products') as string) || products,
      debouncedUpdate: null as any,
    };
  },
  methods: {
    /**
     * Updates the stock of a product at the specified index.
     *
     * @param {number} index - The index of the product in the products array.
     * @return {void} This function does not return a value.
     */
    updateStock(index: number) {
      const product = this.products[index];
      product.stock = parseInt(product.stock);

      clearTimeout(this.debouncedUpdate);
      this.debouncedUpdate = setTimeout(() => {
        localStorage.setItem('products', JSON.stringify(this.products));
      }, 500)
    },
  },
};
</script>