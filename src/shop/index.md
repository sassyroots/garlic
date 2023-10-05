---
layout: base.html
eleventyImport:
  collections: ["product"]
---
<script src="https://gumroad.com/js/gumroad.js"></script>

<div class="mini-shop prime-lightest-bk pad-block-20">
<div class="container">
<h4 class="pad-left-10" >Now in store...</h4>
</div>
<div class="card-group">
{%- for post in collections.product %}
<div class="card">
{% for img in post.data.img %}
<div class="card-header"><img src="/img/prod/{{ img.thumb }}" alt="{{ img.alt }}"></div>
{% endfor %}
<div class="card-body">
{% if post.data.special %}
<p>{% icon "fa-duotone fa-tag" %} {{ post.data.special }}</p>
{% endif %}
<h5>{{ post.data.title }}</h5>
</div>
<div class="card-foot">{% icon "fa-duotone fa-cart-shopping" %} {{ post.data.price }} <a href="{{ post.url }}">Find out more!</a></div>
</div>
{%- endfor -%}
</div>
