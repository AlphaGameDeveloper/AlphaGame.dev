---
title: This website is on the Dark Web!
---

In recent years, the internet has become increasingly polarized—while the surface web offers accessibility and transparency, the dark web provides a space for anonymity, privacy, and sometimes controversial content. For some, this privacy is paramount, while others use it for more illicit activities. Regardless of the reason, the dark web represents a unique, decentralized part of the internet that has captivated many tech enthusiasts and privacy advocates alike.

As someone who is always interested in random stuff, I decided to experiment with using Tor to create a dark web proxy for my website. In this post, I'll walk you through my experience, the process I followed, and the challenges I encountered along the way.

## Hold on... What's the dark web, exactly?

**Tor** (The Onion Router) is a software that allows users to browse the web anonymously by routing their internet traffic through a series of encrypted nodes around the world. This helps to mask the user’s IP address, making it harder for websites and governments to track them.

The **dark web** is refers to a portion of the Internet that is only accessible via the network of Tor relays.  This makes it so that the website you're visiting doesn't know who you are, and you don't know who the website is!

## Why?
I just wanted to learn how Tor worked and how to make a website on the dark web.  I was also dumbfounded by how you don't even need to forward any ports on your router, and wanted to learn how the networking works for Tor!

I also saw [this video][networkchuck-video] and I wanted to follow along!  Also, why not?

## Steps

### Step #1: Install Tor on the server

```bash
apt update
apt install tor
```

Then, I modified the `/etc/tor/torrc` file, and uncommented the following lines:
```
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 127.0.0.1:80
```

This tells Tor to route incoming traffic to the web server running on port 80.

```
service tor restart
```

After restarting Tor, It generated a `.onion` address for my website!  It is located in the `/var/lib/tor/hidden_service/hostname` file.

### Step #2: Get the web server set up!
Normally, when I want a web server, I would use [Caddy][caddy], because it has HTTPS built in by default.  However, for this project, I wanted to use [Nginx][nginx], because I've seen lots of other people using it, and also just to learn how to configure it. (Also, I dont need HTTPS here!)

```bash
sudo apt install nginx
```

Now, we can go to the Onion address found in `/var/lib/tor/hidden_service/hostname`, and see the default nginx webpage!

We *could* stop here if we wanted to, and put static content in `/var/www/html`, to be served by Nginx, but in this case, I want it to be proxying to my main website!

My website is hosted on GitHub Pages, so we will need some configuration for nginx.  We write the following content to `/etc/nginx/sites-availiable/default`

```
server {
    listen 80;

    server_name darkweb-proxy;

    location / {
        proxy_pass https://www.alphagame.dev/;
        proxy_set_header Host www.alphagame.dev;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Be sure to modify the above with your own stuff (unless you want to route here 🙃)

If you have a website on GitHub Pages, you would 100% want to modify the `proxy_pass` and `proxy_set_header Host` directives.  For example:
```
proxy_pass https://username.github.io/repository
proxy_set_header Host username.github.io
```

### Step #3 (Optional): CUSTOM .ONION ADDRESS!
Ok, maybe not *totally* custom.  Still, it allows you to personalize your `.onion` address and make it look a bit nicer.  To do that, we can use a tool called `mkp224o`.  Not gonna win any awards for naming, but it's REALLY COOL!

What `mkp224o` will do is brute-force and generate LOTS of `.onion` addresses, until it'll find one that we like.  Now, this is *very* computationally expensive.  In fact, the longer the prefix you want, the longer it'll take!  If I were to do `alphagamedev`, that's only 12 characters, but it'll take a *very* long time!  Please, keep it short (for testing maybe 5 or 6 letters).

But first, we need to actually build the app from source!

Let's install a few prerequisites, first.
```bash
apt install git gcc libc6-dev libsodium-dev make autoconf
```

Next, we'll clone the `mkp224o` repository from GitHub, and `cd` into that directory.

```
git clone https://github.com/cathugger/mkp224o.git && cd mkp224o
```

Now, we can build the application from source!
```
./autogen.sh
./configure
make
```

Congrats!! You compiled your application from source! Let's use it!

```
./mkp224o alpha -v -n 1 -d ./onion-address -t 4
```

Let's run over this command:
* `alpha` is our desired prefix.  This can be whatever you want (PLEASE keep it short!)
* `-v` means we want it to be verbose!
* `-n 1` means we only want one onion address to be generated.
* `-d ./onion-address` means that we want it to be stored in the `onion-address` folder.  Feel free to change this!
* `-t 4` means to use 4 CPU threads to speed things up a bit!

Once that command is done, we will want to copy the contents of the folder with your onion address (named after your onion address in the folder name we gave with the `-d` switch) to the server!

```
cp -r ./onion-address/your-address-name/ /var/lib/tor/hidden_service
```

Then, we restart Tor, and you're all good!
```
service tor restart
```

## Conclusion
Creating a dark web version of this site was a very interesting project.  It allowed me to explore how Tor works, and also learn a bit about Nginx.

Although there are technical challenges and security risks involved, the benefits of providing enhanced privacy for visitors are undeniable. If you’re interested in diving deeper into Tor or the dark web, I highly recommend giving this a try!

This site is availiable on the dark web at [alphactgkfzkiukfelpxwmkdh424gp67ci3n4alapgymyitf2nmqpkqd.onion][tor-address].  Pop that address into the [Tor Browser][torbrowser]

[networkchuck-video]: https://youtu.be/CurcakgurRE
[caddy]: https://caddyserver.com/
[nginx]: https://nginx.org/
[torbrowser]: https://www.torproject.org/download/
[tor-address]: https://alphactgkfzkiukfelpxwmkdh424gp67ci3n4alapgymyitf2nmqpkqd.onion