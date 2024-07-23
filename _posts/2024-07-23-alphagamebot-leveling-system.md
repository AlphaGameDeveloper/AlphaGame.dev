---
title: AlphaGameBot Leveling System
---

Hey!  It's been a while!  Don't worry though... I've been busy with AlphaGameBot, and am
so excited to reveal the latest feature that I just finished!

**User Leveling.**  Yes, many Discord bots have that, but this update is BIG!  In fact,
this update caused the most under-the-hood upheaval of any single update to the bot (and
that includes the WebUI update back in 3.1.x, although that took longer as I didn't have
as much experience with `MySQL Connector/Python`).

For discord server owners who don't want this feature (I won't be offended, it might be annoying if you don't like this sort of thing), an update (version 3.8.1), and a WebUI update (version 1.4) will allow you to disable this functionality on your server.  This will be accessable via **/guild settings**.

![demo of the leveling system](/assets/posts/img/agb_leveling_demo.png)

Currently, I have implimented levels 1 (50 messages) through 100 (43,000 messages).  If any of you get to level 100, I have no words.  I will have to add up to level 200.  Actually, I should add a leaderboard (not promising but that's a possibility of something that can happen in the future.)

## Future Plans
Remember: These are things that I am *thinking* about adding, but there is absolutely no promises as to if this will be added.

1. User Stats Webpages, would show said user's global stats in all servers that AlphaGameBot is in.  URL would be something like `alphagamebot.alphagame.dev/webui/user/stats/(username or userid)`

## You can now submit feature / command requests and feedback in AlphaGameBot!
This is a feature that I added quietly, in the **/about** command.  It is in a button that opens a Modal Form *(Amazing feature, Discord. Love ya!)*

![AlphaGameBot /about command output](/assets/posts/img/agb_commandsuggestions_demo_1.png)

Click 'Command Suggestions', and a modal will open:

![AlphaGameBot command suggestions modal](/assets/posts/img/agb_commandsuggestion_demo_2.png)

## AlphaGameBot will be verified soon
Unless you were listening to my mad ramblings in the [GitHub Issue](https://github.com/AlphaGameBot/AlphaGameBot/issues/73) that I used to document the thing, this is big news.  Soon, we'll have the nice verified app icon.  I have already wrote all the code needed to no longer require Privileged Intents, now we just need to verify it.

This will be done later this week.  Can't wait!

<hr />
Well, that's all I got for now.  If for some reason you're missing out on all this awesome stuff, you can invite the bot to your server.  It's 100% free and would really help me during hard times while working on this project.  I love reading the log message

```Got user count of 651.```

Even though there are 600 of you who use the bot, I just want to say from the bottom of my heart to each and every one of you, *Thank you*.  This bot has been my #1 project ever since I started in December 2023, and I do not see any end in the forseeable future.

Cheers,
- Damien Boisvert (AlphaGameDeveloper)

### Links
- [AlphaGameBot](/alphagamebot)
    - [AlphaGameBot Github Repo](https://github.com/AlphaGameBot/AlphaGameBot)
    - [AlphaGameBot WebUI GitHub Repo](https://github.com/AlphaGameBot/WebUI)
    