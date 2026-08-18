---
show: true
width: 3
date: 2019-01-12 00:01:00 +0800
group: Cats
---
<!-- <div>
    {% for image in site.static_files %}
    {% if image.path contains '/assets/images/photos/album/' %}
        <img
        data-src="{{ image.path | relative_url }}"
        class="lazy w-100 rounded-xl"
        src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
        alt="">
    {% endif %}
    {% endfor %}
</div> -->

<!-- <div style="columns: 4 200px; column-gap: 16px;">
  {% for image in site.static_files %}
    {% if image.path contains '/assets/images/photos/album/' %}
      <img
        data-src="{{ image.path | relative_url }}"
        class="lazy rounded-xl"
        src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
        alt=""
        style="width: 100%; height: auto; display: block; margin-bottom: 16px; break-inside: avoid;">
    {% endif %}
  {% endfor %}
</div> -->

<style>
.image-gallery {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.image-gallery img {
  width: 100% !important;
  height: auto !important;
  display: block !important;
  margin: 0 !important;
  object-fit: cover;
}

/* Tablet */
@media (max-width: 900px) {
  .image-gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Mobile */
@media (max-width: 600px) {
  .image-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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