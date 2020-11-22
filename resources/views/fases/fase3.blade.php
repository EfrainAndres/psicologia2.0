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
    <div class="row" id="instructivoTres">
      <div class="twelve column" style="margin-top: 11%;">
        <h3 style="text-align: center;">Instrucciones (3,0)
        </h3>
        <p style="padding: 1em 5em">
          El formato de la tarea cambiará. Ahora, un rectángulo aparecerá primero en la parte superior y enseguida
          aparecerá en la parte inferior tres rectángulos en la pantalla. Su meta es decir cuál de estos tres que se
          muestra en la parte inferior se encuentra relacionado con el superior. Tendrá que usar el pulsor (mouse) para
          responder. El computador le irá indicando si lo está haciendo bien o no.

        </p>

        <br>
        <p style="text-align: center;"><a class="button" onclick="irPreguntaTresA_uno()"
            id="irPreguntaTresA_uno">Empezar</a></p>
      </div>
    </div>


    <!--Fase 3A Pregunta 1
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaTresA_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresA_uno()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresA_dos()"
              id="irPreguntaTresA_dos">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresA">
      <div class="twelve column" style="margin-top: 15%;">
        <h1 class="text-center"><b><a class="red opacidadDos incorrectA incorrectGlobal3" id="regresarPreguntaTresA"
              onclick="irPreguntaTresA_uno()">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresA_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresA_dos()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresA_tres()"
              id="irPreguntaTresA_tres">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresA_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresA_tres()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresA_cuatro()"
              id="irPreguntaTresA_cuatro">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresA_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresA_cuatro()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresA_cinco()"
              id="irPreguntaTresA_cinco">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresA_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresA_cinco()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresA_seis()"
              id="irPreguntaTresA_seis">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3A Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresA_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_seis()" id="correct" alt="opciones pregunta 1" class="correctA"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresA()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresA_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_uno()"
              id="irPreguntaTresB_uno">CORRECTO</a></b></h1>
      </div>
    </div>


    <!--Fase 3B Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_uno()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_dos()"
              id="irPreguntaTresB_dos">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresB">
      <div class="twelve column" style="margin-top: 15%;">
        <h1 class="text-center"><b><a class="red opacidadDos incorrectB incorrectGlobal3" id="regresarPreguntaTresB"
              onclick="irPreguntaTresB_uno()">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_dos()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_tres()"
              id="irPreguntaTresB_tres">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_tres()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_cuatro()"
              id="irPreguntaTresB_cuatro">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_cuatro()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_cinco()"
              id="irPreguntaTresB_cinco">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_cinco()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" onclick="irPreguntaTresB_seis()"
              id="irPreguntaTresB_seis">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3B Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresB_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresB_seis()" id="correct" alt="opciones pregunta 1" class="correctB"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresB()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresB_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresC_uno"
              onclick="irPreguntaTresC_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

     <!-- 
      Anuncio
    -->

    <div class="row" id="anuncio1">
      <div class="twelve column" style="margin-top: 25%;">
        <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien. <br />
          De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
          posible.
        </p>
        <br>
        <p style="text-align: center;"><a onclick="irPreguntaTresC_uno()" class="button">Continuar</a></p>
      </div>
    </div>

    <!--Fase 3C Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaTresC_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_dos()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_tres()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_cuatro()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_cinco()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_seis()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_uno()" id="correct" alt="opciones pregunta 1" class="correctC"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC incorrectGlobal3"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_dos()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_tres()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_cinco()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC2_seis()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3C_2 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresC2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_uno()" id="correct" alt="opciones pregunta 1" class="correctC2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresC_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectC2 incorrectGlobal3"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3D Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_uno()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresD_dos"
              onclick="irPreguntaTresD_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresD">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresD_uno()" class="text-center incorrectD incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresD">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_dos()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresD_tres"
              onclick="irPreguntaTresD_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_tres()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresD_cuatro"
              onclick="irPreguntaTresD_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_cuatro()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresD_cinco"
              onclick="irPreguntaTresD_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>
    <!--Fase 3D Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_cinco()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresD_seis"
              onclick="irPreguntaTresD_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3D Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresD_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresD_seis()" id="correct" alt="opciones pregunta 1" class="correctD"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresD()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresD_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_uno"
              onclick="irPreguntaTresE_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_uno()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_dos"
              onclick="irPreguntaTresE_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresE">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresE_uno()" class="text-center incorrectE incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresE">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_dos()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_tres"
              onclick="irPreguntaTresE_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_tres()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_cuatro"
              onclick="irPreguntaTresE_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_cuatro()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_cinco"
              onclick="irPreguntaTresE_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_cinco()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresE_seis"
              onclick="irPreguntaTresE_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3E Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresE_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresE_seis()" id="correct" alt="opciones pregunta 1" class="correctE"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresE()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresE_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresF_uno"
              onclick="irPreguntaTresF_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!-- 
      Anuncio
    -->

    <div class="row" id="anuncio2">
      <div class="twelve column" style="margin-top: 25%;">
        <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien. <br />
          De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
          posible.
        </p>
        <br>
        <p style="text-align: center;"><a onclick="irPreguntaTresF_uno()" class="button">Continuar</a></p>
      </div>
    </div>

    <!--Fase 3F Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_dos()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_tres()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_cuatro()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_cinco()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_seis()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="correct" alt="opciones pregunta 1" class="correctF"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_dos()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_tres()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_cinco()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_seis()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3F_2 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresF2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_uno()" id="correct" alt="opciones pregunta 1" class="correctF2"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresF2_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectF2 incorrectGlobal3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3G Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaTresG_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_uno()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG_dos"
              onclick="irPreguntaTresG_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresG1">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresG_uno()" class="text-center incorrectG incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresG1">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_dos()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG_tres"
              onclick="irPreguntaTresG_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_tres()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG_cuatro"
              onclick="irPreguntaTresG_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG_cinco"
              onclick="irPreguntaTresG_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_cinco()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG_seis"
              onclick="irPreguntaTresG_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG_seis()" id="correct" alt="opciones pregunta 1" class="correctG"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG1()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_uno"
              onclick="irPreguntaTresG2_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_uno()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_dos"
              onclick="irPreguntaTresG2_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresG2">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresG2_uno()" class="text-center incorrectG2 incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresG2">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_dos()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_tres"
              onclick="irPreguntaTresG2_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_tres()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_cuatro"
              onclick="irPreguntaTresG2_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_cinco"
              onclick="irPreguntaTresG2_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_cinco()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG2_seis"
              onclick="irPreguntaTresG2_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_2 Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG2_seis()" id="correct" alt="opciones pregunta 1" class="correctG2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG2()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG2_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_uno"
              onclick="irPreguntaTresG3_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_uno()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_dos"
              onclick="irPreguntaTresG3_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresG3">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresG3_uno()" class="text-center incorrectG3 incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresG3">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_dos()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_tres"
              onclick="irPreguntaTresG3_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_tres()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_cuatro"
              onclick="irPreguntaTresG3_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_cinco"
              onclick="irPreguntaTresG3_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_cinco()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG3_seis"
              onclick="irPreguntaTresG3_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_3 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG3_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG3_seis()" id="correct" alt="opciones pregunta 1" class="correctG3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG3()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG3_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_uno"
              onclick="irPreguntaTresG4_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_uno()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_uno">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_dos"
              onclick="irPreguntaTresG4_dos()">CORRECTO</a></b></h1>
      </div>
    </div>

    <div class="row" id="incorrectoTresG4">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 onclick="irPreguntaTresG4_uno()" class="text-center incorrectG4 incorrectGlobal3"><b><a class="red opacidadDos"
              id="regresarPreguntaTresG4">INCORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_dos()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_dos">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_tres"
              onclick="irPreguntaTresG4_tres()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_tres()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_tres">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_cuatro"
              onclick="irPreguntaTresG4_cuatro()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_cuatro()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_cuatro">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_cinco"
              onclick="irPreguntaTresG4_cinco()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_cinco()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_cinco">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresG4_seis"
              onclick="irPreguntaTresG4_seis()">CORRECTO</a></b></h1>
      </div>
    </div>

    <!--Fase 3G_4 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresG4_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irCorrectoPreguntaTresG4_seis()" id="correct" alt="opciones pregunta 1" class="correctG4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irIncorrectoTresG4()" id="incorrect" alt="opciones pregunta 1" class=""><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="correctoPreguntaTresG4_seis">
      <div class="twelve column" style="margin-top: 25%;">
        <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresH_uno"
              onclick="irPreguntaTresH_uno()">CORRECTO</a></b></h1>
      </div>
    </div>

     <!-- 
      Anuncio
    -->

    <div class="row" id="anuncio3">
      <div class="twelve column" style="margin-top: 25%;">
        <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien. <br />
          De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
          posible.
        </p>
        <br>
        <p style="text-align: center;"><a class="button" onclick="irPreguntaTresH_uno()">Continuar</a></p>
      </div>
    </div>

    <!--Fase 3H Pregunta 1
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="row" id="preguntaTresH_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH_dos()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3  incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H pregunta 2
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH_tres()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH_cinco()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal incorrectH13"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH_seis()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_uno()" id="correct" alt="opciones pregunta 1" class="correctH1"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH1"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_dos()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_tres()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H2 pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">

          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_cinco()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH2_seis()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>

        </div>
      </div>
    </div>

    <!--Fase 3H2 Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH2_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>


        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_uno()" id="correct" alt="opciones pregunta 1" class="correctH2"><img
                src="images/fase3_Y2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH2"><img
                src="images/fase3_Y3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_dos()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_tres()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_cinco()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH3_seis()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H3 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH3_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x2.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_uno()" id="correct" alt="opciones pregunta 1" class="correctH3"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH3"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 1
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_uno">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_dos()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 2
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_dos">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_tres()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 3
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_tres">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_cuatro()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 4
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_cuatro">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_cinco()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 5
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_cinco">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresH4_seis()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
        </div>
      </div>
    </div>

    <!--Fase 3H4 Pregunta 6
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="row" id="preguntaTresH4_seis">
      <div class="twelve column" style="margin-top: 10%">
        <p style="text-align: center;">
          <img src="images/fase3_x1.png" alt="Fase Tres Imagen 1">
        </p>
        <div class="row opacidad" style="margin-top: 5em;">
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z2.png" alt="Fase Tres Imagen 2"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="goToFase4()" id="correct" alt="opciones pregunta 1" class="correctH4"><img
                src="images/fase3_Z1.png" alt="Fase Tres Imagen 3"></a>
          </div>
          <div class="four columns text-center a1">
            <a onclick="irPreguntaTresG_uno()" id="incorrect" alt="opciones pregunta 1" class="incorrectGlobal3 incorrectH4"><img
                src="images/fase3_Z3.png" alt="Fase Tres Imagen 2"></a>
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
           href="#"   id="regresarPreguntaTres">Has agotado todos los intentos, Gracias por participar.</a></b>
        </h1>
      </div>
    </div>

  </div>

  <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseTres/logic.js"></script>
<script src="js/faseTres/faseTres.js"></script>
<script src="js/faseTres/count.js"></script>


</html>