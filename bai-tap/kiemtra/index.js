const employees = [
    { id: 1, name: "Alice", age: 23, status: "working" },
    { id: 3, name: "Bob", age: 25, status: "working" },
    { id: 6, name: "John", age: 27, status: "working" },
    { id: 8, name: "David", age: 23, status: "quit_job" },
    { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000 },
    { id: 3, name: "Tab", price: 2000 },
    { id: 4, name: "PC", price: 800 },
    { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 3, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 3 },
    { id: 4, employeeId: 6, productId: 1, quantity: 2 },
    { id: 5, employeeId: 3, productId: 5, quantity: 3 },
    { id: 6, employeeId: 8, productId: 1, quantity: 1 },
    { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// ============ Bài làm ====================
// Bài 1:
function getEmployeesAreWorking(employees) {
    if (!employees || !employees.length) return [];
    return employees.filter((employee) => employee.status === "working");
}

// console.log(getEmployeesAreWorking(employees));

// Bài 2
function getOldestEmployee(employees) {
    if (!employees || !employees.length) return null;
    let oldestEmployee = employees[0];

    for (let i = 1; i < employees.length; i++) {
        const employee = employees[i];

        if (employee.age > oldestEmployee.age) {
            oldestEmployee = employee;
        }
    }

    return oldestEmployee;
}

// console.log(getOldestEmployee(employees));

// Bài 3
function getCheapestProduct(products) {
    if (!products || !products.length) return null;

    let cheapestProduct = products[0];

    for (let i = 1; i < products.length; i++) {
        const product = products[i];

        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }

    return cheapestProduct;
}
// console.log(getCheapestProduct(products));

// Bài 4
function getBestSellingProductOfQuantity(products, orders) {
    if (!products || !products.length || !orders || !orders.length) return null;

    const quantityMap = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        if (!quantityMap[order.productId]) {
            quantityMap[order.productId] = 0;
        }

        quantityMap[order.productId] += order.quantity;
    }

    let bestProductId = null;
    let maxQuantity = 0;

    for (const productId in quantityMap) {
        if (quantityMap[productId] > maxQuantity) {
            maxQuantity = quantityMap[productId];
            bestProductId = Number(productId);
        }
    }

    const productMap = {};

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    return productMap[bestProductId];
}
// console.log(getBestSellingProductOfQuantity(products, orders));

// Bài 5
function getHighestRevenueProductOfAll(products, orders) {
    if (!products || !products.length || !orders || !orders.length) return null;

    const productPriceMap = {};
    for (let i = 0; i < products.length; i++) {
        productPriceMap[products[i].id] = products[i].price;
    }

    const revenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const productId = order.productId;

        const price = productPriceMap[productId];
        const orderRevenue = order.quantity * price;

        if (!revenueMap[productId]) {
            revenueMap[productId] = 0;
        }
        revenueMap[productId] += orderRevenue;
    }

    let bestProductId = null;
    let maxRevenue = 0;

    for (const productId in revenueMap) {
        if (revenueMap[productId] > maxRevenue) {
            maxRevenue = revenueMap[productId];
            bestProductId = Number(productId);
        }
    }

    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    return productMap[bestProductId];
}

// console.log(getHighestRevenueProductOfAll(products, orders));

// Bài 6
function getBestSellingEmployeeOfQuantity(employees, orders) {
    if (!employees || !employees.length || !orders || !orders.length)
        return null;
    const employeeQuantityMap = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        if (!employeeQuantityMap[order.employeeId]) {
            employeeQuantityMap[order.employeeId] = 0;
        }

        employeeQuantityMap[order.employeeId] += order.quantity;
    }

    let bestEmployeeId = null;
    let maxQuantity = 0;

    for (const employeeId in employeeQuantityMap) {
        if (employeeQuantityMap[employeeId] > maxQuantity) {
            maxQuantity = employeeQuantityMap[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }

    return employeeMap[bestEmployeeId];
}

// console.log(getBestSellingEmployeeOfQuantity(employees, orders));

// Bài 7:
function getHighestRevenueEmployee(employees, products, orders) {
    if (!orders.length || !products.length || !employees.length) return null;

    const productPriceMap = {};
    for (let i = 0; i < products.length; i++) {
        productPriceMap[products[i].id] = products[i].price;
    }

    const employeeRevenueMap = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const employeeId = order.employeeId;

        const price = productPriceMap[order.productId];

        const orderRevenue = order.quantity * price;

        if (!employeeRevenueMap[employeeId]) {
            employeeRevenueMap[employeeId] = 0;
        }

        employeeRevenueMap[employeeId] += orderRevenue;
    }

    let bestEmployeeId = null;
    let maxRevenue = 0;

    for (const employeeId in employeeRevenueMap) {
        if (employeeRevenueMap[employeeId] > maxRevenue) {
            maxRevenue = employeeRevenueMap[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }

    return employeeMap[bestEmployeeId];
}

// console.log(getHighestRevenueEmployee(employees, products, orders));

// Bài 8:
function getTopProductRevenuePerEmployee(employees, products, orders) {
    if (!orders.length || !products.length || !employees.length) return {};

    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        productMap[products[i].id] = products[i];
    }

    const employeeProductRevenue = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const empId = order.employeeId;
        const prodId = order.productId;
        const price = productMap[prodId].price;
        const revenue = order.quantity * price;

        if (!employeeProductRevenue[empId]) {
            employeeProductRevenue[empId] = {};
        }

        if (!employeeProductRevenue[empId][prodId]) {
            employeeProductRevenue[empId][prodId] = 0;
        }

        employeeProductRevenue[empId][prodId] += revenue;
    }

    const result = {};

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const empId = employee.id;
        const revenues = employeeProductRevenue[empId];

        if (!revenues) {
            result[employee.name] = "Không có đơn hàng";
            continue;
        }

        let bestProductId = null;
        let maxRevenue = 0;

        for (const prodId in revenues) {
            if (revenues[prodId] > maxRevenue) {
                maxRevenue = revenues[prodId];
                bestProductId = Number(prodId);
            }
        }

        result[employee.name] = productMap[bestProductId];
    }

    return result;
}

// console.log(getTopProductRevenuePerEmployee(employees, products, orders));

// ================= getEmployeesWithRevenue ===========
function getEmployeesWithRevenue(employees, products, orders) {
    if (!employees.length) return [];

    const productPriceMap = {};
    for (let i = 0; i < products.length; i++) {
        productPriceMap[products[i].id] = products[i].price;
    }

    const employeeRevenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const empId = order.employeeId;
        const price = productPriceMap[order.productId] || 0;
        const orderRevenue = order.quantity * price;

        if (!employeeRevenueMap[empId]) {
            employeeRevenueMap[empId] = 0;
        }
        employeeRevenueMap[empId] += orderRevenue;
    }

    const result = [];
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        result.push({
            id: employee.id,
            name: employee.name,
            age: employee.age,
            status: employee.status,
            totalRevenue: employeeRevenueMap[employee.id] || 0,
        });
    }
    return result;
}
// Bài 9:
function getEmployeesCommission(employees, products, orders) {
    if (!employees || !employees.length) return [];

    const list = getEmployeesWithRevenue(employees, products, orders);

    for (let i = 0; i < list.length; i++) {
        list[i].commission = list[i].totalRevenue * 0.03;
    }

    return list;
}

// console.log(getEmployeesCommission(employees, products, orders));

// Bài 10:
// Quick Sort
function quickSortRevenue(arr) {
    if (arr.length <= 1) return arr;

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;

        if (arr[i].totalRevenue > pivot.totalRevenue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortRevenue(left), pivot, ...quickSortRevenue(right)];
}

function sortEmployeesByRevenueDescending(employees, products, orders) {
    if (!employees.length) return [];
    const employeesWithRevenue = getEmployeesWithRevenue(
        employees,
        products,
        orders,
    );

    return quickSortRevenue(employeesWithRevenue);
}

console.log(sortEmployeesByRevenueDescending(employees, products, orders));
