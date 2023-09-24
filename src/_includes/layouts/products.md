---
layout: base.html
tags: 
  - product
---
<div class="product-hero split pad-20 gap-20">

![{{img[0].alt}}](/img/{{img[0].photo}})

<div class="product-body split-50">

# {{ title }}
<div class="tabbed">
<input type="radio" id="tab1" name="css-tabs" checked>
<input type="radio" id="tab2" name="css-tabs">
<input type="radio" id="tab3" name="css-tabs">
<ul class="tabs">
<li class="tab"><label for="tab1">Description</label></li>
<li class="tab"><label for="tab2">Ingredients</label></li>
<li class="tab"><label for="tab3">How to use</label></li>
</ul>
<div class="tab-content">
{{ content }}
</div>
<div class="tab-content">
<ul>
{% for h in herbs %}
<li>{{ h }}</li>
{% endfor %}
{% for i in ingredients %}
<li>{{ i }}</li>
{% endfor %}
</ul>
</div>
<div class="tab-content">
{{ dosage | markdownify }}
</div>
</div>
{% icon "fa-duotone fa-cart-shopping" %} 2oz | $14.99
<a class="gumroad-button" href="https://sassyroots.gumroad.com/l/notebook">Buy on</a>
</div>
</div>





