---
layout: post
date:   2017-12-28 05:32:35 -0200
title:  "Latex e Git e Dropbox"
author: Luís
comments: true
cor: corblog
nav: nav-corblog
categories: blog
---

[git]:https://git-scm.com/
[linus]:https://pt.wikipedia.org/wiki/Linus_Torvalds
[Github]:https://www.github.com
[bitbucket]:https://www.bitbucket.com

Depois de adotar o *LaTeX* e o *git*, os dias de `versãofinal.doc`, `versãofinal2.docx`, `versaofinal-agoravai.doc` acabaram.

Com o *LaTeX*, minha tese é basicamente um conjunto de códigos-fonte que eu compilo para gerar o único PDF.
Abaixo copiei a estrutura de pastas, algo que o comando `\input{}` do *LaTeX* permite.

```
.
├── anexos
│   ├── coletanea-academia-singulares.tex
│   ├── mourao-elvas
│   ├── restauracao_coletanea.tex
│   ├── romances49-III-49
│   ├── romancesfenix
│   └── romancessm2998
├── bib
│   ├── fonseca.bib
│   ├── literatura.bib
│   └── obras_lit.bib
├── corpo
│   ├── pretextual.tex
│   ├── tese_conclusao.tex
│   ├── tese_dois.tex
│   ├── tese_intro.tex
│   ├── tese_tres.tex
│   └── tese_um.tex
├── definicoes
│   └── ambientes.tex
├── tese_main.tex
└── compilartese.sh
```

Além dos arquivos `.tex` com os textos da tese e os anexos, estão na árvore os arquivos `.bib` da bibliografia e um *script* para a compilação que já gera a bibliografia.
No Word um arquivo desse tamanho iria dar *crash* a cada meia hora, mas esse é outro assunto.

# Git e dropbox

[Git][git] é um sistema de controle de versão de arquivos.
 Usado principalmente no desenvolvimento de softwares, é ideal para manter a integridade de projetos baseados em arquivos de texto, como códigos-fonte e... minha tese.

Um segundo projeto do criador o Linux, [Linus Torvalds][linus], o sistema ganha destaque por ser descentralizado, sendo ao mesmo seguro com os dados e flexível quanto às flutuações no código-fonte.

A segurança dos dados é garantida pela descentralidade: mesmo que o repositório remoto seja perdido, os dados permanecem na árvores de trabalho locais.
Quanto às flutuações no código, a diferença entre os arquivos de texto é "monitorada", havendo mecanismos de comparação e mescla de diferenças no texto, mesmo havendo várias árvores de trabalho simultâneas.

Há várias maneiras de armazenar repositórios remotos, e *sites* como [Github][github] e [Bitbucket][bitbucket] dão oportunidade de criar e armanezenar repositórios, permitindo *pull requests*, *wikis* e outros recursos para programadores.

Como meus objetivos são mais simples, optei por manter o meu repositório na minha pasta no dropbox. 

# Usando o git

Os comandos em seguida cuidam dos processos básicos.

```bash
git init --bare [pasta Dropbox][nome da pasta].git
```

Então simplesmente clone a pasta localmente com

```bash
git clone [nome da pasta].git
```

É nessa pasta que será sua árvore de trabalho, onde você trabalhará com seu arquivo.
Então cole os seus arquivos, adicione ao repositório

```bash
git add -A
```

Há ainda a opção de inicializar um repositório na própria pasta do projeto e adicionar a pasta do *Dropbox* como um remote, mas colar no repositório clonado é mais simples.
Trabalhe até ter uma versão satisfatória e faça o commit e envie-o para o repositório remoto

```
git commit -m "inicial | capítulo 1"
git push -u origin master
```

Essa versão da redação da sua tese ficará literalmente arquivada para sempre, sendo acessível a qualquer momento clonando o repositório novamente ou utilizando `git checkout [hash do commit]`.

Perceba que no momento do `commit` é passada uma mensagem. Para mim é o momento de tomar consciência do progresso real do trabalho, o comando `git log` oferece uma lista de todos os *commits*.
Por exemplo, ao inserir citações ou transcrições, esse progresso está registrado em um `commit`.

Ainda, ao trabalhar em vários computadores, o git oferece opções de `diff` e o comando `merge`, que lida com conflito e mescla os arquivos sem que haja perda de dados.
