var inputPalavras = document.getElementById('palavras');

inputPalavras.onkeyup = function(){

  var palavras = parseInt(inputPalavras.value);

  console.log("Palavras: "+ palavras);

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

  var laudas = parseInt(palavras/300);

  if (laudas < 1){
    laudas = 1;
  }

  document.getElementById('laudas').innerHTML = laudas;

  var preco = laudas * 5;

  if (preco < 40.00){
    preco = 40.00;
  }

  document.getElementById('preco').innerHTML = "R$ " + preco.toFixed(2);


  if (preco > 80){
    var desconto = preco * 0.15;
    document.getElementById('desconto').innerHTML = "15% de desconto à vista! -- " + 'R$ ' + (preco - desconto).toFixed(2);
  }

  if (isNaN(desconto)) {
    document.getElementById('desconto').innerHTML =  "";
  }

  console.log("Desconto: " + parseFloat(desconto))

  var prazo = parseInt(laudas/5);

  if (prazo < 2){
    prazo = 2;
  }

  document.getElementById('prazo').innerHTML = prazo + " dias úteis";
}
