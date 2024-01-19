<template>
  <div class="update-stock-container">
    <h2>Update Stock</h2>
    <div v-for="(item, index) in products" :key="index" data-cy="product">
      <h4>{{ item.name }}</h4>
      <div class="stock-container">
        <label for="stock">Stock: </label>
        <input
          class="stock-input" 
          type="number" 
          id="stock" 
          v-model="item.stock" 
          :disabled="item.stock === 0 || isNaN(item.stock) || item.stock < 0" 
          @change="updateStock(index)" 
          data-cy="stock-input"
          aria-label="Stock Input"
          :aria-describedby="`stock-input-${index}`"
          :aria-invalid="isNaN(item.stock) || item.stock < 0"
          @keyup.enter="updateStock(index)" 
        >
        <div :id="'stock-description-' + index" class="visually-hidden">
          {{ isNaN(item.stock) || item.stock < 0 ? 'Please enter a valid stock value.' : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./UpdateProduct.css";
</style>

<script lang="ts">
import products from '../../assets/products.json';
import StockProductComponent from './StockProduct.class.vue';

export default {
  components: {
    StockProduct: StockProductComponent,
  },
  /**
   * Initializes the data for the component.
   *
   * @return {Object} An object containing the initial data for the component.
   */
  data() {
    const storedProducts = localStorage.getItem('products');
    const initialProducts = storedProducts ? JSON.parse(storedProducts) : products;

    return {
      products: initialProducts,
    };
  },
  methods: {
    /**
     * Updates the stock of a product at the specified index.
     *
     * @param {number} index - The index of the product to update the stock for.
     * @return {void} This function does not return a value.
     */
    updateStock(index: number) {
      const logicComponent = this.$refs.logicComponent as typeof StockProductComponent;
      logicComponent.updateStock(index, this.products);
    },
  },
};
</script>