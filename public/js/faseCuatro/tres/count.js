// $('.incorrectGlobal3').on('click', function () {
//     var count = parseInt($(this).data('click')) || 0;
//     count = count + 1;
//     $('.incorrectGlobal3').each(function () {
//         $(this).data('click', count);

//         console.log("Contador Global Fase 1: " + count);

//         if (count == 5) {
//             count = 0;

//             document.getElementById('instructivoCuatro_Tres').style.display = 'none';
//             //Fase 3H1
//             document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
//             //Fase 3H2
//             document.getElementById('Fase4_preguntaTresH2_uno').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
//             //Fase 3H3
//             document.getElementById('Fase4_preguntaTresH3_uno').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
//             //Fase 3H4
//             document.getElementById('Fase4_preguntaTresH4_uno').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

//             //Fase 3I4
//             document.getElementById('Fase4_preguntaTresI').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
//             document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
//             document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
//             document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
//             document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
//             document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
//             document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

//             //Fase 3I4 Correctos
//             document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
//             document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
//             document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
//             document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
//             document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
//             document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
//             document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
//             document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = 'none';

//             //Fase 3I4 Incorrecto
//             document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

//             //Fase 3J4
//             document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
//             document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
//             document.getElementById('gracias').style.display = '';
//         }
//     });

// });

//Correct/Incorrect 
$('.incorrectH1').click(function () {
    $('.correctH1').data('click', 0);
});

$('.correctH1').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctH1').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {
            count = 0;

            document.getElementById('instructivoCuatro_Tres').style.display = 'none';
            //Fase 3H1
            document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
            //Fase 3H2
            document.getElementById('Fase4_preguntaTresH2_uno').style.display = '';
            document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
            //Fase 3H3
            document.getElementById('Fase4_preguntaTresH3_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
            //Fase 3H4
            document.getElementById('Fase4_preguntaTresH4_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

            //Fase 3I4
            document.getElementById('Fase4_preguntaTresI').style.display = 'none';
            document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Correctos
            document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Incorrecto
            document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

            //Fase 3J4
            document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
            document.getElementById('gracias').style.display = 'none';
        }

    });

});

//Correct/Incorrect 
$('.incorrectH2').click(function () {
    $('.correctH2').data('click', 0);
});

$('.correctH2').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctH2').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {
            count = 0;

            document.getElementById('instructivoCuatro_Tres').style.display = 'none';
            //Fase 3H1
            document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
            //Fase 3H2
            document.getElementById('Fase4_preguntaTresH2_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
            //Fase 3H3
            document.getElementById('Fase4_preguntaTresH3_uno').style.display = '';
            document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
            //Fase 3H4
            document.getElementById('Fase4_preguntaTresH4_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

            //Fase 3I4
            document.getElementById('Fase4_preguntaTresI').style.display = 'none';
            document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Correctos
            document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Incorrecto
            document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

            //Fase 3J4
            document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
            document.getElementById('gracias').style.display = 'none';
        }

    });

});

//Correct/Incorrect 
$('.incorrectH3').click(function () {
    $('.correctH3').data('click', 0);
});

$('.correctH3').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctH3').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {
            count = 0;

            document.getElementById('instructivoCuatro_Tres').style.display = 'none';
            //Fase 3H1
            document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
            //Fase 3H2
            document.getElementById('Fase4_preguntaTresH2_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
            //Fase 3H3
            document.getElementById('Fase4_preguntaTresH3_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
            //Fase 3H4
            document.getElementById('Fase4_preguntaTresH4_uno').style.display = '';
            document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

            //Fase 3I4
            document.getElementById('Fase4_preguntaTresI').style.display = 'none';
            document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Correctos
            document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Incorrecto
            document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

            //Fase 3J4
            document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
            document.getElementById('gracias').style.display = 'none';
        }

    });

});

//Correct/Incorrect 
$('.incorrectH4').click(function () {
    $('.correctH4').data('click', 0);
});

$('.correctH4').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctH4').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {

            document.getElementById('instructivoCuatro_Tres').style.display = 'none';
            //Fase 3H1
            document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
            //Fase 3H2
            document.getElementById('Fase4_preguntaTresH2_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
            //Fase 3H3
            document.getElementById('Fase4_preguntaTresH3_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
            //Fase 3H4
            document.getElementById('Fase4_preguntaTresH4_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

            //Fase 3I4
            document.getElementById('Fase4_preguntaTresI').style.display = '';
            document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Correctos
            document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Incorrecto
            document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

            //Fase 3J4
            document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
            document.getElementById('gracias').style.display = 'none';
        }

    });

});

//Correct/Incorrect 
$('.incorrectI').click(function () {
    $('.correctI').data('click', 0);
});

$('.correctI').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctI').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {

            document.getElementById('instructivoCuatro_Tres').style.display = 'none';
            //Fase 3H1
            document.getElementById('Fase4_preguntaTresH_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH_seis').style.display = 'none';
            //Fase 3H2
            document.getElementById('Fase4_preguntaTresH2_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH2_seis').style.display = 'none';
            //Fase 3H3
            document.getElementById('Fase4_preguntaTresH3_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH3_seis').style.display = 'none';
            //Fase 3H4
            document.getElementById('Fase4_preguntaTresH4_uno').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_tres').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cuatro').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_cinco').style.display = 'none';
            document.getElementById('Fase4_preguntaTresH4_seis').style.display = 'none';

            //Fase 3I4
            document.getElementById('Fase4_preguntaTresI').style.display = 'none';
            document.getElementById('Fase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('Fase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('Fase4_PreguntaTresICuatro_dos').style.display = 'none';

            //Fase 3I4 Correctos
            document.getElementById('correctoFase4_preguntaTresI').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresI_dos').style.display = 'none';
            document.getElementById('correctoFase4_preguntaTresIDos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresIDos_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresITres_dos').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro').style.display = 'none';
            document.getElementById('correctoFase4_PreguntaTresICuatro_dos').style.display = '';

            //Fase 3I4 Incorrecto
            document.getElementById('incorrectoFase4_PreguntaTresI').style.display = 'none';

            //Fase 3J4
            document.getElementById('fase4_PreguntaTresJ').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJ_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJDos_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJTres_dos').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro').style.display = 'none';
            document.getElementById('fase4_PreguntaTresJCuatro_dos').style.display = 'none';
            document.getElementById('gracias').style.display = 'none';
        }

    });

});

//Correct/Incorrect 
$('.incorrectJ').click(function () {
    $('.correctJ').data('click', 0);
});

$('.correctJ').on('click', function () {
    var count = parseInt($(this).data('click')) || 0;
    count = count + 1;
    $('.correctJ').each(function () {
        $(this).data('click', count);

        console.log(count);

        if (count == 2) {
            window.location.href = "fase4.html"
        }

    });

});