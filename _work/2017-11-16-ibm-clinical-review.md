---
layout: workpost_encrypted
title: Watson Imaging Clinical Review
year: 2017
company: IBM

summary: >
  Overhauling how the hospital staff navigates through a complex database.

imgfolder: clinicalreview
cover_img: hospital.svg

menu:
  - Background
  - My Role
  - The Problem
  - Casual and Power Users
  - New Search Formulas
  - New Column Control
---

I worked on IBM's second release of Watson Imaging Clinical Review and overhauled the way users search and sort through the application's complex database.

## Background

IBM <a href="https://www.ibm.com/blogs/watson-health/introducing-ibm-watson-imaging-clinical-review/" target="_blank">launched</a> Watson Imaging Clinical Review (WICR) in early 2017 as an NLP-based tool that compares clinical documents in the hospital and raises flags for any incompleteness or inaccuracies.

However, hospitals have to pay add-on training fees in order to onboard their staff to the platform and IBM wanted a way to reduce costs that might impact the bottom line. In response, *the team's objective for WICR v2.0 was to overhaul the entire user experience.*

## My Role

Effort towards WICR v2.0 began in late 2016, at which time I joined as the product designer. I worked with a design lead, user researcher, and offering manager.

During my involvement until July 2017, I was hands-on for every aspect of the design overhaul. However, *I was given ownership over the redesign of the search and sort functionalities on the application. This post reflects that particular portion of work.*

## The Problem

One of the biggest pain points for users was the discrepancy table from which they would select and resolve flagged issues. *Due to the sheer volume and complexity of information associated with each issue, the table quickly became overwhelming and difficult to navigate.*

<figure class="js--zoom">
  <img src="../assets/img/clinicalreview/v1.png" alt="Version 1 of Clinical Review" />
  <figcaption>The discrepancy table from Watson Imaging Clinical Review v1.0</figcaption>
</figure>

Some blatant problems to start were:
- The search bar was tucked away in the top-right corner and could only search within two categories
- The filters did not address all of the possible categories and was limiting for those that it did
- The discrepancy table was not configurable to include the remaining categories that were omitted from view&mdash;there were 25 categories in total
- Open, pending, and closed cases were by default open accordion elements stacked on top of each other

## Casual and Power Users

Because clinical documentation happens everywhere along a patient's care path, our users included a broad range of roles and capacities, such as primary care physicians, radiologists, nurses, medical coders, billers, and so on.

However, after 2 months of evaluative research, it was evident that *user behavior was roughly split into two camps: casual and power users.*

For instance, medical doctors who sought to resolve discrepancy issues were casual users. They typically only used a small portion of the application and logged in only when an issue they were responsible for was raised.

Power users, on the other hand, were commonly found to be nurses or medical coders who logged into WICR almost daily as part of their job. This is because while only doctors had the authority to alter clinical documents, users such as nurses were responsible for reviewing, moderating, and ultimately policing the platform by sending reminders to those doctors.

Therefore, with respect to these two user bases, I was able to observe the following insights.

### 1. Users had varying familiarity with the application

An immediate conclusion to draw was that because casual users logged in far less frequently than power users, they were usually less familiar with the features of the application and would require more visual or textual guidance.

In contrast, power users preferred efficiency and individual customization to accomplish their tasks.

### 2. Users often performed the same set of searches

Casual users whose objective was to fix their own flagged issues usually only searched for their own name in order to resolve discrepancies in bulk.

Power users, however, had a more systematic approach. For instance, they might always start by narrowing down discrepancies to only the department or modality that they were responsible for. They may also narrow down by the type of discrepancy they want to address. Lastly, they may search by overdue days, number of reminders sent, or current status in order to drill down to problematic issues.

## New Search Formulas

In order to give users control over a more comprehensive search, I created search formulas that would cater to our broad user base.

<!-- <figure>
  <img src="../assets/img/clinicalreview/formula.svg" alt="The basic components of a search formula" />
</figure> -->

### Casual users have all their options laid out

Filler for now

### Power users can just start typing

Filler for now

## New Column Control

<!-- ## Introducing Column Control -->

<!-- ### Individual preferences

In WICR v1.0, additional columns to the discrepancy table had to be added by the IT administrator, which would then be implemented across the application for every user in the hospital.

This meant that users who had different objectives were loaded with information they may not need and we were creating technical burden on the hospital.


### 2. Each category had a different data type to perform a search on

### 3. Some categories weren't applicable to all -->

<!-- As a result, my high level goals were to:
- Enable comprehensive searches over the entire database
- Save the users time and effort in their daily work
- Give users control over how they want navigate the database -->

<!-- Patients who are admitted into the hospital often transfer between multiple departments to receive tests and procedures. Often times, they are taken to the radiology department to receive medical imaging, such as chest CTs, brain MRIs, heart ultrasounds, and so on. Doctors known as radiologists then interpret these images and detail the diagnosis in a radiology report.

In order to keep track that diagnosis, the electronic medical record contains a Problem List, which catalogues a patient's conditions and diseases. However, this table is <a href="https://histalk2.com/2017/09/27/readers-write-the-problem-list-is-the-problem/" target="_blank">notoriously neglected</a>, causing it to be inaccurate, incomplete, or out-of-date.

<blockquote class="hasQuotes">
  <p>Problem Lists are loaded with a combination of current and inactive complaints, symptoms, and diagnoses, and generally are a mess.</p>
    <cite>
      <div>Sam Bierstock, MD</div>
      <div>The Problem List is the Problem</div>
    </cite>
</blockquote>

Clinical Review (CR) therefore leverages NLP to extract the diagnosis from the radiologist's report and correlate it to the Problem List. When it finds a discrepancy, it notifies the hospital staff of the issue. -->

<!-- sources:
- http://www.healthcareitnews.com/blog/why-clinical-documentation-improvement-so-important-hospitals
- Secret Life of CDI Specialist: https://www.nursingcenter.com/journalarticle?Article_ID=1493953&Journal_ID=54016&Issue_ID=1493946
- https://www.ibm.com/blogs/watson-health/introducing-ibm-watson-imaging-clinical-review/ -->
