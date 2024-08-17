---
layout: default
permalink: /blog/
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

<style>
    td.date {
        white-space: nowrap; 
    }
</style>
# Blog posts
Here, you can find my blog posts that I write in my spare time.

For you awesome people who use [RSS](https://en.wikipedia.org/wiki/RSS), the feed can be found [here](https://alphagame.dev/feed.xml)!

The Blog Archives can be found [here](/blog/archives)!

<table>
    <tr>
        <th>Date</th>
        <th>Title</th>
    </tr>
    {% for post in site.posts %}
    <tr>
        <td class="date">{{ post.date | date: "%m-%d-%Y" }}</td>
        <td><a href="{{ post.url }}">{{post.title}}</a></td>
    </tr>
    {% endfor %}
</table>