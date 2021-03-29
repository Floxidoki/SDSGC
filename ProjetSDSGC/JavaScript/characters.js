var CreationCharacter = function() {
    'use strict';

    $(() => {
        $.ajax({
            url: 'Json/test.json',
            method: 'get',
        }).done(function(data) {
            // console.log(data);
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    $('.list').append(
                        $('<div class="' + data[key].name + data[key].number + '">').append(
                            $('<img/>').attr({'src' : 'https://rerollcdn.com/SDSGC/portraits/portrait_' + data[key].number + '.png',})
                        ).append(
                            $('</p>').html(data[key].name)
                        )
                    );
                }
            }
        }).fail(function() {
            $('body').html('Une erreur critique est arrivée.');
        });
    });
}

