function goToIncorectWord() {
    //Fase 1A
    document.getElementById('incorrectoDiv').style.display = '';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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

    setTimeout(function() { document.getElementById('regresarPreguntaUno').click(); }, 3000);
}

function backToFirstQuestion() {
    // var cards = $(".a1");
    // for (var i = 0; i < cards.length; i++) {
    //   var target = Math.floor(Math.random() * cards.length - 1) + 1;
    //   var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    //   cards.eq(target).before(cards.eq(target2));
    // }
    //Fase 1A
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
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

function goToIncorectWordB() {
    //Fase 1A
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = '';
    document.getElementById('instructivoUno').style.display = 'none';
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

    setTimeout(function() { document.getElementById('regresarPreguntaUnoB').click(); }, 3000);
}

function backToFirstQuestionB() {
    //Fase 1A
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = '';
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

function irPreguntaUno() {
    var cards = $(".a1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = '';
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

function irCorrectoPreguntaUno() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = '';
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

    setTimeout(function() { document.getElementById('irInstructivoPreguntaDos').click(); }, 3000);
}

function irInstructivoPreguntaDos() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = '';
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

function irPreguntaDos() {
    var cards = $(".a2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = '';
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

function irCorrectoPreguntaDos() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = '';
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

    setTimeout(function() { document.getElementById('irInstructivoPreguntaTres').click(); }, 3000);
}

function irInstructivoPreguntaTres() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = 'none';
    document.getElementById('instructivoTres').style.display = '';
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

function irPreguntaTres() {
    var cards = $(".a3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = 'none';
    document.getElementById('instructivoTres').style.display = 'none';
    document.getElementById('preguntaTres').style.display = '';
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

function irCorrectoPreguntaTres() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = 'none';
    document.getElementById('instructivoTres').style.display = 'none';
    document.getElementById('preguntaTres').style.display = 'none';
    document.getElementById('correctoPreguntaTres').style.display = '';
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

    setTimeout(function() { document.getElementById('irPreguntaCuatro').click(); }, 3000);
}

function irPreguntaCuatro() {
    var cards = $(".a4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = 'none';
    document.getElementById('instructivoTres').style.display = 'none';
    document.getElementById('preguntaTres').style.display = 'none';
    document.getElementById('correctoPreguntaTres').style.display = 'none';
    document.getElementById('preguntaCuatro').style.display = '';
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

function irCorrectoPreguntaCuatro() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
    document.getElementById('preguntaUno').style.display = 'none';
    document.getElementById('correctoPreguntaUno').style.display = 'none';
    document.getElementById('instructivoDos').style.display = 'none';
    document.getElementById('preguntaDos').style.display = 'none';
    document.getElementById('correctoPreguntaDos').style.display = 'none';
    document.getElementById('instructivoTres').style.display = 'none';
    document.getElementById('preguntaTres').style.display = 'none';
    document.getElementById('correctoPreguntaTres').style.display = 'none';
    document.getElementById('preguntaCuatro').style.display = 'none';
    document.getElementById('correctoPreguntaCuatro').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaCinco').click(); }, 3000);
}

function irPreguntaCinco() {
    var cards = $(".a5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCinco').style.display = '';
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

function irCorrectoPreguntaCinco() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaCinco').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaSeis').click(); }, 3000);
}

function irPreguntaSeis() {
    var cards = $(".a6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeis').style.display = '';
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

function irCorrectoPreguntaSeis() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaSeis').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaUnoB').click(); }, 3000);
}

function irPreguntaUnoB() {
    var cards = $(".b1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaUnoB').style.display = '';
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

function irCorrectoPreguntaUnoB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaUnoB').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaDosB').click(); }, 3000);
}

function irPreguntaDosB() {
    var cards = $(".b2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaDosB').style.display = '';
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

function irCorrectoPreguntaDosB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaDosB').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaTresB').click(); }, 3000);
}

function irPreguntaTresB() {
    var cards = $(".b3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaTresB').style.display = '';
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

function irCorrectoPreguntaTresB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaTresB').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaCuatroB').click(); }, 3000);
}

function irPreguntaCuatroB() {
    var cards = $(".b4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCuatroB').style.display = '';
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

function irCorrectoPreguntaCuatroB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaCuatroB').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaCincoB').click(); }, 3000);
}

function irPreguntaCincoB() {
    var cards = $(".b5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCincoB').style.display = '';
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

function irCorrectoPreguntaCincoB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaCincoB').style.display = '';
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
    setTimeout(function() { document.getElementById('irPreguntaSeisB').click(); }, 3000);
}

function irPreguntaSeisB() {
    var cards = $(".b6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeisB').style.display = '';
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

function irCorrectoPreguntaSeisB() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('correctoPreguntaSeisB').style.display = '';
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

    setTimeout(function() { document.getElementById('irAnuncio').click(); }, 3000);
}

function irAnuncio() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('hola').style.display = '';
    //Fase 1C
    document.getElementById('preguntaUnoC').style.display = 'none';
    document.getElementById('preguntaDosC').style.display = 'none';
    document.getElementById('preguntaTresC').style.display = 'none';
    document.getElementById('preguntaTresC').style.display = 'none';
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

function irPreguntaUnoC() {
    var cards = $(".c1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaUnoC').style.display = '';
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

function irPreguntaDosC() {
    var cards = $(".c2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaDosC').style.display = '';
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

function irPreguntaTresC() {
    var cards = $(".c3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaTresC').style.display = '';
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

function irPreguntaCuatroC() {
    var cards = $(".c4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCuatroC').style.display = '';
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

function irPreguntaCincoC() {
    var cards = $(".c5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCincoC').style.display = '';
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

function irPreguntaSeisC() {
    var cards = $(".c6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeisC').style.display = '';
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

function irPreguntaUnoCD() {
    var cards = $(".cd1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaUnoCD').style.display = '';
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

function irPreguntaDosCD() {
    var cards = $(".cd2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaDosCD').style.display = '';
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

function irPreguntaTresCD() {
    var cards = $(".cd3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaTresCD').style.display = '';
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

function irPreguntaCuatroCD() {
    var cards = $(".cd4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCuatroCD').style.display = '';
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

function irPreguntaCincoCD() {
    var cards = $(".cd5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCincoCD').style.display = '';
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

function irPreguntaSeisCD() {
    var cards = $(".cd6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeisCD').style.display = '';
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

function irPreguntaUnoD() {
    var cards = $(".d1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaUnoD').style.display = '';
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

function irPreguntaDosD() {
    var cards = $(".d2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaDosD').style.display = '';
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

function irPreguntaTresD() {
    var cards = $(".d3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaTresD').style.display = '';
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

function irPreguntaCuatroD() {
    var cards = $(".d4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCuatroD').style.display = '';
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

function irPreguntaCincoD() {
    var cards = $(".d5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCincoD').style.display = '';
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

function irPreguntaSeisD() {
    var cards = $(".d6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeisD').style.display = '';

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

function irPreguntaUnoDD() {
    var cards = $(".dd1");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaUnoDD').style.display = '';
    document.getElementById('preguntaDosDD').style.display = 'none';
    document.getElementById('preguntaTresDD').style.display = 'none';
    document.getElementById('preguntaCuatroDD').style.display = 'none';
    document.getElementById('preguntaCincoDD').style.display = 'none';
    document.getElementById('preguntaSeisDD').style.display = 'none';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irPreguntaDosDD() {
    var cards = $(".dd2");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaDosDD').style.display = '';
    document.getElementById('preguntaTresDD').style.display = 'none';
    document.getElementById('preguntaCuatroDD').style.display = 'none';
    document.getElementById('preguntaCincoDD').style.display = 'none';
    document.getElementById('preguntaSeisDD').style.display = 'none';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irPreguntaTresDD() {
    var cards = $(".dd3");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaTresDD').style.display = '';
    document.getElementById('preguntaCuatroDD').style.display = 'none';
    document.getElementById('preguntaCincoDD').style.display = 'none';
    document.getElementById('preguntaSeisDD').style.display = 'none';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irPreguntaCuatroDD() {
    var cards = $(".dd4");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCuatroDD').style.display = '';
    document.getElementById('preguntaCincoDD').style.display = 'none';
    document.getElementById('preguntaSeisDD').style.display = 'none';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irPreguntaCincoDD() {
    var cards = $(".dd5");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaCincoDD').style.display = '';
    document.getElementById('preguntaSeisDD').style.display = 'none';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irPreguntaSeisDD() {
    var cards = $(".dd6");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('preguntaSeisDD').style.display = '';
    //Gracias
    document.getElementById('gracias').style.display = 'none';
}

function irGracias() {
    document.getElementById('incorrectoDiv').style.display = 'none';
    document.getElementById('incorrectoDivB').style.display = 'none';
    document.getElementById('instructivoUno').style.display = 'none';
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
    document.getElementById('gracias').style.display = '';
}

function goToFase2(){
    window.location.href = "fase2.html"
}