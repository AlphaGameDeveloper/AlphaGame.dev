---
layout: post
title: Site Migration to GitHub Pages
---
# Site Migration to GitHub Pages
Hey all-

I have been working on moving this site from my server to GitHub pages.  You may wonder, *"Why would you move your site to GitHub pages when you already have a server at home that you already used WordPress on?"*.
The answer is... complicated. <!--more--> My first reason is that I am not great with PHP, and I want to be able to change the site layout via HTML and the Liquid syntax, rather than having to learn a whole new programming
language.  Also, I am used to GitHub and enjoy the open-source and contribution aspects of GitHub.  My third reason, which is by far the biggest, is that issues with me and my father sharing a server arose.  When I 
upload files via WordPress to alphagame.dev, usually what I would do is upload the image via the website.  However, I could not upload videos and some images due to the 2MB file upload, causing me to upload files to
static.alphagame.dev.  *(I am going to skim over the next part)* This worked fine until my father decided to start punishing me by cutting my SSH and file upload via Samba from Hubby.  When I talked to him, he
made it clear that he would not stop this method of punishment, even though I used it for school.  Now that this started to become more common, and he made no sign of stopping this, I decided to start moving all services
that I could without paying for a VPS off of Hubby.  This site is the first, and will *most likely* not be the last.

Another question that I received with this is, *"What will happen to AlphaGameBot and the many other services you run?"*.  To answer, I don't know.  Now that I cannot SSH into the server, I can no longer manage the bot, so when it stops, it will stop for 
a while.  The same will go with other services that I run, such as status.alphagame.dev, map.alphagame.dev, the Minecraft server, and any other service that is running on Hubby will run for as long as possible without me 
having to manually manage it.  When it stops, it stops, I guess.  I do know that I may be getting a server of my own someday, and at that point, I know that I will move all services to that... However, I do not know if 
the services will be safe on that, either, given that my father said that he would stop that, too.

So yeah, I don't know where this will go.  I will do what I can to evacuate as many services as I can, but I cannot make any promises.  I will open a GitHub issue on [this site's GitHub repository](https://github.com/AlphaGameDeveloper/AlphaGameDeveloper.github.io)
where I will document my attempts of migration.  I will try to be active on there, but I also have school, so most of my work is on Fridays, Saturdays, and Sundays.

Cheers,

* Damien Boisvert.

**UPDATE: AlphaGameBot (the Discord bot) has now turned off.  It is no longer active as of December 3, 2023.**
