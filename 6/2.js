function isPalindrome(str) {
   if (str.length === 0) {
     return false;
   }
   const reversedStr = str.split('').reverse().join('');
   
   return str === reversedStr;
 }
 console.log(isPalindrome(''));        // false
 console.log(isPalindrome('b'));       // true
 console.log(isPalindrome('mom'));     // true
 console.log(isPalindrome('string'));  // false
 console.log(isPalindrome('bag'));     // false
 