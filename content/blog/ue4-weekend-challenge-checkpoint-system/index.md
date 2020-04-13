---
title: "UE4 Weekend Challenge: Checkpoint System with Blueprints"
date: 2014-06-03T08:54:00.000+12:00
draft: false
aliases: ["/2014/06/ue4-weekend-challenge-checkpoint-system.html"]
tags: [Programming, Blueprint, checkpoint, scripting, UE4WeekendChallenge]
---

I created a checkpoint system using blueprints in UE4.

These simple functions in the player character class allowed a checkpoint blueprint to be placed throughout the level which would act as a point for re spawning the player.

![](check2.JPG)

![](chekIn.JPG)

This code destroys the old pawn and creates a new pawn at the last checkpoint location before possessing it.

![](respawn2.JPG)

A health system was not setup by default so I set one up to allow the player to be damaged and killed.

![](takeDamage.JPG)

Another simple event is linked to when the pawn is destroyed to ensure they are respawned.

![](respawn.JPG)
