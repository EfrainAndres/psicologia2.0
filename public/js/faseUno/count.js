$('.incorrectC').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.incorrectC').each(function () {
    $(this).data('click', count);

    console.log(count);

    if (count == 2) {
      count = 0;
      //Fase 1A
      document.getElementById('incorrectoDiv').style.display = 'none';
      document.getElementById('instructivoUno').style.display = '';
      document.getElementById('preguntaUno').style.display = 'none';
      document.getElementById('correctoPreguntaUno').style.display = 'none';
      document.getElementById('instructivoDos').style.display = 'none';
      document.getElementById('preguntaDos').style.display = 'none';
      document.getElementById('correctoPreguntaDos').style.display = 'none';
      document.getElementById('instructivoTres').style.display = 'none';
      document.getElementById('preguntaTres').style.display = 'none';
      document.getElementById('correctoPreguntaTres').style.display = 'none';
      document.getElementById('preguntaCuatro').style.display = 'none';
      document.getElementById('correctoPreguntaCuatro').style.display = 'none';
      document.getElementById('preguntaCinco').style.display = 'none';
      document.getElementById('correctoPreguntaCinco').style.display = 'none';
      document.getElementById('preguntaSeis').style.display = 'none';
      document.getElementById('correctoPreguntaSeis').style.display = 'none';

      //Fase 1B
      document.getElementById('preguntaUnoB').style.display = 'none';
      document.getElementById('correctoPreguntaUnoB').style.display = 'none';
      document.getElementById('preguntaDosB').style.display = 'none';
      document.getElementById('correctoPreguntaDosB').style.display = 'none';
      document.getElementById('preguntaTresB').style.display = 'none';
      document.getElementById('correctoPreguntaTresB').style.display = 'none';
      document.getElementById('preguntaCuatroB').style.display = 'none';
      document.getElementById('correctoPreguntaCuatroB').style.display = 'none';
      document.getElementById('preguntaCincoB').style.display = 'none';
      document.getElementById('correctoPreguntaCincoB').style.display = 'none';
      document.getElementById('preguntaSeisB').style.display = 'none';
      document.getElementById('correctoPreguntaSeisB').style.display = 'none';

      //hola
      document.getElementById('hola').style.display = 'none';

      //Fase 1C
      document.getElementById('preguntaUnoC').style.display = 'none';
      document.getElementById('preguntaDosC').style.display = 'none';
      document.getElementById('preguntaTresC').style.display = 'none';
      document.getElementById('preguntaCuatroC').style.display = 'none';
      document.getElementById('preguntaCincoC').style.display = 'none';
      document.getElementById('preguntaSeisC').style.display = 'none';

      //Fase 1CD
      document.getElementById('preguntaUnoCD').style.display = 'none';
      document.getElementById('preguntaDosCD').style.display = 'none';
      document.getElementById('preguntaTresCD').style.display = 'none';
      document.getElementById('preguntaCuatroCD').style.display = 'none';
      document.getElementById('preguntaCincoCD').style.display = 'none';
      document.getElementById('preguntaSeisCD').style.display = 'none';
      //Fase 1D
      document.getElementById('preguntaUnoD').style.display = 'none';
      document.getElementById('preguntaDosD').style.display = 'none';
      document.getElementById('preguntaTresD').style.display = 'none';
      document.getElementById('preguntaCuatroD').style.display = 'none';
      document.getElementById('preguntaCincoD').style.display = 'none';
      document.getElementById('preguntaSeisD').style.display = 'none';

      //Fase 1DD
      document.getElementById('preguntaUnoDD').style.display = 'none';
      document.getElementById('preguntaDosDD').style.display = 'none';
      document.getElementById('preguntaTresDD').style.display = 'none';
      document.getElementById('preguntaCuatroDD').style.display = 'none';
      document.getElementById('preguntaCincoDD').style.display = 'none';
      document.getElementById('preguntaSeisDD').style.display = 'none';
      //Gracias
      document.getElementById('gracias').style.display = 'none';
    }

  });

});

// $('.incorrectGlobal').on('click', function () {
//   var count = parseInt($(this).data('click')) || 0;
//   count = count + 1;
//   $('.incorrectGlobal').each(function () {
//     $(this).data('click', count);

//     console.log(count);

//     if (count == 5) {
//       count = 0;
//       //Fase 1A
//       document.getElementById('incorrectoDiv').style.display = 'none';
//       document.getElementById('instructivoUno').style.display = 'none';
//       document.getElementById('preguntaUno').style.display = 'none';
//       document.getElementById('correctoPreguntaUno').style.display = 'none';
//       document.getElementById('instructivoDos').style.display = 'none';
//       document.getElementById('preguntaDos').style.display = 'none';
//       document.getElementById('correctoPreguntaDos').style.display = 'none';
//       document.getElementById('instructivoTres').style.display = 'none';
//       document.getElementById('preguntaTres').style.display = 'none';
//       document.getElementById('correctoPreguntaTres').style.display = 'none';
//       document.getElementById('preguntaCuatro').style.display = 'none';
//       document.getElementById('correctoPreguntaCuatro').style.display = 'none';
//       document.getElementById('preguntaCinco').style.display = 'none';
//       document.getElementById('correctoPreguntaCinco').style.display = 'none';
//       document.getElementById('preguntaSeis').style.display = 'none';
//       document.getElementById('correctoPreguntaSeis').style.display = 'none';

//       //Fase 1B
//       document.getElementById('preguntaUnoB').style.display = 'none';
//       document.getElementById('correctoPreguntaUnoB').style.display = 'none';
//       document.getElementById('preguntaDosB').style.display = 'none';
//       document.getElementById('correctoPreguntaDosB').style.display = 'none';
//       document.getElementById('preguntaTresB').style.display = 'none';
//       document.getElementById('correctoPreguntaTresB').style.display = 'none';
//       document.getElementById('preguntaCuatroB').style.display = 'none';
//       document.getElementById('correctoPreguntaCuatroB').style.display = 'none';
//       document.getElementById('preguntaCincoB').style.display = 'none';
//       document.getElementById('correctoPreguntaCincoB').style.display = 'none';
//       document.getElementById('preguntaSeisB').style.display = 'none';
//       document.getElementById('correctoPreguntaSeisB').style.display = 'none';

//       //hola
//       document.getElementById('hola').style.display = 'none';

//       //Fase 1C
//       document.getElementById('preguntaUnoC').style.display = 'none';
//       document.getElementById('preguntaDosC').style.display = 'none';
//       document.getElementById('preguntaTresC').style.display = 'none';
//       document.getElementById('preguntaCuatroC').style.display = 'none';
//       document.getElementById('preguntaCincoC').style.display = 'none';
//       document.getElementById('preguntaSeisC').style.display = 'none';

//       //Fase 1CD
//       document.getElementById('preguntaUnoCD').style.display = 'none';
//       document.getElementById('preguntaDosCD').style.display = 'none';
//       document.getElementById('preguntaTresCD').style.display = 'none';
//       document.getElementById('preguntaCuatroCD').style.display = 'none';
//       document.getElementById('preguntaCincoCD').style.display = 'none';
//       document.getElementById('preguntaSeisCD').style.display = 'none';
//       //Fase 1D
//       document.getElementById('preguntaUnoD').style.display = 'none';
//       document.getElementById('preguntaDosD').style.display = 'none';
//       document.getElementById('preguntaTresD').style.display = 'none';
//       document.getElementById('preguntaCuatroD').style.display = 'none';
//       document.getElementById('preguntaCincoD').style.display = 'none';
//       document.getElementById('preguntaSeisD').style.display = 'none';

//       //Fase 1DD
//       document.getElementById('preguntaUnoDD').style.display = 'none';
//       document.getElementById('preguntaDosDD').style.display = 'none';
//       document.getElementById('preguntaTresDD').style.display = 'none';
//       document.getElementById('preguntaCuatroDD').style.display = 'none';
//       document.getElementById('preguntaCincoDD').style.display = 'none';
//       document.getElementById('preguntaSeisDD').style.display = 'none';
//       //Gracias
//       document.getElementById('gracias').style.display = '';
//     }

//   });

// }); 