function buscaItens(){
  let filtraItens = document.getElementById('busca').value.toUpperCase();

  let ul = document.getElementById('ulbusca');

  let li = ul.querySelectorAll('li.itens');

  for (let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];

    if(a.innerHTML.toUpperCase().indexOf(filtraItens) > -1){
      li[i].style.display = '';
    }
    else{
      li[i].style.display = 'none';
    }
  }

}
