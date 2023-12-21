---
layout: post
title: "Running a public website on an Arduino"
---
Hey!

I just got a public website running on a NodeMCU microcontroller.  There were a few obsticles that I had to tackle before finishing, and let's get started!
<!--more-->
## Drivers
Oh my gosh, do I hate the drivers.  I went on a wild goose chase all over the internet, looking for the right driver to use.  Because this is not an Arduino, it is a [NodeMCU](https://en.wikipedia.org/wiki/NodeMCU) microcontroller.  This is the first time that I used a NodeMCU, so naturally I didn't know how to use it.  I googled how, and found the board manager URL for the ESP8266 family of boards, the NodeMCU and man other generics included.  The reason that I couldn't upload it is because the drivers didn't work.  It did not show up as a Serial communication device (i.e. `COM5` or `COM6`), and I spent like an hour and a half trying to find the right driver, and then I found the stack overflow post that gave me the right driver.

I find it funny, how ONLY after I spent so long trying to find the drivers online, it specifically said it under the board--It was right under my nose the whole time!

## The web server
OK, Now that we finished ranting about drivers, we can start talking about the web server.  It uses the `ESP8266WiFi.h`, `WiFiClient.h`, `ESP8266WebServer.h`, and `ESP8266mDNS.h` libraries.  At first, I was worried about how I will get the HTML code on the board, and I decided to use the C++ header files (`*.h`) to get the HTML on there.  I named it `html.h`, and put this code in it:
```c++
#ifndef HEADER_FILE
#define HEADER_FILE

#define HTML_CODE "(removed because it was so long)"
#endif
```
It may seem simple, because it was almost all copy and pasting from tutorials about people who actually know C++, like... *not me*.  You can still see it with the first line being `#ifndef HEADER_FILE` and `#define HEADER_FILE`, that was me just copy and pasting, and not changing it because, if it ain't broke don't fix it.  *(Actually, I just forgot... ._.)*.  The site was meant to be simple, but I got carried away.  Hey!  It's finals week at school, and I already finished so I worked on the HTML code. Also, I was bored, SO SUE ME! *(for legal reasons that was a joke so please dont sue me ok thanks)*

Now, I had to connect the board to my Wi-Fi network.  I can already hear some of you yelling, "USE ETHERNET YOU MONSTER WI-FI IS CRINGE!!", and to that I say, I agree.  Everything except for the part where you said "use ethernet".  The [NodeMCU](https://en.wikipedia.org/wiki/NodeMCU) does not have a ethernet port, and I don't want to bother adding one, so it is using Wi-Fi with a Static IP.

## Connecting to the site
Like almost every site I host, I put it behind my [reverse proxy](https://en.wikipedia.org/wiki/Reverse_Proxy), so I don't have to do port fowarding.  It's a great solution and it feels like you are just visiting a normal site, with no noticible added delay.  If you want to check it out, the URL is [arduino.projects.alphagame.dev](https://arduino.projects.alphagame.dev).  Sorry for the long domain--I'm putting all projects under [projects.alphagame.dev](https://projects.alphagame.dev) now.

Cheers,
Damien Boisvert.

Contact me if you have questions. :)