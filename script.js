const campo = document.getElementById("campo");

const porcento = document.getElementById("porcento");
const raiz = document.getElementById("raiz");
const ce = document.getElementById("ce");
const apagar = document.getElementById("apagar");

const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const divisao = document.getElementById("divisao");
const vezes = document.getElementById("vezes");

const igual = document.getElementById("igual");
const ponto = document.getElementById("ponto");

const zero = document.getElementById("zero");
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");   

ce.addEventListener("click", function () {
  campo.textContent = ""
});

//--------------OPERACOES------------------------

divisao.addEventListener("click", function () {
  campo.textContent += "/";
});
vezes.addEventListener("click", function () {
  campo.textContent += "X";
});
mais.addEventListener("click", function () {
  campo.textContent += "+";
});
menos.addEventListener("click", function () {
  campo.textContent += "-";
});
igual.addEventListener("click", function () {
  campo.textContent += "=";
});


// --------------NUMEROS ------------------------
zero.addEventListener("click", function () {
  campo.textContent += 0;
});
um.addEventListener("click", function () {
  campo.textContent += 1;
});
dois.addEventListener("click", function () {
  campo.textContent += 2;
});
tres.addEventListener("click", function () {
  campo.textContent += 3;
});
quatro.addEventListener("click", function () {
  campo.textContent += 4;
});
cinco.addEventListener("click", function () {
  campo.textContent += 5;
});
seis.addEventListener("click", function () {
  campo.textContent += 6;
});
sete.addEventListener("click", function () {
  campo.textContent += 7;
});
oito.addEventListener("click", function () {
  campo.textContent += 8;
});
nove.addEventListener("click", function () {
  campo.textContent += 9;
});