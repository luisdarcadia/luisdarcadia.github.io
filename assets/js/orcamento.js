var inputPalavras = document.getElementById('palavras');

inputPalavras.onkeyup = function(){

  var palavras = parseInt(inputPalavras.value);

  if (isNaN(palavras)){
    palavras = 0;
  }

  var laudas = parseInt(palavras/300);

  if (laudas < 1){
    laudas = 1;
  }

  document.getElementById('resultado').innerHTML = laudas;

  var preco = laudas * 5;

  if (preco < 40.00){
    preco = 40.00;
  }

  document.getElementById('preco').innerHTML = "R$ " + preco.toFixed(2);

  var prazo = parseInt(laudas/5);

  if (prazo < 2){
    prazo = 2;
  }

  document.getElementById('prazo').innerHTML = prazo + " dias úteis";
}
