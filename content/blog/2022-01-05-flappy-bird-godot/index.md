---
title: "Creating a Flappy Bird clone with Godot"
date: 2022-01-05T08:04:58.571Z
draft: false
tags: ["Godot", "2D", "Programming", "GDScript"]
demo:
  src: "/2022-01-05-flappy-bird-clone/FlappyBirdClone.html"
  width: 1000
  height: 600
  description: "Use <kbd>Space</kbd> to go up and to restart when you crash"
---

**Let's see the code:** Here's the [source code for the Flappy Bird Clone in Godot on GitHub](https://github.com/Darth-Knoppix/godot-game-experiments/tree/master/FlappyBirdClone) if you wan't to try it out.

You can even play the game in browser if your browser supports it:

## Background

I often flip-flop between projects and end up adding to the ever growing GitHub graveyard of abandoned side projects but on occasion I document it. At the very least, this means there was a point to it and serves as a reminder for myself what the project was about when I inevitably dig it up years later and haven't a clue what I'm looking at. The best case scenario is someone else learns something from it. With that context in mind, I finally decided to get back into game development. I chose Godot after attempting Haxe and running into myriad issues with getting things working on my M1. I keep coming back to Godot because of its small size, ease of use and I'm really interested in version 4 (I keep an eye on the progress every now and then). I thought the best way to stick to it and learn is to copy, and what's easier to copy than Flappy Bird.

## Why copy Flappy Bird?

Every time I start project I often get bogged down in the details and never end up getting very far. This time, I'm aiming to learn Godot a bit better and get more comfortable with creating games in the engine and solving game related problems. The aim is to copy existing game mechanics so when I feel the time is right, I can create something of my own without getting to bogged down in minute details or perfection.

## What does it look like?

<video width="100%" height="340" controls autoPlay loop muted>
	<source src="gameplay.mp4" type="video/mp4">
</video>

## What I learned

I have a basic knowledge of Godot but it's been a while since I've properly used it so al ot of what I've learned has really been relearning, hopefully with a few more clones - I can retain this knowledge in long-term memory.

### How to use ParallaxBackground to achieve auto scrolling

The ParallaxBackground node is really useful in Godot. It acts as a framework to make parallax effects without having to do it all yourself. To get an auto scrolling background I leveraged this:

```
ParallaxBackground
 ⌙ ParallaxLayer
   ⌙ Sprite
```

The key thing to note is that I needed to set the mirroring x value to the length of the background to ensure it automatically repeats when it scrolls off the screen.

Now it's setup, I attached a script to the ParallaxBackground node to actually scroll the background:

```gdscript
extends ParallaxBackground

func _process(delta):
	if not is_flying:
		return
	scroll_offset.x -= 600 * delta
```

### Using Timer nodes

My gut reaction is to create timers for delayed actions in code but I decided to make use of timers more instead. This composition of adding a timer as a child and connecting it to the parent of via a signal seems to work quite well and this is how I set up a spawner for the obstacles. I simply added a timer that fires every second, whenever it gets to 0 it fires the `timeout` signal and on the parent (Spawner in my case), it calls the callback in the script.

For spawning the obstacles, I do the following:

```gdscript
extends Node2D

export(PackedScene) var template

func _on_Timer_timeout():
	var obj = template.instance()
	obj.position.x = 1100
	obj.position.y = rand_range(-100, 100)
	add_child(obj)
```

Essentially, ever second we add a child node to the screen just off to the right and set its y position to be slightly up or down to create a slight challenge.

### Restarting the game

I decided to use a custom signal when the player dies so I could easily affect other parts of the game. For instance, here's what happens when the player collides with an obstacle.

1. emit the `player_died` signal

- Ignore player input and stop gravity/movement
- Play an explosion particle effect and hide the plane sprite

2. The scrolling background listens for `player_died` and stops scrolling

3. The Spawner listens for `player_died` and stops the timer and stops the obstacles from moving.

### Composing Scenes

I appreciate the [composability of Godot](/2020-05-11-discovering-godot/). Nodes are a great way to make complex behaviour in an understandable and predictable way. A good example of this in the Flappy Bird clone was creating a scene which contained the obstacle, one at the top and another at the bottom.

The collision and scripting can be encapsulated in the scene and in the Spawner on the main level, I added a variable which shows up in the editor so we can choose which scene to spawn. This is really flexible because it allows for extension easily, if we wanted to swap out the obstacle scene, we can. We could even extend the spawner to accept an array of `PackedScene` and randomly choose a scene to spawn.

## Wrapping up

I've learned a lot from this simple clone and I hope to carve out some more time to create other clones and build my skills with Godot. It does't seem like much but, for me this is the first step to getting into game development properly and doing something a bit different from my day job.

- The assets in the game come from (Tappy Plane by Kenney)[https://kenney.nl/assets/tappy-plane]
- The game source is available in the [godot-game-experiments/FlappyBirdClone repo on GitHub](https://github.com/Darth-Knoppix/godot-game-experiments/tree/master/FlappyBirdClone)
