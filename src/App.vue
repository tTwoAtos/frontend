<script setup lang="ts">
import { Ref, ref } from "vue";
import { Product } from "./interfaces/IProduct";

const productTest: Ref<Product> = ref({
  "id": "3596710493180",
  "name": "Eau minérale naturelle source du Prince Noir",
  "expirationDate": "",
  "group": "en:unsweetened-beverages",
  "imageUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.200.jpg",
  "thumbUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.100.jpg"
})
</script>

<template>
  <v-app>
    <v-main>
      <!-- <StockProduct-Update /> -->
      <AddProduct :product="productTest" :is-open="true" />
      <BareCodeReader></BareCodeReader>
    </v-main>
  </v-app>
</template>
