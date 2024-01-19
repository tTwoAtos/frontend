<script setup lang="ts">
import { QueryClient } from "@tanstack/vue-query";
import { Ref, ref } from "vue";
import { Product } from "./interfaces/product.interface";

const productTest: Ref<Product> = ref({
  "id": "3596710493180",
  "name": "Eau minérale naturelle source du Prince Noir",
  "expirationDate": "",
  "group": "en:unsweetened-beverages",
  "imageUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.200.jpg",
  "thumbUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.100.jpg"
})

new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      retry: 3,
    },
  },
});
</script>

<template>
  <v-app>
    <v-main>
      <!-- <StockProduct-Update /> -->
      <BareCodeReader></BareCodeReader>
      <AddProduct :product="productTest" :is-open="true" />
    </v-main>
  </v-app>
</template>
