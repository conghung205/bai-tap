const products = [
    { id: 1, name: "iPhone", price: 2000 },
    { id: 2, name: "Samsung", price: 1500 },
    { id: 3, name: "Xiaomi", price: 1000 },
    { id: 4, name: "Oppo", price: 1200 },
];
const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
        ],
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 },
        ],
    },
];

//Question: Find the product with the highest revenue

function getProductWithHighestRevenue(products, orders) {
    // hashmap
    const productMap = {};

    for (let i = 0; i < products.length; i++) {
        productMap[products[i].id] = products[i];
    }

    // Create object to store product ID and revenue
    const revenues = {};

    // loop orders to calculate
    for (let i = 0; i < orders.length; i++) {
        const items = orders[i].items;

        for (let j = 0; j < items.length; j++) {
            const productId = items[j].productId;
            const quantity = items[j].quantity;

            // Take out the products to calculate revenue
            const product = productMap[productId];
            const revenue = product.price * quantity;

            //Check if the "revenues" object already has "productId"
            if (revenues[productId]) {
                revenues[productId] += revenue;
            } else {
                revenues[productId] = revenue;
            }
        }
    }

    //Initialize variables to store maxRevenue and bestProductId
    let maxRevenue = 0;
    let bestProductId = null;

    //Get the product ID from revenues to check for the highest revenue
    const keys = Object.keys(revenues);

    for (let i = 0; i < keys.length; i++) {
        const productId = keys[i];

        if (revenues[productId] > maxRevenue) {
            maxRevenue = revenues[productId];
            bestProductId = productId;
        }
    }

    return {
        product: productMap[bestProductId].name,
        revenue: maxRevenue,
    };
}
console.log(getProductWithHighestRevenue(products, orders));
