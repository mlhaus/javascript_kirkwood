$(() => {
    // console.log('Ready!');
    $('li')
        .each(function () {
            let $li = $(this);
            console.log($li.text(), this.textContent);
        })
        .addClass('colorize')
        .on('mouseover', function () {
            console.log($(this).text());
        });
    // $('li').css({color: 'white', backgroundColor: 'black', padding: '5px'});
    // $('li').addClass('colorize');


    $('li')
        .click(function () {
            console.log(this.textContent);
            $(this).toggleClass('colorize');
        })
        .first().css({color: 'blue'});
    $('ul').find('li:nth-of-type(2)').css({color: 'green'});

    let h1Hidden = false;
    $('header').click(() => {
        // $('header h1').toggle();
        if (h1Hidden) {
            $('header h1').slideDown(500); // fadeIn
            h1Hidden = false;
        } else {
            $('header h1').slideUp(500); // fadeOut
            h1Hidden = true;
        }

    });


    $('#show-hide').on('click', () => {
        console.log('Hi');
    });
    $('#show-hide').click(() => {
        console.log('Hello');
    });
});
