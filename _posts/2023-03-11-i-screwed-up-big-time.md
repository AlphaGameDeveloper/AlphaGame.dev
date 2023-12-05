---
layout: post
title: "I screwed up... (Big time)"
---
<!-- wp:paragraph -->
<p>Hey-</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This site has been down since March 5th, due to me screwing up Pi-Hole in Docker.  I made Docker use the <code>vfs</code> storage driver,<!--more--> instead of the default <code>overlay2</code> storage driver, which removed all the containers, their images, and everything... I had some trouble getting Pi-Hole DNS back so I can pull my images back into <code>vfs</code>, but everything is going well. (for now...)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Till the next time,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Links:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://pi-hole.net/" target="_blank" rel="noreferrer noopener">Pi-Hole</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://docker.com/" data-type="URL" data-id="https://docker.com/" target="_blank" rel="noreferrer noopener">Docker</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->