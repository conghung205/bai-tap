import { v7 } from "uuid";
import type { ProductI } from "../types/productI.js";

export class Product implements ProductI {
    protected _id: string = v7();
    private _name: string;
    private _price: number;
    private _stock: number;

    constructor(name: string, price: number, stock: number) {
        this._name = name;
        this._price = price;
        this._stock = stock;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    get stock(): number {
        return this._stock;
    }

    set name(name: string) {
        this._name = name;
    }
    set price(price: number) {
        if (price < 0) {
            throw new Error(`Price cannot be negative`);
        }
        this._price = price;
    }

    increaseStock(quantity: number): void {
        this._stock += quantity;
    }
    decreaseStock(quantity: number): void {
        if (quantity > 0 && quantity <= this._stock) {
            this._stock -= quantity;
        } else {
            console.log(
                "Quantity must be greater than 0 and less than or equal to stock.",
            );
        }
    }
    toString(): string {
        return `Product: [id: '${this._id}', name: '${this._name}', price: ${this._price}, stock: ${this._stock}]`;
    }
}
