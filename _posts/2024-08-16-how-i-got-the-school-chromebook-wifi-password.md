---
layout: post
title: How I Got the School Chromebook Wi-Fi Password
---

Let me get one thing clear right off the bat--No, I don't like ChromeOS.  I can see the appeal of it for schools, but ChromeOS is just too locked-down for my taste.  Yes, you could do enter [Developer Mode](https://en.wikipedia.org/wiki/ChromeOS#Shell_access), or go the simpler route and use the Linux Sandbox to run your native Linux applications, but still, it's slow, it's restricted, and it's still ChromeOS.

Upon completing middle school, I recieved my school chromebook, a Lenovo 100e Gen 2 (Codename: `treeya`), powerwashed and free at last.  I used it for a bit, and seeing what a unmanaged ChromeOS had to offer.  Specifically, I was really looking at the Linux sandbox, as that was a feature that the school disabled and was one of the things I was most excited about checking out.  I found it *quite* underwhelming.  I put down the Chromebook and only used it in cases where I would not have access to another laptop, and mainly for web browsing or light development work.

Fast-foward to April of 2024.  I realize that my high school chromebook really sucked.  I then used that old chromebook that was collecting dust, and started using it in place of my school chromebook.  Noone looked twice.  But then, why would they?  It has the Chromebook logo on the back, and the school's bloatware was on the limited user account that I signed into with my school credentials *(NOT the owner account, so the Chromebook itself didn't become managed, merely the single account)*.

![Chromebook with the Chromebook Icon on the back](https://github.com/user-attachments/assets/39a6f7ea-bfc6-4257-8864-450778cfdb62)

The main account (unmanaged by the school) proved to be quite useless at school.  The Chromebooks automatically connect to the school's Wi-Fi network for them, and this password was not shared between accounts.  Of course, us students were not able to see these plaintext passwords.  Something I found quite hilarious was how easy it was to gain access to this information! It was intriguing to see how easy it was to get some... let's say *information that was not intended for normal people's eyeballs.*  What about, say, the Student Chromebook Wi-Fi network password?

I like to say that the Chromebooks have a really hard outer shell, but when it's broken, it's very soft inside.  This is an analogy I use othen when explaining how I did it to other people.  The school disabled Developer Mode on their managed chromebooks.  This is great--Until you notice how a Chromebook that is not under the school's control with the same preloaded information on it can be used to get all of it.  Me and some friends called this *"Operation Marionette"*, and I started looking as to what I could get off of it.

Wi-Fi passwords are located in the `/home/chronos/u-(userid)/shill/shill.profile` file.  This file is only accessable via Developer Mode, as ChromeOS without denies access to anything outside of the `/home/chronos/u-(userid)/MyFiles` folder, containing, you guessed it, user files.  Upon reading the `shill.profile` file, you get a list of all the Wi-Fi networks that you've connected to.  From your home and school Wi-Fi passwords, to that airport network that you've used once and since forgot about.
```bash
cat shill.profile | more
```
I hit my spacebar to scroll through the file until I saw the only network I was interested in... The Chromebook Wi-Fi password.  Seeing that Rot47 password, I knew that I was doing something right...
```ini
Passphrase=rot47:XXXXXXXXXXX
```

Using a command that I found to decode this mess of characters, I finally got the 11-character string that I've been looking for:

```shell        
echo XXXXXXXXXXX | tr '!-~' 'P-~!-O'
```

There it was, the Wi-Fi password that I've been looking for.  I then realized that the *STAFF* Wi-Fi password was already leaked by a few teachers who slipped up and told some students, who then told everyone, rendering this password (which was for a network which was more limited anyway) completely useless.  However, I don't care.  This was a really interesting project I did, and I also learned quite a bit about the ChromeOS filesystem.  I also learned HOW STINKIN' EASY IT IS.  To be honest, I expected my journey to end with me staring down a hash, which as we all know, cannot be converted back to the password, but this turned out pretty great!

Also, if any school staff are reading this, just consider this my bug report! ;)

Cheers,
- Damien
