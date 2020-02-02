---
title: Company Data
company: AngelList

imgfolder: data-angellist
cover: newsletter.webp
---

Shortly after launching Company Profiles, my team was renamed Company Data and doubled down on data acquisition and data hygiene efforts to support the product we'd just shipped.

While I can't share the results of this work, I can speak to the public design experiments we ran.

## Newsletter spotlight
Partnering with our Email Marketing Manager, we promoted and ran an incentives program for companies that completely fill out their profiles. Each week for 3 months, six qualified companies were featured in our newsletter to 4.7M readers.

The resulting traffic to their profiles averaged 7x their organic traffic and caused huge spikes in applications to their open jobs.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/newsletter.webp" />
</figure>

## Data collection modal
To improve data completeness and freshness, we served up a modal to collect information from recruiters outside of the profile editing flow. We experimented with the amount and type of information being asked for as well as the frequency that the prompt appears. We also integrated the ability to confirm data we collected from 3rd-party sources.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/data-modal.webp" />
</figure>

## Resumer parser
With over 4.5 million community-managed profiles, we constantly wrangled with junk and spam. 70% of these profiles came from our resume parser, which created a new profile for every unindexed company found on a candidate's resume. As a result, we explored prompting for the URL of these companies at various locations and different levels of interference.