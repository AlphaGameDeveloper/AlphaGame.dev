---
title: AlphaGameBot WebUI and Database... A rocky start, and also a GoDaddy rant...
---
## What is AlphaGameBot, exactly?
AlphaGameBot is a Discord bot that I have been working on since December of this year.  Recently, I have been working
on more complex features that require a backend database to work.  This functionality started with a **/user stats**
command in AlphaGameBot version 3.1.  AlphaGameBot 3.1 also included feature that has been on my bucket-list for...
well, ever since I even started AlphaGameBot *(No, really!  Look at the first commit, [`b713eb4`][firstcommit].  WebUI code was included, but it
sucked, and I ended up not including it because of problems like security and also the fact that it was tough to make them
work together in the same process.)*

## WebUI
You may have noticed how the current WebUI at [alphagamebot.alphagame.dev](agb-webui) (yes, such a long domain name.
I will most likely get a new one (that would be my third domain), alphagamebot.dev or alphagame.bot or something lol,
I just want to see if this bot thing has legs before investing in a domain)

## GoDaddy rant
Also, *(rant incoming)* [GoDaddy][godaddy] f\*cked up all of our domains.  For some background, we use [OPNSense][opnsense] for
our home router.  It proxies all of our domains to our servers that we have at home, and also handles SSL/TLS (the padlock
icon, https, secure connection, whatever you may call it) because the `.dev` TLD requires HTTPS.  This was working very
smoothly, and then out of the blue.  It didn't.  Me and my father spent hours trying to fix the issue, and we eventually
learned that [GoDaddy][godaddy] as our registrar disabled their API functionality that allowed [OPNSense][opnsense] to automatically
modify some records to automatically get a new SSL certificate when our old one expires (they last for 2 to 3 months). So,
predictably, we were unbelievably pissed about this, especially with the fact that I had just bought a new domain with [GoDaddy][godaddy],
and I can't migrate until June 20th because they require you to stay with them for 60 days after buying a domain before switching registrars.
Currently, we are just using [Caddy][caddy]'s certs and uploading it our [OPNSense](opnsense) server...  When we move to NameCheap, this
will (hopefully) no longer be an issue.

Also, we are currently redoing our network (almost) from the ground up so expect some odd stuff with the bot (most will be ok except for
database-using commands.) I will keep as much uptime as possible, but expect at lease some downtime.

Cheers,
- AlphaGameDeveloper

[firstcommit]: https://github.com/AlphaGameBot/AlphaGameBot/commit/b713eb4e87785573896738109c7161097e80e427
[agb-webui]: https://alphagamebot.alphagame.dev
[godaddy]: https://godaddy.com/
[opnsense]: https://opnsense.org/
[caddy]: https://caddyserver.com/
