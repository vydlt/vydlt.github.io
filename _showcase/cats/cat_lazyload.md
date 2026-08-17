---
show: true
width: 3
date: 2019-01-12 00:01:00 +0800
group: Cats
---
<div>
    <!-- <img data-src="{{ '/assets/images/photos/album/graduation.jpg' | relative_url }}"
     class="lazy w-100 rounded-xl"
     src="{{ '/assets/images/empty_300x200.png' | relative_url }}"> -->
    {% for image in site.static_files %}
    {% if image.path contains '/assets/images/photos/album/' %}
        <img
        data-src="{{ image.path | relative_url }}"
        class="lazy w-100 rounded-xl"
        src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
        alt="">
    {% endif %}
    {% endfor %}
</div>

