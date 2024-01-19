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
   * @return {Object} - An object containing the initial values for the component's data properties.
   */
  data() {
    const storedProducts = localStorage.getItem('products');
    const initialProducts = storedProducts ? JSON.parse(storedProducts) : products;

    return {
      products: initialProducts,
      debouncedUpdate: null as any,
      previousStocks: {} as Record<number, number>,
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
      const enteredStock = parseInt(product.stock);

      if (!isNaN(enteredStock) && Number.isInteger(enteredStock) && enteredStock >= 0) {
        product.stock = enteredStock;

        const stockDescription = document.getElementById(`stock-description-${index}`);
        stockDescription?.classList.add('visually-hidden');

        clearTimeout(this.debouncedUpdate);
        this.debouncedUpdate = setTimeout(() => {
          localStorage.setItem('products', JSON.stringify(this.products));
        }, 500);
      } else {
        const stockDescription = document.getElementById(`stock-description-${index}`);
        stockDescription?.classList.remove('visually-hidden');
      }
    },
  },
};
</script>

