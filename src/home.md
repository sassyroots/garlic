---
layout: base.html
title: Hello World
issue: 1
when: "September 2023"
podlink: "/"
hero:
  - img: garlic.png
    article: "Ode to Garlic"
    summary: Genmai hong kong-style milk camellia sinensis fair trade strainer catechin lapsang souchong yixing taro bai mudan mug bamboo whisk tea rose hips infuser.
    links: true
spotlight:
  - title: "Be Herbal: Tutorial"
    subtitle: A subtitle
    article: "Garlic Honey"
    summary: knsdknfkd sn
    img: a_jar_of_honey.png
---

{% include "patterns/hero.md" %}

<div class="mini-shop prime-lightest-bk">
<div class="container">
<h4 >Now in store...</h4>
<a href="/shop">view full shop</a>
</div>
<div class="card-group">
{%- for post in collections.product | limit 3 %}
<div class="card">
{% for img in post.data.img %}
<div class="card-header"><img src="/img/{{ img.thumb }}" alt="{{ img.alt }}"></div>
{% endfor %}
<div class="card-body">
{% if post.data.special %}
<p>{% icon "fa-duotone fa-tag" %} {{ post.data.special }}</p>
{% endif %}
<h2>{{ post.data.title }}</h2>
<p>{{ post.data.summary | truncate: 130, "..." }} {% continue post.url %}</p>
</div>
<div class="card-foot">{% icon "fa-duotone fa-cart-shopping" %} {{ post.data.price }}</div>
</div>
{%- endfor -%}
</div>
</div>

