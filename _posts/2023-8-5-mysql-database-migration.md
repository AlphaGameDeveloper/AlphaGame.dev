---
layout: post
title: MySQL Database Migration
---

I just moved this site's MySQL database container.  It is no longer included in the site's docker-compose.yml file, and it is its own container now so that I can use the same container for multiple projects.  <!--more-->For the 2 of you who are actually interested, here is the <code>docker-compose.yml</code> file for just the database.



```yaml
version: '3.3'
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
      - wp
```


<p>So yeah, this was a difficult task, and I'm glad to have it on my &#8220;done&#8221; column.  I felt that this is a important change to make to the backend, and it will save some resources, now that I only have one MySQL server running.</p>



<p>That's all for today,</p>



<ul>
<li>Damien</li>
</ul>

**Note: This post is no longer relavant to this site, as I am no longer using WordPress.**