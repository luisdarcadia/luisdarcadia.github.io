var inputPalavras = document.getElementById('palavras');

var receberPar = localStorage.getItem('parametros');
var Parametros = JSON.parse(receberPar);

inputPalavras.onkeyup = function(){

  var palavras = parseInt(inputPalavras.value);

  if (isNaN(palavras)){
    palavras = 0;
    document.getElementById('erros').innerHTML = "Insira somente números";  
    document.getElementById('laudas').innerHTML = "";
    document.getElementById('preco').innerHTML = "";
    document.getElementById('prazo').innerHTML = "";
    return false;
  }
  else {
    document.getElementById('erros').innerHTML = "";
  }

  var laudas = parseInt(palavras/Parametros.parametros.tamanholauda);

  if (laudas < 1){
    laudas = 1;
  }

  document.getElementById('laudas').innerHTML = laudas;

  var preco = laudas * Parametros.parametros.precolauda;

  if (preco < Parametros.parametros.precominimo){
    preco = Parametros.parametros.precominimo;
  }

  document.getElementById('preco').innerHTML = "R$ " + preco.toFixed(2);


  if (preco > 80){
    var desconto = preco * 0.15;
    document.getElementById('desconto').innerHTML = "15% de desconto à vista! -- " + 'R$ ' + (preco - desconto).toFixed(2);
  }

  if (isNaN(desconto)) {
    document.getElementById('desconto').innerHTML =  "";
  }

  var prazo = parseInt(laudas/Parametros.parametros.laudaspordia);

  if (prazo < Parametros.parametros.prazominimo){
    prazo = Parametros.parametros.prazominimo;
  }

  document.getElementById('prazo').innerHTML = prazo + " dias úteis";
}
