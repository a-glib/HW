while (true) {
   let userInput = prompt("Введіть будь-яке число:");
   if (!isNaN(userInput)) {
       let number = parseFloat(userInput);
       if (number >= 123) {
           alert("Wow, you've ended this endless cycle!");
           break;
         } 
       else {
           alert("Should continue");
       }
    } else {
       alert("Only numbers, please");
   }
}
