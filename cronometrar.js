var segundos = 0;
var minutos = 0;
var horas = 0;
var comecar = 0;

function doisDigitos(digit) {
    if(digit < 10 ) {
      return('0'+digit)
    } else {
      return(digit)
    }
}

function iniciar() {
    contador(); 
    comecar = setInterval(contador, 1000);
}

function pausar () {
    clearInterval(comecar)
}

function reiniciar() {
    segundos = 0
    minutos = 0
    horas = 0
    document.getElementById('contador').innerText = '00:00:00'
}

function contador(){
    segundos++
    if(segundos == 59) {
       minutos++
       segundos = 0
    }
    if(minutos == 59) {
      minutos = 0
      horas ++
    }
    document.getElementById('contador').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}