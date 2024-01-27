import { Product } from "@/interfaces/IProduct";
import { Query } from "./Query";

export class ProductQuery extends Query {
    async getProductByCode(scannedBarcode: string): Promise<Product> {
        return await this.axios
            .get(`/products/${scannedBarcode}`)
            .then((res: any) => res.data);
    }

    async updateProduct(code: string, product: Product) {
        return await this.axios
            .put(`/products/${code}`, {
                product
            })
            .then((res: any) => res.data);
    }

    async addProduct(product: Product) {
        return await this.axios
            .post(`/products`, {
                product
            })
            .then((res: any) => res.data);
    }
}
