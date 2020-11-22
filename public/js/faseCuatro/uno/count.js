$('.incorrect4_1').on('click', function () {
  var count = parseInt($(this).data('click')) || 0;
  count = count + 1;
  $('.incorrect4_1').each(function () {
    $(this).data('click', count);

    console.log(count);

    var correct = document.getElementById('irCorrectoPreguntaSeisC');
    var incorrect = document.getElementById('incorrectoSeisC');
    $('#correct8').click(function () {
      if (count >= 1) {
        count = 0;
        //Ir a fase 4_2
        window.location.href = "/f4_2"
      }
    });

    $('#incorrect8').click(function () {
        if (count >= 1) {
          count = 0;
          //Ir a fase 4_2
          window.location.href = "/f4_2"
        }
      });
  });

});