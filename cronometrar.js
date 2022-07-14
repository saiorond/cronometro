var segundos = 0;
var minutos = 0;
var horas = 0;
var inicio = 0;

function iniciar() {
     inicio = setInterval(contador, 1000)
}

function pausar () {
    clearInterval(inicio)
}

function reiniciar() {
    
}

function contador(){
    segundos++
    if(segundos == 59) {
       minutos++
       segundos = 0
    }
    if(minutos == 59) {
      horas ++
    }
    document.getElementById('contador').innerText = horas + ':' + minutos + ':' + segundos
}