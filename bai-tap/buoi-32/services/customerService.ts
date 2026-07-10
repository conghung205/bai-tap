import type { Customer } from "../models/customer.js";
import type {
    CustomerServiceI,
    UpdateCustomerDataI,
} from "../types/customerServiceI.js";

export class CustomerService implements CustomerServiceI {
    private customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }
    updateCustomer(id: string, data: UpdateCustomerDataI): void {
        const customer = this.customers.find((c) => c.id === id);
        if (!customer) {
            console.log(`Customer with id ${id} not found`);
            return;
        }

        if (data.phone) {
            customer.updatePhone(data.phone);
        }
        if (data.name) {
            customer.updateName(data.name);
        }
        if (data.address) {
            customer.updateAddress(data.address);
        }
    }
    deleteCustomer(id: string): void {
        const customerIndex = this.customers.findIndex(
            (cIdx) => cIdx.id === id,
        );
        if (customerIndex === -1) {
            console.log(`Customer with id ${id} not found`);
            return;
        }

        this.customers.splice(customerIndex, 1);
    }
    findById(id: string): Customer | undefined {
        const customer = this.customers.find((c) => c.id === id);
        if (!customer) {
            console.log(`Customer with id ${id} not found`);
            return;
        }
        return customer;
    }
    findByPhone(phone: string): Customer | undefined {
        const customer = this.customers.find((c) => c.phone === phone);
        if (!customer) {
            console.log(`Customer with phone ${phone} not found`);
            return;
        }
        return customer;
    }
    getAllCustomers(): Customer[] {
        return [...this.customers];
    }
    printCustomers(): void {
        this.customers.forEach((c) => {
            console.log(c.toString());
        });
    }
}
