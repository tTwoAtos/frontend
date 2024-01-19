<template>
    <div id="app">
      <h1>Entry a bare code</h1>
      <label for="barcodeInput">Entry a bare code :</label>
      <input v-model="scannedBarcode" type="text" id="barcodeInput" />
      <button @click="handleBarcodeEntry">Scanner</button>
  
      <div v-if="scannedBarcode">
        <p>Code-barres scanné : {{ scannedBarcode }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Product } from 'src/interfaces/product.interface'

  export default {
    data() {
      return {
        barcode: '',
        scannedBarcode: '',
      };
    },
    methods: {
      handleBarcodeScan() {
        this.scannedBarcode = this.barcode;
      },

      async handleBarcodeEntry() {
        const product: Product = await this.$axios.get(`/products/${this.scannedBarcode}`)
        .then((res: any) => res.data)
    }
    },
  };


  </script>
  
  <style>
  #app {
    text-align: center;
    margin-top: 60px;
  }
  
  input {
    margin-right: 10px;
  }
  
  button {
    cursor: pointer;
  }
  </style>
