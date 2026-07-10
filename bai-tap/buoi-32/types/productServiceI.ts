import type { Product } from "../models/product.js";

export interface productServiceI {
    addProduct(product: Product): void;
    updateProduct(
        id: string,
        data: Partial<Pick<Product, "name" | "price">>,
    ): void;
    deleteProduct(id: string): void;
    findById(id: string): Product | undefined;
    findByName(keyword: string): Product[];
    getAllProducts(): Product[];
    printProducts(): void;
}
