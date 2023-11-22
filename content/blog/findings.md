+++
title = "findings"
description = "or how did I manage to find that issue so quickly"
date = 2023-11-21
updated = 2023-11-21
draft = true
+++

I wasn't quite sure where to put this, so I figured i'd start writing it down as
a blog post. Maybe I'll have an idea later on how to tie this into an actual story.

In essence, I updated my firefox profile so that it has a bit more hardened. Nothing
fancy, just following tutorials and going through ffprofile.com.

I went back to my current web course at frontend masters, and the video wasn't playing.
For some reason (which I'll try and figure out later), very specifically, without the
real referrer header, that is, the information from where I came from(?) the video completely
breaks and I can't get authenticated. Weird. I figured the authentication came from
a token, and not from an 'arbitrary' value such as that referrer.
