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

## The code
Now, I am not gonna put the code here like copy and pasting.  You can, if you wish, view the source [here](#oops).  I'll put little snippets where needed, though.
<!-- note: for arduino code, use c++ syntax highlighting. -->

The code started messy, with the board going against the #1 rule of Arduino--*loop()* runs continously.  I broke that rule by doing this--Firsy, I initalize a boolean variable that says if loop() has called.  It starts at false.
```c++
// some other code ...
const int trigbtn = 5;
const int buzzer = 6;
const int motor = 8;
const int startDelayTime = 5;
bool icanhasstarted = false; // <-- this line
```
Then, the loop() function will check that variable when it starts, and ensures that it'll not run again.
```c++
// No-loop protection.
if (icanhasstarted == true) {
  return; // dont run twice!
}
```
Of course, it will set the value to true at the end...
```c++
icanhasstarted = true; // make sure that loop() does not call again
```
### How I start it (with my old and useless approach)
This seems simple, right?  Just plug it in and press a button, right?  Well, I decided to use Serial IO to tell the board when to start moving.  Here's the (simplified) code for that:
```c++
void serialHang() {
  bool hanging = true;
  while (hanging == true) {
    if (Serial.available() > 0) {
    String receivedMessage = "";
    while (Serial.available() > 0) {
      char incomingChar = Serial.read();
      if (incomingChar == '\n') {
        break; 
      }
      receivedMessage += incomingChar; 
    }
    for (int i = 1; i < 11; i++) {
      Serial.print(i);
      Serial.print("... ");
      delay(1000);
    }

}
```
This seemed like a good idea, but then I noticed that if I were to do this, I had to plug my computer into the Arduino, hit ENTER, and then proceed to grab the USB cable from the Arduino in the 5 seconds given.  Remember--our car is made of foam, so it is a pain in the rear end to plug it in.  Now, we are using a infared toggle system.  Here's what I mean by that.

* The car sets a value (default being `LOW`) for the `status` variable.
* Whenever you run the `contraryState()` function, it will set the motor to `HIGH` if it is currently `LOW`, and vice versa.

```c++
void contraryState() {
  if (state == LOW) {
    state = HIGH;
  }
  else {
    state = LOW;
  }
  digitalWrite(motor, state);
  digitalWrite(LED_BUILTIN, state); // <-- set the builtin LED to be the same value as the motor.  Very useful for debugging.
}
```

Now, the car will run `contraryState()` whenever it recieves an infared signal:

```c++
void loop() {
  if(receiver.decode(&results)) {        //  Decode the button code and put it in "results" variable
    Serial.println(results.value, HEX);  //  Print the code as a hexadecimal value
    contraryState();
    delay(250);
    receiver.resume();                   //  Continue listening for new signals
  }
}
```
You may notice how I have a `delay(250)` there.  This is to prevent the "dancing", when it turns on and off the motor VERY fast, whenever you either press a button on the remote, or even at random.  I believe the 'randomness' is because of other teachers using a TV remote, as you may notice that the code doesn't even check the infared value.  It accepts anything, as my remote sucks and every button seems to return hexadecimal `FFFFFF`, so it doesn't work well.  Also, it allows the person to hold the remote button to make it turn on and off fast, but not when you press the button once, as that was an issue.

