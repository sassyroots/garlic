{% for spot in spotlight %}
{% if spot.article %} 
{% for post in collections.article %}
{% if post.data.title == spot.article %}
{% for hero in post.data.hero %}
<div class="spotlight">
<h2>{{ spot.title }}</h2>
<div class="spotlight-body">
<div class="spotlight-img"> 
{% for img in hero.img %}
<img src="/img/{{img}}" />
{% endfor %}
</div>
<div class="spotlight-content">
<h3>{{ post.data.title }}</h3>
<p>{{ hero.summary | truncate: 130, "..." }} {% continue post.url %}</p>
</div>
</div>
</div>
{% endfor %}
{% endif %}
{% endfor %}
{% else %} 
<div class="spotlight">
{% if spot.title %}<h2>{{ spot.title }}</h2>{% endif %}
<div class="spotlight-body">
<div class="spotlight-img"> <img src="/img/{{spot.img}}" /></div>
<div class="spotlight-content">
{% if spot.subtitle %}<h3> {{ spot.subtitle }}</h3>{% endif %}
<p>{{ spot.summary }}</p>
</div>
</div>
</div>
{% endif %}
{% endfor %}