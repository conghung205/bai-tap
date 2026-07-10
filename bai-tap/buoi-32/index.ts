import { Customer } from "./models/customer.js";
import { Product } from "./models/product.js";
import { CustomerService } from "./services/customerService.js";
import { OrderService } from "./services/orderService.js";
import { ProductService } from "./services/productService.js";

const productService = new ProductService();
const customerService = new CustomerService();
const orderService = new OrderService(productService);

const iphone = new Product("iPhone 12", 12000, 50);
const samsung = new Product("Samsung S24", 18000, 30);
const airpods = new Product("AirPods Pro", 5000, 100);

productService.addProduct(iphone);
productService.addProduct(samsung);
productService.addProduct(airpods);

console.log("===== PRODUCT SERVICE =====");
productService.printProducts();
console.log(
    "Find product by name 'phone':",
    productService.findByName("phone"),
);

productService.updateProduct(iphone.id, {
    name: "iPhone 12 Pro",
    price: 15000,
});
iphone.decreaseStock(5);
airpods.increaseStock(20);

console.log("After update stock product:");
productService.printProducts();

const customer = new Customer("Nguyen Van A", "0123456767", "Ha Noi");
const customer2 = new Customer("Tran Thi B", "0987654321", "Da Nang");

customerService.addCustomer(customer);
customerService.addCustomer(customer2);

console.log("\n===== CUSTOMER SERVICE =====");
customerService.printCustomers();
console.log(
    "Find customer by phone:",
    customerService.findByPhone("0123456767"),
);

console.log("\n===== ORDER SERVICE =====");
orderService.createOrder(customer);

const order = orderService.getOrders()[0];

if (order) {
    orderService.addProduct(order.id, iphone.id, 2);
    orderService.addProduct(order.id, airpods.id, 1);

    console.log("Invoice before checkout:");
    order.printInvoice();

    orderService.removeProduct(order.id, airpods.id);

    console.log("Invoice after remove AirPods:");
    order.printInvoice();

    orderService.checkout(order.id);
    orderService.printOrders();

    try {
        orderService.cancelOrder(order.id);
    } catch (error) {
        console.log("Cannot cancel paid order:", (error as Error).message);
    }
}

console.log("\n===== CANCEL ORDER SUCCESS =====");
orderService.createOrder(customer2);

const cancelOrder = orderService.getOrders()[1];

if (cancelOrder) {
    orderService.addProduct(cancelOrder.id, samsung.id, 1);

    console.log("Invoice before cancel:");
    cancelOrder.printInvoice();

    orderService.cancelOrder(cancelOrder.id);

    console.log("Invoice after cancel:");
    cancelOrder.printInvoice();
    orderService.printOrders();
}
