---
layout: post
title: "Running an Arduino directly off of solar panels... (PART 1: Planning)"
---
<!-- wp:heading -->
<h2 class="wp-block-heading">A little background...</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At school, we are currently doing a unit in which we make a vehicle that goes exactly 5 meters but is not powered by any chemical source.  This may sound easy, but "chemical source" also means no gas and NO BATTERIES.  I could do the "easy" method and use a spring and rubber band or something, but if I learned anything, it's that when I have a problem, the answer is an Arduino board.</p><!--more-->
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The idea</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I am thinking of using an Arduino Nano-like board, as it uses .4 to .8 volts, and I expect that power will be of concern because I only have 5 volts to work with.  I may add another 5 volts via a second solar panel, but I don't know.  My idea is to have a 3-wheel vehicle.  One wheel will have a motor, which is attached to a relay, which is attached to an Arduino that turns it on in short one meter shots so it will be able to go very close to 5 meters without any fancy lego contraptions to stop it from moving.  I feel like I can fix any problem in software, as long as I have a good vehicle.  My team and I decided what we'll use foam to keep the machine light, as we have to carry two "passengers" (a roll of 50 pennies), which weigh about 250 grams.  This is why weight is a problem.  The motor NEEDS to be able to move with the load, and do it FAST.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Code</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Here's the current code I have</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
```c++
/*
  Low power car.  Code by Damien Boisvert.
  
  This program is licensed under MIT.

Copyright (c) 2023 Damien Boisvert (AlphaGameDeveloper)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Options variables.
// set number of meters to go.
const int meters = 1;
// set amount of time per meter.  Get this via
// tests and some cool shit
const long meterTime = 5;

// unneeded lmao
const float betweenMeterDelay = .5;
// -----------------------------
// |     NERD SHIT ALERT!!!    |
// -----------------------------

// initalize pin numbers.
const int motor = 5; // motor relay mounted at pin 5.
const int button = 6;// button mounted at pin 6
bool iCanHasInitalized = false;

void setup() {
  Serial.begin(9600);
  pinMode(motor, OUTPUT);
  pinMode(button, INPUT);
  Serial.print("Waiting for button to be pressed");
}

void loop() {
    // wait for the button to be pressed
    // in order to start the machine
    int m_isPressed = digitalRead(button);
    if (m_isPressed == LOW) {
      // nope, button is not pressed.  Do nothing.
      Serial.print(".");
      return;
    }
    // if it reaches here, the button HAS to have been
    // pressed because of the variable m_isPressed, right?
    Serial.println("\nYES OH MY GOD THE BUTTON WAS FINALLY PRESSED!!!!!");
    Serial.println("Startin' da plan, BOSS!");
    
    for (int i = 0; i &lt; meters; i++) {
      Serial.print("debug: Starting new meter...");
      digitalWrite(motor, HIGH);
      delay(meterTime);
      digitalWrite(motor, LOW);
      Serial.println("done.");
      delay(betweenMeterDelay);
      
    }
}
```
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This code waits for a button, and moves it in one meter bursts, with a meter time from testing.  I know that I'll change it, but this is what I got.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cheers,</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Damien Boisvert</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
