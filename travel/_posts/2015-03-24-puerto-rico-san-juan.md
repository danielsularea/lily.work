---
layout: blog
title:  Puerto Rico - San Juan
---

{% loop_directory directory:assets/img/blog/puerto-rico iterator:image filter:*.jpg sort:descending %}
  ![San Juan, Puerto Rico]({{ site.url }}/assets/img/blog/puerto-rico/{{ image }}.jpg "San Juan, Puerto Rico")
{% endloop_directory %}