+++
title = "configuration galore (dotfiles)"
description = "or why organizing them is still procrastination"
date = 2023-12-07
draft = true
+++

I enjoy consistency. When we strive to do our best, the less you have to worry about, the easier it is to focus on the actually challenging part.

<!-- more -->

I've come to love the 'keyboard-centric' way of computing, and I do believe that your computer can become an extension of yourself, in the sense that all relevant actions are almost second nature. In that vein, I'd like to share why you should care about your own dotfiles, and how I manage mine.

Let's backtrack a bit. What are dotfiles anyway?
Dot files are user-specific configuration files, and they, unsurprisingly, usually start with a dot. Think `.gitconfig`, the `.config` directory on Linux, or even VSCode's `settings.json`. These are all files that define how a user will experience a certain program or command line utility.

Unfortunately, not all programs have sensible defaults, and when they do, you might not like them, which is totally fine. Everytime I boot a new game, I go straight to 'settings' to configure things the way I like them (disabling motion blur first and foremost), and so if I use a program for long enough, it usually ends up getting its config file(s) saved on source control.

"Why take the time though?" 

My dotfiles manager of choice is [chezmoi](https://www.chezmoi.io/). 
It touts itself as a 'personal home directory' manager, and comes with a LOT of bells and whistles. It has been a pleasure to use and it's documentation is very good.

### other notes 
For me, the following steps are essential when setting up a new machine:
- Installing programs (preferably with the OS's package manager `[brew, apt, dnf, scoop, etc.]`)
Should include programming languages `[rust, python, etc.]`.
- Setting up shell (zsh) and terminal (alacritty), along with any plugins/extensions (oh-my-zsh).
- Setting up neovim and its configuration. 
- Eyecandy. Home and lockscreen + custom cursor (posy's black cursor).

(Windows has some limitations with which programs run natively on it, and how much can be achieved in the CLI, but the flow is mostly the same)
