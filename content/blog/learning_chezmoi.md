+++
title = "learning chezmoi"
description = "or why everyone should have a dotfiles repo"
date = 2023-06-19
updated = 2023-11-03
draft = false
+++

As one does, I got tired of redownloading and reconfiguring all of my programs 
whenever I formatted my Windows machine. To make thing even more complicated,
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

chezmmoi's documentatiaon is very nicelly written out, but I thought I'd go through
some issues I hada while setting up my own dotfiles repository.

ssh is not the default for cloning the repo, so you'll have to specify that argument.
the command I use nowadays to apply my chezmoi's configurations in a new machine is
`chezmoi init gusluchetti/dots --apply`

command references:
chezmoi add - add file from home directory to working copy
chezmoi status - what would change if chezmoi apply ran

chezmoi apply - updates LOCAL files with source directory
chezmoi update - PULL changes from repo and apply

day to day, if I want to add a new file to my chezmoi config, I chezmoi add it.
chezmoi cd + git push to save said changes to the remote repository.
if I made a mistake, I can chezmoi remove to remove said configs locallly and from the repo.

