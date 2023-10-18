function mostrarFotos() {
    var x = document.getElementById('foto');
    x.removeAttribute("hidden");}

function mostrarVideo() {
    var x = document.getElementById('vid');
    x.removeAttribute("hidden");}

function ocultarFotos() {
    var x = document.getElementById('foto');
    x.setAttribute("hidden", true);}

function mostrarAudio() {
    var x = document.getElementById('aud');
    x.removeAttribute("hidden");}
    
function ocultarVideo() {
    var x = document.getElementById('vid');
    x.setAttribute("hidden", true);}

function mostrarTodo() {
    var x = document.getElementById('foto');
    var y = document.getElementById('vid');
    var z = document.getElementById('aud');
    x.removeAttribute("hidden");
    y.removeAttribute("hidden");
    z.removeAttribute("hidden");}