---
layout: workpost_encrypted
title: Care Advisor for Breast
year: 2018
company: IBM

summary: >
  Designing an AI to read mammograms in a worldwide shortage of doctors.

imgfolder: ca-breast
cover_img: cover.svg

menu:
  - The Problem
  - My Role
  - Early Insights
  - Rethink the Problem
  - Final Concept
  - Product Definition
  - Where We Are Now
---

Care Advisor is a family of "moonshot" AI products that explores an ambitious opportunity within healthcare. This is my part in one of those moonshots.

This is an AI service design project with no tangible interface. If you're looking for an example of interaction design, see my work with <a href="../work/ibm-clinical-review.html">Watson Imaging Clinical Review</a>.

## The Problem

Screening mammography is the most effective non-invasive procedure used to detect early signs of breast cancer. As a result, women worldwide depend on radiologists&mdash;or doctors that diagnose diseases using medical imaging&mdash;to identify findings in their breast that may indicate cancer.

<!-- These radiologists are responsible for looking at, or "reading", the mammograms, after which they submit a report back to the patient's primary care physician, detailing what they find. -->

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/hourglass.svg" />
  <!-- <figcaption>Long, busy hours</figcaption> -->
</figure>

However, the business challenged us with an open problem: *there is a global shortage of radiologists and institutions are struggling to keep up with mammography demand.*

Our high level goals were to:
- Tackle the global backlog of screening mammograms
- Leverage artificial intelligence as part of the Care Advisor suite
- Empower radiologists&mdash;not replace them

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/juggling.svg" />
</figure>

## My Role

Care Advisor for Breast (CA-Breast) kicked off in early 2017 and *I began work as the team's product designer in July 2017*. I collaborated with the offering management, research, regulatory, and development teams in order to bring this product to a global market.

<!-- At the beginning of this project, I was responsible for identifying and exploring the opportunity space given a broad direction. Once early validation was proven, I became responsible for designing and defining the solution first within the US market. -->

*I am still part of this project but this post only reflects my work on the team up until March 2018.*

<figure>
  <img src="../assets/img/ca-breast/projtimeline.svg" />
</figure>

## Early Insights

During the project's inaugural 6 months, offering management and design conducted ethnographic field research at 5 breast imaging institutions with 22 total participants. <!-- *Our goal was to embed ourselves within the problem space in order to identify an opportunity that would both differentiate us competitively and solve a concrete user need.* -->

### 1. Radiologists have to cram in mammograms in between other tasks

Radiologists performed tasks far beyond screening mammograms, such as diagnostic imaging (for patients who come in with known issues) and biopsy procedures.

<figure>
  <img src="../assets/img/ca-breast/radtimeline.svg" />
</figure>

Since those tasks involve scheduled facetime with patients, *they could only read mammograms whenever they had a small, uninterrupted window of time,* hoping that they'll be able to get all of it done by the end of the day.

### 2. Screening mammography is like finding a needle in a haystack

Among all the mammograms that radiologists look at, *only 10% display signs of suspicion* that warrants additional investigation.

<figure>
  <img src="../assets/img/ca-breast/screenpop.svg" />
</figure>

As a result, radiologists have to go through a constant and high volume of studies, searching for the small handful with signs of cancer that they can't afford to miss.

<!-- <blockquote class="hasQuotes">
  <p>If you're looking at something where many abnormalities exist, then your alert level is high. Whereas when you're doing screening, it's like autopilot.</p>
  <cite>
    <div>Chief of Radiology</div>
  </cite>
</blockquote> -->

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/regulatory.svg" />
  <!-- <figcaption>Highly regulated</figcaption> -->
</figure>


### 3. Mammography is highly regulated and standardized

Due to the poor quality of mammography in the 1990s, the FDA implemented MQSA to regulate the way they are performed. These set of rules and subsequent guidelines by accreditation bodies ensured that *every mammogram in the US followed the same procedure*, from the way the mammogram is captured to the structure of the final report. Changes to these standards would be very difficult.

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/ai.svg" />
  <!-- <figcaption>CAD has a bad reputation in breast imaging</figcaption> -->
</figure>

### 4. The breast imaging community has "suffered" from AI already
Computer-aided detection (CAD) was an initiatve to make sure nothing was ever missed in the mammogram by pointing out areas of suspicion using AI. *This technology was widely adopted but ultimately received extremely negative reviews.* Only 20% of the radiologists we observed glanced at the CAD markings before making their own interpretation and most agree that it was like reading with a medical student.

## Rethink the Problem

Once we wrapped up generative research, we at least knew that we were on the right track: reading mammograms is a tasking process that needed to be improved.

However, the initial problem needed to be redefined: *The US is much better stocked in radiology staff than the rest of world. Instead, we observed that American institutions suffered from a shortage of radiologists who specialize in breast imaging.*

This is because while all radiologists are certified to and often do read mammograms, only 10% are specialists who completed a fellowship focusing on breast imaging. This means a high reliance on generalists who read across many body systems without a particular specialization in any of them.

<figure>
	<img src="../assets/img/ca-breast/generalistspecialist.svg" width="330"/>
</figure>

This raises two concerns:
1. General radiologists may not perform at the same level as specialists, particularly on more complex and suspicious cases
2. The short supply of specialists may be wasting their time and expertise by looking at so many normal mammograms.

*Our objective now then is to be able to address both the shortage of specialists in the US and the global shortage of radiologists overall.*

## Final Concept

For the next few weeks, I worked through 10 potential concepts with the research, regulatory, and development teams, balancing user value with technical and legal feasibility.

With final blessing by offering management, *our emergent concept was Full Normal Reads, a solution that completely automates the end-to-end read of normal mammograms.* Let's break that down:

### End-to-End

Radiologists in reality only spend 90 seconds to read a completely normal case, from opening the study to submitting the final radiology report. While other early concepts considered partial automation or enhancement of the radiologist's workflow while reading, the opportunity window was simply too short to bring true value.

*CA-Breast therefore fulfills the entire process from picking up a study from the queue to final report submission, without ever requiring human intervention.*

<figure>
	<img src="../assets/img/ca-breast/fullread.svg" />
	<!-- <figcaption>CA-Breast takes mammograms off the queue, processes it, generates a final report, and signs it off.</figcaption> -->
</figure>

### Normal Reads

However, we neither want to nor claim we can replace the radiologist. Instead, we wish to take mundane, clearly normal cases off the table so that:
- In the US, breast imaging specialists can focus on complex cases that take fuller advantage of their expertise
- Globally, radiologists handle less studies overall

*As a result, CA-Breast only performs a read on mammograms that the algorithm finds to be normal. This means that we will always leave the suspicious cases to a human reader.*

<figure>
	<img src="../assets/img/ca-breast/normalread.svg" />
	<!-- <figcaption>CA-Breast first reviews whether it believes the mammogram to be normal before moving forward. If abnormal, it defers it to the radiologist.</figcaption> -->
</figure>

## Product Definition

Although CA-Breast now had a much clearer direction, the specific inputs and outputs of the solution needed to be defined.

*For the next 4 months, I conducted evaluative user research with the objective of defining a solution that either imitates or compliments existing human practices and performance levels.*

The following are just some of all the decisions that ultimately shaped the final product.

### 1. Prior mammograms are vital to decision-making.

There is no way to know what is truly normal within a woman's breast because many patients have natural biological markers that are unique to them.

Radiologists therefore determine normal by comparing the current mammogram to those from previous years for the same patient. Any findings that are either new or growing in size would immediately become suspicious.

<figure>
	<img src="../assets/img/ca-breast/priors.svg" />
</figure>

*Therefore, our algorithm must consider not only the current mammogram, but also a reliable set of priors in order to make the most informed assessment.*

And from working with our radiologists, the algorithm imitates good human practices by preferring mammograms that are at least 2 years old so that changes are more blatant but no older than 5 years old so that it is still relevant.

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/patient.svg" />
</figure>

### 2. There is no universal path for higher risk women

Depending on personal and family history of breast cancer, as well as rare genetic mutations, some women are predisposed to develop breast cancer. These patients should receive additional considerations, such as supplementary MRI, shorter intervals between screenings, and so on.

However, many radiologists disagree on the factors that define a patient to be high risk as well as the approrpriate follow-up.

<figure>
  <img src="../assets/img/ca-breast/riskfactors.svg" />
  <figcaption>There are numerous combinations of risk factors and recommended follow-up</figcaption>
</figure>

*As a result, CA-Breast must keep recommendation options configurable so that once a patient is identified as high risk, it follows the settings corresponding to institution procedures.*

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/typewriter.svg" />
</figure>

### 3. Writing radiology reports is an art

Even if their mammogram has no signs of cancer, most women present with some sort of benign finding. Radiologists wildly disagree when it comes to whether to just omit these findings from the final report or how to even describe benign findings.

This was a difficult problem since an algorithm executes tasks within a distinct set of rules. But with the controversial and complex nature of writing a medical report, it isn't as simple as a configuration setting.

My response was to acklowedge CA-Breast to have a certain personality type that carries a set of preferences. Disagreement would be impossible to avoid no matter what but if radiologists can understand its working style like they would with a colleague, it can reduce frustration.

*After mapping the reporting styles of over 30 radiologists, I determined that CA-Breast would assume a moderately liberal personality*, which is identified with the following behaviors:
- It omits findings from the report that are irrefutably benign
- For benign findings that it does describe, it does so only to the extent that it's obvious what and where it is in the mammogram.
- It would group similar findings wherever possible. Rather than separately reporting "X calcification at location A, Y calcification at location B", it might say "calcifications in [general area]".

## Where We Are Now

Once the product definitions were in place, I worked closely with the research and development team to deliver our MVP. This first release is now being tested at hospitals and undergoing regulatory review by the FDA in the US.

I am extremely thankful to have worked on a product that will be the first of its kind in the healthcare industry. I am now focusing on expanding this solution to a worldwide market, starting from the UK.

