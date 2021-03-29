class Creation {
    constructor() {

        let e = {
            0 : ('<p> Meilleurs Personnages DPS </p>'),
            1 : ('<p> Meilleurs Personnages AOE </p>'),
            2 : ('<p> Meilleurs Personnages Healer </p>'),
            3 : ('<p> Meilleurs Personnages Tank </p>')
        };

        let f = {
            1 : "DPS",
            2 : "AOE",
            3 : "Healer",
            4 : "Tank",
        };

        var bool = false;

        var Personnage = "Meliodas";

        $('#homepage').append($('<div class="container_top">')
            .append(
            $('<h1> Seven Deadly Sins Grand Cross </h1>')
            )
            .append($('<h2> Bienvenue sur le guide français </h2>')
            )
            .append($('<h3> Ce guide vous permettra de prendre connaissance de tous les personnages du jeu ainsi que de leurs compétences et statistiques détaillés. <br>\n' +
                '        Vous pourrez également avoir accès à une tier list du jeu pour vous permettre d\'avoir une vue d\'ensemble des personnages. </h3>')
            )
        )

        $('#homepage').append(
            $('<div class="container_mid">').append(
                $('<div class="container_mid_top">')
                    .append(
                        $('<div class="container_mid_top_text">').append('<p> Meilleurs Personnages </p>')
                    ).append(
                        $('<div class="container_mid_top_img">').append()
                    )
            ).append(
                $('<div class="container_mid_bottom">')
            )
        )

        for (let i = 1; i < 4; i++) {
           $("." + 'container_mid_top_img').append(
               $('<img src="Image/Best_characters/Best/' + i + '.png">')
           )
        }

        for (let i = 1; i < 5; i++) {
            $("." + 'container_mid_bottom').append(
                $('<div class="container_mid_' + i + '">')
                    .append(
                        $('<div class="container_mid_' + i + '_text">').append(e[i - 1])
                    ).append(
                    $('<div class="container_mid_' + i + '_img">')/*.ready((function () {
                        console.log("." + 'container_mid_' + i +'_img')
                        $("." + 'container_mid_' + i +'_img').append(
                            $('<img src="Image/Best_characters/' + f[i] + '/1.png">')
                        )
                        console.log("au revoir");
                    }) ())*/
                )
            )
            for (let j = 1; j < 4; j++) {
                $("." + 'container_mid_' + i + '_img').append(
                    $('<img src="Image/Best_characters/' + f[i] + '/' + j + '.png">')
                )
            }
        }

        $('img').click(function(){
            Personnage = this.src;
            console.log(Personnage);
        })


        $('.aCharacters').click(function (){
            $('section').fadeOut("slow");
            if (bool === false) {
                CreationCharacter();
                bool = true;
            }
            $('#characters').fadeIn("slow");
            document.getElementById("characters").style.display = "flex";
        })

        $('.aHomepage').click(function (){
            $('section').fadeOut("slow");
            $('#homepage').fadeIn("slow");
            document.getElementById("homepage").style.display = "block";
        })

    }
}

(function () {
    $(document).ready(function() {
        new Creation();
        document.getElementById("characters").style.display = "none";
    });
}) ();