{% for h in hero %}
<div class="hero">
<div class="hero-img"><img src="/img/{{ h.img }}" /></div>
{% if h.article %}
{% for post in collections.article %}
{% if post.data.title == h.article %}
<div class="hero-content">
<div class="hero-feature">
<h1> {{ title }} </h1>
{% if issue %}
<p class="font-alt">Issue {{ issue }} : {{ when }}</p>
{% endif %}
<p>{{ post.data.summary | truncate: 130, "..." }} {% continue post.url %}</p>

{% endif %}
{% endfor %}
{% else %}
<p>{{ h.summary  }}</p>
{% endif %}
</div>
{% if spotlight %} {% include "patterns/spotlight.md" %} {% endif %}
{% if h.links %} {% include "patterns/com-links.md" %} {% endif %}
</div>
</div>
{% endfor %}