---
layout: blog
title:  Caveats of Using Ajax Content in Jekyll
---

I recently rehauled my portfolio and as part of doing so, I explored how to incorporate ajax calls when loading my content. Almost immediately, I found [Jekyll-AJAX][jekyll-ajax], which was surprisingly easy to understand and set up. However, I did run into some unexpected caveats upon trying to adapt the library for my own usage.

## &mdash; The `.content` container cannot be an immediate child to `body`.
Because otherwise, `$(data).find('.content')` returns empty and `.content` wouldn't receive anything.

## &mdash; Insert html into `$('.content').parent()` instead to avoid nested `.content` elements.
Not only to keep the code DRY but also because I use the id on the element to keep track of what page I'm on.

## &mdash; Scroll position back to the top.
This is more of a general reminder to scroll back to the top once you've swapped the content because since technically you're still on the same page, you won't automatically be back to the top of the page (which would be bothersome if it's longer than the window height).

## &mdash; Set target anchor exceptions, if any.
The default configuration of the code provided in the `README` assumes an ajax call for any anchor targets within the same site url. However, I have a bunch of PDF files on my portfolio so I don't want ajax to be called:

<pre class="line-numbers"><code class="language-css">function _handleDelegate(e) {
  var siteUrl = document.location.hostname||document.location.host;
  e.preventDefault();
  
  if (this.href.includes(siteUrl)) {
    if (this.pathname.includes('pdf')) {
      window.open(this.href);
    } else {
      History.pushState({}, '', this.pathname);
    }
  } else {
    window.open(this.href);
  }
}</code></pre>

## Summary
Of course, I assume the author of the repo intended the code to be very barebones, which I appreciated a lot. But, maybe these tiny adjustments can be useful to someone who might be looking to use the same method.



[jekyll-ajax]: https://github.com/joelhans/Jekyll-AJAX
