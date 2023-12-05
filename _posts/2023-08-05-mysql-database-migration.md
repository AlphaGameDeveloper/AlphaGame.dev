---
layout: post
title: "MySQL Database Migration"
---
<!-- wp:paragraph -->
<p>Hey-</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I just moved this site's MySQL database container.  It is no longer included in the site's docker-compose.yml file, and it is its own container now so that I can use the same container for multiple projects.  For the 2 of you who are actually interested, here is the <code>docker-compose.yml</code> file for just the database.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>version: '3.3'
services:
  database:
    container_name: "wordpress_database"
    image: mysql:5.7
    volumes:
      - /mnt/bigga/Wordpress/database:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ImNotTellingYa!
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: WouldIActuallyBeAsStupidToPutThisHere
    networks:
      - wp</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>So yeah, this was a difficult task, and I'm glad to have it on my "done" column.  I felt that this is a important change to make to the backend, and it will save some resources, now that I only have one MySQL server running.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That's all for today,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->