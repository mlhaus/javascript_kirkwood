const d = new Date();
const dayOfWeek = d.getDay();
console.log(dayOfWeek);
switch (dayOfWeek) {
    case 0:
        console.log('It\'s Sunday Funday!');
        break;
    case 6:
        console.log('It\'s Saturday!');
        break;
    default:
        console.log('It\'s a weekday');
        break;
}

let age = 25;
console.log('You can watch movies rated:');
switch (true) {
    case (age >= 17):
        console.log('R');
    case (age >= 13):
        console.log('PG-13');
    case (age >= 8):
        console.log('PG');
    default:
        console.log('G');
}