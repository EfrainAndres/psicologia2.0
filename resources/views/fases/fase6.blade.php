<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Fase 6 - Preguntas</title>
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
        <!--
      Fase 6 pregunta 1
      -->

        <form method="post" id="sample" action="{{ route('fase6.store') }}">
            @csrf
            <input type="hidden" name="timeP1_P2" id="timeP1_P2">
            <input type="hidden" name="timeP2_P3" id="timeP2_P3">
            <input type="hidden" name="timeP3_P4" id="timeP3_P4">
            <input type="hidden" name="timeP4_P5" id="timeP4_P5">
            <input type="hidden" name="timeP5_P6" id="timeP5_P6">
            <input type="hidden" name="timeP6_P7" id="timeP6_P7">
            <input type="hidden" name="timeP7_P8" id="timeP7_P8">
            <input type="hidden" name="timeP8_FIN" id="timeP8_FIN">


            <div class="row" id="fase6_uno">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i1.png" alt="Fase cuatro Imagen 1">
                        <br /><br /><br /><br />
                        <img src="images/i2.png" alt="Fase cuatro Imagen 2">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a1">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Dos()"><input value="Correcto" type="checkbox"
                                        name="preguntaUno" id="my-id" style="display:none;">Sí</a></label>

                        </div>
                        <div class="six columns text-right a1">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Dos()"><input value="Incorrecto" type="checkbox"
                                        name="preguntaUno" id="my-id" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 2
    -->
            <div class="row" id="fase6_dos">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i3.png" alt="Fase cuatro Imagen 3">
                        <br /><br /><br /><br />
                        <img src="images/i4.png" alt="Fase cuatro Imagen 4">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a2">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Tres()"><input value="Correcto" name="preguntaDos"
                                        type="checkbox" id="my-id2" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a2">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Tres()"><input value="Incorrecto" name="preguntaDos"
                                        type="checkbox" id="my-id2" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 3
    -->
            <div class="row" id="fase6_tres">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i5.png" alt="Fase cuatro Imagen 5">
                        <br /><br /><br /><br />
                        <img src="images/i6.png" alt="Fase cuatro Imagen 6">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a3">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Cuatro()"><input value="Incorrecto" name="preguntaTres"
                                        type="checkbox" id="my-id3" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a3">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Cuatro()"><input value="Correcto" name="preguntaTres"
                                        type="checkbox" id="my-id3" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 4
    -->
            <div class="row" id="fase6_cuatro">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i3.png" alt="Fase cuatro Imagen 7">
                        <br /><br /><br /><br />
                        <img src="images/i6.png" alt="Fase cuatro Imagen 8">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a4">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Cinco()"><input value="Incorrecto" name="preguntaCuatro"
                                        type="checkbox" id="my-id4" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a4">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Cinco()"><input value="Correcto" name="preguntaCuatro"
                                        type="checkbox" id="my-id4" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 5
    -->
            <div class="row" id="fase6_cinco">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i7.png" alt="Fase cuatro Imagen 9">
                        <br /><br /><br /><br />
                        <img src="images/i6.png" alt="Fase cuatro Imagen 10">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a5">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Seis()"><input value="Correcto" name="preguntaCinco"
                                        type="checkbox" id="my-id5" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a5">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Seis()"><input value="Incorrecto" name="preguntaCinco"
                                        type="checkbox" id="my-id5" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 6
    -->
            <div class="row" id="fase6_seis">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i8.png" alt="Fase cuatro Imagen 11">
                        <br /><br /><br /><br />
                        <img src="images/i9.png" alt="Fase cuatro Imagen 12">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a6">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Siete()"><input value="Correcto" name="preguntaSeis"
                                        type="checkbox" id="my-id6" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a6">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Siete()"><input value="Incorrecto" name="preguntaSeis"
                                        type="checkbox" id="my-id6" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>


            <!--
      Fase 6 pregunta 7
    -->
            <div class="row" id="fase6_siete">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i10.png" alt="Fase cuatro Imagen 13">
                        <br /><br /><br /><br />
                        <img src="images/i11.png" alt="Fase cuatro Imagen 14">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a7">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irPreguntaSeis_Ocho()"><input value="Incorrecto" name="preguntaSiete"
                                        type="checkbox" id="my-id7" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a7">

                            <label><a class="correct cprueba4" onclick="irPreguntaSeis_Ocho()"><input value="Correcto" name="preguntaSiete"
                                        type="checkbox" id="my-id7" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Fase 6 pregunta 8
    -->
            <div class="row" id="fase6_ocho">
                <div class="twelve column" style="margin-top: 10%">
                    <p style="text-align: center;">
                        <img src="images/i12.png" alt="Fase cuatro Imagen 15">
                        <br /><br /><br /><br />
                        <img src="images/i3.png" alt="Fase cuatro Imagen 16">
                    </p>
                    <div class="row" style="margin-top: 1em;">
                        <div class="six columns text-left a8">

                            <label><a class="incorrect iprueba4 incorrect4_1" onclick="irGracias()"><input value="Incorrecto" name="preguntaOcho"
                                        type="checkbox" id="my-id8" style="display:none;">Si</a></label>
                        </div>
                        <div class="six columns text-right a8">

                            <label><a class="correct cprueba4" onclick="irGracias()"><input value="Correcto" name="preguntaOcho" type="checkbox"
                                        id="my-id8" style="display:none;">No</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <!--
      Gracias
    -->
            <div class="row" id="gracias">
                <div class="twelve column" style="margin-top: 15%;">
                    <h1 class="text-center"><b><a id="hola" onclick="displaySeguir()" class="" id="regresarPreguntaUno" href="#">
                                Gracias por participar</a></b>
                    </h1>
                </div>

            </div>


        </form>

    </div>
    <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/faseSeis/fase6.js"></script>
<script src="js/faseSeis/logic.js"></script>
<script src="js/faseSeis/keySeis.js"></script>

<script type="application/javascript">
    function displaySeguir() {
        
        document.getElementById('sample').submit();
    }

</script>

</html>
