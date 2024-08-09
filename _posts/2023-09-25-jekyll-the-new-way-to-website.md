---
layout: post
title: Jekyll, the New Way to Website?
---
{% raw %}
<!-- wp:paragraph -->
<p>Static web pages -- We know them, we love them. (Most of us.).  If you have used GitHub pages, some file server like the ones at universities, you've (most likely) used one.<!--more-->  They are great, because they don't use many resources in the backend.  All they really do is regurgitate a file hosted on the server.  They can be great to code individually, not they're not perfect.  <em>Not by a long shot.</em>  Not until Jekyll comes around!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Jekyll changes this by having a utility to generate these pages beforehand, so you can use all the Liquid / Jinja2 features that you want, but the site is built in the backend, creating static HTML files that can be served via <code>jekyll serve</code> or any other static file server like <a href="http://nginx.org">Nginx</a> or <a href="https://httpd.apache.org/">Apache</a>.  I started a site for my Improv club at school, and it was really easy and lightweight to run.  It can also run in the background (or via GitHub actions) and automatically rebuild your site whenever a file changes!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Jekyll uses a templating language called <a href="https://shopify.github.io/liquid/">Liquid</a>, created by Shopify. <em>(I didn't see that coming, either!  I thought I misspelled when I saw that!)</em> and allows you to make HTML templates (called layouts or themes).  However, don't get layouts and themes mixed up, as they are two entirely different things.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Layouts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Layouts are simple HTML templates, with placeholders like <code>{{content}}</code> where the rendered Markdown will be placed, and <code>{{site.title}}</code> and <code>{{site.description}}</code> are set in your site's <code>_config.yml</code> file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Themes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Themes are distributed as Ruby Gem packages, and they are just like layouts, but to my knowledge, (I don't know Ruby), they can actually run Ruby code during <code>jekyll build</code>, making them more capable than layouts, but I never bothered to learn it.  Layouts always worked for me.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Get Started</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Starting a new Jekyll site is easy, just do <code>jekyll new .</code> (for a more complete site to get started with, along with the default Minima theme, or <code>jekyll new --blank .</code> for one without themes or their associated gems.  This is best for layouts, which are in the <code>_layouts</code> folder.  You can then run a web server via Jekyll directly via <code>jekyll serve</code>, and the generated site is placed in the <code>_site</code> folder, where the generated files look like your joe static file site.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>.
├── 404.html
├── about.html
├── assets
│&nbsp;&nbsp; ├── css
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── main.css
│&nbsp;&nbsp; │&nbsp;&nbsp; └── main.css.map
│&nbsp;&nbsp; └── main.css
├── index.html
├── members.html
└── signup.html</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>These files are made from the selected layout, along with given variables.  They can be given via the Markdown code as such</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

```markdown
---
title: My cool webpage
layout: default
permalink: /awesome
---
# Hello
I feel good today!
```

<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The values between the <code>---</code> are the properties that can be accessed like <code>{{ page.title }}</code> would return "My cool webpage".  It also has built-in SCSS/SASS transpiling in your <code>_scss</code> folder.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>All of these reasons make it an amazing solution for sites like GitHub pages with GitHub actions!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I like to make templates, so I will eventually make a page with downloads, or eventually making themes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cheers,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien Boisvert (AlphaGameDeveloper)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Jekyll file structure (<code>jekyll new --blank .</code>)</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>.
├── assets
│&nbsp;&nbsp; └── css
│&nbsp;&nbsp;     └── main.scss
├── _config.yml
├── _data
├── _drafts
├── _includes
├── index.md
├── _layouts
│&nbsp;&nbsp; └── default.html
├── _posts
└── _sass
    └── base.scss

8 directories, 5 files</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Completed Jekyll site (<code>jekyll new --blank .</code>) for my Improv club at school</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>.
├── 404.md
├── about.md
├── assets
│&nbsp;&nbsp; ├── css
│&nbsp;&nbsp; │&nbsp;&nbsp; └── main.scss
│&nbsp;&nbsp; └── main.css
├── _config.yml
├── _data
│&nbsp;&nbsp; ├── motd.yml
│&nbsp;&nbsp; └── nav.yml
├── _drafts
├── getstarted.md
├── _includes
├── index.md
├── _layouts
│&nbsp;&nbsp; └── default.html
├── members.md
├── _posts
├── _sass
│&nbsp;&nbsp; └── base.scss
└── _site
    ├── 404.html
    ├── about.html
    ├── assets
    │&nbsp;&nbsp; ├── css
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── main.css
    │&nbsp;&nbsp; │&nbsp;&nbsp; └── main.css.map
    │&nbsp;&nbsp; └── main.css
    ├── index.html
    ├── members.html
    └── signup.html

11 directories, 20 files</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you wish, you may see the Improv site that I made at <a href="https://improv.alphagame.dev">improv.alphagame.dev</a>.  It is made using Jekyll (with <code>--blank</code>, and using a custom theme that I made.)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cheers,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sources</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://jekyllrb.com/">Jekyll</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://shopify.github.io/liquid/">Liquid</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
{% endraw %}