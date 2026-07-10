import type { Customer } from "../models/customer.js";

export interface UpdateCustomerDataI {
    name?: string;
    phone?: string;
    address?: string;
}

export interface CustomerServiceI {
    addCustomer(customer: Customer): void;
    updateCustomer(id: string, data: UpdateCustomerDataI): void;
    deleteCustomer(id: string): void;
    findById(id: string): Customer | undefined;
    findByPhone(phone: string): Customer | undefined;
    getAllCustomers(): Customer[];
    printCustomers(): void;
}
