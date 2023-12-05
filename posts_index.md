---
layout: default
permalink: /blog
---
# Blog posts
Here, you can find my blog posts that I write in my spare time.

<ul>
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    <!-- <ul>
        <li class="excerpt">{{ post.excerpt }}</li>
    </ul> -->
{% endfor %}
</ul>
