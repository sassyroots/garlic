<div class="head">
<div class="head-container">
  <div class="logo" alt="Sassy Roots Apothecary logo and link to home page"><a href="/">{% logo "light" %}</div>
  <div class="topnav" id="myTopnav">
    {% for item in nav.nav %}
    {% unless item.state == "draft" %}
      <a href="{{ item.href}}"
      {% if page.url == item.href %}
        class="active"
      {% endif %}
      > {{ item.title }}</a>
    {% endunless %}
    {% endfor %}
  </div>
</div>
</div>
