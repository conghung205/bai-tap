// ============ Bài 1 =================
function isEvenNumber(number) {
    return number % 2 === 0;
}

console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7)); // Kết quả mong đợi: false

// ============ Bài 2 ==============

// Bậc Số điện tiêu thụ Giá tiền

// 1 0 - 50 kWh 1.678 đ/kWh

// 2 51 - 100 kWh 1.734 đ/kWh

// 3 101 - 200 kWh 2.014 đ/kWh

// 4 201 - 300 kWh 2.536 đ/kWh

// 5 301 - 400 kWh 2.834 đ/kWh

// 6 Trên 400 kWh 2.927 đ/kWh

function getElectricityBill(kwh) {
    let sum = 0;
    if (kwh <= 50) {
        sum = kwh * 1678;
    } else if (kwh <= 100) {
        sum = 50 * 1678 + (kwh - 50) * 1734;
    } else if (kwh <= 200) {
        sum = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
    } else if (kwh <= 300) {
        sum = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
    } else if (kwh <= 400) {
        sum =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            (kwh - 300) * 2834;
    } else {
        sum =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            100 * 2834 +
            (kwh - 400) * 2927;
    }

    return sum;
}

console.log(getElectricityBill(70));
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580

console.log(getElectricityBill(120));
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

console.log(getElectricityBill(220));
// Mong đợi: (50 * 1678) + (50 * 1734) + (100 * 2014) + (20 * 2536) = 422720

//83900 86700 201400 50720

// =========== Bài 3 ===================
function cleanName(name, keyword) {
    const convertNameToLowerCase = name.toLowerCase().trim();
    const convertKeywordToLowerCase = keyword.toLowerCase().trim();

    return convertNameToLowerCase.includes(convertKeywordToLowerCase);
}

console.log(cleanName("   NGUYEN Van An   ", "an")); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName("   Tran Thi B ", "hoang")); // Mong đợi: false
