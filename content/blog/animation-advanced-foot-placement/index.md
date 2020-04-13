---
title: "Animation - Advanced Foot Placement"
date: 2012-09-02T17:08:00.000+12:00
draft: false
aliases: ["/2012/09/animation-advanced-foot-placement.html"]
tags:
  [
    Advanced,
    Foot Placement,
    IK,
    Skeletal Mesh,
    unrealscript,
    animation,
    Inverse,
    Skeletal,
    Tree,
    AnimTree,
  ]
---

![](Skel1.jpg)

I have just implemented better foot placement using IK with Unrealscript. It uses code from UDN: [http://udn.epicgames.com/Three/UsingSkeletalControllers.html](http://udn.epicgames.com/Three/UsingSkeletalControllers.html)  
This provides better foot placement than default so the player mesh actually reacts to the varying surfaces rather than just floating across. Although it is not perfect I believe it is an improvement.

![](animtree.jpg)

After tweaking the values I have come up with something that looks normal I have not yet however managed to get it working well with player movement. For now it works well when the player is standing still - movement resulted in too much uncertainty and would have ultimately lead to more problems.

![](skelcode.jpg)

Here is an example of it in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YlFC-WMqBVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
