let api_url = '';
if (location.protocol !== 'https:') {
    api_url = 'http://localhost:3001';
} else {
    api_url = 'https://city-explorer-lp-b781a56c8734.herokuapp.com';
}
$(() => {
    $('#search-form').on('submit', function (event) {
        event.preventDefault();
        const userSearch = $('#input-search').val();

        const fileName = `${api_url}/location?city=${userSearch}`;
        console.log(fileName);
        const settings = {method: 'GET', dataType: 'json'};
        $.ajax(fileName, settings)
            .then(locationData => {
                getYelp(locationData, 1);
                getCurrentWeather(locationData);
            })
            .catch(error => {
                // Error with my server or with LocationIQ
                $('#query-placeholder').text('Cannot get data. Try again later.');
            });
    });
});

function getCurrentWeather(location) {
    const fileName = `${api_url}/weather?latitude=${location.latitude}&longitude=${location.longitude}`;
    const settings = {data: location};
    $.get(fileName, settings)
        .then(resourceData => {
            const currentWeather = new Weather(resourceData);
            $('#current-weather-container').append(currentWeather.renderCurrent());
            $('#current-weather-container').show();
        })
        .catch(error => {
            $('#query-placeholder').text('Cannot get weather data. Try again later.');
        });
}

function getYelp(location, page) {
    $('#query-placeholder').html(`You searched for "${location.search_query}".<br>Showing information for "${location.formatted_query}"`);
    const fileName = `${api_url}/yelp?latitude=${location.latitude}&longitude=${location.longitude}&page=${page}`;
    const settings = {data: location};
    $.get(fileName, settings)
        .then(resourceData => {
            const arrOfRestaurants = resourceData;
            arrOfRestaurants.forEach(restaurant => {
                Restaurant.all.push(new Restaurant(restaurant));
            });
        })
        .then(() => {
            renderData();
        })
        .catch(error => {
            $('#query-placeholder').text('Cannot get restaurant data. Try again later.');
        });
}

function renderData() {
    Restaurant.all.forEach(restaurant => {
        $('#yelp-results').append(restaurant.render())
    });
    $('.restaurant-template').remove();
    $('#yelp-container').show();
}

function Restaurant(obj) {
    this.name = obj.name;
    this.url = obj.url;
    this.rating = obj.rating;
    this.price = obj.price;
    this.image_url = obj.image_url;
}

function Weather(obj) {
    this.description = obj.description;
    this.icon = obj.icon;
    this.current_temp = obj.current_temp;
    this.feels_like = obj.feels_like;
    this.min_temp = obj.min_temp;
    this.max_temp = obj.max_temp;
    this.wind_speed = obj.wind_speed;
    this.wind_direction = obj.wind_direction;
    this.cloud_percent = obj.cloud_percent;
    this.rain_volume_1hr = obj.rain_volume_1hr;
    this.snow_volume_1hr = obj.snow_volume_1hr;
    this.sunrise = obj.sunrise;
    this.sunset = obj.sunset;
}

Weather.prototype.renderCurrent = function () {
    const $weather_container = $('#current-weather-container');
    $weather_container.find('.description').text(this.description);
    $weather_container.find('.icon').attr('src', this.icon);
    $weather_container.find('.temp').text(this.current_temp);
    $weather_container.find('.feels-like-temp').text(this.feels_like);
    $weather_container.find('.high-temp').text(this.min_temp);
    $weather_container.find('.low-temp').text(this.max_temp);
    $weather_container.find('.wind-speed').text(this.wind_speed);
    $weather_container.find('.wind-direction').text(this.wind_direction);
    $weather_container.find('.cloud-percent').text(this.cloud_percent);
    $weather_container.find('.sunrise').text(this.sunrise);
    $weather_container.find('.sunset').text(this.sunset);
};

// static variables (belong to all objects)
Restaurant.all = [];
Restaurant.prototype.render = function () {
    const $template = $('.restaurant-template').clone();
    $template.removeClass('restaurant-template');
    $template.find('.name').text(this.name);
    $template.find('.name').attr('href', this.url);
    $template.find('.image').attr('src', this.image_url);
    $template.find('.image').attr('alt', `this.name`);
    $template.find('.rating').text(this.rating);
    $template.find('.price').text(this.price);
    return $template;
};