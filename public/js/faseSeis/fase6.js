function irPreguntaSeis_Uno() {
  document.getElementById("fase6_uno").style.display = "";
  document.getElementById("fase6_dos").style.display = "none";
  document.getElementById("fase6_tres").style.display = "none";
  document.getElementById("fase6_cuatro").style.display = "none";
  document.getElementById("fase6_cinco").style.display = "none";
  document.getElementById("fase6_seis").style.display = "none";
  document.getElementById("fase6_siete").style.display = "none";
  document.getElementById("fase6_ocho").style.display = "none";
  document.getElementById("gracias").style.display = "none";
}

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

  setTimeout(function() { document.getElementById('hola').click(); }, 1000);
}
