---
layout: blogpost
title: Knocking out a Chrome Extension in 2 Days

imgfolder: wikireader
cover_img: init.gif
detail_img: [ img1.png, img2.png, img3.png, img4.png, img5.png, img6.png ]
links:
  Download: ""
---

This was my first attempt at a Chrome extension, which was overall, an excellent experience. Google has nicely documented its javascript APIs, which were essentially all I needed for this simple extension that I managed to hack in just 2 days. Of course, it's not perfect but hey, it was great exercise.

## Overview
Wikipedia.org has been one of the most timeless services on the web, offering vast amount of information to its users for free. However, at the same time, it has been one of the most unchanging platforms in terms of interface. For users who solely seek to gather information quickly, the old layout can be distracting. So in an effort to not only beautify presentation, I've also hidden the lesser used features such as switching languages (as this is a English only extension for now), editing, viewing edit history, and a few minor others.

<!-- {% include figure.html 
  url="/assets/img/wikireader/old.png"
  alt="Wikipedia without WikiReader"
  caption="Without WikiReader" %}

{% include figure.html 
  url="/assets/img/wikireader/new.png"
  alt="Wikipedia With WikiReader"
  caption="With WikiReader" %} -->

And to truly be able to accomplish what I want to do in a 48-hour timeframe, WikiReader works almost solely by overriding its existing CSS styles. Of course, this can cause enormous backlash if Wikipedia chooses to change its element ids and classes but I'm banking on its earlier mentioned tendency to be rather constant.

## Reading experience
I chose a more readable font Crimson Text alongside Wikipedia's original Open Sans. Not everything is shown below but additional changes included wider paddings in tables to allow some breathing room, more consistent thumbs, and cleaner lists.

{% include figure.html
  url="/assets/img/wikireader/img1.png" 
  alt="" %}

{% include figure.html
  url="/assets/img/wikireader/img2.png" 
  alt="" %}

{% include figure.html
  url="/assets/img/wikireader/img3.png" 
  alt="" %}

{% include figure.html
  url="/assets/img/wikireader/img4.png" 
  alt="" %}

{% include figure.html
  url="/assets/img/wikireader/img5.png" 
  alt="" %}

{% include figure.html
  url="/assets/img/wikireader/img6.png" 
  alt="" %}

## Postmortem
I've shipped the extension to the Chrome store [here][download]{:target="_blank"}, also purely for exercise, and have gotten a few feedback emails already (both good and bad). Ultimately, I'm probably my best audience because I continue to use WikiReader to this day. If I had a bit more time, I might revisit this project and spruce up the following:
- clean <a href="http://en.wikipedia.org/wiki/Main_Page" target="_blank">Main Page</a> as a quick daily news digest
- <s>add fixed icon to scroll back up to table of contents</s>
- user customization on font size, color scheme, etc
- media gallery

[download]: https://chrome.google.com/webstore/detail/wikireader-wikipedia-simp/jmhkjngkhknhjmanjmaljpaigdinhdcf
