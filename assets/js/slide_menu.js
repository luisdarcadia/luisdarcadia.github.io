function toggleMenu(id){

  var m = document.getElementById(id);
  if(m.style.width == '150px')
    m.style.width = '0px';
  else
    m.style.width = '150px';
    m.style.paddingLeft = '0px';

}
