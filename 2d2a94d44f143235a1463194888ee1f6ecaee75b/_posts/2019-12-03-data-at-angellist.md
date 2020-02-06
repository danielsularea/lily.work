---
title: Data at AngelList
company: AngelList

imgfolder: data-angellist
cover: data-modal.webp
---

Shortly after launching <a href="../work/angellist-company-profiles.html">Company Profiles</a>, my team was renamed Company Data and doubled down on data acquisition and data hygiene efforts to support the product we'd just shipped.

While I can't share the results of this work because it is an ongoing effort, I can speak to some of the public design experiments we've run.

## Data collection modal
To improve data completeness and freshness, we served up a modal to collect information from recruiters outside of the profile editing flow. We experimented with the amount and type of information being asked for as well as the frequency that the prompt appears. We also integrated the ability to confirm data we collected from 3rd-party sources.

<figure>
  <img src="/assets/img/{{ page.imgfolder }}/data-modal.webp" />
</figure>

## Newsletter spotlight
Partnering with our Email Marketing Manager, we promoted and ran an incentives program for companies that completely fill out their profiles. Each week for 3 months, six qualified companies were featured in our newsletter to 4.7M readers.

The resulting traffic to their profiles averaged 7x their organic traffic and caused huge spikes in applications to their open jobs.

<figure>
  <img src="/assets/img/{{ page.imgfolder }}/newsletter.webp" />
</figure>

## Confirm new companies
With over 4.5 million community-managed profiles, we constantly wrangled with junk and spam. 70% of these profiles came from company autocomplete and resume parser, which created a new profile for every unindexed company entered. As a result, we explored adding a confirmation step at various locations and different levels of interference.

<figure>
  <img src="/assets/img/{{ page.imgfolder }}/resume-parser.webp" />
</figure>

## Other projects
While most of my design work are shown, I also worked on other initiatives towards company data.

### Company profile promotionals
In the months following the new profile release, I continued to experiment with different ways to draw recruiters into the edit flow. This included a spread of in-product placements and email drip campaigns.

### Data completeness score
In order to measure ourselves against something, we had to build a calculation on every profile that took into consideration its overall data completion, the variety of data, and data freshness. I worked with engineering to iterate over several variations of this scoring system.

