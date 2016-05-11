---
layout: blog
title:  Arduino Tutorial - Dog Tail
published: false
---

In this first exciting installment, we’re gonna mess around with a servo motor to make a wagging dog tail.

![Arduino dog tail][dog]
*My room complies with coder environment standards by keeping the lights as dim as humanly possible.*

## &mdash; Boardboard Layout
A standard servo has three leads: **red → 5V, black/brown → ground (GND), and orange/yellow → control**. Use jumper wires to link these leads to the breadboard and then to the Uno board as follows:


![Arduino setup board][init-board]
*We’re going to use digital pin 9 for our control lead (red wire). Credit: Adafruit*

The little blue box is your potentiometer (or “pot” for short). A pot is used to send position data to the computer, which can then be interpreted and sent to the board. We’re going to use it to make the servo follow the pot’s position exactly for developing and testing purposes. To connect it, you just need to add it to the breadboard as shown above, along with a wire from its slider to A0 on the Uno board.

## &mdash; The IDE
Start up the Arduino software you installed. Once you do, a new sketch opens and you’ll see some skeleton code already written for you.

The _setup()_ and _loop()_ functions are your basic necessities for every project.

The _setup()_ function is run a single time once the sketch starts. You should use this to initialize and set variables, pin modes, etc.

The _loop()_ function, intuitively, loops continuously.

## &mdash; The Code
At the top of the file, before the _setup()_ and _loop()_ functions, let’s initialize the servo.

<pre class="line-numbers"><code class="language-java">#include &lt;Servo.h&gt;
  int potPin = 0;
  int servoPin = 9;
  Servo servo;
}</code></pre>

What’re we doing there? Well, first we’re stating that we need to use the Arduino Servo library. Next, since we have our pot hooked up to pin 0 and chose digital pin 9 for our control lead, we have to declare those as well. If we had multiple servos, we’d have a different pin for each. Lastly, we’re initializing a variable named servo of type Servo (original, eh? This naming scheme isn’t good once we have multiple servos but for now, let’s throw caution to the wind).

In the _setup()_ function, we want to attach the servo variable to servoPin. This would then look like:

<pre class="line-numbers"><code class="language-java">void setup() {
  servo.attach(servoPin);
}</code></pre>

Next, we’ll need to listen to our pot continuously so that we can relay the position data to the board in real time. So it would make sense to add that functionality to _loop()_:

<pre class="line-numbers"><code class="language-java">void loop() {
  int pos = analogRead(potPin);
  int angle = pos / 6;
  servo.write(angle);
}</code></pre>

The pot moves between 0 to 1023 and our motor has a 180 degrees of motion so we’ll translate that data by dividing by 6 before writing it to the servo.

## &mdash; Uploading to the Board
Once you’re ready to upload the code, use the USB cable to connect the Uno board to your computer.

Then configure the IDE by going to Tools > Board > Arduino Uno. Next we have to make sure the correct port is being used by selecting Tools > Port > /dev/cu.usbmodemXXXX or /dev/ttyUSBn, where Xs can be any digit. (For Windows, the port could be COM3 or COM4 instead.)

Tip: if you ever get confused, just remember the most recently connected port is the first option.

Then, click on the upload button, which is the one with a right-pointing arrow on the top-left corner. There shouldn’t be any errors in the code so far but just in case, it should altogether look like this:

<pre class="line-numbers"><code class="language-java">#include &lt;Servo.h&gt;
int potPin = 0;
int servoPin = 9;
Servo servo;
void setup() {
  servo.attach(servoPin);
}
void loop() {
  int pos = analogRead(potPin);
  int angle = pos / 6;
  servo.write(angle);
}</code></pre>

Once successfully uploaded, you should be able to turn the pot on the breadboard and notice that the servo is moving in the same fashion.

## &mdash; The Serial Monitor
Let’s disconnect the pot and find a better way to control the servo using an input interface on your computer instead.


[dog]: /assets/img/blog/dog-tail/dog.gif "My room complies with coder environment standards by keeping the lights as dim as humanly possible."
[init-board]: /assets/img/blog/dog-tail/init-board.jpeg "We’re going to use digital pin 9 for our control lead (red wire). Credit: Adafruit"