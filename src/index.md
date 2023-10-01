---
layout: base.html
title: Welcome to
issue: 1
when: "September 2023"

---
<div class="home-hero">

![image of various root herbs on a wooden board is the background of this pages hero and sets the tone for the website](/img/sassy-background.png)
# Welcome to Sassy Roots Apothecary
</div>

<div class="welcome content-container">

## Launched finally
After over a decade of learning, it's time for me to finally share what I know with the world. This site is the hub space for my herbal practice served as a magazine style website with each issue being dedicated to a herb with stories, recipes, remedies, tutorials, and podcast. Most importantly, community building and education through our local meetups and our online community. 

Stay tuned to the space for more... and...

{% meetup %} | {% discord %}

</div>

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
</div>

