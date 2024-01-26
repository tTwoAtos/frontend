import { Product } from "@/interfaces/IProduct";
import axios from "axios";
import { Query } from "./Query";

export class ProductQuery extends Query {
    async getProductByCode(scannedBarcode: string): Promise<Product> {
        return await axios
            .get(`/products/${scannedBarcode}`)
            .then((res: any) => res.data);
    }
}
