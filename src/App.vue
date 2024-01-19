<template>
  <v-app>
    <v-main>
      <!-- <StockProduct-Update /> -->
      <BareCodeReader></BareCodeReader>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { QueryClient } from "@tanstack/vue-query";

  new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        retry: 3,
      },
    },
  });
</script>
