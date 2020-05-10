---
title: "Discovering Godot"
date: 2020-05-10T17:34:00.000+01:00
draft: false
tags : ["Godot", "2D", "Programming", "GDScript"]
---

I discovered Godot a few months ago and I really like it so far. It's a game engine that's easy to use and feature packed.

## What is Godot?

Godot is a free and open-source game engine. I've tried some other open source game engines int he past but Godot is the most polished and fully-fledged engine I've used. 

## Why choose Godot?

Godot has everything you need to get going and is easy to start. That's why I decided to play around with it instead of Unity or Unreal. I have nothing against Unity and Unreal, they are great engines but they also come with a lot of capabilities that I never used. Unreal in particular has a lot of features that are aimed at first-person shooters because that's what it was initially built for. When you try to do anything else, you're going against the grain. Godot, however, is sharp. It's easy to use, it doesn't put up any barriers.

## How is it different to Unity?

Unity was my go-to engine becuase it's flexible and easy to use. I like Unreal but it's not suited for my needs most of the time. It's powerful but takes a lot of work to prototype. Godot and Unity and are similiar to use, the first difference that makes Godot stand out is size. Godot is less than 30MB to download. It has a small memory footprint too. Compared with the others, it's lightweight and sharp.

### Everything is a Node



## Making a 2D prototype in Godot 


```gdscript
extends StaticBody2D

func _process(delta):
	rotation += delta * 0.05
```


```gdscript
extends RigidBody2D

var thrust = Vector2(0, -1000)
var torque = 20000

func _integrate_forces(state):
	if Input.is_action_pressed("up"):
		applied_force = thrust.rotated(rotation)
	else:
		applied_force = Vector2()
	var rotation_dir = 0
	if Input.is_action_pressed("right"):
		rotation_dir += 4
	if Input.is_action_pressed("left"):
		rotation_dir -= 4

	applied_torque = rotation_dir * torque
```


```gdscript
extends Particles2D

func _process(delta):
	if Input.is_action_pressed("up"):
		emitting = true
	else:
		emitting = false
```