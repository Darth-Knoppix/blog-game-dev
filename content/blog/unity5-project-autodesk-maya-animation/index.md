---
title: "Unity5 Project: Autodesk Maya Animation to Unity"
date: 2015-10-25T21:42:00.000+13:00
draft: false
aliases: ["/2015/10/unity5-project-autodesk-maya-animation.html"]
tags:
  [
    Unity5,
    Unity,
    Unity3D,
    animation,
    3D Modelling,
    Game Development,
    Autodesk Maya,
  ]
---

I am looking utilizing Unity again for another project, I thought I would have a look at some of the new features in the latest edition; Unity5 as of this post. I decided to get something going quickly and re-familiarize myself the tools I'll be using throughout the project.

This involved using Autodesk Maya 2016 for modelling a basic character, I initially attempted to create something with 3DS Max which I haven't used since my UDK project a few years ago. It proved too difficult to use due to the significant changes as well as the retraining I did for Maya in university.

![](charModelling.jpg)

I stared off with a cube and slowly built out using multiple extrudes.

![](charModelled.jpg)

This is the basic low-poly humanoid character ready for rigging.

![](charAnim1.jpg)

After some pretty rough rigging I have started to animate the character's walk cycle. The weight painting isn't very good but it is sufficient to get used to the workflow from external 3D modelling programs to Unity.

![](charAnim2.jpg)

The walk cycle has been completed and is ready to be exported as an .FBX and imported into Unity. There were a few issues getting used to how Unity's animation systems and workflow works but I got it working quickly enough.

![](charCode.jpg)

I quickly put together some code to get the character moving through the scene.

![](charInGame.jpg)

The final character moves through the scene, I managed to create a lot of unnecessary junk in the process of testing however.

This task has a been good to go through in order to retrain myself in using Unity again and try to anticipate problems which could appear in the larger project.
