---
title: "UE4 Weekend Challenge: A Smart Platform"
date: 2014-06-03T08:59:00.001+12:00
draft: false
aliases: ["/2014/06/ue4-weekend-challenge-smart-platform.html"]
tags: [Programming, Blueprint, UE4WeekendChallenge]
---

A key feature for my platformer was a platform which the player can jump through while still being able to land on.  To facilitate this I created a custom blueprint from my original platform mesh, the platform checks if the player is above it and if so then allow collision otherwise don't.

![](platform.JPG)
