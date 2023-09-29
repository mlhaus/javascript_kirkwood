const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(numbers);
console.log(evenNumbers);

const evenDouble =
    numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2);
console.log(evenDouble);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007}, //
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},//
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},//
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},//
];

const retailBusinesses =
    companies
        .filter(company => company.category === 'Retail')
        .map(company => {
            return {name: company.name};
        });
console.log(retailBusinesses);

const lastedLessThan10Years =
    companies
        .filter(company => {
            let yearsLasted = company.end - company.start;
            return yearsLasted <= 10;
        })
        .map(company => {
            return {name: company.name};
        });
console.log(lastedLessThan10Years);




