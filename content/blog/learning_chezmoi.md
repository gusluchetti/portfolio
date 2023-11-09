+++
title = "learning chezmoi"
description = "or why everyone should have a dotfiles repo"
date = 2023-11-07
updated = 2023-11-07
draft = false
+++

As one does, I got tired of redownloading and reconfiguring all of my programs 
whenever I formatted my Windows machine. Not only that,
since I got into [dual-booting](https://en.wikipedia.org/wiki/Multi-booting)<!-- more -->
, I had two machines with vastly different configuration setups, so I never managed 
to build a workspace that I was truly confortable with. 

After some research, I found [chezmoi](https://www.chezmoi.io) out, and wanted to give it a try.
_(a new [dotfiles repo](https://github.com/gusluchetti/dots) rises!)_

My first goal was simple: be able to setup a new linux boot (at that time, using Fedora) 
in less than 20 min. That would mean:
- setting up a window manager + eye candy (wallpaper and lockscreen)
- installing my essential programs
- configuring my shell environment and neovim
all with one command!

chezmoi's documentation is very nicely written out, but I thought I'd go through
some issues I had while setting up my own dotfiles repository.

```python
def fib():
    # this is my very long winded code, sorry! i need to be very eloquent
    return false;
```

ssh is not the default for cloning the repo, so you'll have to specify that argument.
the command I currently use to update my configurations in a new machine is:

in one swoop, I download chezmoi, my repo (at .local/share/chezmoi) and insert/update
my files accordingly!

And it all just works! In my opinion, one of chezmoi's best features is being able
to template files (just like this website's templating language) to work in different
ways depending on the OS. I managed to write a single script, that according to my
current OS, runs different commands to setup a new machine!
