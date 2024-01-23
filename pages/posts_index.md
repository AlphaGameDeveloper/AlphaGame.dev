---
layout: default
permalink: /blog
---
<script>var toggleExcerpt = function() {
    let es = document.getElementsByClassName('excerpt');
    for (let i = 0; i < es.length; i++) {
        let e = es[i]
        if (e.style.display === "none") {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }
    }
    return es;
}</script>
# Blog posts
Here, you can find my blog posts that I write in my spare time. <a href="javascript:toggleExcerpt()">Toggle excerpts</a>

<ul>
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    <ul>
        <li style="display: none;" class="excerpt">{{ post.excerpt }}</li>
    </ul>
{% endfor %}
</ul>
