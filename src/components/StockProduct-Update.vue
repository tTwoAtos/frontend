<template>
  <div>
    <h2>Update Stock</h2>
    <div v-for="(item, index) in products" :key="index">
      <h4>{{ item.name }}</h4>
      <label for="stock">Stock: </label>
      <input type="number" id="stock" v-model="item.stock" @change="updateStock(index)">
    </div>
  </div>
</template>

<script lang="ts">
import products from '@/assets/products.json'

export default {
  data() {
    return {
      products: products
    }
  },
  methods: {
    updateStock(index: number) {
      (this as any).$set(this.products, index, { ...this.products[index] });
    }
  }
}
</script>
