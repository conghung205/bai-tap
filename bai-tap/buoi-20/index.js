// =================== Bài 1 ==================
const numbers = [9, 8, 3, 5, 6, 1, 2, 7, 9];

function getSecondLargeNumber(numbers) {
    if (numbers.length < 2) return null;

    let max = -Infinity;
    let secondNumber = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        if (current > max) {
            secondNumber = max;
            max = current;
        } else if (current < max && current > secondNumber) {
            secondNumber = current;
        }
    }

    return secondNumber;
}

console.log(getSecondLargeNumber(numbers));

// ==================== Bài 2 =====================

const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

const newArr = [...classA, ...classB];
const arrayMap = {};
const arrayID = [];

// hash map to filter repeated elements.
for (let i = 0; i < newArr.length; i++) {
    arrayMap[newArr[i]] = true;
}

//Add the processed elements to the array.
for (let key in arrayMap) {
    arrayID.push(Number(key));
}

//quickSort ascending elements
function quickSort(studentsID) {
    const length = studentsID.length;

    if (length <= 1) return studentsID;

    const mid = Math.floor(length / 2);
    const pivot = studentsID[mid];

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < length; i++) {
        const current = studentsID[i];
        if (current === pivot) continue;

        if (current < pivot) {
            leftArr.push(current);
        } else {
            rightArr.push(current);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort(arrayID));
