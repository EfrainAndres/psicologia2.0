// $('.incorrectGlobal3').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectGlobal3').each(function () {
//     $(this).data('click', count);

//     console.log("Contador Global Fase 1: " + count);

//     if (count == 5) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = '';
//     }
//   });

// });

//Correct/Incorrect 
$('.incorrectA').click(function() {
  $('.correctA').data('click', 0);
});

$('.correctA').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctA').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = '';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresB_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectB').click(function() {
  $('.correctB').data('click', 0);
});

$('.correctB').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctB').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = '';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresC_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectC').click(function() {
  $('.correctC').data('click', 0);
});

$('.correctC').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctC').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = '';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectC2').click(function() {
  $('.correctC2').data('click', 0);
});

$('.correctC2').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctC2').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = '';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectD').click(function() {
  $('.correctD').data('click', 0);
});

$('.correctD').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctD').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = '';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresE_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectE').click(function() {
  $('.correctE').data('click', 0);
});

$('.correctE').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctE').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = '';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresF_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectF').click(function() {
  $('.correctF').data('click', 0);
});

$('.correctF').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctF').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = '';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectF2').click(function() {
  $('.correctF2').data('click', 0);
});

$('.correctF2').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctF2').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = '';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectG').click(function() {
  $('.correctG').data('click', 0);
});

$('.correctG').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctG').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = '';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresG2_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectG2').click(function() {
  $('.correctG2').data('click', 0);
});

$('.correctG2').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctG2').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = '';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresG3_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectG3').click(function() {
  $('.correctG3').data('click', 0);
});

$('.correctG3').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctG3').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = '';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresG4_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectG4').click(function() {
  $('.correctG4').data('click', 0);
});

$('.correctG4').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctG4').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = '';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaTresH_uno').click(); }, 3000);
    }

  });

});

//Correct/Incorrect 
$('.incorrectH1').click(function() {
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
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = '';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectH2').click(function() {
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
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = '';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = 'none';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectH3').click(function() {
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
      //Anuncios
      document.getElementById('anuncio1').style.display = 'none';
      document.getElementById('anuncio2').style.display = 'none';
      document.getElementById('anuncio3').style.display = 'none';

      //Incorrectos

      document.getElementById('incorrectoTresA').style.display = 'none';
      document.getElementById('incorrectoTresB').style.display = 'none';
      document.getElementById('incorrectoTresD').style.display = 'none';
      document.getElementById('incorrectoTresE').style.display = 'none';
      document.getElementById('incorrectoTresG1').style.display = 'none';
      document.getElementById('incorrectoTresG2').style.display = 'none';
      document.getElementById('incorrectoTresG3').style.display = 'none';
      document.getElementById('incorrectoTresG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTresA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
      document.getElementById('preguntaTresA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
      document.getElementById('preguntaTresA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
      document.getElementById('preguntaTresA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
      document.getElementById('preguntaTresA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
      document.getElementById('preguntaTresA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaTresB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
      document.getElementById('preguntaTresB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
      document.getElementById('preguntaTresB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
      document.getElementById('preguntaTresB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
      document.getElementById('preguntaTresB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
      document.getElementById('preguntaTresB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaTresC_uno').style.display = 'none';
      document.getElementById('preguntaTresC_dos').style.display = 'none';
      document.getElementById('preguntaTresC_tres').style.display = 'none';
      document.getElementById('preguntaTresC_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC_cinco').style.display = 'none';
      document.getElementById('preguntaTresC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaTresC2_uno').style.display = 'none';
      document.getElementById('preguntaTresC2_dos').style.display = 'none';
      document.getElementById('preguntaTresC2_tres').style.display = 'none';
      document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresC2_cinco').style.display = 'none';
      document.getElementById('preguntaTresC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaTresD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
      document.getElementById('preguntaTresD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
      document.getElementById('preguntaTresD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
      document.getElementById('preguntaTresD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
      document.getElementById('preguntaTresD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
      document.getElementById('preguntaTresD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaTresE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
      document.getElementById('preguntaTresE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
      document.getElementById('preguntaTresE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
      document.getElementById('preguntaTresE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
      document.getElementById('preguntaTresE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
      document.getElementById('preguntaTresE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaTresF_uno').style.display = 'none';
      document.getElementById('preguntaTresF_dos').style.display = 'none';
      document.getElementById('preguntaTresF_tres').style.display = 'none';
      document.getElementById('preguntaTresF_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF_cinco').style.display = 'none';
      document.getElementById('preguntaTresF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaTresF2_uno').style.display = 'none';
      document.getElementById('preguntaTresF2_dos').style.display = 'none';
      document.getElementById('preguntaTresF2_tres').style.display = 'none';
      document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresF2_cinco').style.display = 'none';
      document.getElementById('preguntaTresF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaTresG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
      document.getElementById('preguntaTresG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
      document.getElementById('preguntaTresG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
      document.getElementById('preguntaTresG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
      document.getElementById('preguntaTresG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaTresG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
      document.getElementById('preguntaTresG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
      document.getElementById('preguntaTresG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
      document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
      document.getElementById('preguntaTresG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaTresG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
      document.getElementById('preguntaTresG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
      document.getElementById('preguntaTresG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
      document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
      document.getElementById('preguntaTresG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaTresG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
      document.getElementById('preguntaTresG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
      document.getElementById('preguntaTresG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
      document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
      document.getElementById('preguntaTresG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaTresH_uno').style.display = 'none';
      document.getElementById('preguntaTresH_dos').style.display = 'none';
      document.getElementById('preguntaTresH_tres').style.display = 'none';
      document.getElementById('preguntaTresH_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH_cinco').style.display = 'none';
      document.getElementById('preguntaTresH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaTresH2_uno').style.display = 'none';
      document.getElementById('preguntaTresH2_dos').style.display = 'none';
      document.getElementById('preguntaTresH2_tres').style.display = 'none';
      document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH2_cinco').style.display = 'none';
      document.getElementById('preguntaTresH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaTresH3_uno').style.display = 'none';
      document.getElementById('preguntaTresH3_dos').style.display = 'none';
      document.getElementById('preguntaTresH3_tres').style.display = 'none';
      document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH3_cinco').style.display = 'none';
      document.getElementById('preguntaTresH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaTresH4_uno').style.display = '';
      document.getElementById('preguntaTresH4_dos').style.display = 'none';
      document.getElementById('preguntaTresH4_tres').style.display = 'none';
      document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
      document.getElementById('preguntaTresH4_cinco').style.display = 'none';
      document.getElementById('preguntaTresH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';
    }

  });

});

//Correct/Incorrect 
$('.incorrectH4').click(function() {
  $('.correctH4').data('click', 0);
});

$('.correctH4').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.correctH4').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      
      window.location.href = "/f4"
    }

  });

});

//incorrect

// $('.incorrectA').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectA').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = '';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectB').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectB').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = '';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectC').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectC').each(function () {
//     $(this).data('click', count);

//     console.log("Incorrecto C " + count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = '';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectC2').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectC2').each(function () {
//     $(this).data('click', count);

//     console.log("Incorrecto C2 " + count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = '';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectD').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectD').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = '';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectE').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectE').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = '';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectF').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectF').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = '';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectF2').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectF2').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = '';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectG').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectG').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = '';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectG2').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectG2').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = '';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectG3').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectG3').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = '';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectG4').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectG4').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = '';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

// $('.incorrectH').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectH').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 1) {
//       count = 0;
//       //Anuncios
//       document.getElementById('anuncio1').style.display = 'none';
//       document.getElementById('anuncio2').style.display = 'none';
//       document.getElementById('anuncio3').style.display = 'none';

//       //Incorrectos

//       document.getElementById('incorrectoTresA').style.display = 'none';
//       document.getElementById('incorrectoTresB').style.display = 'none';
//       document.getElementById('incorrectoTresD').style.display = 'none';
//       document.getElementById('incorrectoTresE').style.display = 'none';
//       document.getElementById('incorrectoTresG1').style.display = 'none';
//       document.getElementById('incorrectoTresG2').style.display = 'none';
//       document.getElementById('incorrectoTresG3').style.display = 'none';
//       document.getElementById('incorrectoTresG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTresA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_uno').style.display = 'none';
//       document.getElementById('preguntaTresA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_dos').style.display = 'none';
//       document.getElementById('preguntaTresA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_tres').style.display = 'none';
//       document.getElementById('preguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_cinco').style.display = 'none';
//       document.getElementById('preguntaTresA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaTresB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_uno').style.display = 'none';
//       document.getElementById('preguntaTresB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_dos').style.display = 'none';
//       document.getElementById('preguntaTresB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_tres').style.display = 'none';
//       document.getElementById('preguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_cinco').style.display = 'none';
//       document.getElementById('preguntaTresB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaTresC_uno').style.display = 'none';
//       document.getElementById('preguntaTresC_dos').style.display = 'none';
//       document.getElementById('preguntaTresC_tres').style.display = 'none';
//       document.getElementById('preguntaTresC_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaTresC2_uno').style.display = 'none';
//       document.getElementById('preguntaTresC2_dos').style.display = 'none';
//       document.getElementById('preguntaTresC2_tres').style.display = 'none';
//       document.getElementById('preguntaTresC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresC2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaTresD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_uno').style.display = 'none';
//       document.getElementById('preguntaTresD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_dos').style.display = 'none';
//       document.getElementById('preguntaTresD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_tres').style.display = 'none';
//       document.getElementById('preguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_cinco').style.display = 'none';
//       document.getElementById('preguntaTresD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaTresE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_uno').style.display = 'none';
//       document.getElementById('preguntaTresE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_dos').style.display = 'none';
//       document.getElementById('preguntaTresE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_tres').style.display = 'none';
//       document.getElementById('preguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_cinco').style.display = 'none';
//       document.getElementById('preguntaTresE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaTresF_uno').style.display = 'none';
//       document.getElementById('preguntaTresF_dos').style.display = 'none';
//       document.getElementById('preguntaTresF_tres').style.display = 'none';
//       document.getElementById('preguntaTresF_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaTresF2_uno').style.display = 'none';
//       document.getElementById('preguntaTresF2_dos').style.display = 'none';
//       document.getElementById('preguntaTresF2_tres').style.display = 'none';
//       document.getElementById('preguntaTresF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresF2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaTresG_uno').style.display = '';
//       document.getElementById('correctoPreguntaTresG_uno').style.display = 'none';
//       document.getElementById('preguntaTresG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_dos').style.display = 'none';
//       document.getElementById('preguntaTresG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_tres').style.display = 'none';
//       document.getElementById('preguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaTresG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_uno').style.display = 'none';
//       document.getElementById('preguntaTresG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_dos').style.display = 'none';
//       document.getElementById('preguntaTresG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_tres').style.display = 'none';
//       document.getElementById('preguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaTresG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_uno').style.display = 'none';
//       document.getElementById('preguntaTresG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_dos').style.display = 'none';
//       document.getElementById('preguntaTresG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_tres').style.display = 'none';
//       document.getElementById('preguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaTresG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_uno').style.display = 'none';
//       document.getElementById('preguntaTresG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_dos').style.display = 'none';
//       document.getElementById('preguntaTresG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_tres').style.display = 'none';
//       document.getElementById('preguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaTresG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaTresH_uno').style.display = 'none';
//       document.getElementById('preguntaTresH_dos').style.display = 'none';
//       document.getElementById('preguntaTresH_tres').style.display = 'none';
//       document.getElementById('preguntaTresH_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaTresH2_uno').style.display = 'none';
//       document.getElementById('preguntaTresH2_dos').style.display = 'none';
//       document.getElementById('preguntaTresH2_tres').style.display = 'none';
//       document.getElementById('preguntaTresH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH2_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaTresH3_uno').style.display = 'none';
//       document.getElementById('preguntaTresH3_dos').style.display = 'none';
//       document.getElementById('preguntaTresH3_tres').style.display = 'none';
//       document.getElementById('preguntaTresH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH3_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaTresH4_uno').style.display = 'none';
//       document.getElementById('preguntaTresH4_dos').style.display = 'none';
//       document.getElementById('preguntaTresH4_tres').style.display = 'none';
//       document.getElementById('preguntaTresH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaTresH4_cinco').style.display = 'none';
//       document.getElementById('preguntaTresH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

