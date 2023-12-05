---
layout: post
title: "The data behind Minecraft servers!"
---
<!-- wp:paragraph -->
<p>Hey-</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I created an "extension" for my Discord bot, that constantly (~5 minutes) pings Minecraft servers, and logs their response containing:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Ping</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Players online</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Online status</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>After quite some time, I even got it working with Hypixel, which was very difficult.  After it running for about 2 - 3 weeks, I can say that it works <s>perfectly</s> / hasn't crashed yet.  Here is some data that it has accumulated by now.  The goal for this is to have a set of data, available on my Discord bot, and also data to answer questions like "When is Hypixel most active?", which, in the 5 hours it is active, the data is:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th>id</th><th>ip</th><th>recorded_timestamp</th><th>date</th><th>time</th><th>ping</th><th>players_online</th><th>online</th></tr></thead><tbody><tr><td>32181</td><td>hypixel.net</td><td>2023-09-04 10:53:40</td><td>2023-09-04</td><td>10:53:40</td><td>139</td><td>90924</td><td>1</td></tr></tbody></table><figcaption class="wp-element-caption">Most active Hypixel time thus far (the last value is just a boolean for if the server is on, i.e. responded to the requests)</figcaption></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Every 5 minutes, the container goes through another table containing the IPs of all servers I want to track.  Currently I am tracking:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Hypixel.net</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Minemen.club</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Minehut.com</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>og-network.net</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mineplex.com</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>mc.ltt.gg</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>PurplePrison.net</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>All data that I have gotten thus far is <a href="https://alphagame.dev/wp-content/uploads/2023/09/minecraft_server_data_september_7.csv">HERE</a>, in CSV format.  (This file comes at about 1.9 MB)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>See ya later!</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien B.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->