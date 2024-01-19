import { Product } from "@/interfaces/product.interface";
import axios from "axios";

export async function getProductByCode(
    scannedBarcode: string
): Promise<Product> {
    const product: Product = await axios
        .get(`/products/${scannedBarcode}`)
        .then((res: any) => res.data);

    return product;
}
