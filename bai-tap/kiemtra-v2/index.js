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

// Bai 1: Lấy ra danh sách nhân viên đang làm việc

function getEmployeesAreWorking(employees) {
    if (!employees.length) return null;

    return employees.filter((employee) => employee.status === "working");
}

// Bài 2: Lấy ra nhân viên có tuổi lớn nhất
function getOldestEmployee(employees) {
    if (!employees.length) return null;

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

// Bài 3: Lấy ra sản phẩm giá rẻ nhất

function getCheapestProduct(products) {
    if (!products.length) return null;

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

// Bài 4: Tìm ra sản phẩm bán chạy nhất (Bán nhiều nhất về mặt số lượng)

function findBestSellingProduct(products, orders) {
    if (!products.length) return null;

    // hash map, hash join
    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    const quantityMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        quantityMap[order.productId] =
            (quantityMap[order.productId] || 0) + order.quantity;
    }

    let bestProductId = null;
    let maxQuantity = 0;

    for (const productId in quantityMap) {
        const quantity = quantityMap[productId];
        if (quantity > maxQuantity) {
            maxQuantity = quantity;
            bestProductId = productId;
        }
    }

    return productMap[bestProductId];
}
// console.log(findBestSellingProduct(products, orders));

// Bài 5: Tìm ra sản phẩm doanh thu cao nhất (nhiều tiền nhất)
function findHighestRevenueProduct(products, orders) {
    if (!products.length) return null;

    // hash map, hash join
    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    const revenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const productId = order.productId;
        const quantity = order.quantity;
        const price = productMap[productId].price;

        const revenue = price * quantity;

        revenueMap[productId] = (revenueMap[productId] || 0) + revenue;
    }

    let bestProductId = null;
    let maxRevenue = 0;

    for (const productId in revenueMap) {
        const revenue = revenueMap[productId];
        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            bestProductId = productId;
        }
    }

    return {
        product: productMap[bestProductId],
        revenue: maxRevenue,
    };
}

// console.log(findHighestRevenueProduct(products, orders));

// Bài 6: Tìm ra nhân viên bán nhiều hàng nhất
function findEmployeeHighestSellingProduct(employees, orders) {
    if (!employees.length) return null;
    // hash map, hash join
    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }

    const quantityMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        quantityMap[order.employeeId] =
            (quantityMap[order.employeeId] || 0) + order.quantity;
    }

    let bestEmployeeId = null;
    let maxQuantity = 0;

    for (const employeeId in quantityMap) {
        const quantity = quantityMap[employeeId];
        if (quantity > maxQuantity) {
            maxQuantity = quantity;
            bestEmployeeId = employeeId;
        }
    }

    return {
        employee: employeeMap[bestEmployeeId],
        quantity: maxQuantity,
    };
}

// Bài 7: Tìm ra nhân viên có doanh thu cao nhất
function findEmployeeHighestRevenue(employees, orders, products) {
    if (!employees.length) return null;

    // hash map, hash join
    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }
    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    const revenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const quantity = order.quantity;
        const price = productMap[order.productId].price;

        const revenue = price * quantity;

        revenueMap[order.employeeId] =
            (revenueMap[order.employeeId] || 0) + revenue;
    }

    // Tìm employeeId có doanh thu cao nhất
    let bestEmployeeId = null;
    let maxRevenue = 0;

    for (const employeeId in revenueMap) {
        const revenue = revenueMap[employeeId];
        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            bestEmployeeId = employeeId;
        }
    }

    return {
        employee: employeeMap[bestEmployeeId],
        revenue: maxRevenue,
    };
}

// Bài 8: Tìm ra sản phẩm bán có doanh thu cao nhất của mọi nhân viên
function findHighestRevenueProductAllEmployees(products, orders, employees) {
    if (!products.length || !orders.length || !employees.length) return [];
    // hash map, hash join
    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }
    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    const revenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const quantity = order.quantity;
        const price = productMap[order.productId].price;

        const revenue = price * quantity;

        revenueMap[order.employeeId] = revenueMap[order.employeeId] || {};

        revenueMap[order.employeeId][order.productId] =
            (revenueMap[order.employeeId][order.productId] || 0) + revenue;
    }

    const result = [];

    for (const employeeId in revenueMap) {
        const employeeProductsRevenue = revenueMap[employeeId];
        let maxRevenue = 0;
        let bestProductId = null;

        for (const productId in employeeProductsRevenue) {
            const revenue = employeeProductsRevenue[productId];
            if (revenue > maxRevenue) {
                maxRevenue = revenue;
                bestProductId = productId;
            }
        }

        result.push({
            employee: employeeMap[employeeId],
            highestRevenueProduct: productMap[bestProductId],
            revenue: maxRevenue,
        });
    }

    return result;
}
// console.log(findHighestRevenueProductAllEmployees(products, orders, employees));

// ================= Hàm tính tổng doanh thu cho từng nhân viên =================
function calculateTotalRevenueForEmployees(employees, products, orders) {
    if (!products.length || !orders.length || !employees.length) return [];
    // hash map, hash join
    const employeeMap = {};
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeMap[employee.id] = employee;
    }
    const productMap = {};
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productMap[product.id] = product;
    }

    const revenueMap = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const quantity = order.quantity;
        const price = productMap[order.productId].price;

        const revenue = price * quantity;

        revenueMap[order.employeeId] =
            (revenueMap[order.employeeId] || 0) + revenue;
    }

    const result = [];

    for (const employeeId in revenueMap) {
        const totalRevenue = revenueMap[employeeId];
        result.push({
            employee: employeeMap[employeeId],
            totalRevenue,
        });
    }

    return result;
}
// console.log(calculateTotalRevenueForEmployees(employees, products, orders));

// Bài 9: giả sử nhân viên sẽ được nhận hoa hồng là 3% -> tìm hoa hồng cho mọi nhân viên
function findCommissionForAllEmployees(employees, products, orders) {
    if (!products.length || !orders.length || !employees.length) return [];

    const arrEmployeesRevenue = calculateTotalRevenueForEmployees(
        employees,
        products,
        orders,
    );

    return arrEmployeesRevenue.map((epl) => ({
        employee: epl.employee,
        commission: epl.totalRevenue * 0.03,
    }));
}
// console.log(findCommissionForAllEmployees(employees, products, orders));

// Bài 10: sắp xếp nhân viên theo thứ tự giảm dần theo doanh thu
function sortRevenue(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const pivot = arr[mid];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === mid) continue;

        if (arr[i].totalRevenue > pivot.totalRevenue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sortRevenue(left), pivot, ...sortRevenue(right)];
}
function sortEmployeesByRevenueDesc(employees, products, orders) {
    if (!products.length || !orders.length || !employees.length) return [];

    const arrEmployeesRevenue = calculateTotalRevenueForEmployees(
        employees,
        products,
        orders,
    );

    return sortRevenue(arrEmployeesRevenue);
}

console.log(sortEmployeesByRevenueDesc(employees, products, orders));
