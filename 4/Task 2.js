let i = prompt("Будь ласка, введіть будь-які дані:");

if (!isNaN(i) && i !== null ) {
    alert('You entered a number');
} else if (i.toLowerCase() === 'true' || i.toLowerCase() === 'false') {
    alert('You entered a boolean');
} else {
    alert('You entered a complex data');
}
//Вар 2
let i = prompt("Будь ласка, введіть будь-які дані:");
switch (true) {
    case !isNaN(i) && i !== null :
        alert("You entered a number");
        break;
    case i.toLowerCase() === 'true' || i.toLowerCase() === 'false':
        alert("You entered a boolean");
        break;
    default:
        alert("You entered a complex data");
}