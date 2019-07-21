---
layout: page_standalone
---

{% include latex_search.html %}

<div class="grid">
{% assign colecao = site.data.recursos %}

{% assign titulo = "Básico" %}
{% assign tipo = "sharelatex" %}
{% include dataloop.html %}

{% assign titulo = "Misc" %}
{% assign tipo = "wikibooks" %}
{% include dataloop.html %}

{% assign colecao = site.data.manuais %}

{% assign titulo = "Referências" %}
{% assign tipo = "manuais-referencias" %}
{% include dataloop.html %}

{% assign titulo = "Língua & Cod." %}
{% assign tipo = "manuais-cod" %}
{% include dataloop.html %}

{% assign titulo = "Formatação" %}
{% assign tipo = "manuais-form" %}
{% include dataloop.html %}

{% assign titulo = "Misc" %}
{% assign tipo = "manuais-misc" %}
{% include dataloop.html %}
</div>
