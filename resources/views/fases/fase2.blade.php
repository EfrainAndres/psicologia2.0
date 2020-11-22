<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fase 2 - Preguntas</title>
    <meta name="description" content="Fases de pruebas psicotécnicas para evaluación">
    <meta name="author" content="">

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/skeleton.css">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="icon" type="image/png" href="./images/favicon.png">

</head>

<body>

    <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <div class="container">
        <div class="row" id="instructivoUno">
            <div class="twelve column" style="margin-top: 11%;">
                <h3>Instrucciones (2.0)</h3>
                <p>El formato de la tarea cambiará. Ahora, dos rectángulos aparecerán de forma simultánea en la parte
                    superior y en el centro de la pantalla. Su meta es decir si estos se encuentran relacionados o no.
                    Tendrá que usar la tecla “Z” para la respuesta “Sí” y la letra “M” para la respuesta “NO”. Las
                    opciones de respuesta serán siempre “SÍ” y “NO”. El computador le irá indicando si lo está haciendo
                    bien o no.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="goToFaseDosA_uno()">Empezar</a></p>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 1 Figura Figura
    -->
        <div class="row" id="faseDosA_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1_uno.png" alt="Fase dos A Imagen 1">
                    <br /><br /><br /><br />
                    <img src="./images/fase1_dos.png" class="opacidad" alt="Fase dos A Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a1">
                        <a onclick="correctFaseDosA_uno()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a1">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_uno">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_uno"
                            onclick="goToFaseDosA_dos()">CORRECTO</a></b></h1>
            </div>
        </div>

        <div class="row" id="incorrectoDivDosA">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="red opacidadDos incorrectCount" id="regresarPreguntaDosA"
                            onclick="backToFirstQuestionDosA()">INCORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 2 Figura Figura
    -->
        <div class="row " id="faseDosA_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1_uno.png" alt="Fase dos A Imagen 3">
                    <br /><br /><br /><br />
                    <img src="./images/fase1_tres.png" class="opacidad" alt="Fase dos A Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a2">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a2">
                        <a onclick="correctFaseDosA_dos()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_dos">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_dos"
                            onclick="goToFaseDosA_tres()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 3 Figura Figura
    -->
        <div class="row " id="faseDosA_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1B_dos.png" alt="Fase dos A Imagen 5">
                    <br /><br /><br /><br />
                    <img src="./images/fase1_uno.png" class="opacidad" alt="Fase dos A Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a3">
                        <a onclick="correctFaseDosA_tres()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a3">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_tres">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_tres"
                            onclick="goToFaseDosA_cuatro()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 4 Figura Figura
    -->

        <div class="row " id="faseDosA_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1B_dos.png" alt="Fase dos A Imagen 7">
                    <br /><br /><br /><br />
                    <img src="./images/fase1B_seis.png " class="opacidad" alt="Fase dos A Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a4">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a4">
                        <a onclick="correctFaseDosA_cuatro()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_cuatro">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_cuatro"
                            onclick="goToFaseDosA_cinco()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 5 figura texto
    -->
        <div class="row " id="faseDosA_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1A_uno.png" alt="Fase dos A Imagen 9">
                    <br /><br /><br /><br />
                    <img src="./images/fase1A_dos.png" class="opacidad" alt="Fase dos A Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a5">
                        <a onclick="correctFaseDosA_seis()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a5">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_cinco">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_cinco"
                            onclick="goToFaseDosA_seis()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 6 figura texto
    -->
        <div class="row " id="faseDosA_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1A_uno.png" alt="Fase dos A Imagen 11">
                    <br /><br /><br /><br />
                    <img src="./images/fase1A_tres.png" class="opacidad" alt="Fase dos A Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a6">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a6">
                        <a onclick="correctFaseDosA_seis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_seis">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_seis"
                            onclick="goToFaseDosA_siete()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 7 figura texto
    -->
        <div class="row " id="faseDosA_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase4A_uno.png" alt="Fase dos A Imagen 13">
                    <br /><br /><br /><br />
                    <img src="./images/fase4A_dos.png" class="opacidad" alt="Fase dos A Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a7">
                        <a onclick="correctFaseDosA_siete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a7">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_siete">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_siete"
                            onclick="goToFaseDosA_ocho()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 8 figura texto
    -->
        <div class="row " id="faseDosA_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase4A_uno.png" alt="Fase dos A Imagen 15">
                    <br /><br /><br /><br />
                    <img src="./images/fase4A_tres.png" class="opacidad" alt="Fase dos A Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a8">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a8">
                        <a onclick="correctFaseDosA_ocho()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_ocho">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_ocho"
                            onclick="goToFaseDosA_nueve()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 9 texto texto
    -->
        <div class="row " id="faseDosA_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase2A_uno.png" alt="Fase dos A Imagen 17">
                    <br /><br /><br /><br />
                    <img src="./images/fase2A_dos.png" class="opacidad" alt="Fase dos A Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a9">
                        <a onclick="correctFaseDosA_nueve()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a9">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_nueve">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_nueve"
                            onclick="goToFaseDosA_diez()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 10 texto texto
    -->
        <div class="row " id="faseDosA_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase2A_uno.png" alt="Fase dos A Imagen 19">
                    <br /><br /><br /><br />
                    <img src="./images/fase2A_tres.png" class="opacidad" alt="Fase dos A Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a10">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a10">
                        <a onclick="correctFaseDosA_diez()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_diez">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_diez"
                            onclick="goToFaseDosA_once()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 11 texto texto
    -->
        <div class="row " id="faseDosA_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase5A_uno.png" alt="Fase dos A Imagen 21">
                    <br /><br /><br /><br />
                    <img src="./images/fase5A_dos.png" class="opacidad" alt="Fase dos A Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a11">
                        <a onclick="correctFaseDosA_once()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns a11">
                        <a onclick="goToIncorrectWordDosA()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_once">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_once"
                            onclick="goToFaseDosA_doce()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2A pregunta 12 texto texto
    -->
        <div class="row " id="faseDosA_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase5A_uno.png" alt="Fase dos A Imagen 22">
                    <br /><br /><br /><br />
                    <img src="./images/fase5A_tres.png" class="opacidad" alt="Fase dos A Imagen 23">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns a12">
                        <a onclick="goToIncorrectWordDosA()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns a12">
                        <a onclick="correctFaseDosA_doce()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosA_doce">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosA_doce"
                            onclick="goToInstructivoDosB()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- Fase 2B
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="row" id="instructivoDosB">
            <div class="twelve column" style="margin-top: 11%;">
                <p class="text-center" style="width: 50%; margin: 0 auto;">¡Muy bien (2B)!<br /> De aquí en adelante, no
                    aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea posible.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="goToFaseDosB_uno()">Continuar</a></p>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 2 Figura Figura
-->
        <div class="row " id="faseDosB_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1_uno.png" alt="Fase dos A Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/fase1_tres.png" class="opacidad" lt="Fase dos A Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b1">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b1">
                        <a onclick="goToFaseDosB_dos()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 4 Figura Figura
  -->
        <div class="row " id="faseDosB_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_dos.png" alt="Fase dos A Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_seis.png" class="opacidad" alt="Fase dos A Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b2">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b2">
                        <a onclick="goToFaseDosB_tres()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 3 Figura Figura
-->
        <div class="row " id="faseDosB_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1B_dos.png" alt="Fase dos A Imagen 5">
                    <br /><br /><br /><br />
                    <img src="./images/fase1_uno.png" class="opacidad" alt="Fase dos A Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b3">
                        <a onclick="goToFaseDosB_cuatro()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b3">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 1 Figura Figura
-->
        <div class="row " id="faseDosB_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1_uno.png" alt="Fase dos A Imagen 1">
                    <br /><br /><br /><br />
                    <img src="./images/fase1_dos.png" class="opacidad" alt="Fase dos A Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b4">
                        <a onclick="goToFaseDosB_cinco()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b4">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 8 figura texto
-->
        <div class="row " id="faseDosB_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_uno.png" alt="Fase dos A Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_tres.png" class="opacidad" alt="Fase dos A Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b5">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b5">
                        <a onclick="goToFaseDosB_seis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 6 figura texto
-->
        <div class="row " id="faseDosB_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_uno.png" alt="Fase dos A Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/fase1A_tres.png" class="opacidad" alt="Fase dos A Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b6">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b6">
                        <a onclick="goToFaseDosB_siete()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 5 figura texto
-->

        <div class="row " id="faseDosB_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_uno.png" alt="Fase dos A Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_dos.png" class="opacidad" lt="Fase dos A Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b7">
                        <a onclick="goToFaseDosB_ocho()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b7">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 7 figura texto
-->

        <div class="row " id="faseDosB_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase1A_uno.png" alt="Fase dos A Imagen 9">
                    <br /><br /><br /><br />
                    <img src="./images/fase1A_dos.png" class="opacidad" alt="Fase dos A Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b8">
                        <a onclick="goToFaseDosB_nueve()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b8">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 10 texto texto
-->
        <div class="row " id="faseDosB_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_uno.png" alt="Fase dos A Imagen 19">
                    <br /><br /><br /><br />
                    <img src="images/fase2A_tres.png" class="opacidad" alt="Fase dos A Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b9">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b9">
                        <a onclick="goToFaseDosB_diez()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2B pregunta 9 texto texto
    -->
        <div class="row" id="faseDosB_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase2A_uno.png" alt="Fase dos A Imagen 17">
                    <br /><br /><br /><br />
                    <img src="./images/fase2A_dos.png" class="opacidad" alt="Fase dos A Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b10">
                        <a onclick="goToFaseDosB_once()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b10">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 12 texto texto
-->
        <div class="row " id="faseDosB_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase5A_uno.png" alt="Fase dos A Imagen 22">
                    <br /><br /><br /><br />
                    <img src="./images/fase5A_tres.png" class="opacidad" alt="Fase dos A Imagen 23">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b11">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns b11">
                        <a onclick="goToFaseDosB_doce()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
Fase 2B pregunta 11 texto texto
-->
        <div class="row " id="faseDosB_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="./images/fase5A_uno.png" alt="Fase dos A Imagen 21">
                    <br /><br /><br /><br />
                    <img src="./images/fase5A_dos.png" class="opacidad" alt="Fase dos A Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns b12">
                        <a onclick="goToInstructivoDosC()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns b12">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2C
    -->

        <div class="row" id="instructivoDosC">
            <div class="twelve column" style="margin-top: 11%;">
                <h3>Instrucciones (2C)</h3>
                <p>El formato de la tarea cambiará. Ahora, dos rectángulos aparecerán de forma simultánea en la parte
                    superior y en el centro de la pantalla. Su meta es decir si estos se encuentran relacionados o no.
                    Tendrá que usar la tecla “Z” para la respuesta “Sí” y la letra “M” para la respuesta “NO”. Las
                    opciones de respuesta serán siempre “SÍ” y “NO”. El computador le irá indicando si lo está haciendo
                    bien o no.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="goToFaseDosC_uno()">Continuar</a></p>
                <br>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 1 Figura Figura
    -->
        <div class="row" id="faseDosC_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_seis.png" alt="Fase dos A Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_dos.png" class="opacidad" lt="Fase dos A Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c1">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c1">
                        <a onclick="correctFaseDosC_uno()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_uno">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_uno"
                            onclick="goToFaseDosC_dos()">CORRECTO</a></b></h1>
            </div>
        </div>

        <div class="row" id="incorrectoDivDosC">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="red opacidadDos incorrectCount" id="regresarPreguntaDosC"
                            onclick="backToFirstQuestionDosC()">INCORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 2 Figura Figura
    -->
        <div class="row " id="faseDosC_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_seis.png" alt="Fase dos A Imagen 1">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_tres.png" class="opacidad" alt="Fase dos A Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c2">
                        <a onclick="correctFaseDosC_dos()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c2">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_dos">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_dos"
                            onclick="goToFaseDosC_tres()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 3 figura figura
    -->
        <div class="row " id="faseDosC_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase dos A Imagen 9">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_cinco.png" class="opacidad" alt="Fase dos A Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c3">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c3">
                        <a onclick="correctFaseDosC_tres()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_tres">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_tres"
                            onclick="goToFaseDosC_cuatro()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 4 figura figura
    -->
        <div class="row " id="faseDosC_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase dos A Imagen 22">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_seis.png" class="opacidad" alt="Fase dos A Imagen 23">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c4">
                        <a onclick="correctFaseDosC_cuatro()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c4">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_cuatro">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_cuatro"
                            onclick="goToFaseDosC_cinco()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 5 figura texto
    -->
        <div class="row " id="faseDosC_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase dos A Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_dos.png" class="opacidad" lt="Fase dos A Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c5">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c5">
                        <a onclick="correctFaseDosC_cinco()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_cinco">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_cinco"
                            onclick="goToFaseDosC_seis()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 6 Figura texto
    -->
        <div class="row " id="faseDosC_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase dos A Imagen 5">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_cuatro.png" class="opacidad" alt="Fase dos A Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c6">
                        <a onclick="correctFaseDosC_seis()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c6">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_seis">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_seis"
                            onclick="goToFaseDosC_siete()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 7 Figura texto
    -->
        <div class="row " id="faseDosC_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase dos A Imagen 21">
                    <br /><br /><br /><br />
                    <img src="images/fase1A_dos.png" class="opacidad" lt="Fase dos A Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c7">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c7">
                        <a onclick="correctFaseDosC_siete()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_siete">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_siete"
                            onclick="goToFaseDosC_ocho()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 8 Figura texto
    -->
        <div class="row " id="faseDosC_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase dos A Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/fase1A_tres.png" class="opacidad" alt="Fase dos A Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c8">
                        <a onclick="correctFaseDosC_ocho()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c8">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_ocho">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_ocho"
                            onclick="goToFaseDosC_nueve()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 9 texto texto
    -->
        <div class="row " id="faseDosC_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase dos A Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/fase2A_uno.png" class="opacidad" lt="Fase dos A Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c9">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c9">
                        <a onclick="correctFaseDosC_nueve()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_nueve">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_nueve"
                            onclick="goToFaseDosC_diez()">CORRECTO</a></b>
                </h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 10 texto texto
    -->
        <div class="row " id="faseDosC_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase dos A Imagen 19">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_cuatro.png" class="opacidad" alt="Fase dos A Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c10">
                        <a onclick="correctFaseDosC_diez()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c10">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_diez">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_diez"
                            onclick="goToFaseDosC_once()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 11 texto texto
    -->
        <div class="row " id="faseDosC_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase dos A Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_uno.png" class="opacidad" lt="Fase dos A Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c11">
                        <a onclick="goToIncorectWordDosC()" alt="si" class="incorrect ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns c11">
                        <a onclick="correctFaseDosC_once()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_once">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_once"
                            onclick="goToFaseDosC_doce()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2C pregunta 12 texto texto
    -->
        <div class="row " id="faseDosC_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase dos A Imagen 17">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_siete.png" class="opacidad" alt="Fase dos A Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns c12">
                        <a onclick="correctFaseDosC_doce()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns c12">
                        <a onclick="goToIncorectWordDosC()" alt="no" class="incorrect ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="correctoDosC_doce">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="green opacidadDos" id="irfaseDosC_doce"
                            onclick="goToInstructivoDosD()">CORRECTO</a></b></h1>
            </div>
        </div>

        <!-- 
      Fase 2D 
    -->

        <div class="row" id="instructivoDosD">
            <div class="twelve column" style="margin-top: 11%;">
                <p class="text-center" style="width: 50%; margin: 1rem auto 0rem;">¡Muy bien (2D)!<br /> De aquí en
                    adelante, no aparecerá retroalimentación, su objetivo será obtener tantos CORRECTOS como sea
                    posible.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="goToFaseDosD_uno()">Continuar</a></p>
            </div>
        </div>


        <!-- 
      Fase 2D pregunta 3 figura figura
    -->
        <div class="row " id="faseDosD_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase dos A Imagen 9">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_cinco.png" class="opacidad" alt="Fase dos A Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d1">
                        <a onclick="goToInstructivoDosC()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d1">
                        <a onclick="goToFaseDosD_dos()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 4 figura figura
    -->
        <div class="row " id="faseDosD_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_cuatro.png" alt="Fase dos A Imagen 22">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_seis.png" class="opacidad" alt="Fase dos A Imagen 23">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d2">
                        <a onclick="goToFaseDosD_tres()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d2">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="faseDosD_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_seis.png" alt="Fase dos A Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_dos.png" class="opacidad" lt="Fase dos A Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d3">
                        <a onclick="goToInstructivoDosC()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d3">
                        <a onclick="goToFaseDosD_cuatro()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 2 Figura Figura
    -->
        <div class="row " id="faseDosD_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1B_seis.png" alt="Fase dos A Imagen 1">
                    <br /><br /><br /><br />
                    <img src="images/fase1B_tres.png" class="opacidad" alt="Fase dos A Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d4">
                        <a onclick="goToFaseDosD_cinco()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d4">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 7 Figura texto
    -->
        <div class="row " id="faseDosD_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase dos A Imagen 21">
                    <br /><br /><br /><br />
                    <img src="images/fase1A_dos.png" class="opacidad" lt="Fase dos A Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d5">
                        <a onclick="goToInstructivoDosC()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d5">
                        <a onclick="goToFaseDosD_seis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 8 Figura texto
    -->
        <div class="row " id="faseDosD_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4A_cuatro.png" alt="Fase dos A Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/fase1A_tres.png" class="opacidad" alt="Fase dos A Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d6">
                        <a onclick="goToFaseDosD_siete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d6">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 5 figura texto
    -->
        <div class="row " id="faseDosD_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase dos A Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_dos.png" class="opacidad" lt="Fase dos A Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d7">
                        <a onclick="goToInstructivoDosC()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d7">
                        <a onclick="goToFaseDosD_ocho()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 6 Figura texto
    -->
        <div class="row " id="faseDosD_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase1A_tres.png" alt="Fase dos A Imagen 5">
                    <br /><br /><br /><br />
                    <img src="images/fase4A_cuatro.png" class="opacidad" alt="Fase dos A Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d8">
                        <a onclick="goToFaseDosD_nueve()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d8">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 11 texto texto
    -->
        <div class="row " id="faseDosD_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase dos A Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_uno.png" class="opacidad" lt="Fase dos A Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d9">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d9">
                        <a onclick="goToFaseDosD_diez()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 12 texto texto
    -->
        <div class="row " id="faseDosD_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase5A_tres.png" alt="Fase dos A Imagen 17">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_siete.png" class="opacidad" alt="Fase dos A Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d10">
                        <a onclick="goToFaseDosD_once()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d10">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 9 texto texto
    -->
        <div class="row " id="faseDosD_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase dos A Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/fase2A_uno.png" class="opacidad" lt="Fase dos A Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d11">
                        <a onclick="goToInstructivoDosC()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns d11">
                        <a onclick="goToFaseDosD_doce()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2D pregunta 10 texto texto
    -->
        <div class="row " id="faseDosD_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase2A_tres.png" alt="Fase dos A Imagen 19">
                    <br /><br /><br /><br />
                    <img src="images/fase5A_cuatro.png" class="opacidad" alt="Fase dos A Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns d12">
                        <a onclick="goToInstructivoDosE()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns d12">
                        <a onclick="goToInstructivoDosC()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
        Fase 2E
        -->

        <div class="row" id="instructivoDosE">
            <div class="twelve column" style="margin-top: 11%;">
                <p class="text-center" style="width: 50%; margin: 0 auto;">¡Muy bien (2E)!<br /> De aquí en adelante
                    seguiremos sin retroalimentación, su objetivo será obtener tantos CORRECTOS como sea posible.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="goToFaseDosE_uno()">Continuar</a></p>
            </div>
        </div>

        <!-- 
        Fase 2E pregunta 1 Figura Figura
        -->
        <div class="row" id="faseDosE_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_uno.png" alt="Fase dos E Imagen 1">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_dos.png" class="opacidad" alt="Fase dos E Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e1">
                        <a onclick="goToFaseDosE_dos()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e1">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 5 Figura texto
      -->
        <div class="row " id="faseDosE_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_siete.png" alt="Fase dos E Imagen 9">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_ocho.png" class="opacidad" alt="Fase dos E Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e2">
                        <a onclick="goToFaseDosE_tres()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e2">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 9 texto texto
      -->
        <div class="row " id="faseDosE_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_trece.png" alt="Fase dos E Imagen 17">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_catorce.png" class="opacidad" alt="Fase dos E Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e3">
                        <a onclick="goToFaseDosE_cuatro()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e3">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 2 Figura Figura
      -->
        <div class="row " id="faseDosE_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_uno.png" alt="Fase dos E Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_tres.png" class="opacidad" alt="Fase dos E Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e4">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e4">
                        <a onclick="goToFaseDosE_cinco()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 6 Figura texto
      -->
        <div class="row " id="faseDosE_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_siete.png" alt="Fase dos E Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_nueve.png" class="opacidad" alt="Fase dos E Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e5">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e5">
                        <a onclick="goToFaseDosE_seis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 2E pregunta 3 Figura Figura
      -->
        <div class="row " id="faseDosE_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veinte.png" alt="Fase dos E Imagen 5">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_cinco.png" class="opacidad" alt="Fase dos E Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e6">
                        <a onclick="goToFaseDosE_siete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e6">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 10 texto texto
      -->
        <div class="row " id="faseDosE_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_trece.png" alt="Fase dos E Imagen 19">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_quince.png" class="opacidad" alt="Fase dos E Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e7">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e7">
                        <a onclick="goToFaseDosE_ocho()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 4 Figura Figura
      -->
        <div class="row " id="faseDosE_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veinte.png" alt="Fase dos E Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_seis.png" class="opacidad" alt="Fase dos E Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e8">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e8">
                        <a onclick="goToFaseDosE_nueve()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 7 Figura texto
      -->
        <div class="row " id="faseDosE_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diez.png" alt="Fase dos E Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_once.png" class="opacidad" alt="Fase dos E Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e9">
                        <a onclick="goToFaseDosE_diez()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e9">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 11 texto texto
      -->
        <div class="row " id="faseDosE_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciseis.png" alt="Fase dos E Imagen 21">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_diecisiete.png" class="opacidad" alt="Fase dos E Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e10">
                        <a onclick="goToFaseDosE_once()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e10">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 8 Figura texto
      -->
        <div class="row " id="faseDosE_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diez.png" alt="Fase dos E Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_doce.png" class="opacidad" alt="Fase dos E Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e11">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns 11">
                        <a onclick="goToFaseDosE_doce()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 2E pregunta 12 texto texto
      -->
        <div class="row " id="faseDosE_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciseis.png" alt="Fase dos E Imagen 23">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_dieciocho.png" class="opacidad" alt="Fase dos E Imagen 24">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e12">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e12">
                        <a onclick="goToFaseDosE_trece()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 22 texto texto Diferente
      -->
        <div class="row " id="faseDosE_trece">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase dos E Imagen 41">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_quince.png" class="opacidad" alt="Fase dos E Imagen 42">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e13">
                        <a onclick="goToFaseDosE_catorce()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e13">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 13 Figura Figura Diferente
      -->
        <div class="row " id="faseDosE_catorce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_tres.png" alt="Fase dos E Imagen 25">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinte.png" class="opacidad" alt="Fase dos E Imagen 26">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e14">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e14">
                        <a onclick="goToFaseDosE_quince()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 17 Figura texto Diferente
      -->
        <div class="row " id="faseDosE_quince">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_nueve.png" alt="Fase dos E Imagen 33">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_siete.png" class="opacidad" alt="Fase dos E Imagen 34">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e15">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e15">
                        <a onclick="goToFaseDosE_dieciseis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 14 Figura Figura Diferente
      -->
        <div class="row " id="faseDosE_dieciseis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_tres.png" alt="Fase dos E Imagen 27">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintiuno.png" class="opacidad" alt="Fase dos E Imagen 28">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e16">
                        <a onclick="goToFaseDosE_diecisiete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e16">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 24 texto texto Diferente
      -->
        <div class="row " id="faseDosE_diecisiete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_quince.png" alt="Fase dos E Imagen 45">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinticinco.png" class="opacidad" alt="Fase dos E Imagen 46">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e17">
                        <a onclick="goToFaseDosE_dieciocho()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e17">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 15 Figura Figura Diferente
      -->
        <div class="row " id="faseDosE_dieciocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veintiuno.png" alt="Fase dos E Imagen 29">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_uno.png" class="opacidad" alt="Fase dos E Imagen 30">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e18">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e18">
                        <a onclick="goToFaseDosE_diecinueve()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 18 Figura texto Diferente
      -->
        <div class="row " id="faseDosE_diecinueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_nueve.png" alt="Fase dos E Imagen 35">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintitres.png" class="opacidad" alt="Fase dos E Imagen 36">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e19">
                        <a onclick="goToFaseDosE_veinte()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e19">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 16 Figura Figura Diferente
      -->
        <div class="row " id="faseDosE_veinte">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veintiuno.png" alt="Fase dos E Imagen 31">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintidos.png" class="opacidad" alt="Fase dos E Imagen 32">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e20">
                        <a onclick="goToFaseDosE_veintiuno()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e20">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>



        <!-- 
      Fase 2E pregunta 20 Figura texto Diferente
      -->
        <div class="row " id="faseDosE_veintiuno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_doce.png" alt="Fase dos E Imagen 39">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinticuatro.png" class="opacidad" alt="Fase dos E Imagen 40">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e21">
                        <a onclick="goToFaseDosE_veintidos()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e21">
                        <a onclick="backToFirstQuestionDosA()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 21 texto texto Diferente
      -->
        <div class="row " id="faseDosE_veintidos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase dos E Imagen 41">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_catorce.png" class="opacidad" alt="Fase dos E Imagen 42">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e22">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e22">
                        <a onclick="goToFaseDosE_veintitres()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 19 Figura texto Diferente
      -->
        <div class="row " id="faseDosE_veintitres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_doce.png" alt="Fase dos E Imagen 37">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_diez.png" class="opacidad" alt="Fase dos E Imagen 38">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e23">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e23">
                        <a onclick="goToFaseDosE_veinticuatro()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 2E pregunta 23 texto texto Diferente
      -->
        <div class="row " id="faseDosE_veinticuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_quince.png" alt="Fase dos E Imagen 43">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_trece.png" class="opacidad" alt="Fase dos E Imagen 44">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e24">
                        <a onclick="backToFirstQuestionDosA()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e24">
                        <a onclick="goToFase3()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Gracias
    -->
        <div class="row" id="gracias">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="" id="regresarPreguntaUno" href="#"> Has agotado todos los
                            intentos, Gracias por participar.</a></b>
                </h1>
            </div>
        </div>

    </div>
    <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseDos/logic.js"></script>
<script src="js/faseDos/faseDos.js"></script>
<script src="js/faseDos/keyDosA.js"></script>
<script src="js/faseDos/keyDosB.js"></script>
<script src="js/faseDos/keyDosC.js"></script>
<script src="js/faseDos/keyDosD.js"></script>
<script src="js/faseDos/keyDosE.js"></script>
<script src="js/faseDos/count.js"></script>

</html>