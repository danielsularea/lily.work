---
layout: workpost
title: CodeHermes
subtitle: Empowers educators to discuss code
year: 2015

tags: [ JS, Jekyll, Hackathon ]

imgfolder: codehermes
cover_img: init.gif
detail_img: [ img1.png, img2.png, img3.png, img4.png ]
links:
  DevPost: "http://devpost.com/software/codehermes-nq0uwd"
  Prototype: "http://lillian-chen.com/codehermes/"
---

I attended my first hackathon at the 2015 [Big Red Hacks][brh]{:target="_blank"} and was given 36 hours to develop something from scratch. Along with two incredible backend developers, we created CodeHermes, a new way for educators to discuss code.

## The idea
As a senior in Computer Science, I have had many courses in which the professor needs to project large chunks of code on the screen to students during lecture. This becomes less frequent in higher level courses but in introductory ones that are mainly dedicated to teaching syntax and algorithms, students who are new to programming may feel overwhelmed by the unfamiliar format.

In order to facilitate student understanding and make it easier for professors to grasp exactly where students are struggling, CodeHermes syncs with the professor's Github repository. It then detects the language of each file, parses out block and inline comments, and allows students to submit live questions according to individual lines of code.

## The approach
We decided to implement CodeHermes in Java with Spring MVC and JSP. While my partners set up Amazon AWS, I began to define the feature functionalities and sketched out the wireframes.

{% include figure.html 
  url="/assets/img/codehermes/sketch1.jpg"
  alt="Codehermes landing sketch"
  caption="Instructor login via Github. Students receive a link." %}

{% include figure.html 
  url="/assets/img/codehermes/sketch2.jpg"
  alt="Codehermes instructor portal"
  caption="Instructor portal, with realtime questions associated with each line number" %}

From there, I did some [rapid prototyping][prototype]{:target="_blank"} in Jekyll, where I explored the interactive elements. After some tinkering, I moved on to implementing in JSP.

## Instructor portal
The user is directed to the instructor portal immediately after logging in through Github. Inline and block comments are extracted from the repository files and displayed in a more digestable way. At the end of each line is also a counter, which increments as students submit questions. This aids instructors in understanding where students are especially having trouble (for example, when a section of code has an unusually high amount of questions). These questions are also live updated to the instructor, which smooth scrolls to and highlights the corresponding line upon hovering each one.

## Student portal
A link is given at the top of the instructor portal, which can be distributed during lecture. Students can then access the student portal to follow the code and submit real time questions.

## Outcome
At the end of a sleep-deprived journey, our team landed Goldman Sach's Best User Experience award. I'm very thankful for my partners, without whom I wouldn't have learned as much or had as much fun.

The final product unfortunately is neither maintained or hosted anymore. However, the prototype I made in Jekyll for the instructor portal is still live [here.][prototype]{:target="_blank"}

[brh]: http://www.bigredhacks.com/
[prototype]: http://lillian-chen.com/codehermes/
