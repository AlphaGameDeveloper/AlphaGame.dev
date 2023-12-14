---
layout: post
title: Alternate Energy Car
permalink: /school/9/alternate-energy-car
---

## Introduction
Ah, another month, another project.  If you have been following my blog, you may have known a bit about this project, 
as I was writing a bit about my adventures in making this.  The goal is to create a car that uses an alternate source
of power. *(i.e., not being a chemically powered source, like gas or a battery.)*  This seemed simple.  I went directly
to using solar power.  Most of the other people in my class used rubber bands or something like that.  I found that this
is not accurate enough.  What do I mean by that?  The goal of the car is to **only go 5 meters** *(or as close as possible)*.
For me, mechanical, inefficient sources of energy were not good enough.  I needed a car that could **THINK**!  So, I decided
to use solar power and an Arduino microcontroller.

## Concept
The goal of this car was simple-- I thought, *"Why can't I just program in the time it takes to go 5 meters and then stop the motor?"*
I found two problems, right off the bat.  For one, I couldn't get the distance to be consistent.  Our car was made from foam and hot
glue, and our front wheel made the car turn.  We thought that we could have the car aimed to the right when we started it, but we soon
noticed that the car would go half a meter too short, and then half a meter too long.  So, this was a definite no-go.  The problem was 
that we tried to make it work for so long, we already were 3 weeks in.  We needed a good idea, and FAST.  

### The solution
After bashing my head against the wall for a while thinking of a good idea, I thought of a good idea.  At home, we have [Roomba](https://irobot.com)
robot vacuums.  The robot comes with these handy *Virtual Wall Barriers* that emit an infrared signal that tells the robot to 
turn around.  After noticing that I already had an [infared](https://en.wikipedia.org/wiki/Infrared) receiver for another project I
did.  I thought, *"Maybe I can use the infrared receiver to get the signal from the virtual wall barrier, place it at the 5-meter mark,
and program the robot to stop when it gets the signal?"*.  This seemed good in theory, except for some reason, I could not get the
IR receiver to consistantly get the signal from the virtual wall barrier.  I still can't figure out why.  Luckily, I had a IR remote,
and I thought that infared would go in a straight line and not pan out anywhere else.  I don't know why I thought this, but it didn't work.
The remote panned out, and it made the car stop early.

# Will be continued.
