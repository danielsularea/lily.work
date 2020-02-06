---
title: Redesigning a medical database
company: IBM Watson

summary: >
  Overhauling how the hospital staff navigates through a complex database.

imgfolder: wicr
cover: cover.png
---

In IBM's second release of Watson Imaging Clinical Review, we revisited the way users navigate the application's complex database.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/cover.webp" type="image/webp">
  <source srcset="/assets/img/{{ page.imgfolder }}/cover.png" type="image/png">
  <img src="/assets/img/{{ page.imgfolder }}/cover.png" />
</picture>

## Background

In 2017, Watson Imaging Clinical Review (WICR) <a href="https://www.ibm.com/blogs/watson-health/introducing-ibm-watson-imaging-clinical-review/">launched</a> as an NLP-based tool that inspects clinical documents in the hospital and raises flags for any incompleteness or inaccuracies.

For WICR v2.0, IBM wanted a way to reduce staff training costs that would impact the bottom line and *our team was asked to overhaul the entire user experience.*


<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/old.webp" type="image/webp">
  <source srcset="/assets/img/{{ page.imgfolder }}/old.png" type="image/png">
  <img src="/assets/img/{{ page.imgfolder }}/old.png" />
</picture>

## My Role

I worked on WICR v2.0 from 2016 to 2017 with a design lead, a user researcher, and a product manager.

## Brand New Search

By far the biggest pain point for users was searching through the sheer volume and complexity of information in the table.

<figure>
  <img src="/assets/img/{{ page.imgfolder }}/datatypes.svg" />
</figure>

With 25 total categories to search from, each with its own set of operators and data types, *we needed to overhaul search in a way that would provide organization and control.*

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/protos.webp" type="image/webp">
  <source srcset="/assets/img/{{ page.imgfolder }}/protos.png" type="image/png">
  <img src="/assets/img/{{ page.imgfolder }}/protos.png" />
</picture>

### Manual Search for Casual Users

Doctors who only logged into WICR to resolve flagged issues did so infrequently.

Having visual choices and feedback was important to casual users who weren't familiar with the entire search toolbelt. *The manual selection method then is straightforward and comfortable.*

<figure class="figure-video" style="background-color: #D4C9EA;">
  <video controls loop autoplay style="border-radius: 8px;" src="/assets/img/{{ page.imgfolder }}/manualsearch.mp4"></video>
  <!-- <figcaption>Made in Framer</figcaption> -->
</figure>

### Typeahead Search for Power Users

On the other hand, hospital staff such as nurses and medical coders were responsible for reviewing clinical documents and logged into WICR almost daily.

*These power users are able to type complex searches directly into the search bar.* To provide further help, an autocomplete box follows the cursor and offers look-ahead feedback.

<figure class="figure-video" style="background-color: #D4C9EA;">
  <video controls loop autoplay style="border-radius: 8px;" src="/assets/img/{{ page.imgfolder }}/typesearch.mp4"></video>
</figure>

## Columns Control

By default, the discrepancy table only fits 12 out of the 25 possible category columns, leaving the rest simply out of view. Requests for additional columns had to be added by the hospital IT administrator.

Instead, we gave each user individual control over the columns they wanted to see.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/columncontrol.webp" type="image/webp">
  <source srcset="/assets/img/{{ page.imgfolder }}/columncontrol.png" type="image/png">
  <img src="/assets/img/{{ page.imgfolder }}/columncontrol.png">
</picture>

## Saved Searches

Users was that they often performed repeated searches. To save time, we persisted a history of their most recent searches and allowed users to save the current set of Search Formulas.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/savesearch.webp" type="image/webp">
  <source srcset="/assets/img/{{ page.imgfolder }}/savesearch.png" type="image/png">
  <img src="/assets/img/{{ page.imgfolder }}/savesearch.png">
</picture>

## Conclusion

The design lead and I toured the new product at major conferences across the country, speaking with industry leaders and target users to finesse the second release. Watson Imaging Clinical Review v2.0 launched in late 2018.
