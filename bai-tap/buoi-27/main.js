import {
    renderTable,
    headers,
    renderDialog,
    dataPopup,
} from "./utils/index.js";

const getCustomers = async () => {
    try {
        const response = await fetch("http://localhost:3000/customers");
        return await response.json();
    } catch {
        alert("get data failed");
    }
};

const init = async () => {
    const customers = await getCustomers();

    const panel = document.querySelector(".panel");
    panel.append(renderTable(headers, customers));

    document.body.append(renderDialog(dataPopup));
};

init();
