{% for h in hero %}
<div class="hero">
<div class="hero-img split-50"><img src="/img/{{ h.img }}" /></div>
<h1> {{ title }} </h1>
{% if h.article %}
{% for post in collections.article %}
{% if post.data.title == h.article %}
<div class="hero-content">
{% if issue %}
<p class="font-alt">Issue {{ issue }} : {{ when }}</p>
{% endif %}
<p>{{ post.data.summary | truncate: 130, "..." }} {% continue post.url %}</p>
</div>
{% endif %}
{% endfor %}
{% else %}
<p>{{ h.summary  }}</p>
{% endif %}
{% if spotlight %} {% include "patterns/spotlight.md" %} {% endif %}
{% if h.links %} {% include "patterns/com-links.md" %} {% endif %}
</div>
{% endfor %}