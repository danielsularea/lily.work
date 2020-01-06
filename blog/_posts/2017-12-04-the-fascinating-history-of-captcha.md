---
layout: blogpost
title: The Fascinating History of CAPTCHA
---

The history of CAPTCHA demonstrates a complex problem space that produced an incredibly elegant solution.

## A Brief History

In 1997, a small but quickly growing search engine company called AltaVista needed a way to prevent bots from submitting useless URLs to their platform. Exploiting a computer's limited image analytic skills (at least back then), they asked AltaVista users to validate text in a picture in order to prove they were human. However, aware of OCR (optical character recognition) attacks, the team of 5 experimented with various typefaces, backgrounds, type styles and sizes that ultimately became the squiggly texts that are so irrefutably familiar today.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/original-captcha.png"
  caption="The original CAPTCHA was a bunch of random letters and numbers"
  alt="The original CAPTCHA" %}

It took a few more years for a second team at Carnegie Mellon in 2003 to perfect the algorithm that generated the distorted texts and coin the system the Completely Automated Public Turing Test to tell Computers and Humans Apart (CAPTCHA).

Then in 2009, another search engine, Google, acquired Carnegie Mellon's algorithm and deployed reCAPTCHA. This system expanded upon the original by asking users to identify two sets of real words rather than random letters and numbers.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/scannedtext.png"
  caption="The new reCAPTCHA was a set of two real words"
  alt="Google's revamped reCAPTCHA" %}

Why specifically two words? Because unbeknownst to the user, both sets of words, although spliced into a single image, came from different collections of scanned texts. One was from a library of texts that Google already knew the corresponding word to and the other from a set where Google did not. Essentially, if the user's input matched the first word, the user was already validated but then strung on a little bit longer to contribute the answer for the second and enhance Google's known library.

After two years, Google harnessed all the crowdsourced answers to completely digitize the New York Times archives and Google Books library.

Then, as artificial intelligence became too intelligent (solving even the most distorted text at 99.8% accuracy without human intervention), Google shifted opportunity.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/crack-captcha.jpg"
  caption="Artifical intelligence was catching up to the squiggly words"
  alt="Artifical intelligence was catching up to the squiggly words" %}

Google wanted to pinpoint addresses on Google Maps to improve the accuracy of route directions. So enter Street View and soon photos of house numbers replaced the Google Books words.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/streetview.png"
  alt="CAPTCHA using numbers on Street View" %}

And once this venture was finished, they moved to what we have today, where users are now tasked to help identify objects in images, which is another step towards better computer vision.

{% include figure.html 
  nozoom="true"
  url="/assets/img/captcha/objectid.png"
  alt="CAPTCHA using object identification" %}

## Why This is Awesome
Google was faced with a three-sided tug-a-war: the needs of websites to protect themselves against malicious bots, the needs of human users to pass through these tests frictionlessly, and the needs of Google to generate profit.

And although the solution seems so obvious now that we have it, I'm incredibly impressed by how elegantly ReCAPTCHA solves every single facet:
1. Towards the first, Google matched increasingly smarter computer vision with harder challenges, moving from text to object identification.
2. Yet at the same time, the modern tech giant that ultimately toppled AltaVista also made reCAPTCHA significantly easier for humans. In addition to asking users to tap pictures rather than decipher text, Google now also analyzes the user's history with CAPTCHAs and weighs how human their behavior has been so that they might just bypass the puzzle entirely (called the No CAPTCHA experience).
3. Lastly, of course, Google made major strides in the face of artificial intelligence as a whole, which in turn, I'm sure, made massive profits in their numerous business streams.

## Post-Script
And as a final note: one of the founding members on the original Carnegie Mellon team gave a [TEDx talk][TEDxCMU]{:target="_blank"} shortly after the first major success of digitizing the Google Books library and said that he created reCAPTCHA because he felt bad about wasting 10 seconds of people's day without it contributing to something.

[TEDxCMU]: https://www.ted.com/talks/luis_von_ahn_massive_scale_online_collaboration/transcript
[google]: https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html
[circle]: https://en.wikipedia.org/wiki/The_Circle_(2017_film)
[microverse]: http://rickandmorty.wikia.com/wiki/Microverse