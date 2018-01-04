---
layout: post
date: 2017-12-26 05:00:00 -0200
title: Cheatsheet VIM
author: Luís
comments: false
categories: rascunhos
---

## modo comando

* acesso com ":" durante *modo normal*
* é a *barra de menu* do vim, juntamente com o *vimrc*
    * comando *w* salva o texto (write)
    * comando *q* sai do editor (quit)
    * comando *e* cria/abre arquivo novo
    * comando *h* oferece ajuda sobre algum comando
    * comando *!* pode executar comandos do shell

## modo normal


```plain
        k
    h - | - l
        j
```

* modo para movimentação

    * *w* próxima palavra
    * *b* palavra anterior
    * *f* movimenta até o caracter na linhas
    * *F* movimenta até caracter antes na linha
    * *{* e *}* para blocos de texto
    * *gg* início do arquivo
    * *G* fim do arquivo
    * *0* primeiro caracter da linha
    * *$* até o último caracter da linha
    * *Ctrl+y* e *Ctrl+e* mover a tela
 
* modo para edição do texto
    * *d* deletar conforme o argumento
    * *dd* - deleta a linha
    * *y* usado para copiar (yank)
    * *yy* copiar a linha toda
    * *p* usado par colar (paste), etc.
    * *pp* cola a linha inteira

* comandos adicionais 
    * *x* deleta um caracter sob o cursor
    * *r* substitui o caracter sob o cursor
    * *~* altera o caracter em maiúsculo/minúsculo
    * *Ctrl+a* incrementa o número (1)
    * *Ctrl+x* decrementa o número (11)
  
  
* comandos seguem a *sintaxe* do vim

  * (número)(ação)

> Frase para exemplos que legal haha

## modo de inserção

* usado para escrever
* i para entrar em inserção
    * *a* entra em inserção depois do caracter
    * *I* entra em inserção no início da linha
    * *A* entra em inserção no final da linha
    * *s* deleta um caracter sob o cursor e entra em inserção
    * *S* deleta a linha e entra em inserção
    * *c* deleta conforme o argumento o entra em inserção
    * *o* cria uma linha abaixo e entra em inserção
    * *O* cria uma linha acima e entra em inserção

* *ESC* para sair da inserção

## modo visual

* seleciona texto em formatos que o modo normal não permita
    * *v* para entrar em modo visual
    * *V* para modo visual line
    * *Ctrl+v* modo visual block

## modo de busca

* */* ou *?* em modo normal para acessar
* *n* ou *N* para percorrer arquivo

## vantagens do vim

* gratuito e de código aberto
* plugins desde linguagem de programação a Tex, e outro formatos plain text    
* escrita em *plain text*, ou seja, sem distrações *sem distrações*
* documentos em plain text são imunes às mudanças nos  editores de texto
* vim é 100% configurável
* macros para edição
    * q q A , Esc k q
* facilita automação para converter documentos
* importante na atualidade, em que textos são distribuídos em formato digital e formatação pode variar

