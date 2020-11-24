var startTime, endTime;

startTime = new Date();
var difference2;
var difference3;
var difference4;
var difference5;
var difference6;
var difference7;
var difference8;
var difference9;


function irPreguntaSeis_Dos() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference2 = endTime - startTime;
    difference2 /= 1000;
    console.log(difference2);
    document.getElementById("timeP1_P2").value = Math.round(difference2);
    //startTime = null;
}

function irPreguntaSeis_Tres() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference3 = endTime - startTime;
    difference3 /= 1000;
    console.log(difference3);
    document.getElementById("timeP2_P3").value = Math.round(difference3);
    //startTime = null;
}

function irPreguntaSeis_Cuatro() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference4 = endTime - startTime;
    difference4 /= 1000;
    console.log(difference4);
    document.getElementById("timeP3_P4").value = Math.round(difference4);
    //startTime = null;
}

function irPreguntaSeis_Cinco() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference5 = endTime - startTime;
    difference5 /= 1000;
    console.log(difference5);
    document.getElementById("timeP4_P5").value = Math.round(difference5);
    //startTime = null;
}

function irPreguntaSeis_Seis() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference6 = endTime - startTime;
    difference6 /= 1000;
    console.log(difference6);
    document.getElementById("timeP5_P6").value = Math.round(difference6);
    //startTime = null;
}

function irPreguntaSeis_Siete() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference7 = endTime - startTime;
    difference7 /= 1000;
    console.log(difference7);
    document.getElementById("timeP6_P7").value = Math.round(difference7);
    //startTime = null;
}

function irPreguntaSeis_Ocho() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "";
    document.getElementById("gracias").style.display = "none";

    endTime = new Date();
    var difference8 = endTime - startTime;
    difference8 /= 1000;
    console.log(difference8);
    document.getElementById("timeP7_P8").value = Math.round(difference8);
    //startTime = null;
}

function irGracias() {
    document.getElementById("fase6_uno").style.display = "none";
    document.getElementById("fase6_dos").style.display = "none";
    document.getElementById("fase6_tres").style.display = "none";
    document.getElementById("fase6_cuatro").style.display = "none";
    document.getElementById("fase6_cinco").style.display = "none";
    document.getElementById("fase6_seis").style.display = "none";
    document.getElementById("fase6_siete").style.display = "none";
    document.getElementById("fase6_ocho").style.display = "none";
    document.getElementById("gracias").style.display = "";

    endTime = new Date();
    var difference9 = endTime - startTime;
    difference9 /= 1000;
    console.log(difference9);
    document.getElementById("timeP8_FIN").value = Math.round(difference9);
    //startTime = null;

    setTimeout(function () {
        document.getElementById("hola").click();
    }, 1000);
}
