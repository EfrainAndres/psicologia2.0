<!DOCTYPE html>
<html lang="es">

<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Pruebas Psicotécnicas</title>
  <meta name="description" content="Fases de pruebas psicotécnicas para evaluación">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

</head>

<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

  <div class="container">
    <div class="row" id="instructivoCinco">
      <div class="twelve column" style="margin-top: 11%;">
        <h3 style="text-align: center;">Instrucciones (5,0)
        </h3>
        <p style="padding: 1em 5em">
          El formato de la tarea cambiará. Ahora, un rectángulo aparecerá primero en la parte superior y enseguida
          aparecerá en la parte inferior tres rectángulos en la pantalla. Su meta es decir cuál de estos tres que se
          muestra en la parte inferior se encuentra relacionado con el superior. Tendrá que usar el pulsor (mouse) para
          responder. El computador le irá indicando si lo está haciendo bien o no.

        </p>

        <br>
        <p style="text-align: center;"><a class="button" onclick="irPreguntaCincoA_uno()"
            id="irPreguntaCincoA_uno">Empezar</a></p>
      </div>
    </div>


    <!--Fase 3A Pregunta 1
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaCincoA_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoA_uno()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoA_dos()"
              id="irPreguntaCincoA_dos">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoA">
      <div class="twelve column" style="margin-top: 15%;">
        <h1 class="text-center"><b><a class="red opacidadDos incorrectA incorrectGlobal5" id="regresarPreguntaCincoA"
              onclick="irPreguntaCincoA_uno()">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoA_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoA_dos()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoA_tres()"
              id="irPreguntaCincoA_tres">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoA_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoA_tres()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoA_cuatro()"
              id="irPreguntaCincoA_cuatro">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoA_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoA_cuatro()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoA_cinco()"
              id="irPreguntaCincoA_cinco">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoA_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoA_cinco()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoA_seis()"
              id="irPreguntaCincoA_seis">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoA_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_seis()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoA_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_uno()"
              id="irPreguntaCincoB_uno">CORRECTO</a></b></h1>
      </div>
    </div>


    <!--Fase 3B Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_uno()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_dos()"
              id="irPreguntaCincoB_dos">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoB">
      <div class="twelve column" style="margin-top: 15%;">
        <h1 class="text-center"><b><a class="red opacidadDos incorrectB incorrectGlobal5" id="regresarPreguntaCincoB"
              onclick="irPreguntaCincoB_uno()">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_dos()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_tres()"
              id="irPreguntaCincoB_tres">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_tres()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_cuatro()"
              id="irPreguntaCincoB_cuatro">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_cuatro()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_cinco()"
              id="irPreguntaCincoB_cinco">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_cinco()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaCincoB_seis()"
              id="irPreguntaCincoB_seis">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoB_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoB_seis()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoB_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoC_uno"
              onclick="irPreguntaCincoC_uno()">CORRECTO</a></b></h1>
      </div>
    </div>



    <!--Fase 3C Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaCincoC_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_dos()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_tres()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_cuatro()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_cinco()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_seis()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_uno()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_dos()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_tres()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_cinco()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC2_seis()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoC2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_uno()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3D Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_uno()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoD_dos"
              onclick="irPreguntaCincoD_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoD">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoD_uno()" class="text-center incorrectD incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoD">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_dos()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoD_tres"
              onclick="irPreguntaCincoD_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_tres()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a  onclick="irIncorrectoCincoD()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoD_cuatro"
              onclick="irPreguntaCincoD_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_cuatro()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoD_cinco"
              onclick="irPreguntaCincoD_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>
    <!--Fase 3D Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_cinco()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoD_seis"
              onclick="irPreguntaCincoD_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoD_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoD_seis()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoD_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_uno"
              onclick="irPreguntaCincoE_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_uno()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_dos"
              onclick="irPreguntaCincoE_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoE">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoE_uno()" class="text-center incorrectE incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoE">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_dos()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_tres"
              onclick="irPreguntaCincoE_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_tres()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_cuatro"
              onclick="irPreguntaCincoE_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_cuatro()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_cinco"
              onclick="irPreguntaCincoE_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_cinco()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoE_seis"
              onclick="irPreguntaCincoE_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoE_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoE_seis()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoE_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoF_uno"
              onclick="irPreguntaCincoF_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--
      Anuncio
    -->

    <!-- <div class="row" id="anuncio2">
      <div class="twelve column" style="margin-top: 25%;">
        <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien. <br />
          De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
          posible.
        </p>
        <br>
        <p style="text-align: center;"><a onclick="irPreguntaCincoF_uno()" class="button">Continuar</a></p>
      </div>
    </div> -->

    <!--Fase 3F Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_dos()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_tres()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_cuatro()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_cinco()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_seis()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_dos()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_tres()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_cinco()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_seis()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoF2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_uno()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/o2.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3G Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaCincoG_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_uno()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG_dos"
              onclick="irPreguntaCincoG_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoG1">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoG_uno()" class="text-center incorrectG incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoG1">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_dos()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG_tres"
              onclick="irPreguntaCincoG_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_tres()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG_cuatro"
              onclick="irPreguntaCincoG_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG_cinco"
              onclick="irPreguntaCincoG_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_cinco()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG_seis"
              onclick="irPreguntaCincoG_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG_seis()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_uno"
              onclick="irPreguntaCincoG2_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_uno()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_dos"
              onclick="irPreguntaCincoG2_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoG2">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoG2_uno()" class="text-center incorrectG2 incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoG2">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_dos()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_tres"
              onclick="irPreguntaCincoG2_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_tres()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_cuatro"
              onclick="irPreguntaCincoG2_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_cinco"
              onclick="irPreguntaCincoG2_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_cinco()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG2_seis"
              onclick="irPreguntaCincoG2_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG2_seis()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG2_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_uno"
              onclick="irPreguntaCincoG3_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_uno()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_dos"
              onclick="irPreguntaCincoG3_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoG3">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoG3_uno()" class="text-center incorrectG3 incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoG3">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_dos()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_tres"
              onclick="irPreguntaCincoG3_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_tres()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_cuatro"
              onclick="irPreguntaCincoG3_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_cinco"
              onclick="irPreguntaCincoG3_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_cinco()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG3_seis"
              onclick="irPreguntaCincoG3_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG3_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG3_seis()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG3_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_uno"
              onclick="irPreguntaCincoG4_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_uno()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_dos"
              onclick="irPreguntaCincoG4_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoCincoG4">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaCincoG4_uno()" class="text-center incorrectG4 incorrectGlobal5"><b><a class="red opacidadDos"
              id="regresarPreguntaCincoG4">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_dos()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_tres"
              onclick="irPreguntaCincoG4_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_tres()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_cuatro"
              onclick="irPreguntaCincoG4_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="four columns text-center a1">
          <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
              src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
        </div>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_cinco"
              onclick="irPreguntaCincoG4_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_cinco()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoG4_seis"
              onclick="irPreguntaCincoG4_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoG4_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoCincoG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaCincoG4_seis()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaCincoG4_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoH_uno"
              onclick="irPreguntaCincoH_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

     <!--
      Anuncio
    -->

    <!-- <div class="row" id="anuncio3">
      <div class="twelve column" style="margin-top: 25%;">
        <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien. <br />
          De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
          posible.
        </p>
        <br>
        <p style="text-align: center;"><a class="button" onclick="irPreguntaCincoH_uno()">Continuar</a></p>
      </div>
    </div> -->

    <!--Fase 3H Pregunta 1
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaCincoH_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH_dos()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H pregunta 2
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH_tres()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH_cinco()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH_seis()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_uno()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_dos()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_tres()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H2 pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_cinco()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH2_seis()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_uno()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/n2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/n3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_dos()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_tres()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_cinco()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH3_seis()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH3_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m2.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_uno()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_dos()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_tres()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_cinco()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoH4_seis()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaCincoH4_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/m1.png" alt="Fase Cinco Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o3.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaCincoG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal5"><img
                src="images/o2.png" alt="Fase Cinco Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="goToFase6()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/o1.png" alt="Fase Cinco Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--
    Gracias
  -->
    <div class="row" id="gracias3">
      <div class="twelve column" style="margin-top: 15%;">
        <h1 id="irGracias" class="text-center"><b><a class=""
           href="#"   id="regresarPreguntaCinco">Has agotado todos los intentos, Gracias por participar.</a></b>
        </h1>
      </div>
    </div>

  </div>

  <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseCinco/logic.js"></script>
<script src="js/faseCinco/faseCinco.js"></script>
<script src="js/faseCinco/count.js"></script>


</html>
