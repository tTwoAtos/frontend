import { Product } from "@/interfaces/IProduct";
import { Query } from "./Query";

export class ProductQuery extends Query {
    async getProductByCode(scannedBarcode: string): Promise<Product> {
        return await this.axios
            .get(`/products/${scannedBarcode}`)
            .then((res: any) => res.data);
    }
}
