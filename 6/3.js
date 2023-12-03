function convertToNumber(str) {
   let result = 0;

   for (let i = 0; i < str.length; i++) {
       const digit = str.charCodeAt(i) - '0'.charCodeAt(0);
       result = result * 10 + digit;
   }

   return result;
}

console.log(convertToNumber('15'));      // 15
console.log(convertToNumber('376'));     // 376
console.log(convertToNumber('100500'));  // 100500
///

function convertToNumber(str, base) {
   if (base < 2 || base > 10) {
       console.error("недопустимая основа системы счисления");
       return NaN;
   }

   let result = 0;

   for (let i = 0; i < str.length; i++) {
       const digit = str.charCodeAt(i) - '0'.charCodeAt(0);

       if (isNaN(digit) || digit < 0 || digit >= base) {
           console.error("Неправильная цифра для указанной системы счисления");
           return NaN;
       }

       result = result * base + digit;
   }

   return result;
}
console.log(convertToNumber("101", 2)); //5
