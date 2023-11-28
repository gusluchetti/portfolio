+++
title = "learning chezmoi"
description = "or why organizing dotfiles is still procrastination"
date = 2023-11-07
updated = 2023-11-28
draft = true
+++

I enjoy consistency. When we strive to do our best, the less you have to worry about,
the easier it is to focus on what actually matters.

I've come to love the 'keyboard-centric' ways, and I do believe that your computer
(and your files) can become an extension of yourself, in the sense that all relevant
actions become almost second nature.
In that vein, I'd like to share how I've come to setup my own dotfiles, why you should care,
and how to get started on your own journey.

Let's backtrack a bit. What are dotfiles anyway?
Dot files are user-specific configuration files, and they, unsurprisingly, usually start
with a dot.
Think `.gitconfig`, the `.config` directory, or even VSCode's `settings.json`.
These are all files that are pretty much define how a user might experience a certain
program or command line utility.

Unfortunately, not all programs have sensible defaults, and when they do, you might
not like them, which is totally fine. Everytime I boot a new game, I go straight to 'settings' 
to configure things the way I like them, and so if I end up using a program long enough,
it ends up getting the honor of having its config file(s) saved on source control.

For me, the following steps are essential when setting up a new machine:
- Installing programs (preferably with the OS's package manager `[brew, apt, dnf, scoop, etc.]`)
Should include programming languages `[rust, python, etc.]`.
- Setting up shell (zsh) and terminal (alacritty), along with any plugins/extensions (oh-my-zsh).
- Setting up neovim and its configuration. 
- Eyecandy. Home and lockscreen + custom cursor (posy's black cursor).

(Windows has some limitations with which programs run natively on it, and how much can be achieved in the CLI,
but the flow is mostly the same)

My dotfiles manager of choice is [chezmoi](https://www.chezmoi.io/). 
It touts itself as a 'personal home directory' manager, and comes with a LOT of bells and whistles.
