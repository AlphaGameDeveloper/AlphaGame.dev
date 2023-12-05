---
layout: post
title: "Flipper Zero - Hacking made too easy?"
---
<!-- wp:paragraph -->
<p>Hey-</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Just a few days ago, I got my hands on a Flipper Zero device.  I had no idea what the device was at first (or what it was capable of), so I turned to Google for information.  It didn't take me long to get sucked down the rabbit hole of what people have done with these devices (The interesting, the odd, and the (let's face it--) illegal).  Here's my summary of the device after 3 days with it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sub-GHz</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Flipper Zero comes included with a Sub-GHz module, making it good for interacting with devices that  use Sub-GHz frequencies.  Examples include: <em>Gates, garage doors, wireless doorbells, etc</em>.  It is comforting to know that Flipper's firmware has safeguards to prevent the device from transmitting on restricted frequencies, but it can be bypassed using custom firmware, like the <a href="https://github.com/DarkFlippers/unleashed-firmware">Flipper Unleashed firmware</a>, which removes most firmware restrictions, but is not intended for illegal activity.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>This software is for experimental purposes only and is not meant for any illegal activity/purposes.<br>We do not condone illegal activity and strongly encourage keeping transmissions to legal/valid uses allowed by law.<br>Also, this software is made without any support from Flipper Devices and is in no way related to the official devs.</p>
<!-- /wp:paragraph --><cite>DarkFlippers/unleashed-firmware on GitHub</cite></blockquote>
<!-- /wp:quote -->

<!-- wp:heading -->
<h2 class="wp-block-heading">NFC</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Flipper Zero allows for communication with NFC devices, such as Nintendo Amiibo.  I was really impressed with using the Amiibo functionality with my Wii U.  It is capable of reading and writing to the NFC data using the Wii U Amiibo software included in the Settings application.  There is also a <a href="https://github.com/Gioman101/FlipperAmiibo">Flipper Amiibo</a> repository on GitHub, with NFC data for a lot of Amiibos. <em>(What's the plural form of Amiibo?)</em>  I got a good laugh at a Youtube Short of someone walking into a store and digitally stealing amiibo data with the caption "How is this legal"!  This functionality really makes me wonder if it is possible to have a digital amiibo collection, but it would be kind of defeating the purpose, given how fun it is to collect them (If you can afford it!)</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Pet Dolphin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I won't deny it.  This really caught me off guard, having a virtual pet dolphin inside of a hacking tool.  It is a really fun function to have, though!  The "Pet Home" animations are really fun, with good animations using the monochrome display.  The pet also levels up, and you get XP by using the device (<a href="https://alphagame.dev/wp-content/uploads/2023/08/Flipper-Pet-Scoring.pdf">list</a>)</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":102,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://alphagame.dev/wp-content/uploads/2023/08/flipper_pet_animations-1024x581.png" alt="" class="wp-image-102"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">RFID</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This function is very useful, especially when dealing with lost pets.  Most pets have RFID tags somewhere in their necks; so it is good to have handy.  Somewhere around 20% of credit cards use RFID too.  Even though it takes more than that to steal your card, I wouldn't advise you to be handing out your credit card's RFID to people (Why the heck would you even do that?!?)</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Bad USB</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This function is hands-down one of my favorite functions.  You can use the Flipper Zero to execute USB Rubber Ducky scripts on the connected PC.  This function is pretty simple.  You plug in Flipper Zero into a PC (or anything that allows a keyboard), the Flipper tells the PC, <em>"Hey, guess what!  I'm TOTALLY a keyboard that is DEFINITELY controlled by a VERY FAST TYPING HUMAN BRING, OK?  Now, YOU'RE GONNA DO WHAT I SAY, EVEN IF I TYPE LIKE A <s>ROBOT</s> I MEAN HUMAN BEING, THANKS, BYE"</em>, or in other words, tells the computer that it's a HID keyboard device and then it runs a script, that can do anything that your keyboard can.  The Flipper uses a language called <em>DuckyScript</em>, and it used for a USB Rubber Ducky.  It is a simple "language" and is easy to learn.  Here's an example.  (Feel free to steal it, only took 5 minutes!)</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>REM --&gt; REM statements are comments and are ignored.
REM --&gt; This script writes some stuff in a Notepad window.
REM --&gt; (Windows only!)

REM --&gt; Wait 1 second to make sure all is ready
DELAY 1000

REM --&gt; Open Windows run menu and open Notepad
GUI r
DELAY 250
STRING "%SYSTEMROOT%\System32\notepad.exe"
DELAY 100
ENTER
DELAY 250

REM --&gt; Type some stuff in Notepad!
REM --&gt; Just "You just got hacked" in ascii art

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

REM --&gt; Shameless self-promo alert!
ENTER
REPEAT 5
STRING https://alphagame.dev/</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sadly, I can't cover everything that the Flipper Zero can offer, but fear not!  Please go on Google and get sucked down the Flipper Zero rabbit hole!  It's very fun, trust me.  I think that it's worth noting that you don't need a Flipper Zero to do all these things (except the pet dolphin, it's awesome!), but it puts all of them together in a small device that can fit into your pocket.  In October of 2022,<a href="https://cdn.flipperzero.one/september-orders-update.html"> U.S. Customs seized a package containing 15,000 Flipper devices</a>.  It is also not allowed in Brazil, due to crime, sadly.  It's a great device with a lot of personality, and I highly recommend it.  It's about USD $169 at <a href="https://shop.flipperzero.one/">their official store</a>.  Currently, this is the only place to get one, as it is not on Amazon.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Cheers,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien B.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sources</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://en.wikipedia.org/wiki/Flipper_Zero">Flipper Zero (Wikipedia)</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Flipper Docs<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://docs.flipper.net/sub-ghz" target="_blank" rel="noreferrer noopener">Sub-GHz</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://docs.flipper.net/basics/dolphin" target="_blank" rel="noreferrer noopener">Pet Dolphin</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://docs.flipper.net/rfid" target="_blank" rel="noreferrer noopener">125KHz RFID</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/DarkFlippers/unleashed-firmware" target="_blank" rel="noreferrer noopener">Flipper Zero Unleashed Firmware</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/Gioman101/FlipperAmiibo" target="_blank" rel="noreferrer noopener">Flipper Amiibo</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cdn.flipperzero.one/september-orders-update.html" target="_blank" rel="noreferrer noopener">Flipper device seizure</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->