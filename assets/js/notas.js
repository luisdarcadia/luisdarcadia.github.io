//obter todas as notas
var notas = document.getElementsByTagName("ol");

//desenhar tooltip
var tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.classList.add("invisible");
document.querySelector("body").appendChild(tooltip);

//manda conteudo da nota para tooltip
function MostrarTooltip(e){
  var nota = e.target;
  var key = nota.textContent - 1;
  tooltip.textContent = notas[0].children[key].textContent;
  tooltip.style.left = nota.getBoundingClientRect().left + window.pageXOffset + 'px';
  tooltip.style.top = nota.getBoundingClientRect().top + window.pageYOffset + 'px';
  tooltip.classList.remove("invisible");
  tooltip.classList.add("visible");
}

function EsconderTooltip(e){
  tooltip.classList.add("invisible");
  tooltip.classList.remove("visible");
}
//event listener para o hover
for (var i = 0; i < notas[0].children.length; ++i){
  var notaNome = "fnref:footnote" + i;
  var notaHovering = document.getElementById(notaNome);
  notaHovering.addEventListener("mouseenter", MostrarTooltip);
  notaHovering.addEventListener("click", EsconderTooltip);
  document.addEventListener("click", EsconderTooltip);
};

