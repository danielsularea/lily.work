---
title: Notes on Deploying to Netlify with Jekyll Bliss
category: code
---

A designer at AngelList told me about [Harp](http://harpjs.com/) recently and how it supported Jade (now called Pug) natively. This kind of got me wondering if I could get Jekyll to work with Pug as well, which led me to Jekyll Bliss and Netlify.

Because Github Pages is very selective about the dependencies you are allowed to use (ie Jekyll plugins), I had to abandon it in favor of Netlify. However, to set up [Jekyll Bliss](https://github.com/DougBeney/Jekyll-Bliss) to now build on Netlify, I ran into more hiccups than anticipated.

## In case Makefile doesn't work
Despite what the documentation said, Netlify didn't listen to my `Makefile` so I had to go old school and make a `package.json` so it knew to use Bliss.

```
npm init
npm install jekyll-bliss --save-prod
```

Then your build command on Netlify should become `bliss build`.

## SCSS compile is weird
I haven't figured this out yet but relying on Jekyll Sass Converter has been a pain. Although I'm building on local dev just fine, I keep getting thrown odd errors on production.

For instance, it kept complaining about a file that definitely existed. The path is correct as well since it's importing other partials in the same folder just fine. I ended up removing this file entirely (which is why I currently don't have syntax highlighting on my portfolio). I'll look into it and update here but if anyone knows what's up, please email me!

```
Error: File to import not found or unreadable: vendor/pygments
```

## Layouts is nesting whole HTML documents
This is probably the worst hiccup in my opinion. It seems that the order in which Bliss is compiling pug and Jekyll is compiling pages using layouts is off. This means I end up nesting an entire HTML document within the body of another one.

This happens unpredictably. Every now and then, the order lines up and I get a perfectly normal document.

This might be the deal breaker that makes me switch from Jekyll altogether.

## Overall, Netlify is awesome
I can't believe I didn't migrate over earlier. At the small scale projects I'm working with, it's free and is so much more powerful than Github Pages. Despite all the years with Jekyll, I'm okay with dropping it. I might play around with Harp instead.
