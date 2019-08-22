---
layout: page
permalink: /start
background: orcamento
---

{% include startpage_search.html %}

<div class="grid">
{% assign colecao = site.data.startlinks %}

{% assign titulo = "Estudos" %}
{% assign tipo = "facul" %}
{% include dataloop.html %}

{% assign titulo = "Social & Fun" %}
{% assign tipo = "fun" %}
{% include dataloop.html %}

{% assign titulo = "Misc" %}
{% assign tipo = "varia" %}
{% include dataloop.html %}

{% assign titulo = "Localhost" %}
{% assign tipo = "localhost" %}
{% include dataloop.html %}
</div>

- [Fichamentos](/fichamentos)
- [Blog](/blog)
