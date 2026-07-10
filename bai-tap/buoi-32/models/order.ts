import { Status, type OrderI } from "../types/orderI.js";
import type { Customer } from "./customer.js";
import type { OrderItem } from "./orderItem.js";
import { v7 } from "uuid";

export class Order implements OrderI {
    private _id: string = v7();
    private _customer: Customer;
    private _items: OrderItem[] = [];
    private _createdAt: Date = new Date();
    private _status: Status = Status.NEW;

    constructor(customer: Customer) {
        this._customer = customer;
    }

    get id(): string {
        return this._id;
    }
    get customer(): Customer {
        return this._customer;
    }
    get status(): Status {
        return this._status;
    }
    set status(newStatus: Status) {
        this._status = newStatus;
    }

    addItem(item: OrderItem): void {
        this._items.push(item);
    }
    removeItem(productId: string): void {
        const productIndex = this._items.findIndex(
            (item) => item.product.id === productId,
        );
        if (productIndex === -1) {
            console.log(`Không tìm thấy sản phẩm với id: ${productId}`);
            return;
        }

        this._items.splice(productIndex, 1);
    }
    calculateTotal(): number {
        const total = this._items.reduce(
            (acc, item) => acc + item.getTotal(),
            0,
        );

        return total;
    }

    printInvoice(): void {
        let productStr = "";
        this._items.forEach((item) => {
            productStr += item.toString() + "\n";
        });

        console.log(`
            OrderId: ${this._id},
            Customer: ${this._customer.toString()},
            Products: ${productStr}
            CreatedAt: ${this._createdAt},
            Status: ${this._status},
            Total amount: ${this.calculateTotal()}
        `);
    }
}
