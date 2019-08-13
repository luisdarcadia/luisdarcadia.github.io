var inputPalavras = document.getElementById('palavras');

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

  var laudas = parseInt(palavras/Parametros.luis.tamanholauda);

  if (laudas < 1){
    laudas = 1;
  }

  document.getElementById('laudas').innerHTML = laudas;

  var preco = laudas * Parametros.luis.precolauda;

  if (preco < Parametros.luis.precominimo){
    preco = Parametros.luis.precominimo;
  }

  document.getElementById('preco').innerHTML = "R$ " + preco.toFixed(2);


  if (preco > 80){
    var desconto = preco * 0.15;
    document.getElementById('desconto').innerHTML = "15% de desconto à vista! -- " + 'R$ ' + (preco - desconto).toFixed(2);
  }

  if (isNaN(desconto)) {
    document.getElementById('desconto').innerHTML =  "";
  }

  var prazo = parseInt(laudas/Parametros.luis.laudaspordia);

  if (prazo < Parametros.luis.prazominimo){
    prazo = Parametros.luis.prazominimo;
  }

  document.getElementById('prazo').innerHTML = prazo + " dias úteis";
}
