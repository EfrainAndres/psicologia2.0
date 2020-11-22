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
        <div class="row" id="instructivoUno">
            <div class="twelve column" style="margin-top: 11%;">
                <h3 style="text-align: center;">Instrucciones</h3>
                <ol>
                    <li>En la parte superior de la pantalla enmarcadas por un rectángulo negro, aparecerá o dos figuras, o una figura y una palabra, o dos palabras.</li>
                    <li>Luego , verá dos rectángulos (figura-figura o figura-palabra o palabra-palabra), que aparecerán en la esquina inferior derecha e izquierda, respectivamente.</li>
                    <li>Ponga atención al rectángulo en la parte superior y a los rectángulos ubicados a la izquierda y a la derecha.
                    </li>
                    <li>Su meta será seleccionar el rectángulo inferior que considera que relaciona con el rectángulo en la parte superior. Para elegir el rectángulo de la izquierda, presione la letra “Z”. Para elegir el rectángulo a la derecha, presione
                        la letra “M”.
                    </li>
                    <li>Su objetivo es obtener tantos CORRECTOS como sea posible.</li>
                    <li>EL COMPUTADOR LE IRÁ IDICANDO SI LO ESTÁ HACIENDO BIEN O NO.</li>
                </ol>
                <br>
                <p style="text-align: center;"><a class="button" onclick="irPreguntaUno()" id="irPreguntaUno">Empezar</a></p>
            </div>
        </div>


        <!--Fase 1A Pregunta 1
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="preguntaUno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a1">
                        <a onclick="goToIncorectWord()" id="incorrecto" alt="opciones pregunta 1" class="incorrect"><img src="images/fase1_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                    <div class="six columns text-center a1">
                        <a id="irCorrectoPreguntaUno" onclick="irCorrectoPreguntaUno()" alt="opciones pregunta 1" class="correct"><img src="images/fase1_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaUno">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irInstructivoPreguntaDos"
              onclick="irPreguntaDos()">CORRECTO</a></b></h1>
            </div>
        </div>

        <div class="row" id="incorrectoDiv">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="red opacidadDos incorrectGlobal" id="regresarPreguntaUno"
              onclick="backToFirstQuestion()">INCORRECTO</a></b></h1>
            </div>
        </div>

        <!--Fase 1A pregunta 2
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="preguntaDos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase3A_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a2">
                        <a onclick="irCorrectoPreguntaDos()" id="irCorrectoPreguntaDos" alt="opciones pregunta 1" class="correct"><img src="images/fase3A_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                    <div class="six columns text-center a2">
                        <a onclick="goToIncorectWord()" id="incorrectoDos" alt="opciones pregunta 1" class="incorrect"><img src="images/fase3A_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaDos">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irInstructivoPreguntaTres"
              onclick="irPreguntaTres()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!--Fase 1A pregunta 3
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="instructivoTres">
            <div class="twelve column" style="margin-top: 11%;">
                <h3>Instrucciones (1.A.3) </h3>
                <ol>
                    <li>
                        Dos palabras aparecerán en la parte superior de la pantalla enmarcadas por un rectángulo negro.
                    </li>
                    <li>
                        Luego , verá dos rectángulos con otras dos palabras, que aparecerán en la esquina inferior derecha e izquierda, respectivamente.
                    </li>
                    <li>Ponga atención al rectángulo en la parte superior y a los rectángulos ubicados a la izquierda y a la derecha.
                    </li>
                    <li>Su meta será seleccionar el rectángulo inferior que considera que relaciona con el rectángulo en la parte superior. Para elegir el rectángulo de la izquierda, presione la letra “Z”. Para elegir el rectángulo a la derecha, presione
                        la letra “M”.
                    </li>
                    <li>Su objetivo es obtener tantos CORRECTOS como sea posible.
                    </li>
                </ol>
                <h6><b>NOTA: EL COMPUTADOR LE IRÁ IDICANDO SI LO ESTÁ HACIENDO BIEN O NO. </b></h6>
                <br>
                <p style="text-align: center;"><a class="button" id="" onclick="irPreguntaTres()">Continuar</a>
                </p>
            </div>
        </div>

        <div class="row" id="preguntaTres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a3">
                        <a onclick="goToIncorectWord()" id="incorrectoTres" alt="opciones pregunta 1" class="incorrect"><img src="images/fase1A_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                    <div class="six columns text-center a3">
                        <a onclick="irCorrectoPreguntaTres()" id="irCorrectoPreguntaTres" alt="opciones pregunta 1" class="correct"><img src="images/fase1A_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaTres">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCuatro"
              onclick="irPreguntaCuatro()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!--Fase 1A Pregunta 4
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="preguntaCuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a4">
                        <a onclick="goToIncorectWord()" id="incorrectoCuatro" alt="opciones pregunta 4" class="incorrect"><img src="images/fase4A_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                    <div class="six columns text-center a4">
                        <a onclick="irCorrectoPreguntaCuatro()" id="irCorrectoPreguntaCuatro" alt="opciones pregunta 4" class="correct"><img src="images/fase4A_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaCuatro">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCinco"
              onclick="irPreguntaCinco()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!--Fase 1A Pregunta 5
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="row" id="preguntaCinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a5">
                        <a onclick="irCorrectoPreguntaCinco()" id="irCorrectoPreguntaCinco" alt="opciones pregunta 5" class="correct"><img src="images/fase2A_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                    <div class="six columns text-center a5">
                        <a onclick="goToIncorectWord()" id="incorrectoCinco" alt="opciones pregunta 5" class="incorrect"><img src="images/fase2A_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaCinco">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaSeis"
              onclick="irPreguntaSeis()">CORRECTO</a></b>
                </h1>
            </div>
        </div>


        <!--Fase 1A Pregunta 6
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="preguntaSeis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_uno.png" alt="Fase uno Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center a6">
                        <a onclick="irCorrectoPreguntaSeis()" id="irCorrectoPreguntaSeis" alt="opciones pregunta 5" class="correct"><img src="images/fase5A_dos.png" alt="Fase uno Imagen 2"></a>
                    </div>
                    <div class="six columns text-center a6">
                        <a onclick="goToIncorectWord()" id="incorrectoSeis" alt="opciones pregunta 5" class="incorrect"><img src="images/fase5A_tres.png" alt="Fase uno Imagen 3"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaSeis">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaUnoB"
              onclick="irPreguntaUnoB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <div class="row" id="instructivoDos">
            <div class="twelve column" style="margin-top: 11%;">
                <h3 style="text-align: center;">Instrucciones (1B)</h3>
                <ol>
                    <li>En la parte superior de la pantalla enmarcadas por un rectángulo negro, aparecerá o dos figuras, o una figura y una palabra, o dos palabras.</li>
                    <li>Luego , verá dos rectángulos (figura-figura o figura-palabra o palabra-palabra), que aparecerán en la esquina inferior derecha e izquierda, respectivamente.</li>
                    <li>Ponga atención al rectángulo en la parte superior y a los rectángulos ubicados a la izquierda y a la derecha.
                    </li>
                    <li>Su meta será seleccionar el rectángulo inferior que considera que relaciona con el rectángulo en la parte superior. Para elegir el rectángulo de la izquierda, presione la letra “Z”. Para elegir el rectángulo a la derecha, presione
                        la letra “M”.
                    </li>
                    <li>Su objetivo es obtener tantos CORRECTOS como sea posible.</li>
                    <li>EL COMPUTADOR LE IRÁ IDICANDO SI LO ESTÁ HACIENDO BIEN O NO.</li>
                </ol>
                <br>
                <p style="text-align: center;"><a class="button" id="irPreguntaDos" onclick="irPreguntaUnoB()">Continuar</a></p>
            </div>
        </div>

        <!-- 
      Fase 1B pregunta 1
    -->
        <div class="row" id="preguntaUnoB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_uno.png" alt="Fase uno B Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b1">
                        <a onclick="goToIncorectWordB()" id="incorrectoUnoB" alt="opciones pregunta 1" class="incorrect"><img src="images/fase1B_dos.png" alt="Fase uno B Imagen 2"></a>
                    </div>
                    <div class="six columns text-center b1">
                        <a onclick="irCorrectoPreguntaUnoB()" id="irCorrectoPreguntaUnoB" alt="opciones pregunta 1" class="correct"><img src="images/fase1B_tres.png" alt="Fase uno B Imagen 3"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaUnoB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaDosB"
              onclick="irPreguntaDosB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <div class="row" id="incorrectoDivB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="red opacidadDos incorrectGlobal" id="regresarPreguntaUnoB"
              onclick="backToFirstQuestionB()">INCORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 1B pregunta 2
    -->
        <div class="row" id="preguntaDosB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase uno B Imagen 4">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b2">
                        <a onclick="irCorrectoPreguntaDosB()" id="irCorrectoPreguntaDosB" alt="opciones pregunta 2" class="correct"><img src="images/fase1B_seis.png" alt="Fase uno B Imagen 6"></a>
                    </div>
                    <div class="six columns text-center b2">
                        <a onclick="goToIncorectWordB()" id="incorrectoDosB" alt="opciones pregunta 2" class="incorrect"><img src="images/fase1B_cinco.png" alt="Fase uno B Imagen 5"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaDosB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaTresB"
              onclick="irPreguntaTresB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!-- 
      Fase 1B pregunta 3
    -->
        <div class="row" id="preguntaTresB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase uno B Imagen 7">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b3">
                        <a onclick="goToIncorectWordB()" id="incorrectoTresB" alt="opciones pregunta 3" class="incorrect"><img src="images/fase1A_uno.png" alt="Fase uno B Imagen 8"></a>
                    </div>
                    <div class="six columns text-center b3">
                        <a onclick="irCorrectoPreguntaTresB()" id="irCorrectoPreguntaTresB" alt="opciones pregunta 3" class="correct"><img src="images/fase4A_cuatro.png" alt="Fase uno B Imagen 9"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaTresB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCuatroB"
              onclick="irPreguntaCuatroB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>
        <!-- 
      Fase 1B pregunta 4
    -->
        <div class="row" id="preguntaCuatroB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase uno B Imagen 10">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b4">
                        <a onclick="irCorrectoPreguntaCuatroB()" id="irCorrectoPreguntaCuatroB" alt="opciones pregunta 2" class="correct"><img src="images/fase1A_tres.png" alt="Fase uno B Imagen 11"></a>
                    </div>
                    <div class="six columns text-center b4">
                        <a onclick="goToIncorectWordB()" id="incorrectoCuatroB" alt="opciones pregunta 2" class="incorrect"><img src="images/fase1A_dos.png" alt="Fase uno B Imagen 12"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaCuatroB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaCincoB"
              onclick="irPreguntaCincoB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!-- 
      Fase 1B pregunta 5
    -->
        <div class="row" id="preguntaCincoB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase uno B Imagen 13">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b5">
                        <a onclick="irCorrectoPreguntaCincoB()" id="irCorrectoPreguntaCincoB" alt="opciones pregunta 5" class="correct"><img src="images/fase5A_cuatro.png" alt="Fase uno B Imagen 14"></a>
                    </div>
                    <div class="six columns text-center b5">
                        <a onclick="goToIncorectWordB()" id="incorrectoCincoB" alt="opciones pregunta 5" class="incorrect"><img src="images/fase2A_uno.png" alt="Fase uno B Imagen 15"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaCincoB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irPreguntaSeisB"
              onclick="irPreguntaSeisB()">CORRECTO</a></b>
                </h1>
            </div>
        </div>
        <!-- 
      Fase 1B pregunta 6
    -->
        <div class="row" id="preguntaSeisB">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase uno B Imagen 13">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center b6">
                        <a onclick="goToIncorectWordB()" id="incorrectoSeisB" alt="opciones pregunta 5" class="incorrect"><img src="images/fase5A_uno.png" alt="Fase uno B Imagen 14"></a>
                    </div>
                    <div class="six columns text-center b6">
                        <a onclick="irCorrectoPreguntaSeisB()" id="irCorrectoPreguntaSeisB" alt="opciones pregunta 5" class="correct"><img src="images/fase5A_siete.png" alt="Fase uno B Imagen 15"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoPreguntaSeisB">
            <div class="twelve column" style="margin-top: 25%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irAnuncio" onclick="irAnuncio()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!-- 
      Anuncio
    -->

        <div class="row" id="hola">
            <div class="twelve column" style="margin-top: 25%;">
                <p class="text-center" style="width: 50%; margin: 0 auto;">Muy bien (1C) <br /> De aquí en adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea posible.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="irPreguntaUnoC()">Continuar</a></p>
            </div>
        </div>

        <!-- 1C Igual & Igual-->
        <!-- 
      Fase 1C pregunta 1
    -->
        <div class="row" id="preguntaUnoC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1_uno.png" alt="Fase uno C Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c1">
                        <a onclick="irPreguntaDosC()" alt="opciones pregunta 1" class="correct" id="irCorrectoPreguntaUnoC"><img src="images/fase1_dos.png" alt="Fase uno C Imagen 3"></a>
                    </div>
                    <div class="six columns text-center c1">
                        <a onclick="irPreguntaDosC()" alt="opciones pregunta 1" class="incorrectC incorrectGlobal" id="incorrectoUnoC"><img src="images/fase1_tres.png" alt="Fase uno C Imagen 2"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C pregunta 2
    -->
        <div class="row" id="preguntaDosC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_dos.png" alt="Fase uno C Imagen 4">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c2">
                        <a onclick="irPreguntaTresC()" alt="opciones pregunta 2" class="incorrectC incorrectGlobal" id="incorrectoDosC"><img src="images/fase1B_seis.png" alt="Fase uno C Imagen 5"></a>
                    </div>
                    <div class="six columns text-center c2">
                        <a onclick="irPreguntaTresC()" alt="opciones pregunta 2" class="correct" id="irCorrectoPreguntaDosC"><img src="images/fase1_uno.png" alt="Fase uno C Imagen 6"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C pregunta 3
    -->
        <div class="row" id="preguntaTresC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_uno.png" alt="Fase uno C Imagen 7">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c3">
                        <a onclick="irPreguntaCuatroC()" alt="opciones pregunta 3" class="correct" id="irCorrectoPreguntaTresC"><img src="images/fase1A_dos.png" alt="Fase uno C Imagen 8"></a>
                    </div>
                    <div class="six columns text-center c3">
                        <a onclick="irPreguntaCuatroC()" alt="opciones pregunta 3" class="incorrectC incorrectGlobal" id="incorrectoTresC"><img src="images/fase1A_tres.png" alt="Fase uno C Imagen 9"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C pregunta 4
    -->
        <div class="row" id="preguntaCuatroC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_uno.png" alt="Fase uno C Imagen 10">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c4">
                        <a onclick="irPreguntaCincoC()" alt="opciones pregunta 2" class="correct" id="irCorrectoPreguntaCuatroC"><img src="images/fase1A_uno.png" alt="Fase uno C Imagen 12"></a>
                    </div>
                    <div class="six columns text-center c4">
                        <a onclick="irPreguntaCincoC()" alt="opciones pregunta 2" class="incorrectC incorrectGlobal" id="incorrectoCuatroC"><img src="images/fase4A_tres.png" alt="Fase uno C Imagen 11"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C pregunta 5
    -->
        <div class="row" id="preguntaCincoC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_uno.png" alt="Fase uno C Imagen 13">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c5">
                        <a onclick="irPreguntaSeisC()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCincoC"><img src="images/fase2A_tres.png" alt="Fase uno C Imagen 15"></a>
                    </div>
                    <div class="six columns text-center c5">
                        <a onclick="irPreguntaSeisC()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCincoC"><img src="images/fase2A_dos.png" alt="Fase uno C Imagen 14"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C pregunta 6
    -->
        <div class="row" id="preguntaSeisC">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_uno.png" alt="Fase uno C Imagen 16">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center c6">
                        <a onclick="irPreguntaUnoCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoSeisC"><img src="images/fase5A_tres.png" alt="Fase uno C Imagen 18"></a>
                    </div>
                    <div class="six columns text-center c6">
                        <a onclick="irPreguntaUnoCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaSeisC"><img src="images/fase5A_dos.png" alt="Fase uno C Imagen 17"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 1C Distinción-->

        <!-- 
      Fase 1C Distincion pregunta 1
    -->
        <div class="row" id="preguntaUnoCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_seis.png" alt="Fase uno C Imagen 19">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd1">
                        <a onclick="irPreguntaDosCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaUnoCD"><img src="images/fase1B_tres.png" alt="Fase uno C Imagen 21"></a>
                    </div>
                    <div class="six columns text-center cd1">
                        <a onclick="irPreguntaDosCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoUnoCD"><img src="images/fase1B_dos.png" alt="Fase uno C Imagen 20"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C Distincion pregunta 2
    -->
        <div class="row" id="preguntaDosCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase uno C Imagen 19">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd2">
                        <a onclick="irPreguntaTresCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoDosCD"><img src="images/fase1_dos.png" alt="Fase uno C Imagen 20"></a>
                    </div>
                    <div class="six columns text-center cd2">
                        <a onclick="irPreguntaTresCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaDosCD"><img src="images/fase1B_seis.png" alt="Fase uno C Imagen 21"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C Distincion pregunta 3
    -->
        <div class="row" id="preguntaTresCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase uno C Imagen 22">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd3">
                        <a onclick="irPreguntaCuatroCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaTresCD"><img src="images/fase4A_cuatro.png" alt="Fase uno C Imagen 24"></a>
                    </div>
                    <div class="six columns text-center cd3">
                        <a onclick="irPreguntaCuatroCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoTresCD"><img src="images/fase1A_uno.png" alt="Fase uno C Imagen 23"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1C Distincion pregunta 4
    -->
        <div class="row" id="preguntaCuatroCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase uno C Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd4">
                        <a onclick="irPreguntaCincoCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCuatroCD"><img src="images/fase1A_dos.png" alt="Fase uno C Imagen 26"></a>
                    </div>
                    <div class="six columns text-center cd4">
                        <a onclick="irPreguntaCincoCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCuatroCD"><img src="images/fase1A_tres.png" alt="Fase uno C Imagen 27"></a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 1C Distincion pregunta 5
    -->
        <div class="row" id="preguntaCincoCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase uno C Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd5">
                        <a onclick="irPreguntaSeisCD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCincoCD"><img src="images/fase5A_cuatro.png" alt="Fase uno C Imagen 27"></a>
                    </div>
                    <div class="six columns text-center cd5">
                        <a onclick="irPreguntaSeisCD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCincoCD"><img src="images/fase2A_uno.png" alt="Fase uno C Imagen 26"></a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 1C Distincion pregunta 6
    -->
        <div class="row" id="preguntaSeisCD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase uno C Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center cd6">
                        <a onclick="irPreguntaUnoD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoSeisCD"><img src="images/fase5A_uno.png" alt="Fase uno C Imagen 26"></a>
                    </div>
                    <div class="six columns text-center cd6">
                        <a onclick="irPreguntaUnoD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaSeisCD"><img src="images/fase5A_siete.png" alt="Fase uno C Imagen 27"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 1D Igual & Igual-->
        <!-- 
      Fase 1D pregunta 1
    -->
        <div class="row" id="preguntaUnoD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_uno.png" alt="Fase uno D Imagen 1">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d1">
                        <a onclick="irPreguntaDosD()" alt="opciones pregunta 1" class="correct" id="irCorrectoPreguntaUnoD"><img src="images/faseunoD_dos.png" alt="Fase uno D Imagen 3"></a>
                    </div>
                    <div class="six columns text-center d1">
                        <a onclick="irPreguntaDosD()" alt="opciones pregunta 1" class="incorrectC incorrectGlobal" id="incorrectoUnoD"><img src="images/faseunoD_tres.png" alt="Fase uno D Imagen 2"></a>
                    </div>

                </div>
            </div>
        </div>

        <!-- 
      Fase 1D pregunta 2
    -->
        <div class="row" id="preguntaDosD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_cuatro.png" alt="Fase uno D Imagen 4">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d2">
                        <a onclick="irPreguntaTresD()" alt="opciones pregunta 2" class="incorrectC incorrectGlobal" id="incorrectoDosD"><img src="images/faseunoD_seis.png" alt="Fase uno D Imagen 5"></a>
                    </div>
                    <div class="six columns text-center d2">
                        <a onclick="irPreguntaTresD()" alt="opciones pregunta 2" class="correct" id="irCorrectoPreguntaDosD"><img src="images/faseunoD_cinco.png" alt="Fase uno D Imagen 6"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D pregunta 3
    -->
        <div class="row" id="preguntaTresD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_siete.png" alt="Fase uno D Imagen 7">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d3">
                        <a onclick="irPreguntaCuatroD()" alt="opciones pregunta 3" class="correct" id="irCorrectoPreguntaTresD"><img src="images/faseunoD_ocho.png" alt="Fase uno D Imagen 8"></a>
                    </div>
                    <div class="six columns text-center d3">
                        <a onclick="irPreguntaCuatroD()" alt="opciones pregunta 3" class="incorrectC incorrectGlobal" id="incorrectoTresD"><img src="images/faseunoD_nueve.png" alt="Fase uno D Imagen 9"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D pregunta 4
    -->
        <div class="row" id="preguntaCuatroD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diez.png" alt="Fase uno D Imagen 10">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d4">
                        <a onclick="irPreguntaCincoD()" alt="opciones pregunta 2" class="correct" id="irCorrectoPreguntaCuatroD"><img src="images/faseunoD_once.png" alt="Fase uno D Imagen 11"></a>
                    </div>
                    <div class="six columns text-center d4">
                        <a onclick="irPreguntaCincoD()" alt="opciones pregunta 2" class="incorrectC incorrectGlobal" id="incorrectoCuatroD"><img src="images/faseunoD_doce.png" alt="Fase uno D Imagen 12"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D pregunta 5
    -->
        <div class="row" id="preguntaCincoD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_trece.png" alt="Fase uno D Imagen 13">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d5">
                        <a onclick="irPreguntaSeisD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCincoD"><img src="images/faseunoD_quince.png" alt="Fase uno D Imagen 15"></a>
                    </div>
                    <div class="six columns text-center d5">
                        <a onclick="irPreguntaSeisD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCincoD"><img src="images/faseunoD_catorce.png" alt="Fase uno D Imagen 14"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D pregunta 6
    -->
        <div class="row" id="preguntaSeisD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase uno D Imagen 16">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center d6">
                        <a onclick="irPreguntaUnoDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaSeisD"><img src="images/fase5A_tres.png" alt="Fase uno D Imagen 17"></a>
                    </div>
                    <div class="six columns text-center d6">
                        <a onclick="irPreguntaUnoDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoSeisD"><img src="images/fase5A_dos.png" alt="Fase uno D Imagen 18"></a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 1C Distinción-->

        <!-- 
      Fase 1D Distincion pregunta 1
    -->
        <div class="row" id="preguntaUnoDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diecinueve.png" alt="Fase uno D Imagen 19">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd1">
                        <a onclick="irPreguntaDosDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaUnoDD"><img src="images/faseunoD_veintiuno.png" alt="Fase uno D Imagen 21"></a>
                    </div>
                    <div class="six columns text-center dd1">
                        <a onclick="irPreguntaDosDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoUnoDD"><img src="images/faseunoD_veinte.png" alt="Fase uno D Imagen 20"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D Distincion pregunta 2
    -->
        <div class="row" id="preguntaDosDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veintiuno.png" alt="Fase uno D Imagen 19">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd2">
                        <a onclick="irPreguntaTresDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoDosDD"><img src="images/faseunoD_uno.png" alt="Fase uno D Imagen 20"></a>
                    </div>
                    <div class="six columns text-center dd2">
                        <a onclick="irPreguntaTresDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaDosDD"><img src="images/faseunoD_veintidos.png" alt="Fase uno D Imagen 21"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D Distincion pregunta 3
    -->
        <div class="row" id="preguntaTresDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_nueve.png" alt="Fase uno D Imagen 22">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd3">
                        <a onclick="irPreguntaCuatroDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaTresDD"><img src="images/faseunoD_veintitres.png" alt="Fase uno D Imagen 24"></a>
                    </div>
                    <div class="six columns text-center dd3">
                        <a onclick="irPreguntaCuatroDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoTresDD"><img src="images/faseunoD_siete.png" alt="Fase uno D Imagen 23"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 1D Distincion pregunta 4
    -->
        <div class="row" id="preguntaCuatroDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_doce.png" alt="Fase uno D Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd4">
                        <a onclick="irPreguntaCincoDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCuatroDD"><img src="images/faseunoD_diez.png" alt="Fase uno D Imagen 26"></a>
                    </div>
                    <div class="six columns text-center dd4">
                        <a onclick="irPreguntaCincoDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCuatroDD"><img src="images/faseunoD_veinticuatro.png" alt="Fase uno D Imagen 27"></a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 1D Distincion pregunta 5
    -->
        <div class="row" id="preguntaCincoDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_quince.png" alt="Fase uno D Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd5">
                        <a onclick="irPreguntaSeisDD()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoCincoDD"><img src="images/faseunoD_trece.png" alt="Fase uno D Imagen 26"></a>
                    </div>
                    <div class="six columns text-center dd5">
                        <a onclick="irPreguntaSeisDD()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaCincoDD"><img src="images/faseunoD_veinticinco.png" alt="Fase uno D Imagen 27"></a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 1D Distincion pregunta 6
    -->
        <div class="row" id="preguntaSeisDD">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase uno D Imagen 25">
                </p>
                <div class="row opacidad" style="margin-top: 5em;">
                    <div class="six columns text-center dd6">
                        <a onclick="goToFase2()" alt="opciones pregunta 5" class="correct" id="irCorrectoPreguntaSeisDD"><img src="images/faseunoD_quince.png" alt="Fase uno D Imagen 26"></a>
                    </div>
                    <div class="six columns text-center dd6">
                        <a onclick="irGracias()" alt="opciones pregunta 5" class="incorrectC incorrectGlobal" id="incorrectoSeisDD"><img src="images/faseunoD_catorce.png" alt="Fase uno D Imagen 27"></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Gracias
    -->
        <div class="row" id="gracias">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="" id="" href="#">Has agotado todos los intentos, Gracias por participar.</a></b>
                </h1>
            </div>
        </div>

    </div>

    <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseUno/logic.js"></script>
<script src="js/faseUno/faseUno.js"></script>
<script src="js/faseUno/keyUnoA.js"></script>
<script src="js/faseUno/keyUnoB.js"></script>
<script src="js/faseUno/keyUnoC.js"></script>
<script src="js/faseUno/keyUnoD.js"></script>
<script src="js/faseUno/count.js"></script>

</html>