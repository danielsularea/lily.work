---
layout: workpost_encrypted
title: Care Advisor for Breast
year: 2018
company: IBM

summary: >
  Defining and designing an algorithm to read routine mammograms so doctors can focus on more complex work.

imgfolder: ca-breast
cover_img: acquisition.svg

menu:
  - My Role
  - What We Knew
  - Define the Problem
  - Early Insights
  - Introducing
  - Definition
  - Designs
  - Outcome
---

Women worldwide depend on routine mammograms to identify findings in their breast that may suggest cancer. But with an alarming shortage of radiologists to read and interpret these images, we use machine learning to take on the job.

Care Advisor is a suite of offerings within IBM Watson Health Imaging. Care Advisor for Breast (CA-Breast) was the inaugural offering within this suite, focusing on breast x-rays, aka mammograms.

## My Role

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/juggling.svg" />
</figure>

This project is a less traditional example of my work as a product designer, where the final solution in reality has little to no interface. Instead, I helped to design a service that works behind the scenes and it is the most ambitious and promising project I've worked on at IBM.

*I am still currently its the product designer and work daily with the offering management, research, regulatory, and development teams* in order to bring this product to market.

## What We Knew

Before we started, the team acknowledged the following assumptions to be true:

- The solution must leverage machine learning
- The solution must work with screening mammograms in some aspect (ex: detect findings, track progress across years, build a diagnosis)
- Our opening opportunity is the lack of radiologists worldwide to meet an increasing demand of screening mammograms
- The solution will be implemented in the global market

## Define the Problem

Although we roughly knew from the start that we wanted apply machine learning to reading mammograms, we didn't actually know what that means.

From June to November 2017, offering management and design jointly conducted ethnographic field research at 5 breast imaging institutions with 22 total participants. *Our goal was to embed ourselves within the problem space in order to identify an opportunity that would both differentiate us competitively and solve a concrete user need.*

## Early Insights

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/hourglass.svg" />
  <!-- <figcaption>Long, busy hours</figcaption> -->
</figure>

### Screening is the least important part of a radiologist's day

Radiologists performed tasks far beyond screening mammograms, such as diagnostic imaging (for patients who come in with known issues) and biopsy procedures. Among those, screening mammograms are actually the lowest priority due to its non-urgent nature and the most annoying because there are so many and 90% them are totally normal.

### There are more generalists than specialists

Only 30% of mammograms were read by breast imaging specialists, which are radiologists with additional fellowship training specializing in breast imaging. This means higher reliance on generalists who read across multiple body systems without a specialization in any of them.

<figure>
	<img src="../assets/img/ca-breast/generalistspecialist.svg" width="330"/>
</figure>

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/regulatory.svg" />
  <!-- <figcaption>Highly regulated</figcaption> -->
</figure>

### Mammography is highly regulated and standardized

Due to the poor quality of mammography in the 1990s, the FDA implemented MQSA to regulate the way they are performed. These set of rules and subsequent guidelines by accreditation bodies ensured that every mammogram at the most part followed the same procedures, right down to the structure and content of the final report that radiologists write their findings into.

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/ai.svg" />
  <!-- <figcaption>CAD has a bad reputation in breast imaging</figcaption> -->
</figure>

### Breast imaging has "suffered" from AI already
Computer-aided detection (CAD) was an initiatve to make sure nothing was ever missed in the mammogram by pointing out areas of suspicion using AI. This technology was widely adopted but ultimately received negative reviews. Only 20% of the radiologists we observed looked at the CAD markings before their own interpretation and most agree that it was like reading with a medical student.

<!-- ## Post-Exploratory

Now that we completed our generative research, we came away with some important considerations:
1. *We were on the right track. Screening mammograms was a tasking process that deserved automation.*
2. The failure and negative perception of CAD foreshadowed our next steps.
3. Healthcare professionals were also wary of AI in general, both in terms of patient safety and its potential to replace their jobs

From the exploratory phase, we came away with 10 concepts that design ranked in order of user value. The research, regulatory, and development teams each countered with feasibility estimates and offering management closed the loop with value to the business. This allowed us to narrow them down to just 1 remaining. -->

## Introducing

*CA-Breast will perform Full Normal Reads, a solution that handles the end-to-end read of normal mammograms.* Let's break that down:

### End-to-End
While other concepts considered partial automation or enhancement of the radiologist's workflow, *the solution fulfills the entire process from the moment the mammogram is received to final result submission, without ever requiring human intervention*.

### Normal Reads
CA-Breast only fully automates screening mammograms that CA-Breast assesses to be "normal", or completely without findings indicative of cancer.

## Definition


## Designs

Because our solution is an entirely autonomous read of the 

## Outcome

The product is currently being tested in the wild at hospitals and undergoing regulatory review by the FDA.

I am now focusing on expanding this solution to a worldwide market, starting from the UK.

