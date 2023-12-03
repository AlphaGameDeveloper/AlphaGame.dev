---
layout: post
title: "Flipper Zero: Hacking made too easy?"
---
<p>Hey-</p>



<p>Just a few days ago, I got my hands on a Flipper Zero device.  I had no idea what the device was at first (or what it was capable of), so I turned to Google for information.  It didn&#8217;t take me long to get sucked down the rabbit hole of what people have done with these devices (The interesting, the odd, and the (let&#8217;s face it&#8211;) illegal).  Here&#8217;s my summary of the device after 3 days with it.</p>
<!--more-->


## Sub-GHz



<p>The Flipper Zero comes included with a Sub-GHz module, making it good for interacting with devices that  use Sub-GHz frequencies.  Examples include: <em>Gates, garage doors, wireless doorbells, etc</em>.  It is comforting to know that Flipper&#8217;s firmware has safeguards to prevent the device from transmitting on restricted frequencies, but it can be bypassed using custom firmware, like the <a href="https://github.com/DarkFlippers/unleashed-firmware">Flipper Unleashed firmware</a>, which removes most firmware restrictions, but is not intended for illegal activity.</p>



<blockquote class="wp-block-quote">
<p>This software is for experimental purposes only and is not meant for any illegal activity/purposes.<br>We do not condone illegal activity and strongly encourage keeping transmissions to legal/valid uses allowed by law.<br>Also, this software is made without any support from Flipper Devices and is in no way related to the official devs.</p>
<cite>DarkFlippers/unleashed-firmware on GitHub</cite></blockquote>



<h2 class="wp-block-heading">NFC</h2>



<p>The Flipper Zero allows for communication with NFC devices, such as Nintendo Amiibo.  I was really impressed with using the Amiibo functionality with my Wii U.  It is capable of reading and writing to the NFC data using the Wii U Amiibo software included in the Settings application.  There is also a <a href="https://github.com/Gioman101/FlipperAmiibo">Flipper Amiibo</a> repository on GitHub, with NFC data for a lot of Amiibos. <em>(What&#8217;s the plural form of Amiibo?)</em>  I got a good laugh at a Youtube Short of someone walking into a store and digitally stealing amiibo data with the caption &#8220;How is this legal&#8221;!  This functionality really makes me wonder if it is possible to have a digital amiibo collection, but it would be kind of defeating the purpose, given how fun it is to collect them (If you can afford it!)</p>



<h2 class="wp-block-heading">Pet Dolphin</h2>



<p>I won&#8217;t deny it.  This really caught me off guard, having a virtual pet dolphin inside of a hacking tool.  It is a really fun function to have, though!  The &#8220;Pet Home&#8221; animations are really fun, with good animations using the monochrome display.  The pet also levels up, and you get XP by using the device (<a href="/assets/posts/Flipper-Pet-Scoring.pdf">list</a>)</p>



<img src="/assets/posts/flipper_pet_animations-1024x581.png">



<h2 class="wp-block-heading">RFID</h2>



<p>This function is very useful, especially when dealing with lost pets.  Most pets have RFID tags somewhere in their necks; so it is good to have handy.  Somewhere around 20% of credit cards use RFID too.  Even though it takes more than that to steal your card, I wouldn&#8217;t advise you to be handing out your credit card&#8217;s RFID to people (Why the heck would you even do that?!?)</p>



<h2 class="wp-block-heading">Bad USB</h2>



<p>This function is hands-down one of my favorite functions.  You can use the Flipper Zero to execute USB Rubber Ducky scripts on the connected PC.  This function is pretty simple.  You plug in Flipper Zero into a PC (or anything that allows a keyboard), the Flipper tells the PC, <em>&#8220;Hey, guess what!  I&#8217;m TOTALLY a keyboard that is DEFINITELY controlled by a VERY FAST TYPING HUMAN BRING, OK?  Now, YOU&#8217;RE GONNA DO WHAT I SAY, EVEN IF I TYPE LIKE A <s>ROBOT</s> I MEAN HUMAN BEING, THANKS, BYE&#8221;</em>, or in other words, tells the computer that it&#8217;s a HID keyboard device and then it runs a script, that can do anything that your keyboard can.  The Flipper uses a language called <em>DuckyScript</em>, and it used for a USB Rubber Ducky.  It is a simple &#8220;language&#8221; and is easy to learn.  Here&#8217;s an example.  (Feel free to steal it, only took 5 minutes!)</p>



```
REM --> REM statements are comments and are ignored.
REM --> This script writes some stuff in a Notepad window.
REM --> (Windows only!)

REM --> Wait 1 second to make sure all is ready
DELAY 1000

REM --> Open Windows run menu and open Notepad
GUI r
DELAY 250
STRING "%SYSTEMROOT%\System32\notepad.exe"
DELAY 100
ENTER
DELAY 250

REM --> Type some stuff in Notepad!
REM --> Just "You just got hacked" in ascii art

STRING                        _           _                 
ENTER
STRING                       (_)         | |                
ENTER
STRING  _   _  ___  _   _     _ _   _ ___| |_               
ENTER
STRING | | | |/ _ \| | | |   | | | | / __| __|              
ENTER
STRING | |_| | (_) | |_| |   | | |_| \__ \ |_               
ENTER
STRING  \__, |\___/ \__,_|   | |\__,_|___/\__|              
ENTER
STRING   __/ |              _/ |                            
ENTER
STRING  |___/              |__/                             
ENTER
STRING              _     _                _            _ _ 
ENTER
STRING             | |   | |              | |          | | |
ENTER
STRING   __ _  ___ | |_  | |__   __ _  ___| | _____  __| | |
ENTER
STRING  / _` |/ _ \| __| | '_ \ / _` |/ __| |/ / _ \/ _` | |
ENTER
STRING | (_| | (_) | |_  | | | | (_| | (__|   &lt;  __/ (_| |_|
ENTER
STRING  \__, |\___/ \__| |_| |_|\__,_|\___|_|\_\___|\__,_(_)
ENTER
STRING   __/ |                                              
ENTER
STRING  |___/                                               
ENTER

REM --> Shameless self-promo alert!
ENTER
REPEAT 5
STRING https://alphagame.dev/
```



<h2 class="wp-block-heading">Conclusion</h2>



<p>Sadly, I can&#8217;t cover everything that the Flipper Zero can offer, but fear not!  Please go on Google and get sucked down the Flipper Zero rabbit hole!  It&#8217;s very fun, trust me.  I think that it&#8217;s worth noting that you don&#8217;t need a Flipper Zero to do all these things (except the pet dolphin, it&#8217;s awesome!), but it puts all of them together in a small device that can fit into your pocket.  In October of 2022,<a href="https://cdn.flipperzero.one/september-orders-update.html"> U.S. Customs seized a package containing 15,000 Flipper devices</a>.  It is also not allowed in Brazil, due to crime, sadly.  It&#8217;s a great device with a lot of personality, and I highly recommend it.  It&#8217;s about USD $169 at <a href="https://shop.flipperzero.one/">their official store</a>.  Currently, this is the only place to get one, as it is not on Amazon.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p>Cheers,</p>



<ul>
<li>Damien B.</li>
</ul>



<h2 class="wp-block-heading">Sources</h2>



<ul>
<li><a href="https://en.wikipedia.org/wiki/Flipper_Zero" target="_blank" rel="noreferrer noopener">Flipper Zero (Wikipedia)</a></li>



<li>Flipper Docs
<ul>
<li><a href="https://docs.flipper.net/sub-ghz" target="_blank" rel="noreferrer noopener">Sub-GHz</a></li>



<li><a href="https://docs.flipper.net/basics/dolphin" target="_blank" rel="noreferrer noopener">Pet Dolphin</a></li>



<li><a href="https://docs.flipper.net/rfid" target="_blank" rel="noreferrer noopener">125KHz RFID</a></li>
</ul>
</li>



<li><a href="https://github.com/DarkFlippers/unleashed-firmware" target="_blank" rel="noreferrer noopener">Flipper Zero Unleashed Firmware</a></li>



<li><a href="https://github.com/Gioman101/FlipperAmiibo" target="_blank" rel="noreferrer noopener">Flipper Amiibo</a></li>



<li><a href="https://cdn.flipperzero.one/september-orders-update.html" target="_blank" rel="noreferrer noopener">Flipper device seizure</a></li>
</ul>