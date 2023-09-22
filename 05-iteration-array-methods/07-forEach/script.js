const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Short form
socials.forEach(item => console.log(item));
console.log();

// We can also pass in the index
socials.forEach((item, index) => console.log(`${index} - ${item}`));
console.log();


// Array of objects
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Linkedin', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
];

socialObjs.forEach((item) => {
    console.log(`<a href="${item.url}" target="_blank">${item.name}</a>`);
});