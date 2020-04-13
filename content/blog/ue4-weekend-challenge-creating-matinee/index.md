---
title: "UE4 Weekend Challenge: Creating a Matinee Controlled Security Bot"
date: 2014-06-03T09:05:00.002+12:00
draft: false
aliases: ["/2014/06/ue4-weekend-challenge-creating-matinee.html"]
tags: [matinee, Programming, Blueprint, UE4WeekendChallenge]
---

To have a simple obstacle for the player, I modelled this security bot and created a blueprint to allow it to sense the player and shoot at them.

![](bot1.JPG)

The mesh itself is accompanied by a box primitive used for detecting overlap events. If the player is with the box then the bot will fire a projectile.

![](bot2.JPG)

The movement of the bot is dictated by a simple matinee animation, ideally it would be defined through the blueprint itself however I did not have sufficient time to come up with a basic AI.

![](bot3.JPG)
