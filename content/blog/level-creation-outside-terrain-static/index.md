---
title: "Level Creation: Outside - Terrain, Static Meshes and Lighting"
date: 2012-07-08T11:29:00.000+12:00
draft: false
aliases: ["/2012/07/level-creation-outside-terrain-static.html"]
tags:
  [
    levels,
    Materials,
    lightmass,
    udk,
    Outside,
    design,
    level,
    Terrain,
    development,
    3d,
    lighting,
  ]
---

![](1.jpg)

The basic terrain has been created for the level, it will be the area in which the player will escape the factory to. I had a few problems with setting this up in UDK due to it still being in beta, it crashed multiple times while editing the terrain.

![](2.jpg)

I have added static meshes as well as a Dominant Directional light to light the entire map. The structures are power pylons which supply the factory with electricity.

![](3.jpg)

The only things left to do now are basic collision creation to prevent the player from going outside of the map  and perhaps better integration with the other levels, I plan this to be much later in the game and therefore still need levels in between. I will need to begin play testing on different devices to see whether or not level streaming can be used effectively with terrain.
