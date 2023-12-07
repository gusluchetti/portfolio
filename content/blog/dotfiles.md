+++
title = "configuration galore (dotfiles)"
description = "or why organizing them is still procrastination"
date = 2023-12-07
updated = 2023-12-07
draft = false
+++

I enjoy consistency. When we strive to do our best, the less you have to worry about, the easier it is to focus on the actually challenging part.

<!-- more -->

I've come to love the 'keyboard-centric' way of computing, and I do believe that your computer can become an extension of yourself, in the sense that all relevant actions are almost second nature. In that vein, I'd like to share why you should care about your own dotfiles, and how I manage mine.

Let's backtrack a bit. What are dotfiles anyway?
Dot files are configuration files, and they, unsurprisingly, usually start with a dot (files starting with a dot are automatically hidden in most UNIX systems). Think `.gitconfig`, the `.config` directory on Linux, or even VSCode's `settings.json`. These are all files that define how a user will experience a certain program or command line utility.

Unfortunately, not all programs have sensible defaults, and when they do, you might not like them. Everytime I boot a new game, I go straight to 'settings' to configure things "my way" (disabling motion blur first and foremost), and so if I use a program for long enough, it usually ends up getting its config file(s) saved on source control.

**_"Why take the time though?"_** 

To get more confident! Getting stuck in the 'productivity' hole is a real issue, but at the same time, it shouldn't take much for you to figure out if any of the things that you do on a daily basis can be made faster and/or less error-prone.
You might come to realize that everyday, when you turn on your PC, you manually
close all those programs that auto start on boot. Wouldn't it be better to just
disable them? That's how you can get started, by identifying (and getting rid of) the smallest bumps on your workflow.

Personally, I'd rather have a config file written down, even if I'll never look at it again, so I can avoid wasting time in case my computer goes bad. There are definitely many levels of redundancy you can choose from. Start simply, but with intent, and build up on it.

I won't be going super in depth on the specific since they should be all public! As
development always is, it's a work in progress, but my [dotfiles](https://github.com/gusluchetti/dots) repository should contain explanations on why things are the way they are. Most of the existing content is relevant to Fedora, but I've been slowly adding things for Windows while making sure it's as cross-platform as possible.

I've been using [chezmoi](https://www.chezmoi.io/) for the past year or so. 
It touts itself as a 'personal home directory' manager, and comes with a LOT of bells and whistles. It extends on 'standard' source control, and enables templating for more specific home directory configuration for different operating systems, which is very useful to me since I go back and forth a bit between Windows/Mac/Linux.

That's basically it! I will definitely expand on specific configurations that are
essential to my day to day PC use, and possibly on a more well-defined system, but for now, I'd rather get a good foundation going.
