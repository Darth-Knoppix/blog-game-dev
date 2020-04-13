---
title: "UE4 Weekend Challenge: Camera Animations"
date: 2014-06-03T09:11:00.000+12:00
draft: false
aliases: ["/2014/06/ue4-weekend-challenge-camera-animations.html"]
tags: [Programming, Blueprint, animation, camera, UE4WeekendChallenge]
---

My platformer is being used as my presentation so I decided to include traditional slides with the game.

To do this I created meshes to hold a slide material and created cameras at the potions I needed to take up most of the screen.

When the player enters a trigger, the player controller will change view targets and blend between the player and the camera. I used this quick technique throughout the level to add hints to the player as well as show the slides.

![](camset1.JPG)

This level blueprint controls the trigger as well as a slide change using the 'E' key if the player is still on the trigger.

![](camSet2.JPG)
