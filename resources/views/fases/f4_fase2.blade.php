<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fase 4 - Fase 2</title>
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


        <!-- 
        Fase 4 - Fase 2E
        -->

        <div class="row" id="instructivoCuatro_Dos">
            <div class="twelve column" style="margin-top: 11%;">
                <h3>Instrucciones (2.0)</h3>
                <p>El formato de la tarea cambiará. Ahora, dos rectángulos aparecerán de forma simultánea en la parte
                    superior y en el centro de la pantalla. Su meta es decir si estos se encuentran relacionados o no.
                    Tendrá que usar la tecla “Z” para la respuesta “Sí” y la letra “M” para la respuesta “NO”. Las
                    opciones de respuesta serán siempre “SÍ” y “NO”. El computador le irá indicando si lo está haciendo
                    bien o no.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="Fase4_faseDosE_uno()">Empezar</a></p>
            </div>
        </div>

        <!-- 
        Fase 4 - Fase 2E pregunta 1 Figura Figura
        -->
        <div class="row" id="Fase4_faseDosE_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_uno.png" alt="Fase dos E Imagen 1">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_dos.png" class="opacidad" alt="Fase dos E Imagen 2">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e1">
                        <a onclick="goToFase4_FaseDosE_dos()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e1">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 5 Figura texto
      -->
        <div class="row " id="Fase4_faseDosE_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_siete.png" alt="Fase dos E Imagen 9">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_ocho.png" class="opacidad" alt="Fase dos E Imagen 10">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e2">
                        <a onclick="goToFase4_FaseDosE_tres()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e2">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 9 texto texto
      -->
        <div class="row " id="Fase4_faseDosE_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_trece.png" alt="Fase dos E Imagen 17">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_catorce.png" class="opacidad" alt="Fase dos E Imagen 18">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e3">
                        <a onclick="goToFase4_FaseDosE_cuatro()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e3">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 2 Figura Figura
      -->
        <div class="row " id="Fase4_faseDosE_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_uno.png" alt="Fase dos E Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_tres.png" class="opacidad" alt="Fase dos E Imagen 4">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e4">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e4">
                        <a onclick="goToFase4_FaseDosE_cinco()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 6 Figura texto
      -->
        <div class="row " id="Fase4_faseDosE_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_siete.png" alt="Fase dos E Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_nueve.png" class="opacidad" alt="Fase dos E Imagen 12">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e5">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e5">
                        <a onclick="goToFase4_FaseDosE_seis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 4 - Fase 2E pregunta 3 Figura Figura
      -->
        <div class="row " id="Fase4_faseDosE_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veinte.png" alt="Fase dos E Imagen 5">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_cinco.png" class="opacidad" alt="Fase dos E Imagen 6">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e6">
                        <a onclick="goToFase4_FaseDosE_siete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e6">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 10 texto texto
      -->
        <div class="row " id="Fase4_faseDosE_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_trece.png" alt="Fase dos E Imagen 19">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_quince.png" class="opacidad" alt="Fase dos E Imagen 20">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e7">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e7">
                        <a onclick="goToFase4_FaseDosE_ocho()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 4 Figura Figura
      -->
        <div class="row " id="Fase4_faseDosE_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veinte.png" alt="Fase dos E Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_seis.png" class="opacidad" alt="Fase dos E Imagen 8">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e8">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e8">
                        <a onclick="goToFase4_FaseDosE_nueve()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 7 Figura texto
      -->
        <div class="row " id="Fase4_faseDosE_nueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diez.png" alt="Fase dos E Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_once.png" class="opacidad" alt="Fase dos E Imagen 14">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e9">
                        <a onclick="goToFase4_FaseDosE_diez()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e9">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 11 texto texto
      -->
        <div class="row " id="Fase4_faseDosE_diez">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciseis.png" alt="Fase dos E Imagen 21">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_diecisiete.png" class="opacidad" alt="Fase dos E Imagen 22">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e10">
                        <a onclick="goToFase4_FaseDosE_once()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e10">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 8 Figura texto
      -->
        <div class="row " id="Fase4_faseDosE_once">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_diez.png" alt="Fase dos E Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_doce.png" class="opacidad" alt="Fase dos E Imagen 16">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e11">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns 11">
                        <a onclick="goToFase4_FaseDosE_doce()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 4 - Fase 2E pregunta 12 texto texto
      -->
        <div class="row " id="Fase4_faseDosE_doce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciseis.png" alt="Fase dos E Imagen 23">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_dieciocho.png" class="opacidad" alt="Fase dos E Imagen 24">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e12">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e12">
                        <a onclick="goToFase4_FaseDosE_trece()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 22 texto texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_trece">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase dos E Imagen 41">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_quince.png" class="opacidad" alt="Fase dos E Imagen 42">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e13">
                        <a onclick="goToFase4_FaseDosE_catorce()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e13">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 13 Figura Figura Diferente
      -->
        <div class="row " id="Fase4_faseDosE_catorce">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_tres.png" alt="Fase dos E Imagen 25">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinte.png" class="opacidad" alt="Fase dos E Imagen 26">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e14">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e14">
                        <a onclick="goToFase4_FaseDosE_quince()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 17 Figura texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_quince">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_nueve.png" alt="Fase dos E Imagen 33">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_siete.png" class="opacidad" alt="Fase dos E Imagen 34">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e15">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e15">
                        <a onclick="goToFase4_FaseDosE_dieciseis()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 14 Figura Figura Diferente
      -->
        <div class="row " id="Fase4_faseDosE_dieciseis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_tres.png" alt="Fase dos E Imagen 27">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintiuno.png" class="opacidad" alt="Fase dos E Imagen 28">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e16">
                        <a onclick="goToFase4_FaseDosE_diecisiete()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e16">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 24 texto texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_diecisiete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_quince.png" alt="Fase dos E Imagen 45">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinticinco.png" class="opacidad" alt="Fase dos E Imagen 46">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e17">
                        <a onclick="goToFase4_FaseDosE_dieciocho()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e17">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 15 Figura Figura Diferente
      -->
        <div class="row " id="Fase4_faseDosE_dieciocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veintiuno.png" alt="Fase dos E Imagen 29">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_uno.png" class="opacidad" alt="Fase dos E Imagen 30">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e18">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e18">
                        <a onclick="goToFase4_FaseDosE_diecinueve()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 18 Figura texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_diecinueve">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_nueve.png" alt="Fase dos E Imagen 35">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintitres.png" class="opacidad" alt="Fase dos E Imagen 36">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e19">
                        <a onclick="goToFase4_FaseDosE_veinte()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e19">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 16 Figura Figura Diferente
      -->
        <div class="row " id="Fase4_faseDosE_veinte">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_veintiuno.png" alt="Fase dos E Imagen 31">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veintidos.png" class="opacidad" alt="Fase dos E Imagen 32">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e20">
                        <a onclick="goToFase4_FaseDosE_veintiuno()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e20">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>



        <!-- 
      Fase 4 - Fase 2E pregunta 20 Figura texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_veintiuno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_doce.png" alt="Fase dos E Imagen 39">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_veinticuatro.png" class="opacidad" alt="Fase dos E Imagen 40">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e21">
                        <a onclick="goToFase4_FaseDosE_veintidos()" alt="si" class="correct cpruebaDos">Sí</a>
                    </div>
                    <div class="six columns e21">
                        <a onclick="Fase4_faseDosE_uno()" alt="no" class="incorrectCount ipruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 21 texto texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_veintidos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_dieciocho.png" alt="Fase dos E Imagen 41">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_catorce.png" class="opacidad" alt="Fase dos E Imagen 42">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e22">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e22">
                        <a onclick="goToFase4_FaseDosE_veintitres()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 19 Figura texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_veintitres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_doce.png" alt="Fase dos E Imagen 37">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_diez.png" class="opacidad" alt="Fase dos E Imagen 38">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e23">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e23">
                        <a onclick="goToFase4_FaseDosE_veinticuatro()" alt="no" class="correct cpruebaDos">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 - Fase 2E pregunta 23 texto texto Diferente
      -->
        <div class="row " id="Fase4_faseDosE_veinticuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/faseunoD_quince.png" alt="Fase dos E Imagen 43">
                    <br /><br /><br /><br />
                    <img src="images/faseunoD_trece.png" class="opacidad" alt="Fase dos E Imagen 44">
                </p>
                <div class="row textAlign opacidad" style="margin-top: 1em;">
                    <div class="six columns e24">
                        <a onclick="Fase4_faseDosE_uno()" alt="si" class="incorrectCount ipruebaDos">Sí</a>
                    </div>
                    <div class="six columns e24">
                        <a onclick="goToFase4_3()" alt="no" class="correct cpruebaDos">No</a>
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
<script src="js/faseCuatro/dos/logic.js"></script>
<script src="js/faseCuatro/dos/fase4_2.js"></script>
<script src="js/faseCuatro/dos/count.js"></script>
<script src="js/faseCuatro/dos/keyDosE.js"></script>

</html>