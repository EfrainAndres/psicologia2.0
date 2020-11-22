<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fase 4 - Preguntas</title>
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
                <h3>Instrucciones (4.0)</h3>
                <p>El formato de la tarea cambiará. Ahora, dos rectángulos aparecerán de forma simultánea en la parte
                    superior y en el centro de la pantalla. Su meta es decir si estos se encuentran relacionados o no.
                    Tendrá que usar la tecla “Z” para la respuesta “Sí” y la letra “M” para la respuesta “NO”. Las
                    opciones de respuesta serán siempre “SÍ” y “NO”. El computador le irá indicando si lo está haciendo
                    bien o no.
                </p>
                <br>
                <p style="text-align: center;"><a class="button" onclick="irPreguntaCuatro_Uno()">Empezar</a></p>
            </div>
        </div>
        <!-- 
      Fase 4 pregunta 1
    -->
        <div class="row" id="fase4_uno">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/1.jpg" alt="Fase cuatro Imagen 1">
                    <br /><br /><br /><br />
                    <img src="images/fase4/5.jpg" alt="Fase cuatro Imagen 2">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Dos()" alt="si" class="correct cprueba4">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Dos()" alt="no" class="incorrect iprueba4 incorrect4_1">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 2
    -->
        <div class="row" id="fase4_dos">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/3.jpg" alt="Fase cuatro Imagen 3">
                    <br /><br /><br /><br />
                    <img src="images/fase4/6.jpg" alt="Fase cuatro Imagen 4">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Tres()" alt="si" class="correct cprueba4">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Tres()" alt="no" class="incorrect iprueba4 incorrect4_1">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 3
    -->
        <div class="row" id="fase4_tres">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/3.jpg" alt="Fase cuatro Imagen 5">
                    <br /><br /><br /><br />
                    <img src="images/fase4/7.jpg" alt="Fase cuatro Imagen 6">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Cuatro()" alt="si" class="incorrect iprueba4 incorrect4_1">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Cuatro()" alt="no" class="correct cprueba4">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 4
    -->
        <div class="row" id="fase4_cuatro">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/4.jpg" alt="Fase cuatro Imagen 7">
                    <br /><br /><br /><br />
                    <img src="images/fase4/13.jpg" alt="Fase cuatro Imagen 8">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Cinco()" alt="si" class="incorrect iprueba4 incorrect4_1">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Cinco()" alt="no" class="correct cprueba4">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 5
    -->
        <div class="row" id="fase4_cinco">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/12.jpg" alt="Fase cuatro Imagen 9">
                    <br /><br /><br /><br />
                    <img src="images/fase4/13.jpg" alt="Fase cuatro Imagen 10">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Seis()" alt="si" class="correct cprueba4">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Seis()" alt="no" class="incorrect iprueba4 incorrect4_1">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 6
    -->
        <div class="row" id="fase4_seis">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/11.jpg" alt="Fase cuatro Imagen 11">
                    <br /><br /><br /><br />
                    <img src="images/fase4/14.jpg" alt="Fase cuatro Imagen 12">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Siete()" alt="si" class="correct cprueba4">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Siete()" alt="no" class="incorrect iprueba4 incorrect4_1">No</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- 
      Fase 4 pregunta 7
    -->
        <div class="row" id="fase4_siete">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/10.jpg" alt="Fase cuatro Imagen 13">
                    <br /><br /><br /><br />
                    <img src="images/fase4/15.jpg" alt="Fase cuatro Imagen 14">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a onclick="irPreguntaCuatro_Ocho()" alt="si" class="incorrect iprueba4 incorrect4_1">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="irPreguntaCuatro_Ocho()" alt="no" class="correct cprueba4">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Fase 4 pregunta 8
    -->
        <div class="row" id="fase4_ocho">
            <div class="twelve column" style="margin-top: 10%">
                <p style="text-align: center;">
                    <img src="images/fase4/9.jpg" alt="Fase cuatro Imagen 15">
                    <br /><br /><br /><br />
                    <img src="images/fase4/16.jpg" alt="Fase cuatro Imagen 16">
                </p>
                <div class="row" style="margin-top: 1em;">
                    <div class="six columns text-left">
                        <a href="#" id="incorrect8" alt="si" class="incorrect iprueba4 incorrect4_1">Sí</a>
                    </div>
                    <div class="six columns text-right">
                        <a onclick="goToFase5()" id="correct8" alt="no" class="correct cprueba4">No</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 
      Gracias
    -->
        <div class="row" id="gracias">
            <div class="twelve column" style="margin-top: 15%;">
                <h1 class="text-center"><b><a class="" id="regresarPreguntaUno" href="#"> Gracias por participar</a></b>
                </h1>
            </div>
        </div>

    </div>
    <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseCuatro/uno/logic.js"></script>
<script src="js/faseCuatro/uno/fase4_1.js"></script>
<script src="js/faseCuatro/uno/count.js"></script>

</html>