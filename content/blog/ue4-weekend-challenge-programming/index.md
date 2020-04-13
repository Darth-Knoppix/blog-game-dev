---
title: "UE4 Weekend Challenge: Programming a collectable with Blueprints"
date: 2014-06-03T08:44:00.000+12:00
draft: false
aliases: ["/2014/06/ue4-weekend-challenge-programming.html"]
tags: [Programming, scripting, UE4WeekendChallenge]
---

The blueprint editor which replaces Kismet is much more powerful than its predecessor, it allows for the entire game to be made without the use of C++ which is beneficial for me as I do not understand the engine enough to be able to dive into C++ straight away.

In order to create a collectable I created a mesh and applied a material which rotates the mesh, a blueprint was then created to hold this collectable.

![](bitPic.JPG)

The scripting itself was not difficult however understanding how the new blueprint system works made it more challenging as objects cannot directly communicate with each other effectively without the use of a blueprint interface.

The collectable/pickup needed to communicate with the player character to store the total score so an interface needed to facilitate the global function to allow this.

The collectable has the following blueprint.

![](bitBlueprint.JPG)

The increment score function is implemented by the player character.

![](playerBlue1.JPG)
