---
title: Redesigning a medical database
company: IBM Watson

summary: >
  Overhauling how the hospital staff navigates through a complex database.

imgfolder: wicr
cover: cover.webp
---

In IBM's second release of Watson Imaging Clinical Review, we re-examined the way users navigate the application's complex database.

## Background

In 2017, Watson Imaging Clinical Review (WICR) <a href="https://www.ibm.com/blogs/watson-health/introducing-ibm-watson-imaging-clinical-review/">launched</a> as an NLP-based tool that inspects clinical documents in the hospital and raises flags for any incompleteness or inaccuracies.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/old.webp" alt="Version 1 of Clinical Review" />
  <!-- <figcaption>Trying to find specific issues in this discrepancy table can be limiting and confusing.</figcaption> -->
</figure>

For WICR v2.0, IBM wanted a way to reduce staff training costs that would impact the bottom line and *our team was asked to overhaul the entire user experience.*

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/new.webp" alt="Version 1 of Clinical Review" />
</figure>

## My Role

I worked on WICR v2.0 from 2016-7 with a design lead, a user researcher, and a product manager.

## Overhauled Search Experience

By far the biggest pain point for users was searching through the sheer volume and complexity of information in the table.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/datatypes.svg" alt="The range of data types for each category" />
  <!-- <figcaption>The range of data types for each category</figcaption> -->
</figure>

With 25 total categories to search from, each with its own set of operators and data types, *we needed to overhaul search in a way that would provide organization and control.*

### First Attempt

By default, WICR v1.0 offered five filters that were difficult to match to the corresponding column. Our first attempt then was to add and associate filters to each column.

<figure class="narrow">
  <img src="../assets/img/{{ page.imgfolder }}/earlyproto1.svg" />
  <!-- <figcaption>1st attempt: attach each filter to its column</figcaption> -->
</figure>

Unfortunately, user feedback uncovered a list of new problems:
- Users weren't certain whether they should search in the broad search bar up top or in individual filters beneathe each column
- The filters were too busy and added a lot of noise to an already crowded interface
- There was no obvious way to search additional categories that weren't visible as a column
- There was no accommodation for operators (ex: more than 4 days)

### Second Attempt

Our next attempt tucked the filter building process into a popover.

<figure class="narrow">
  <img src="../assets/img/{{ page.imgfolder }}/earlyproto2.svg" />
  <!-- <figcaption>2nd attempt: Allow even finer and more powerful controls while reducing default visual noise</figcaption> -->
</figure>

Our usability tests still fell flat:
- In the default state without any set filters, users missed the "Add Filter" button because they were looking for a search bar
- Building multiple filters was tedious and slow&mdash;there were too many unnecessary clicks

### Solution: Manual Search for Casual Users

Doctors who only logged into WICR to resolve discrepancies that were flagged to them did so infrequently.

Having visual choices and feedback was important to casual users who weren't familiar with the entire search toolbelt. *The manual selection method then is straightforward and comfortable.*

<figure class="figure-video" style="background-color: #85BEFF;">
  <video controls loop autoplay name="Manual search using modal inputs" src="../assets/img/{{ page.imgfolder }}/manualsearch.mov"></video>
  <!-- <figcaption>Made in Framer</figcaption> -->
</figure>

### Solution: Typeahead Search for Power Users

On the other hand, hospital staff such as nurses and medical coders were responsible for reviewing clinical documents and logged into WICR almost daily to moderate and even police the platform by sending resolution notices to doctors.

*Therefore, a more efficient alternative for these power users is to type directly into the search bar.* To provide further help, an autocomplete box follows the cursor and offers look-ahead feedback.

<figure class="figure-video" style="background-color: #85BEFF;">
  <video controls loop autoplay name="Quick search by directly typing into search bar" src="../assets/img/{{ page.imgfolder }}/typesearch.mov"></video>
  <!-- <figcaption>Made in Framer</figcaption> -->
</figure>

## Control over table columns

By default, the discrepancy table only fits 12 out of the 25 possible category columns, leaving the rest simply out of view. Requests for additional columns had to be added by the hospital IT administrator.

Instead, we gave each user individual control over the columns they wanted to see.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/newcolumncontrol.svg" alt="">
</figure>

## Saved searches

Users was that they often performed repeated searches. To save time, we persisted a history of their most recent searches and allowed users to save the current set of Search Formulas.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/savesearch.svg" alt="">
</figure>

## Conclusion

After showcasing the new product at major conferences across the country, we released WICR v2.0 in late 2018.
