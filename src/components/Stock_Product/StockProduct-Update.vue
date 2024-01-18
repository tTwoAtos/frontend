<template>
  <div class="update-stock-container">
    <h2>Update Stock</h2>
    <div v-for="(item, index) in products" :key="index" data-cy="product">
      <h4>{{ item.name }}</h4>
      <div class="stock-container">
        <label for="stock">Stock: </label>
        <input 
          type="number" 
          id="stock" 
          v-model="item.stock" 
          :disabled="item.stock === 0" 
          @change="updateStock(index)" 
          data-cy="stock-input"
          aria-label="Stock Input"
          :aria-describedby="`stock-input-${index}`"
          :aria-invalid="item.stock === 0"
          @keyup.enter="updateStock(index)"  
        >
        <div :id="'stock-description-' + index" class="visually-hidden">
          Please enter a valid stock value.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .update-stock-container
  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px)
  {
    .stock-container 
    {
      display: flex;
      align-items: center;
    }

    label
    {
      margin-right: 10px;
    }
  }

  .visually-hidden
  {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
    white-space: nowrap;
  }
</style>

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