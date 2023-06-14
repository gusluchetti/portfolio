+++
title = "chezmoi"
date = 2023-05-19
updated = 2023-06-05
draft = true
+++

So, I like organizing things, and I also like making things easily repeatable. 
chezmoi is the answer to my problems!

my ultimate goal is to be able to setup a new linux boot (fedora preferrably) in less than 20 min.
to do so, I store most of my config files in chezmoi, some details are still missing but 
it's already pretty organized.

what I haven't figured out is how I'm supposed to work with it on a daily manner. 
this blog post is more of a learning exercise than me explaining how it works.

command references:
chezmoi add - add file from home directory to working copy
chezmoi status - what would change if chezmoi apply ran

chezmoi apply - updates LOCAL files with source directory
chezmoi update - PULL changes from repo and apply

day to day, if I want to add a new file to my chezmoi config, I chezmoi add it.
chezmoi cd + git push to save said changes to the remote repository.
if I made a mistake, I can chezmoi remove to remove said configs locallly and from the repo.
