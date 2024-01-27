<script setup lang="ts">
import { ProductQuery } from '@/queries/productQueries';
import { useQuery } from "@tanstack/vue-query";
import { AxiosInstance } from "axios";
import { inject } from "vue";

// const productTest: Ref<Product> = ref({
//   "id": "3596710493180",
//   "name": "Eau minérale naturelle source du Prince Noir",
//   "expirationDate": "",
//   "group": "en:unsweetened-beverages",
//   "imageUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.200.jpg",
//   "thumbUrl": "https://images.openfoodfacts.org/images/products/359/671/049/3180/front_fr.22.100.jpg"
// })

const axios: AxiosInstance | undefined = inject('axios')

const { data, isLoading, isSuccess } = useQuery({
  queryKey: ['products'],
  queryFn: () => new ProductQuery(axios).getProductByCode("3596710493180")
})
</script>

<template>
  <v-app>
    <v-main>
      <ModalAddProduct v-if="isSuccess && data" :product="data" :is-open="true" />
      <BareCodeReader />
    </v-main>
  </v-app>
</template>
