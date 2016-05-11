---
layout: blog
title:  Arduino Tutorial - Dog Tail
---

In this first exciting installment, we’re gonna mess around with a servo motor to make a wagging dog tail.

![Arduino dog tail][dog]
*My room complies with coder environment standards by keeping the lights as dim as humanly possible.*

## &mdash; Boardboard Layout

A standard servo has three leads: **red → 5V, black/brown → ground (GND), and orange/yellow → control**. Use jumper wires to link these leads to the breadboard and then to the Uno board as follows:

We’re going to use digital pin 9 for our control lead (red wire). Credit: Adafruit
The little blue box is your potentiometer (or “pot” for short). A pot is used to send position data to the computer, which can then be interpreted and sent to the board. We’re going to use it to make the servo follow the pot’s position exactly for developing and testing purposes. To connect it, you just need to add it to the breadboard as shown above, along with a wire from its slider to A0 on the Uno board.

[dog]: /assets/img/blog/dog.gif "My room complies with coder environment standards by keeping the lights as dim as humanly possible."