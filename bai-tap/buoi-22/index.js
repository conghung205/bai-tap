const bill = {
    meta: {
        invoiceNo: "WM-20260521-0001",
        saleDate: "2026/05/21",
        currency: "VND",
        paymentMethod: "Cash", // Tiền mặt / Chuyển khoản...
    },

    seller: {
        name: "WinMark 2 Hai Bà Trưng",
        address: "2 Bà Trưng - HN",
        phone: "012345678",
        representative: "Đại diện WinMark",
    },

    customer: {
        name: "Nguyễn Văn A",
        age: 20,
        address: "Hà Đông, Hà Nội",
    },

    items: [
        {
            no: 1,
            name: "Áo Thun",
            size: "XL",
            quantity: 1,
            price: 200000,
        },
        {
            no: 2,
            name: "Áo Thun",
            size: "XL",
            quantity: 1,
            price: 200000,
        },
    ],

    promotion: {
        description: "Khuyến mãi 50% cho khách hàng thân thiết",
        discountPercent: 50,
    },
};

const app = document.getElementById("app");

const formatPrice = (number) => {
    return number.toLocaleString("vi-VN");
};

// Header
const header = document.createElement("section");
const headerContent = document.createElement("div");
const iconContent = document.createElement("div");
const headerIcon = document.createElement("span");
const headerDesc = document.createElement("p");
const headerBill = document.createElement("div");
const titleInvoice = document.createElement("div");
const codeNumber = document.createElement("div");
const codeNumberContent = document.createElement("span");
const saleDateTitle = document.createElement("div");
const saleDate = document.createElement("span");

header.setAttribute("class", "header");
headerContent.setAttribute("class", "header-content");
iconContent.setAttribute("class", "icon-content");
const iconContentName = document.createElement("p");
headerIcon.textContent = "WM";
iconContentName.textContent = bill.seller.name;
headerDesc.setAttribute("class", "header-desc");
headerDesc.textContent =
    "Cung cấp sản phẩm thời trang cao cấp thiết kế độc quyền";
codeNumberContent.textContent = bill.meta.invoiceNo;
saleDate.textContent = bill.meta.saleDate;
headerBill.setAttribute("class", "header-bill");
titleInvoice.setAttribute("class", "title-invoice");
titleInvoice.textContent = "Hóa đơn bán lẻ";
codeNumber.setAttribute("class", "code-number");
codeNumber.textContent = "Mã số: ";
saleDateTitle.setAttribute("class", "sales-date");
saleDateTitle.textContent = "Ngày bán: ";

iconContent.append(headerIcon, iconContentName);
headerContent.append(iconContent, headerDesc);
codeNumber.appendChild(codeNumberContent);
saleDateTitle.appendChild(saleDate);
headerBill.append(titleInvoice, codeNumber, saleDateTitle);

header.append(headerContent, headerBill);

// ============== Content ==================
const sectionContent = document.createElement("section");
sectionContent.setAttribute("class", "content");
const contentItemLeft = document.createElement("div");
contentItemLeft.setAttribute("class", "content-item");
const contentTitleLeft = document.createElement("div");
contentTitleLeft.setAttribute("class", "content-title");
const contentNameLeft = document.createElement("p");
contentNameLeft.setAttribute("class", "content-name");
const contentAddress = document.createElement("p");
contentAddress.setAttribute("class", "content-desc");
const iconAdress = document.createElement("i");
iconAdress.setAttribute("class", "fa-solid fa-location-dot");
const contentSdt = document.createElement("p");
contentSdt.setAttribute("class", "content-desc");
const iconPhone = document.createElement("i");
iconPhone.setAttribute("class", "fa-solid fa-phone");

contentTitleLeft.textContent = "Đơn vị bán hàng";
contentNameLeft.textContent = bill.seller.name;
contentAddress.textContent = bill.seller.address;
contentAddress.appendChild(iconAdress);
contentSdt.textContent = bill.seller.phone;
contentSdt.appendChild(iconPhone);

const contentItemRight = document.createElement("div");
contentItemRight.setAttribute("class", "content-item");
const contentTitleRight = document.createElement("div");
contentTitleRight.setAttribute("class", "content-title");
const contentNameRight = document.createElement("p");
contentNameRight.setAttribute("class", "content-name");
const contentAgeTitle = document.createElement("p");
contentAgeTitle.textContent = "Tuổi: ";
const contentAge = document.createElement("span");
contentAge.setAttribute("class", "content-desc");
const contentAddressRight = document.createElement("p");
contentAddressRight.setAttribute("class", "content-desc");
const iconAdressRight = document.createElement("i");
iconAdressRight.setAttribute("class", "fa-solid fa-location-dot");

contentTitleRight.textContent = "Khách hàng (Buyer)";
contentNameRight.textContent = bill.customer.name;
contentAge.textContent = bill.customer.age;
contentAgeTitle.appendChild(contentAge);
contentAddressRight.textContent = bill.customer.address;
contentAddressRight.appendChild(iconAdressRight);

contentItemLeft.append(
    contentTitleLeft,
    contentNameLeft,
    contentAddress,
    contentSdt,
);
contentItemRight.append(
    contentTitleRight,
    contentNameRight,
    contentAgeTitle,
    contentAddressRight,
);

sectionContent.append(contentItemLeft, contentItemRight);

// =========================== table ========================
const table = document.createElement("table");
table.setAttribute("class", "table");
const thead = document.createElement("thead");
const thStt = document.createElement("th");
thStt.textContent = "STT";
const thName = document.createElement("th");
thName.textContent = "Tên sản phẩm";
const thSize = document.createElement("th");
thSize.textContent = "Size";
const thQuantity = document.createElement("th");
thQuantity.textContent = "SL";
const thPrice = document.createElement("th");
thPrice.textContent = "Đơn giá";
const thTotalPrice = document.createElement("th");
thTotalPrice.textContent = "Thành tiền";
const productEle = document.createElement("tbody");

const products = bill.items
    .map(
        (item) =>
            `
    <tr>
        <td>${item.no}</td>
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td>${item.quantity}</td>
        <td>${formatPrice(item.price)} đ</td>
        <td>${formatPrice(item.price * item.quantity)} đ</td>
    </tr>
    `,
    )
    .join("");

productEle.innerHTML = products;

thead.append(thStt, thName, thSize, thQuantity, thPrice, thTotalPrice);
table.append(thead, productEle);

// ================ Footer ================

let totalPricePrev = 0;
bill.items.forEach((item) => {
    totalPricePrev += item.price * item.quantity;
});

const discount = totalPricePrev * (bill.promotion.discountPercent / 100);
const priceAfterDiscount = totalPricePrev - discount;

const footer = document.createElement("footer");
footer.setAttribute("class", "footer");
const promotion = document.createElement("div");
promotion.setAttribute("class", "promotion");
const promotionTitle = document.createElement("p");
promotionTitle.setAttribute("class", "promotion-title");
promotionTitle.textContent = "Khuyến mãi / trợ giá";
const promotionDesc = document.createElement("p");
promotionDesc.setAttribute("class", "promotion-desc");
promotionDesc.textContent = bill.promotion.description;

promotion.append(promotionTitle, promotionDesc);

const payment = document.createElement("div");
payment.setAttribute("class", "payment");

const paymentContainer = document.createElement("div");
const paymentGoods = document.createElement("div");
paymentGoods.setAttribute("class", "payment-goods");
const paymentDiscount = document.createElement("div");
paymentDiscount.setAttribute("class", "payment-discount");
const totalPayMent = document.createElement("div");
totalPayMent.setAttribute("class", "total-payment");

paymentGoods.textContent = `Cộng tiền hàng: ${formatPrice(totalPricePrev)} đ`;
paymentDiscount.textContent = `Khấu trừ giảm giá: -${formatPrice(discount)} đ`;
totalPayMent.textContent = `Tổng thanh toán: ${formatPrice(priceAfterDiscount)} đ`;

paymentContainer.append(paymentGoods, paymentDiscount, totalPayMent);
payment.appendChild(paymentContainer);

footer.append(promotion, payment);

// ============ app ==============
app.append(header, sectionContent, table, footer);
