<script lang="ts">
export default {
  data() {
    return {
      debouncedUpdate: null as any,
      previousStocks: {} as Record<number, number>,
    };
  },
  methods: {
    updateStock(index: number, products: any[]) {
      const product = products[index];
      const enteredStock = parseInt(product.stock);

      if (!isNaN(enteredStock) && Number.isInteger(enteredStock) && enteredStock >= 0) {
        product.stock = enteredStock;

        const stockDescription = document.getElementById(`stock-description-${index}`);
        stockDescription?.classList.add('visually-hidden');

        clearTimeout(this.debouncedUpdate);
        this.debouncedUpdate = setTimeout(() => {
          localStorage.setItem('products', JSON.stringify(products));
        }, 500);
      } else {
        const stockDescription = document.getElementById(`stock-description-${index}`);
        stockDescription?.classList.remove('visually-hidden');
      }
    },
  },
};
</script>
