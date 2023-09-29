const numbers = [1, 2, 3, 4, 5];
const evenNumbersDoubled = numbers.map(number => {
    if (number % 2 === 0) {
        return number * 2;
    }
    return number;
});
console.log(numbers);
console.log(evenNumbersDoubled);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const companyYearsOpen = companies.map(company => {
    return {name: company.name, yearsOpen: company.end - company.start};
});
console.log(companyYearsOpen);

const numbersSquaredDiv2 =
    numbers
        .map(number => number * number)
        .map(number => number / 2);
console.log(numbersSquaredDiv2);


