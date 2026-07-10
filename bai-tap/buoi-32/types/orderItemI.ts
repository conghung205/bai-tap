import type { Product } from "../models/product.js";

export interface OrderItemI {
    getTotal(): number;
    toString(): string;
}
