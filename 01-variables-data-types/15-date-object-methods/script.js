const d = new Date();
console.log(d.getMonth());
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(months[d.getMonth()]);
console.log(d.toLocaleString('en-US', {month: 'long'}));
console.log(d.toLocaleString('en-US', {month: 'short'}));
console.log(d.toLocaleString('en-US', {month: 'numeric'}));
console.log(d.toLocaleString('ja-JP', {month: 'long'}));
console.log(d.toLocaleString('ja-JP', {month: 'short'}));
console.log(d.toLocaleString('ja-JP', {month: 'numeric'}));

console.log(d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
}));