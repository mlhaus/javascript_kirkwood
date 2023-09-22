const library = [
    {
        'title': 'The Catcher in the Rye',
        'author': 'JD Salinger',
        'status': {
            'own': true,
            'reading': false,
            'read': false
        }
    }, {
        'title': 'Romeo and Juliet',
        'author': 'William Shakespeare',
        'status': {
            'own': true,
            'reading': false,
            'read': false
        }
    }, {
        'title': 'The Lord of the Rings',
        'author': 'JRR Tolkien',
        'status': {
            'own': true,
            'reading': false,
            'read': false
        }
    }];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];
console.log(firstBook);

const jsstring = JSON.stringify(library);
console.log(jsstring);