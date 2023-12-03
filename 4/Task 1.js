let i = prompt ('Введіть будь-яке число');
if (i % 3 === 0 && i % 5 === 0){
      alert("FizzBuzz");
      }
      else if (i % 3 === 0){
      alert("Fizz!");
      }
      else if (i % 5 === 0){
      alert("Buzz!");
      }
      else { 
      alert("Non Divisible");
      }

// Варинат 2 
let i = prompt ('Введіть будь-яке число');
switch (true) {
    case i % 3 === 0 && i % 5 === 0:
        alert("FizzBuzz");
        break;
    case i % 3 === 0:
        alert("Fizz");
        break;
    case i % 5 === 0:
        alert("Buzz");
        break;
    default:
        alert("Non Divisible");
}