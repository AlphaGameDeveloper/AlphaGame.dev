---
title: "KonamiRickroll: Add a rickroll to your site via Konami code"
---
Ever wanted to have a little easter egg in your website?  I sure did!  With my new JavaScript script, you can now add an easteregg rickroll to your website<!--more-->
by typing this combo: **UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A**.  This is the Konami combo, and it is well-known, so you can be sure that someone
will find it someday! Add it to your site by just copy and pasting this HTML code to your &lt;head&gt; section:
```html
<script src="https://www.alphagame.dev/assets/js/secret-jam-session.js"></script>
```
This is very plug-and-play, and it should work with any website without any additional config.

## How it works
KonamiRickroll works by listening for the above pattern, and then replaces the webpage &lt;body&gt; section with a rickroll.  This is easily stopped by reloading the webpage.

**Try it on this site!**

Cheers,
Damien Boisvert (AlphaGameDeveloper)
