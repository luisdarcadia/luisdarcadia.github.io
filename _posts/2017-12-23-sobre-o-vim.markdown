---
layout: post
date: 2017-12-25 05:00:00 -0200
title: "Escrevendo na linha de comando"
author: Luís
comments: true
nav: nav-blogpost
cor: corblog
categories: blog
---
[vi]:https://pt.wikipedia.org/wiki/Vi
[BramMoolenar]:http://www.moolenaar.net/
[unix]:https://pt.wikipedia.org/wiki/Unix
[goyo]:https://github.com/junegunn/goyo.vim
[limelight]:https://github.com/junegunn/limelight.vim
[limegif]:{{site.baseurl}}{{site.img_path}}goyo.gif

# Um editor de textos na linha de comando

*VI IMproved* é uma extensão do [vi][vi] criada pelo programador holandês [Bram Moolenar][BramMoolenar]. Muito usado como editor de códigos-fonte, ele não precisa se limitar à programação.
Escritores, *bloggers*, jornalistas e estudantes fazem uso do programa, havendo uma série de *plugins* criados para extender sua funcionalidade nesse sentido.

Comecei utilizando o vim para editar arquivos de configuração do Linux na linha de comando.
O hábito que o Linux tem de pedir a edição de arquivos como usuário *root* era trabalhoso.
Abrir um navegador de arquivos, rolar pela pasta até encontrar o arquivo e chamar o *gedit* como root era um pouco irritante.
Nesse caso a linha de comando é a opção de demanda o menor esforço.
A busca por um editor na linha de comando ofereceu tanto o Nano quanto o Vim, e eu acabei optei pelo último.

O hábito de usar o *vim* então se mostrou bastante útil quando iniciei meu o interesse pela linguagem **LaTeX**.
Essa combinação está se mostrando uma enorme ajuda para a redação da minha tese de doutorado.
Minha experiência de escrita está mais rápido e o ambiente da escrita, o que é mais importante, não possui distrações. 
Plugins como [Goyo][goyo] e [Limelight][limelight] contribuem ainda mais para isso.

![limegif]
*Minha rotina com a tese :)*

# Esquecendo o mouse

Originalmente criado para o sistema operacional [Unix][unix], o *vim* procura seguir a "filosofia" que orientou o desenvolvimento daquele sistema: **cada programa deve cumprir somente uma função e cumpri-la bem**.
Por esse mesmo motivo (olha a frase de efeito) o *vim* é ao mesmo tempo limitado e sem limites.

Diferente de editores de texto *WYSIWYG*, ele trabalha somente com *plain text*.
O programa não é capaz de preparar um texto para impressão.
Não é capaz de criar itálicos, negritos, rodapés, números de página, etc. Essa é a função de programas especializados e das linguagens *markup*.

No entanto, para a redação do texto em si, ou seja, o processo de inserir, apagar e alterar caracteres e palavras, o *vim* é extremamente eficiente.
Sua relação com computadores mais antigos é também responsável por essa eficiência. Tendo em mente um usuário sem mouse.
Todas as funcionalidades do *vim* são acessíveis sem que seja necessário afastar as mãos do *home row* do teclado. Esse fato por si só torna o trabalho com o texto mais rápido.

Não bastasse isso, grande parte da eficiência do *vim* é fruto de sua maior peculiaridade: a modalidade.

# Editor Modal

Quando escrevemos com lápis e papel, nunca nos movimentamos pelo texto com o lápis em contato com a página quando não estamos escrevendo.
Com essa mesma lógica o *vim* possui modos diferentes para a redação e para a edição de um texto já escrito.
Os modos do editor, resumindo:

>>>
* **normal** - modo padrão, projetado para a movimentação e edição, acessível com `Esc` ou `Ctrl + [`
* **inserção** - modo para escrita em si, acessível com `i`
* **visual** - modo para a seleção visual, ocorrendo por caractere `v`, por linha `V` ou (mais complicado) por bloco `Ctrl + v`
* **comando** - modo da interface do usuário, com `:`

Ao abrir o programa, o usuário se encontra em modo normal, que é o modo para movimentação e alteração do texto.
Para inserir texto, devemos entra no modo de *inserção*, pressionando a tecla `i`. É nesse modo, e somente nesse modo, que o texto é inserido. Pressionamos `Esc` ou `ctrl + [` para retornarmos ao modo normal.

Toda a interação do usuário com o programa acontece pelo modo de comando, que é acessado pressionando a tecla `:` a partir do modo normal. Comando como sair `:q` ou `:quit`, salvar (*write*) `:w` são passados por meio da linha de comando. Comando mais importante, no entanto, é a ajuda. Ao inserir `:h r`, por exemplo, o programa informa qual a função da tecla r, o mesmo servindo para todas as teclas da *home row* do teclado.

O *vim* ainda apresenta uma série de características interessantes, como a capacidade de concatenar com um sintaxe própria. Pretendo colocar aqui minhas "colinhas" sobre isso.
