// $('.incorrectGlobal5').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectGlobal5').each(function () {
//     $(this).data('click', count);

//     console.log("Contador Global Fase 1: " + count);

//     if (count == 5) {
//       count = 0;
      

//       //Incorrectos

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = '';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoB_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = '';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoC_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = '';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = '';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = '';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoE_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = '';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoF_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = '';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = '';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = '';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoG2_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = '';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoG3_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = '';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoG4_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = '';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
      //Gracias
      document.getElementById('gracias3').style.display = 'none';

      setTimeout(function () { document.getElementById('irPreguntaCincoH_uno').click(); }, 3000);
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = '';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = '';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = 'none';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      

      //Incorrectos

      document.getElementById('incorrectoCincoA').style.display = 'none';
      document.getElementById('incorrectoCincoB').style.display = 'none';
      document.getElementById('incorrectoCincoD').style.display = 'none';
      document.getElementById('incorrectoCincoE').style.display = 'none';
      document.getElementById('incorrectoCincoG1').style.display = 'none';
      document.getElementById('incorrectoCincoG2').style.display = 'none';
      document.getElementById('incorrectoCincoG3').style.display = 'none';
      document.getElementById('incorrectoCincoG4').style.display = 'none';

      //Fase 3A
      document.getElementById('instructivoCinco').style.display = 'none';
      document.getElementById('preguntaCincoA_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
      document.getElementById('preguntaCincoA_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
      document.getElementById('preguntaCincoA_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
      document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoA_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
      document.getElementById('preguntaCincoA_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

      //Fase 3B
      document.getElementById('preguntaCincoB_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
      document.getElementById('preguntaCincoB_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
      document.getElementById('preguntaCincoB_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
      document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoB_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
      document.getElementById('preguntaCincoB_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

      //Fase 3C1
      document.getElementById('preguntaCincoC_uno').style.display = 'none';
      document.getElementById('preguntaCincoC_dos').style.display = 'none';
      document.getElementById('preguntaCincoC_tres').style.display = 'none';
      document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC_seis').style.display = 'none';
      //Fase 3C2
      document.getElementById('preguntaCincoC2_uno').style.display = 'none';
      document.getElementById('preguntaCincoC2_dos').style.display = 'none';
      document.getElementById('preguntaCincoC2_tres').style.display = 'none';
      document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoC2_seis').style.display = 'none';

      //Fase 3D
      document.getElementById('preguntaCincoD_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
      document.getElementById('preguntaCincoD_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
      document.getElementById('preguntaCincoD_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
      document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoD_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
      document.getElementById('preguntaCincoD_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

      //Fase 3E
      document.getElementById('preguntaCincoE_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
      document.getElementById('preguntaCincoE_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
      document.getElementById('preguntaCincoE_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
      document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoE_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
      document.getElementById('preguntaCincoE_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

      //Fase 3F1
      document.getElementById('preguntaCincoF_uno').style.display = 'none';
      document.getElementById('preguntaCincoF_dos').style.display = 'none';
      document.getElementById('preguntaCincoF_tres').style.display = 'none';
      document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF_seis').style.display = 'none';
      //Fase 3F2
      document.getElementById('preguntaCincoF2_uno').style.display = 'none';
      document.getElementById('preguntaCincoF2_dos').style.display = 'none';
      document.getElementById('preguntaCincoF2_tres').style.display = 'none';
      document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoF2_seis').style.display = 'none';

      //Fase 3G1
      document.getElementById('preguntaCincoG_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
      document.getElementById('preguntaCincoG_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
      document.getElementById('preguntaCincoG_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
      document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
      //Fase 3G2
      document.getElementById('preguntaCincoG2_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
      document.getElementById('preguntaCincoG2_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
      document.getElementById('preguntaCincoG2_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
      document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG2_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
      //Fase 3G3
      document.getElementById('preguntaCincoG3_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
      document.getElementById('preguntaCincoG3_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
      document.getElementById('preguntaCincoG3_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
      document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG3_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
      //Fase 3G4
      document.getElementById('preguntaCincoG4_uno').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
      document.getElementById('preguntaCincoG4_dos').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
      document.getElementById('preguntaCincoG4_tres').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
      document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoG4_seis').style.display = 'none';
      document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

      //Fase 3H1
      document.getElementById('preguntaCincoH_uno').style.display = 'none';
      document.getElementById('preguntaCincoH_dos').style.display = 'none';
      document.getElementById('preguntaCincoH_tres').style.display = 'none';
      document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH_seis').style.display = 'none';
      //Fase 3H2
      document.getElementById('preguntaCincoH2_uno').style.display = 'none';
      document.getElementById('preguntaCincoH2_dos').style.display = 'none';
      document.getElementById('preguntaCincoH2_tres').style.display = 'none';
      document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH2_seis').style.display = 'none';
      //Fase 3H3
      document.getElementById('preguntaCincoH3_uno').style.display = 'none';
      document.getElementById('preguntaCincoH3_dos').style.display = 'none';
      document.getElementById('preguntaCincoH3_tres').style.display = 'none';
      document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH3_seis').style.display = 'none';
      //Fase 3H4
      document.getElementById('preguntaCincoH4_uno').style.display = '';
      document.getElementById('preguntaCincoH4_dos').style.display = 'none';
      document.getElementById('preguntaCincoH4_tres').style.display = 'none';
      document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
      document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
      document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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
      
      window.location.href = "fase4.html"
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

//       document.getElementById('incorrectoCincoA').style.display = '';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = '';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = '';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = '';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = '';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = '';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = '';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = '';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = '';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = '';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = '';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = '';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';

//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
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

//       document.getElementById('incorrectoCincoA').style.display = 'none';
//       document.getElementById('incorrectoCincoB').style.display = 'none';
//       document.getElementById('incorrectoCincoD').style.display = 'none';
//       document.getElementById('incorrectoCincoE').style.display = 'none';
//       document.getElementById('incorrectoCincoG1').style.display = 'none';
//       document.getElementById('incorrectoCincoG2').style.display = 'none';
//       document.getElementById('incorrectoCincoG3').style.display = 'none';
//       document.getElementById('incorrectoCincoG4').style.display = 'none';

//       //Fase 3A
//       document.getElementById('instructivoCinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_uno').style.display = 'none';
//       document.getElementById('preguntaCincoA_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_dos').style.display = 'none';
//       document.getElementById('preguntaCincoA_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_tres').style.display = 'none';
//       document.getElementById('preguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoA_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoA_seis').style.display = 'none';

//       //Fase 3B
//       document.getElementById('preguntaCincoB_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_uno').style.display = 'none';
//       document.getElementById('preguntaCincoB_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_dos').style.display = 'none';
//       document.getElementById('preguntaCincoB_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_tres').style.display = 'none';
//       document.getElementById('preguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoB_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB_seis').style.display = 'none';

//       //Fase 3C1
//       document.getElementById('preguntaCincoC_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC_seis').style.display = 'none';
//       //Fase 3C2
//       document.getElementById('preguntaCincoC2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoC2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoC2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoC2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoC2_seis').style.display = 'none';

//       //Fase 3D
//       document.getElementById('preguntaCincoD_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_uno').style.display = 'none';
//       document.getElementById('preguntaCincoD_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_dos').style.display = 'none';
//       document.getElementById('preguntaCincoD_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_tres').style.display = 'none';
//       document.getElementById('preguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoD_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoD_seis').style.display = 'none';

//       //Fase 3E
//       document.getElementById('preguntaCincoE_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_uno').style.display = 'none';
//       document.getElementById('preguntaCincoE_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_dos').style.display = 'none';
//       document.getElementById('preguntaCincoE_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_tres').style.display = 'none';
//       document.getElementById('preguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoE_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoE_seis').style.display = 'none';

//       //Fase 3F1
//       document.getElementById('preguntaCincoF_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF_seis').style.display = 'none';
//       //Fase 3F2
//       document.getElementById('preguntaCincoF2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoF2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoF2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoF2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoF2_seis').style.display = 'none';

//       //Fase 3G1
//       document.getElementById('preguntaCincoG_uno').style.display = '';
//       document.getElementById('correctoPreguntaCincoG_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG_seis').style.display = 'none';
//       //Fase 3G2
//       document.getElementById('preguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG2_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG2_seis').style.display = 'none';
//       //Fase 3G3
//       document.getElementById('preguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG3_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG3_seis').style.display = 'none';
//       //Fase 3G4
//       document.getElementById('preguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoG4_seis').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoG4_seis').style.display = 'none';

//       //Fase 3H1
//       document.getElementById('preguntaCincoH_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH_seis').style.display = 'none';
//       //Fase 3H2
//       document.getElementById('preguntaCincoH2_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH2_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH2_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH2_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH2_seis').style.display = 'none';
//       //Fase 3H3
//       document.getElementById('preguntaCincoH3_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH3_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH3_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH3_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH3_seis').style.display = 'none';
//       //Fase 3H4
//       document.getElementById('preguntaCincoH4_uno').style.display = 'none';
//       document.getElementById('preguntaCincoH4_dos').style.display = 'none';
//       document.getElementById('preguntaCincoH4_tres').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cuatro').style.display = 'none';
//       document.getElementById('preguntaCincoH4_cinco').style.display = 'none';
//       document.getElementById('preguntaCincoH4_seis').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias3').style.display = 'none';
//     }

//   });

// });

