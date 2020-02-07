---
title: Redesigning Company Profiles
company: AngelList

imgfolder: copro
cover: cover.png
---

I led design to rebuild AngelList's Company Profiles from the ground up. We launched in Aug 2019 and tripled user acquisition and conversion, and significantly improved site performance.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/cover3.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/cover3.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/cover3.png">
</picture>

## The Challenge
As a core piece of our talent marketplace, *Company Profiles should represent employers as a great place to work and compel job seekers to apply.* But, originally created to capture fundraising attention, the profiles became misaligned with recruiters and candidates alike and fell behind our competitors.

Our priority was to first ship a product that met table stakes requirements. Any nice-to-have features would have to come later.

## Process
I was the lead designer with contributions from my Head of Design and worked closely with three engineers. I led user research, design, and eventually product management. The project lasted 9 months and was fully rolled out in August 2019.

## Existing Problems
### Fragmented information architecture
There were in actuality two employer profiles: Company Profiles and Job Showcase. Each had a separate entry point and were not consistent across the data points they shared. Profiles had become the org chart: one made for fundraising and one patched on for job-seeking.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/old.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/old.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/old.png">
</picture>

### Irrelevant information for job seekers
When researching a company, job seekers found the information on Company Profiles to be irrelevant or insufficient. A mixture of unmaintained features (Launches, Press, Followers) and venture-specific features (Board Members, Advisors) crowded the interface.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/old-data.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/old-data.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/old-data.png">
</picture>

### Poor profile setup experience
During profile setup, recruiters dropped off and abandoned their profile due to poor user experience. They didn't feel like they could successfully represent their brand and there were no engagement loops on our end to promote profile upkeep.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/old-edit.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/old-edit.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/old-edit.png">
</picture>

## New Company Profiles

*Now all under one roof, Company Profiles focuses on what job seekers actually care about.* Relying on user research, we ruthlessly cut half of the features from the old profiles (with some on the roadmap to be brought back, properly this time).

The redesign consolidated existing styles and began to define a system not only for Company Profiles, but for the company as a whole. Although we didn't allow room for much flair in order to ship on time, it still resulted in an updated visual identity and a more modernized AngelList.

<figure>
  <video controls loop autoplay style="border-radius:0px;box-shadow:none;max-width:100%" name="" src="/assets/img/{{ page.imgfolder }}/copro-carousel.mp4"></video>
</figure>

### Rebuilt fundamentals
The People and Funding pages made up the core of the profile and saw their first update in 4 years. This redesign largely solves UX issues with the way information are represented so that it addresses the questions job seekers have.

In particular, the people cards now offer more upfront detail into their background and funding history follows a more apparent timeline.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/pages.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/pages.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/pages.png">
</picture>

### Introducing company culture
As a valuable resource to job seekers, we cleared the last gap in meeting an expected baseline set of data: company culture. Job seekers have long requested insights into office life as well as the available perks and benefits.

Although fairly minimal for now, the new Culture page paves the way for introducing more unique content in the future.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/culture.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/culture.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/culture.png">
</picture>

### Flexible applications
We also updated the job application to accommodate companies that want to add custom questions or double check visa and location requirements. This modal is shipped across the entire platform, even outside the new profiles.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/appmodal.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/appmodal.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/appmodal.png">
</picture>

### Mirrored editing
The new Edit Mode allows users to swiftly switch between viewing the published state of their profile and making edits to it. The header and navigation remains constant so users never lose context. The edit forms also saw a significant overhaul, keeping to a consistent and recognizable set of patterns across all pages.

<picture>
  <source srcset="/assets/img/{{ page.imgfolder }}/edit.webp" type="image/webp" />
  <source srcset="/assets/img/{{ page.imgfolder }}/edit.png" type="image/png" />
  <img src="/assets/img/{{ page.imgfolder }}/edit.png">
</picture>

## Conclusion

Since its launch, we have seen a steady 3x user signup and application conversions versus the old profile. We also saw significantly more engagement (follows, visits, shares).

This redesign laid the groundwork for future improvements, which included my projects at <a href="../work/data-at-angellist.html">Company Data</a>, and contributed the first batch of components to the AngelList design system, Halo.

