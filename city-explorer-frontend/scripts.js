let api_url = '';
if (location.protocol !== 'https:') {
    api_url = 'http://localhost:3000';
} else {
    api_url = 'https://city-explorer-beige.vercel.app';
}
$(() => {
    $('#search-form').on('submit', function (event) {
        event.preventDefault();
        $('#spinner-outer').css('display', 'flex').hide().fadeIn();
        const userSearch = $('#input-search').val();

        const fileName = `${api_url}/location?search=${userSearch}`;
        console.log(fileName);
        const settings = {method: 'GET', dataType: 'json'};
        $.ajax(fileName, settings)
            .then(locationData => {
                getYelp(locationData);
            })
            .catch(error => {
                // Error with my server or with LocationIQ
                $('#query-placeholder').text('Cannot get data.');
                $('#spinner-outer').delay(2000).fadeOut();
                $('#yelp-container').delay(1500).fadeIn();
            });
    });
});

function getYelp(location) {
    $('#query-placeholder').html(`Showing information for "${location.display_name}"`);
    const fileName = `${api_url}/yelp?lat=${location.lat}&lon=${location.lon}`;
    $.get(fileName)
        .then(restaurantData => {
            const arrayOfRestaurants = restaurantData;
            Restaurant.all = [];
            arrayOfRestaurants.forEach(restaurant => {
                Restaurant.all.push(new Restaurant(restaurant));
            });
        })
        .then(() => {
            renderRestaurants();
        })
        .catch(error => {
            // Error with Yelp, Weather, etc.
            $('#query-placeholder').text('Cannot get data. Try again later.');
        });
}

function renderRestaurants() {
    $('#yelp-results').empty();
    Restaurant.all.forEach(restaurant => {
        $('#yelp-results').append(restaurant.render());
    });
    $('#spinner-outer').delay(2000).fadeOut();
    $('#yelp-container').delay(1500).fadeIn();
}

function Restaurant(obj) {
    this.name = obj.name;
    this.rating = obj.rating;
    this.image_url = obj.image_url;
    this.price = obj.price;
    this.url = obj.url;
    this.phone = obj.phone;
    this.categories = obj.categories;
    this.address = obj.address;
    this.city = obj.city;
    this.state = obj.state;
    this.zip = obj.state;
}

Restaurant.all = [];

Restaurant.prototype.render = function () {
    const template = $('#restaurant-template').html();
    const renderedTemplate = Mustache.render(template, this);
    return renderedTemplate;
    // const $template = $('.restaurant-template').clone();
    // $template.removeClass('restaurant-template');
    // $template.find('.name').text(this.name);
    // $template.find('.name').attr('href', this.url);
    // $template.find('.rating').text(this.rating);
    // $template.find('.cost').text(this.price);
    // $template.find('.image').attr('src', this.image_url);
    // $template.find('.image').attr('alt', this.name);
    // console.log($template);
    // return $template;
};









