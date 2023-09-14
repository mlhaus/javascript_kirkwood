const person = {
    'firstName': 'Marc',
    'middleName': 'Leo',
    'lastName': 'Hauschildt',
    'birth day': '1981-02-06',
    'pets': ['Zipper', 'Waffles'],
    'address': {
        city: 'Iowa City',
        state: 'Iowa',
        zip: '52245'
    },
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person['birth day']);
console.log(person.pets[0]);
console.log(person['pets'][0]);

const json = {
    'results': [
        {
            'gender': 'female',
            'name': {
                'title': 'Miss',
                'first': 'Jennie',
                'last': 'Nichols'
            },
            'location': {
                'street': {
                    'number': 8929,
                    'name': 'Valwood Pkwy',
                },
                'city': 'Billings',
                'state': 'Michigan',
                'country': 'United States',
                'postcode': '63104',
                'coordinates': {
                    'latitude': '-69.8246',
                    'longitude': '134.8719'
                },
                'timezone': {
                    'offset': '+9:30',
                    'description': 'Adelaide, Darwin'
                }
            },
            'email': 'jennie.nichols@example.com',
            'login': {
                'uuid': '7a0eed16-9430-4d68-901f-c0d4c1c3bf00',
                'username': 'yellowpeacock117',
                'password': 'addison',
                'salt': 'sld1yGtd',
                'md5': 'ab54ac4c0be9480ae8fa5e9e2a5196a3',
                'sha1': 'edcf2ce613cbdea349133c52dc2f3b83168dc51b',
                'sha256': '48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d'
            },
            'dob': {
                'date': '1992-03-08T15:13:16.688Z',
                'age': 30
            },
            'registered': {
                'date': '2007-07-09T05:51:59.390Z',
                'age': 14
            },
            'phone': '(272) 790-0888',
            'cell': '(489) 330-2385',
            'id': {
                'name': 'SSN',
                'value': '405-88-3636'
            },
            'picture': {
                'large': 'https://randomuser.me/api/portraits/men/75.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/men/75.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
            },
            'nat': 'US'
        }
    ],
    'info': {
        'seed': '56d27f4a53bd5441',
        'results': 1,
        'page': 1,
        'version': '1.4'
    }
};

console.log(json.results[0].phone);
console.log(json.results[0].picture.large);

const contactName = $('#contact-name'); // document.getElementById('contact-name');
const contactImg = $('#contact-image'); // document.getElementById('contact-image');
const contactEmail = $('#contact-email'); //document.getElementById('contact-email');
// contactName.innerText = `${json.results[0].name.first} ${json.results[0].name.last}`;
contactName.text(`${json.results[0].name.first} ${json.results[0].name.last}`);
// contactImg.setAttribute('src', json.results[0].picture.large);
// contactImg.setAttribute('alt', `${json.results[0].name.first} ${json.results[0].name.last}`);
contactImg.attr('src', json.results[0].picture.large);
contactImg.attr('alt', `${json.results[0].name.first} ${json.results[0].name.last}`);
// contactEmail.innerHTML = `<a href="mailto:${json.results[0].email}?subject=Customer Feedback">Email me</a>`;
contactEmail.html(`<a href="mailto:${json.results[0].email}?subject=Customer Feedback">Email me</a>`);