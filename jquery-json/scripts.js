$(document).ready(function () {
    $('#photo-gallery').hide();

    const fileName = 'https://randomuser.me/api/?results=20&seed=abc&nat=us,fr,de&inc=name,picture,location,nat,dob';
    const settings = {method: 'GET', dataType: 'json'};
    $.ajax(fileName, settings)
        .then(data => {
            // console.log the data attribute first to see what is returned.
            const arrOfPeople = data.results;
            for (let person of arrOfPeople) {

            }
            arrOfPeople.forEach(person => {
                Person.all.push(new Person(person));
            });
            // console.log(Person.all);
            // console.log(Person.all[0].sayHi());
        })
        .then(() => {
            renderData();
            renderFilters();
            $('#spinner-outer').delay(2000).fadeOut();
            $('#photo-gallery').delay(1500).fadeIn();
        });
});

function renderData() {
    Person.all.forEach(person => $('#photo-gallery').append(person.render()));
    $('.person-template').remove();
}

function renderFilters() {
    Person.allCountries.sort();
    Person.allCountries.forEach(country => {
        const $option = $('<option>').text(country).attr('value', country);
        $('#country-filter').append($option);
    });
}

$('#country-filter').on('change', function () {
    if ($(this).val() !== '') {
        $('.person').hide();
        const country = $(this).val();
        $(`.person[data-country*="${country}"]`).fadeIn();
    } else {
        // if "All" is selected
        $('.person').fadeIn();
    }
});

function Person(obj) {
    // instance variables (belong to an individual object)
    this.firstName = obj.name.first;
    this.lastName = obj.name.last;
    this.image = obj.picture.large;
    this.country = obj.location.country;
    if (!Person.allCountries.includes(this.country)) {
        Person.allCountries.push(this.country);
    }
}

// static variables (belong to all objects)
Person.all = [];
Person.allCountries = [];
// methods (actions the objects can perform)
Person.prototype.sayHi = function () {
    return `${this.firstName} says hi`;
};
Person.prototype.render = function () {
    const $template = $('.person-template').clone();
    $template.removeClass('person-template');
    $template.find('.fullName').text(`${this.firstName} ${this.lastName}`);
    $template.find('.profileImage').attr('src', this.image);
    $template.find('.profileImage').attr('alt', `${this.firstName} ${this.lastName}`);
    $template.find('.location').text(this.country);
    $template.attr('data-country', this.country);
    return $template;
};