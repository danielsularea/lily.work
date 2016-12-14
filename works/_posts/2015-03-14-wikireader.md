---
layout: work
bin: work-detail
title: WikiReader
belt: wikireader

time: 2015
tags: [ Chrome extensions ]

cover_img: init.jpg
detail_img: [ img1.jpg, img2.png, img3.jpg ]
links:
  Download: "https://chrome.google.com/webstore/detail/wikireader-wikipedia-simp/jmhkjngkhknhjmanjmaljpaigdinhdcf"
---

A chrome extension to simplify the Wikipedia experience for users who concentrate solely on retrieving information.

## Overview
This was my first attempt at a Chrome extension, which was overall, an excellent experience. Google has nicely documented its javascript APIs, which were essentially all I needed for this simple extension which I managed to hack in just 2 days. Of course, it's not perfect and I try to fix any bugs I find whenever I can but I'm nevertheless proud.

Wikipedia.org has been one of the most timeless services on the web, offering vast amount of information to its users for free. However, at the same time, it has been one of the most unchanging platforms in terms of interface. For users who solely seek to gather information quickly, the old layout can be distracting. So in an effort to not only beautify presentation, I've also hidden the lesser used features such as switching languages (as this is a English only extension for now), editing, viewing edit history, and a few minor others.

To minimalize loading delays, wikiReader works almost solely by overriding its existing CSS styles. Of course, this can cause enormous backlash if Wikipedia chooses to change its element ids and classes but I'm essentially counting on its earlier mentioned tendency to be rather constant. But yes, this still isn't the greatest practice so I will be looking into alternatives in the meantime.

## Reading experience
I chose a more readable font ([Crimson Text][crimson]) alongside Wikipedia's original Open Sans. Not everything is shown below but additional changes included wider paddings in tables to allow some breathing room, more consistent thumbs, and cleaner lists.

## To Do
- clean <a href="http://en.wikipedia.org/wiki/Main_Page" target="_blank">Main Page</a> as a quick daily news digest
- <s>add fixed icon to scroll back up to table of contents</s>
- user customization on font size, color scheme, etc
- media gallery

[crimson]: https://www.google.com/fonts/specimen/Crimson+Text
