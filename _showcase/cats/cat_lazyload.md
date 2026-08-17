---
show: true
width: 3
date: 2019-01-12 00:01:00 +0800
group: Cats
---

<style>
.image-gallery {
  columns: 4 200px;
  column-gap: 16px;
}

.image-gallery img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 16px;
  break-inside: avoid;
}
</style>

<div class="image-gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/assets/images/photos/album/' %}
      <img
        data-src="{{ image.path | relative_url }}"
        class="lazy rounded-xl"
        src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
        alt="">
    {% endif %}
  {% endfor %}
</div>