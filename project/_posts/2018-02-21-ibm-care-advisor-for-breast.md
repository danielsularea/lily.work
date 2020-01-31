---
title: Care Advisor for Breast
company: IBM

summary: >
  Designing an AI to read mammograms in a world short on doctors.

imgfolder: ca-breast
cover_img: breastcancerai.svg

menu:
  - The Problem
  - My Role
  - Early Insights
  - Rethink the Problem
  - Final Concept
  - Product Definition
  - Next Steps
---

I was part of a moonshot project at IBM Watson Health that used computer vision to read mammograms and detect breast cancer.

## The Problem

Screening mammography is the most effective non-invasive procedure used to detect early signs of breast cancer. However, There is a global shortage of radiologists and an increasing demand for mammograms.

Our high level goals were to:
- Investigate breast imaging practices in US and UK markets
- As part of IBM Watson, produce solutions using our AI services
- Empower radiologists&mdash;not attempt to replace them

## My Role

I led the user research and design of the project from July 2017 to March 2018. I collaborated with a product manager as well as the AI research, regulatory, and development teams.

I stopped working at the company during the detailed visual design phase as we prepared for clinical trials.

## Early Insights

During the project's inaugural 6 months, the PM and I conducted contextual inquiries at 5 breast imaging institutions with 22 total participants.

These were our key observations:

### 1. Radiologists have to cram mammograms in between other tasks

Radiologists performed tasks far beyond screening mammograms, particularly diagnostic imaging (for patients who come in with known issues) and biopsy procedures.

<figure>
  <img src="../assets/img/ca-breast/radtimeline.svg" />
</figure>

Since those tasks involve scheduled facetime with patients, *they could only read mammograms whenever they had a small, uninterrupted window of time,* hoping that they'll be able to get all of it done by the end of the day.

### 2. Screening mammography is like finding a needle in a haystack

Only 10% of screening mammograms have cause for suspicion that warrants additional investigation. The remaining 90% of patients simply receive a negative result in the mail and come back for routine screening again the following year.

<figure>
  <img src="../assets/img/ca-breast/screenpop.svg" />
</figure>

As a result, radiologists have to wade through a constant and high volume of normal studies in order to find the small handful with signs of cancer that they can't afford to miss.

<blockquote class="hasQuotes">
  <p>If you're looking at something where many abnormalities exist, then your alert level is high. Whereas when you're doing screening, it's like autopilot.</p>
  <cite>
    <div>Chief of Radiology</div>
  </cite>
</blockquote>

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/regulatory.svg" />
  <!-- <figcaption>Highly regulated</figcaption> -->
</figure>


<!-- ### 3. Mammography is highly regulated and standardized

Due to the poor quality of mammography in the 1990s, the FDA implemented MQSA to regulate the way they are performed. These set of rules and subsequent guidelines by accreditation bodies ensured that *every mammogram in the US followed the same procedure*, from the way the mammogram is captured to the structure of the final report. Changes to these standards would be very difficult. -->

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/ai.svg" />
  <!-- <figcaption>CAD has a bad reputation in breast imaging</figcaption> -->
</figure>

### 4. The breast imaging community has "suffered" from AI already
Computer-aided detection (CAD) was an initiatve to make sure nothing was ever missed in the mammogram by pointing out areas of suspicion using AI. *This technology was widely adopted but ultimately received extremely negative reviews.* Only 20% of the radiologists we observed glanced at the CAD markings before making their own interpretation and most agree that it was like reading with a medical student.

## Rethink the Problem

Once we wrapped up generative research, we at least knew that we were on the right track: reading mammograms is a tasking process that needed to be improved.

However, we found that the initial problem needed to be redefined. From our research in the US, we realized that *American breast imaging centers were well staffed with radiologists when compared to the rest of world. Instead, they suffered from a shortage of radiologists who specialize in breast imaging.*

This is because while all radiologists are certified to and often do read mammograms, only 10% are specialists who completed a fellowship focusing on breast imaging. This means a high reliance on generalists who read across many body systems without a particular specialization in any of them.

<figure>
	<img src="../assets/img/ca-breast/generalistspecialist.svg" width="330"/>
</figure>

This raises two concerns:
1. General radiologists may not perform at the same level as specialists, particularly on more complex and suspicious cases
2. The already limited resources of specialists may be wasting their time and expertise by looking at so many normal mammograms.

*Our objective now then is to be able to address both the shortage of specialists in the US and the global shortage of radiologists overall.*

## Final Concept

For the next few weeks, I worked through 10 potential concepts with the research, regulatory, and development teams, balancing user value with technical and legal feasibility.

With final blessing from offering management, *our emergent concept was Full Normal Reads, a solution that completely automates the end-to-end read of normal mammograms.* Let's break that down:

### End-to-End

Radiologists in reality only spend 90 seconds to read a completely normal case, from opening the study, assessing it for breast cancer, and submitting the final radiology report with relevant findings. While other early concepts considered partial automation of this process or enhancement of the radiologist's workflow while reading, the opportunity window was simply too short to bring true value.

*CA-Breast therefore fulfills the entire process from picking up a study from the queue to final report submission&mdash;without ever requiring human intervention.*

<figure>
	<img src="../assets/img/ca-breast/fullread.svg" />
	<!-- <figcaption>CA-Breast takes mammograms off the queue, processes it, generates a final report, and signs it off.</figcaption> -->
</figure>

### Normal Reads

However, we neither want to nor claim we can replace the radiologist. Instead, we wish to take mundane, clearly normal cases off the table so that:
- American breast imaging specialists can focus on complex cases that take fuller advantage of their expertise, and
- Radiologists worldwide handle less studies overall

*As a result, CA-Breast only performs a read on mammograms that the algorithm finds to be normal. This means that we will always leave the suspicious cases to a human reader.*

<figure>
	<img src="../assets/img/ca-breast/normalread.svg" />
	<!-- <figcaption>CA-Breast first reviews whether it believes the mammogram to be normal before moving forward. If abnormal, it defers it to the radiologist.</figcaption> -->
</figure>

## Product Definition

Now CA-Breast now had a much clearer direction, the specific inputs and outputs of the solution needed to be defined.

*For the next 4 months, I conducted evaluative user research with the objective of defining our solution to either imitate or compliment existing human practices and performance levels.*

The following are just a couple of all the decisions that continue to shape the product today:

### 1. Prior mammograms are vital to decision-making.

There is no way to know what is truly normal within a woman's breast because many patients have natural biological markers that are unique to them.

Radiologists therefore determine normal by comparing the current mammogram to those from previous years for the same patient. Any findings that are either new or growing in size would immediately become suspicious.

<figure>
	<img src="../assets/img/ca-breast/priors.svg" />
</figure>

*Therefore, our algorithm must consider not only the current mammogram, but also a reliable set of priors in order to make the most informed assessment.*

<!-- And from working with our radiologists, the algorithm imitates good human practices by preferring mammograms that are at least 2 years old so that changes are more blatant but no older than 5 years old so that it is still relevant. -->

<figure class="m--content_figure m--content_figure-left">
  <img src="../assets/img/ca-breast/patient.svg" />
</figure>

### 2. There is no universal path for higher risk women

Depending on personal and family history of breast cancer, as well as rare genetic mutations, some women are predisposed to develop breast cancer. These patients should receive additional considerations, such as supplementary MRI, shorter intervals between screenings, and so on.

<figure>
  <img src="../assets/img/ca-breast/riskfactors.svg" />
  <figcaption>Some of the risk factors and possible recommended follow-up</figcaption>
</figure>

However, while radiologists wildly disagree on a universal follow-up for high-risk patients, we have found that breast imaging institutions strive to standardize practice by enforcing one protocol for all its radiologists.

*As a result, CA-Breast can confidently reflect this behavior by configuring a single recommendation output per site.*

<figure class="m--content_figure m--content_figure-right">
  <img src="../assets/img/ca-breast/typewriter.svg" />
</figure>

### 3. Writing radiology reports is an art

Although mammography is heavily regulated in terms of xray quality and patient management, the reporting of any findings found in the mammogram is entirely up to the radiologist.

Even for women who are completely cancer-free, most of them still present with some sort of benign finding. And *while Watson is excellently trained on identifying benign findings from those that are malignant, it is not great at describing them in prose.*

And from mapping the reporting styles of more than 30 radiologists, I have found an unfortunately wide variety of preferences ranging everywhere from meticulous detailing of each finding to omitting mention of benign findings altogether.

To further investigate, I consulted 9 more radiologists and our internal team of subject matter experts. From this, I found that although radiologists didn't conform on this matter, they also didn't quite care about how other radiologists did theirs as long as they followed good practice. Additionally, most benign findings in the image were just so painfully obvious that whether to omit it from the report was inconsequential.

And after working closely with our research and data science teams, I also understood the technical and finance debt of training the algorithm to recognize the small visual characteristics that humans are capable of describing.

*As a result, I recommended the following guidelines for Watson:*
- It omits findings from the report that are irrefutably benign
- For benign findings that it does describe, it describes its morphology and location to the extent that it's counterpart in the mammogram image is clear
- It would group similar findings wherever possible, rather than describe each one individually

## Next Steps

That brings us to today's objectives and challenges.

My time since March 2018 has been overwhelmingly spent with the research and development teams to design a machine learning algorithm, decide how to collect and annotate data in order to train the algorithm, and determine the way its outputs translate into real product application.

While I can't divulge my work from here onwards, here are some of the interesting questions we'd asked next:
- What constitutes suspicious change between current and prior mammograms? Is it growth in numbers? In size? Change in location?
- How do we handle in-breast foreign bodies such as implants, clips, surgical sutures, pacemakers, so on?
- If a radiologist disagrees with CA-Breast's assessment on a mammogram, how should it react?

The first release of Care Advisor for Breast is now being tested at hospitals and undergoing regulatory review by the FDA in the US. *I am now focusing on expanding this solution to a worldwide market, starting from the UK.*
