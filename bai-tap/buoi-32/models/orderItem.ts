import type { OrderItemI } from "../types/orderItemI.js";
import type { Product } from "./product.js";

export class OrderItem implements OrderItemI {
    private _product: Product;
    private _quantity: number;
    private _price: number;

    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
        this._price = product.price;
    }

    get product(): Product {
        return this._product;
    }
    getTotal(): number {
        return this._price * this._quantity;
    }
    toString(): string {
        return `[Name: ${this.product.name}, Price: ${this._price}, Quantity: ${this._quantity}, Total: ${this.getTotal()}]`;
    }
}
