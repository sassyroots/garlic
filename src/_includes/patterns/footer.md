<div class="foot">
<div class="foot-container">
  <div class="foot-logo">
    {% logo "light" %}
  </div>
  <div class="foot-nav">
    <ul>
    {% for item in nav.foot %}
    {% unless item.state == "draft" %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endunless %}
    {% endfor %}
    </ul>
   
  </div>
  <div class="foot-copy">
     <p class="notice">notice: no federal agency regulates herbalist. As such all articles, recipes, and products contain on this site are for educational purposes and do not claim to heal, treat, or cure diseases. <br/> <br/> Being educated and caring for your body is both your right and responsibility, regardless of whether you are seeking advice from an herbalist, an alternative healer, a spiritualist, or a medical professional. Taking care of yourself is the most revolutionary and sassiest thing you can do.</p>
    <p>&copy 2023 Sassy Roots Apothecary. All rights reserved.</p>
  </div>
</div>
</div>