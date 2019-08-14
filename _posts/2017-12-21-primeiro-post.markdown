---
layout: post
title: "Jekyll e _markdown_"
date: 2017-12-22 15:35:00 -0200
author_id: 1
comments: true
background: orcamento
categories: blog tech
---

[Markdown]:https://daringfireball.net/projects/markdown/
[Jekyll]:https://jekyllrb.com/docs/home
[Liquid]:https://shopify.github.io/liquid/
[YAML]:yaml.org
[RubyGem]:https://en.wikipedia.org/wiki/RubyGems
[GithubPages]:https://pages.github.com
[Github]:https://www.github.com
[MeuGithub]:https://www.github.com/luigi-finando
[JohnGruber]:https://en.wikipedia.org/wiki/John_Gruber
[mdflavours]:https://en.wikipedia.org/wiki/Markdown#Standardization
[gitmd]:https://github.github.com/gfm/
[repothislink]:https://raw.githubusercontent.com/luigi-finando/luigi-finando.github.io/master/_posts/2017-12-21-primeiro-post.markdown

# Sobre o *markdown*

[Markdown][Markdown] é uma *markup language* como *html* e *LaTeX*, ou seja, a escrita ocorre primeiramente em *plain text* e formatação se dá a partir de marcações convencionadas, quando o código-fonte é compilado. Esse processo é diferente de editores como *Microsoft Word*, *Libreoffice Writer* ou *Pages*, conhecidos como programas *WYSIWYG* (*What you see is what you get*). Editores de texto simples como *Notepad++* e *Vim* permitem um ambiente de escrita mais "limpo" e sem distrações, razão pela qual ela atraiu meu interese.

Foi criada por [John Gruber][JohnGruber] um escritor e blogger americano, com o objetivo de facilitar a escrita e publicação *online*, `Markdown` foi extendida em diversos "[sabores][mdflavours]", que variam quanto ao processo de compilação e nas convenções de marcação. O "sabor" utilizado aqui é o [Github Flavoured Markdown][gitmd], principalmente pela compilação automática proporcionada pela plataforma, além de oferecer mais recursos no momento da formatação. 

Depois de anos com editores de texto *WYSIWYG*, apesar da "facilidade" superficial, estou convencido de que não são a melhor alternativa para a escrita mais "exigente" como a acadêmica. O contato direto com o texto e a formatação **realmente consistente** de linguagens como a `Markdown` e `LaTeX` tornam impossível retornar ao Word. Ainda mais depois de ter contato com *Vim* (o que é outro assunto).

A convenção para a criação de um parágrafo é deixar uma linha em branco, por exemplo. A fonte destes mesmos parágrafos tem a seguinte aparência:

```plain-text
[Markdown][Markdown] é uma *markup language* como *html* e *LaTeX*, ou seja, a escrita ocorre primeiramente em *plain text* e formatação se dá a partir de marcações convencionadas, quando o código-fonte é compilado. Esse processo é diferente de editores como *Microsoft Word*, *Libreoffice Writer* ou *Pages*, conhecidos como programas *WYSIWYG* (*What you see is what you get*). Editores de texto simples como *Notepad++* e *Vim* permitem um ambiente de escrita mais "limpo" e sem distrações, razão pela qual ela atraiu meu interese.

Foi criada por [John Gruber][JohnGruber] um escritor e blogger americano, com o objetivo de facilitar a escrita e publicação *online*, `Markdown` foi extendida em diversos "[sabores][mdflavours]", que variam quanto ao processo de compilação e nas convenções de marcação. O "sabor" utilizado aqui é o [Github Flavoured Markdown][gitmd], principalmente pela compilação automática proporcionada pela plataforma, além de oferecer mais recursos no momento da formatação. 
```

Títulos são criados usando o sinal ``#`` e subtítulos são iterações do mesmo sinal repetido, com os subníveis crescendo na mesma medida: 

```plain-text
## Subtítulo
```

> ## Subtítulo

```
### Subsubtítulo
```
> ### Subsubtítulo


Acima destaquei os exemplos utilizando `>`, assim como demarquei blocos de código colocando o trecho entre acentos graves (`` ``). Marcações como **negrito** e *itálico* são possíveis com o uso de arteriscos, e a versão do `markdown` oferecida pelo Github ainda permite o texto ~~tachado~~.

O código fonte deste artigo está disponível publicamente no [meu Github][repothislink].

# A plataforma [Jekyll][Jekyll] e o [Github Pages][GithubPages]

Essa plataforma, instalada como uma [Ruby Gem][RubyGem], é uma combinação de [Liquid][Liquid] e [Markdown][Markdown], sendo uma ferramenta para a geração de *websites* estáticos.

A integração com *markdown* é essencial pois permite que a sintaxe Liquid e o uso de *Frontmatters [YAML][YAML]* automatizem a geração de *htmls* a partir de templates e pedaços de código. 

Ao executar `jekyll new [nome da página]`, Jekyll produz um ambiente de desenvolvimento com uma estrutura de pastas e o arquivo `_config.yml`, permitindo ao usuário inserir criar layout e trechos de HTML reutilizáveis por meio da sintaxe *Liquid*. Como qualquer documento em HTML, é possível que o usuário crie estilos no formato CSS. A pasta `_posts` aceita arquivos no formato *markdown*, convertendo-os para HTML automaticamente no momento da construção do *site*.

A plataforma [Github Pages][GithubPages] oferece a compilação automática do código do Jekyll, bastando sincronizar os arquivos fonte no repositório. A geração deste *blog* é feita quando o código fonte é enviado ao [meu repositório][MeuGithub] no [Github][Github].
