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
  - The Problem
---

I worked on IBM's second release of Watson Imaging Clinical Review and overhauled its search and sort functionalities for a very complex database.

## The Problem

IBM <a href="https://www.ibm.com/blogs/watson-health/introducing-ibm-watson-imaging-clinical-review/" target="_blank">launched</a> Watson Imaging Clinical Review (WICR) in early 2017 as an NLP-based tool that compares clinical documents in the hospital and raises flags for any inconsistencies or inaccuracies.

However, the discrepancy table where hospital staff would resolve these issues quickly became overwhelming and difficult to navigate. This is what WICR v1.0 looked like:

<figure class="js--zoom">
	<img src="../assets/img/clinicalreview/v1.png" alt="Version 1 of Clinical Review" />
</figure>

To begin:
- The search bar was tucked away in the top-left corner and supported searching the table by two columns
- Additional filters were placed under the 

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

## Donec Ullamcorper

Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis.

Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
