<template>
  <div>
    <h2>Update Stock</h2>
    <div v-for="(item, index) in products" :key="index" data-cy="product">
      <h4>{{ item.name }}</h4>
      <label for="stock">Stock: </label>
      <input type="number" id="stock" v-model="item.stock" @change="updateStock(index)" data-cy="stock-input">
    </div>
  </div>
</template>

<script lang="ts">
import products from '@/assets/products.json';

export default {
  data() {
    return {
      products: JSON.parse(localStorage.getItem('products') as string) || products,
    };
  },
  methods: {
    updateStock(index: number) {
      const product = this.products[index];
      product.stock = parseInt(product.stock);

      // Save the updated products array to local storage
      localStorage.setItem('products', JSON.stringify(this.products));
    },
  },
};
</script>

