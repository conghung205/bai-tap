import type { Product } from "../models/product.js";
import type { productServiceI } from "../types/productServiceI.js";

export class ProductService implements productServiceI {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }
    updateProduct(
        id: string,
        data: Partial<Pick<Product, "name" | "price">>,
    ): void {
        const product = this.findById(id);
        if (!product) {
            console.log(`Product with id: ${id} not found`);
            return;
        }
        if (data.name !== undefined) {
            product.name = data.name;
        }
        if (data.price !== undefined) {
            product.price = data.price;
        }
    }
    deleteProduct(id: string): void {
        const productId = this.products.findIndex((p) => p.id === id);
        if (productId === -1) {
            console.log(`Product with id: ${id} not found`);
            return;
        }
        this.products.splice(productId, 1);
    }
    findById(id: string): Product | undefined {
        const product = this.products.find((p) => p.id === id);
        return product;
    }
    findByName(keyword: string): Product[] {
        const product = this.products.filter((p) =>
            p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
        );
        return product;
    }
    getAllProducts(): Product[] {
        return [...this.products];
    }
    printProducts(): void {
        this.products.forEach((p) => {
            console.log(p.toString());
        });
    }
}
