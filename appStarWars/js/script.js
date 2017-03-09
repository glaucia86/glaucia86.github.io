var width   = window.innerWidth;
var height  = window.innerHeight;

var intro       = document.getElementsByClassName("intro")[0];
var historia    = document.getElementsByClassName("historia")[0];
var paragrafos  = document.getElementsByClassName("paragrafos")[0];
var som         = document.getElementById("som");

intro.style.fontSize = width / 30 + "px";
historia.style.fontSize = width / 20 + "px";
paragrafos.style.height = height + "px";


window.addEventListener("resize", function() {
    width   = canvas.width = window.innerWidth;
    height  = canvas.height = window.innerHeight;
    intro.style.fontSize = width / 30 + "px";
    historia.style.fontSize = width / 20 + "px";
    paragrafos.style.height = height + "px";

    /* Efeito do fundo com estrelas */
    inicio();
    nevar();  
});

function iniciar() {
    intro.className = 'intro intro_texto intro_animacao';
    historia.className = 'historia historia_texto historia_animacao';
    som.play();  
}

/* Fundo de estrelas */

var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

var num = 100;
var size = 2;
var elements = [];
 
inicio();
nevar();

function inicio() {
  for (var i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size
    }
  }
}

function nevar() {
  ctx.clearRect(0, 0, width, height);
  for (var i = 0; i < num; i++) {
    var e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(e.x, e.y,e.size,0,2*Math.PI);
    ctx.fill();
  }
}