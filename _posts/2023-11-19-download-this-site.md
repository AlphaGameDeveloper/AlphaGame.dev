---
layout: post
title: Download this Website!
---
If you are like me, you want to do stuff because you can and why not.  One of these things is **recursive website downloading**.
## What the junk does that mean?
Before I explain, let me explain web crawlers, like Google's Googlebot.  Their job is to search the internet ALL DAY, EVERY DAY!
They will go to a website, and check for links, like this.
* Download the site
* Scrape it for links
  * If a link is found, download the linked page and repeat.
  * If no, go crawl another link
 
Using the way that lots of Internet sites link to each other, this lets you index lots (if not all) of a website.
You can do this yourself to secure yourself an offline copy of a static website (like this one.)

## TEACH ME THIS POWER!!1!!1
Here's what you need
* A computer (windows is ok but Linux is preferred)
* The `wget` command (link for Windows to download is [here](https://eternallybored.org/misc/wget/)
* A target (you can use this website--I don't mind!)

Now, it's finally time to download.  Run this command `wget --recursive -l inf https://alphagame.dev/`

Let's explain what that command did.  The first option, `--recursive`, told wget to download a page and keep going deeper by
finding links.  The `-l inf` tag told it to download infinite layers, like if you have to go deep to find a page.  Or, you
can do `-l 2` to find only the main links from the page you chose.  If you ran this command, you will see a new folder, `alphagame.dev` 
*(or whatever site you downloaded)*.  It will have lots of files, that you can open in your web browser, or host locally and look.  I
will point out that this mostly only works on static web pages as others may use the internet AFTER the page is loaded which defeats the
purpose.

## Be responsible
While this is a cool trick, be careful how you use this, as it can lead to you spamming the server and you being blacklisted.
An example is in [Wikipedia's robots.txt file](https://en.wikipedia.org/robots.txt).  You can see that they blocked wget because
it was too hard for their servers to respond to all requests.  Also, be sure to obey the robots.txt requests when writing software.
It is a way for site owners to choose that sites they don't want in search results, so please respect their wishes.

Cheers,
* Damien Boisvert (AlphaGameDeveloper)
