---
layout: base.html
eleventyImport:
  collections: ["product"]
---
<script src="https://gumroad.com/js/gumroad.js"></script>

<h1 class="container"> Now in store...</h1>



<div class="card-group">
{%- for post in collections.product %}
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
<div class="card-foot">{% icon "fa-duotone fa-cart-shopping" %} {{ post.data.price }}
<a class="gumroad-button" href="{{ post.data.gumroad }}">Buy on</a></div>
</div>
{%- endfor -%}
</div>

