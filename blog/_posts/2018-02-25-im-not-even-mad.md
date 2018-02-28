---
layout: blogpost
title: I'm Not Even Mad
---

There is a fantastic story I once heard that still impresses me to this day.

In 1997, a small but quickly growing search engine company called AltaVista needed a way to prevent bots from submitting useless URLs to their platform. Exploiting a computer's limited image analytic skills (at least back then), they asked AltaVista users to validate text in a picture in order to prove they were human. However, aware of OCR (optical character recognition) attacks, the team of 5 experimented with various typefaces, backgrounds, type styles and sizes that ultimately became the squiggly texts that are so irrefutably familiar today. It took a few more years for a second team at Carnegie Mellon in 2003 to perfect the algorithm generating the distorted texts and coin the system the Completely Automated Public Turing Test to tell Computers and Humans Apart (CAPTCHA).

Then in 2009, ironically another even more popular search engine, Google, acquired Carnegie Mellon's algorithm and deployed reCAPTCHA. This system expanded upon the original by asking users to identify two sets of texts: the first to validate the human user and the second to educate Google what the image says. Unbeknownst to the user, both sets, although spliced into a single image, came from a collection of scanned texts where Google only knew the meaning of the first. Essentially, if the user's input matches the first word, the user is already validated but she is also strung on a little bit longer to contribute the answer for the second. Then just two years later in 2011, this massive collaboration of unaware reCAPTCHA users completely digitized the New York Times archives and Google Books library. By 2015, the digitized literature was also translated.

{% include figure.html 
  url="/assets/img/captcha/scannedtext.png"
  alt="CAPTCHA using scanned text" %}

As artificial intelligence became too intelligent (solving even the most distorted text at 99.8% accuracy without human intervention), Google shifted opportunity. More specifically, they wanted to pinpoint addresses on Google Maps so that directions were painstakingly accurate. So enter Street View and photos of house numbers replaced Google Books words.

{% include figure.html 
  url="/assets/img/captcha/streetview.png"
  alt="CAPTCHA using numbers on Street View" %}

One more iteration later and we're at the latest version of reCAPTCHA, where users are now tasked to help identify objects in images, whose commercial application is vast but not yet known.

{% include figure.html 
  url="/assets/img/captcha/objectid.png"
  alt="CAPTCHA using object identification" %}

Now, that is the end of the story and at first, I was a little bitter. And then I was overwhelmingly impressed. Google had a three-sided tug-a-war: the needs of websites to protect themselves against malicious bots, the needs of human users to pass through these tests frictionlessly, and the needs of Google to generate profit. Towards the first, Google matched increasingly smarter computer vision with harder challenges, moving from text to object identification. Yet at the same time, the modern tech giant that ultimately toppled AltaVista also made reCAPTCHA significantly easier for humans. Rather than issuing distorted texts that were sometimes illegible to both machine and humans, Google analyzes the user's entire history with CAPTCHAs and weighs how human their behavior is so that they might bypass the puzzle entirely (called the No CAPTCHA experience). Then, in the few cases of uncertainty, the challenges are now more intuitive to humans and more mobile friendly. According to the [team][google]{:target="_blank"}, "It's much easier to tap photos of cats or turkeys than to tediously type a line of distorted text on your phone." And lastly, of course, Google made major strides in the face of artificial intelligence as a whole, which in turn, I'm sure, made massive profits in numerous business streams.

As a product designer in a complex user base of the healthcare industry and the application of artificial intelligence, how can I not be impressed? These are not simple problems.

Yes, this story has all the red flags that [The Circle][circle]{:target="_blank"} is imminent and we are becoming more relevant to the citizens of the [Microverse][microverse]{:target="_blank"} but from the pure perspective of solving a problem, Google completely blew it out of the water. ReCAPTCHA is an incredibly elegant solution that doesn't compromise on a single user need. If anything, every iteration improved each facet considerably, keeping customers increasingly happier while reaping their labor and skirting the very, very expensive bill of training their own AIs. I'm not even mad.

## Post-Script
And as a final note: one of the founding members on the original Carnegie Mellon team gave a [TEDx talk][TEDxCMU]{:target="_blank"} shortly after the first major success of digitizing the Google Books library and said that he created reCAPTCHA because he felt bad about wasting 10 seconds of people's day without it contributing to something. And so it goes.

[TEDxCMU]: https://www.ted.com/talks/luis_von_ahn_massive_scale_online_collaboration/transcript
[google]: https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html
[circle]: https://en.wikipedia.org/wiki/The_Circle_(2017_film)
[microverse]: http://rickandmorty.wikia.com/wiki/Microverse