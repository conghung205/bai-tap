import type { OrderItem } from "../models/orderItem.js";

export interface OrderI {
    addItem(item: OrderItem): void;
    removeItem(productId: string): void;
    calculateTotal(): number;
    printInvoice(): void;
}

export enum Status {
    NEW = "NEW",
    PAID = "PAID",
    CANCELLED = "CANCELLED",
}
