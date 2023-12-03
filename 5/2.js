let firstNumber;
while (true) {
    firstNumber = prompt("Введіть перше число:");
    if (!isNaN(firstNumber)) {
        break;
    } else {
        alert("Будь ласка, введіть число.");
    }
}

let secondNumber;
while (true) {
    secondNumber = prompt("Введіть друге число (різне від першого):");
    if (!isNaN(secondNumber) && parseFloat(secondNumber) !== parseFloat(firstNumber)) {
        break;
    } else {
        alert("Будь ласка, введіть інше число, різне від першого.");
    }
}

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

let sum = 0;
let product = 1;

const start = Math.min(firstNumber, secondNumber);
const end = Math.max(firstNumber, secondNumber);

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        product *= i;
    } else {

        sum += i;
    }
}

alert("Сума = " + sum + ", Добуток = " + product);
