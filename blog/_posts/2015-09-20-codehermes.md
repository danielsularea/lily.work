---
layout: blogpost
title: A 36-Hour Journey to Free Bose Speakers

imgfolder: codehermes
cover_img: init.gif
detail_img: [ img1.png, img2.png, img3.png, img4.png ]
links:
  DevPost: "http://devpost.com/software/codehermes-nq0uwd"
  Prototype: "http://lily.work/codehermes/"
---

I attended my first hackathon at the 2015 [Big Red Hacks][brh]{:target="_blank"}, built a new way for educators to discuss code, and got free Bose speakers.

## Background
As a senior in Computer Science, I have been a frequent attendee to lectures full of code projected on the wall. This becomes less frequent in higher level courses but in introductory ones that are mainly dedicated to teaching syntax and algorithms, students who are new to programming may feel overwhelmed by the unfamiliar language and find it difficult to raise issues with specific codeblocks.

In an effort to ease this pain and improve engagement with the professor, CodeHermes syncs with course code files stored in a Github repository. After detecting the language, CodeHermes represents each file so that it is more novice friendly. Additionally, students are empowered to submit real-time questions associated with individual lines of code.

## The Approach
We decided to implement CodeHermes in Java with Spring MVC and JSP. While my partners set up the AWS, I began to define the feature functionalities and sketched out the wireframes.

{% include figure.html
  url="/assets/img/codehermes/sketch1.jpg"
  alt="Codehermes landing sketch"
  caption="Instructor login via Github. Students receive a link." %}

{% include figure.html
  url="/assets/img/codehermes/sketch2.jpg"
  alt="Codehermes instructor portal"
  caption="Instructor portal, with real-time questions associated with each line number" %}

From there, I did some [rapid prototyping][prototype]{:target="_blank"} in Jekyll, where I explored the interactive elements. After some tinkering, I moved on to implementing in JSP.

## Instructor Portal
The user is directed to the instructor portal immediately after logging in through Github. Inline and block comments are extracted from the repository files and displayed in a more digestable way. At the end of each line is also a counter, which increments as students submit questions and aids instructors in understanding where students are especially struggling. These questions are also updated in real-time, which smooth scrolls to and highlights the corresponding line upon hovering each one.

{% include figure.html
  url="/assets/img/codehermes/init.gif"
  alt="" %}

## Student Portal
A link is given at the top of the instructor portal, which should be distributed at the beginning of lecture. Students can then access the student portal to follow the code and submit real-time questions.

{% include figure.html
  url="/assets/img/codehermes/img3.png"
  alt="" %}

{% include figure.html
  url="/assets/img/codehermes/img4.png"
  alt="" %}

## Outcome
After 36 brutal hours, our team landed Goldman Sach's Best User Experience award (prize: free Bose speakers for all!). I'm very thankful for my partners, without whom I wouldn't have learned as much or had as much fun.

The final product unfortunately is no longer maintained or hosted. However, the prototype I made in Jekyll for the instructor portal still lives [here.][prototype]{:target="_blank"}

[brh]: http://www.bigredhacks.com/
[prototype]: http://lily.work/codehermes/
