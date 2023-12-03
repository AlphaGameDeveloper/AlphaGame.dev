---
layout: post
title: The data behind Minecraft servers!
---

<p>I created an &#8220;extension&#8221; for my Discord bot, that constantly (~5 minutes) pings Minecraft servers, and logs their response containing:</p>



<ul>
<li>Ping</li>



<li>Players online</li>



<li>Online status</li>
</ul>

<!--more-->

<p>After quite some time, I even got it working with Hypixel, which was very difficult.  After it running for about 2 &#8211; 3 weeks, I can say that it works <s>perfectly</s> / hasn&#8217;t crashed yet.  Here is some data that it has accumulated by now.  The goal for this is to have a set of data, available on my Discord bot, and also data to answer questions like &#8220;When is Hypixel most active?&#8221;, which, in the 5 hours it is active, the data is:</p>



<table><thead><tr><th>id</th><th>ip</th><th>recorded_timestamp</th><th>date</th><th>time</th><th>ping</th><th>players_online</th><th>online</th></tr></thead><tbody><tr><td>32181</td><td>hypixel.net</td><td>2023-09-04 10:53:40</td><td>2023-09-04</td><td>10:53:40</td><td>139</td><td>90924</td><td>1</td></tr></tbody></table>



<p>Every 5 minutes, the container goes through another table containing the IPs of all servers I want to track.  Currently I am tracking:</p>



<ul>
<li>Hypixel.net</li>



<li>Minemen.club</li>



<li>Minehut.com</li>



<li>og-network.net</li>



<li>Mineplex.com</li>



<li>mc.ltt.gg</li>



<li>PurplePrison.net</li>
</ul>



<p>All data that I have gotten thus far is <a href="/assets/posts/minecraft_server_data_september_7.csv">HERE</a>, in CSV format.  (This file comes at about 1.9 MB)</p>



<p>See ya later!</p>



<ul>
<li>Damien B.</li>
</ul>