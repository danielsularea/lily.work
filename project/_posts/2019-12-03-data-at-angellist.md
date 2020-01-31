---
layout: post
title: Data at AngelList
company: AngelList
---

Shortly after launching Company Profiles, my team was renamed Company Data and doubled down on data acquisition efforts to support the product we'd just shipped.

While I can't share the results of this work, I can speak to the public design experiments we ran.

## Newsletter spotlight
I partnered with our Email Marketing Manager to promote and run an incentives program for companies that completely fill out their profiles. Each week, six qualified companies would be featured in our newsletter to 4.7M readers.

The resulting traffic to those featured Company Profiles was huge and caused application spikes to their open jobs.

This program ran for 3 months in the newsletter.

## Resumer parser
With over 5 million profiles on AngelList and 90% of them community-managed, we constantly wrangled with data quality. 70% of this junk was suspected to come from our resume parser, which created a new Company Profile for every unindexed company found on a candidate's resume. As a result, we experimented with prompting the user for a URL before the profile creation began across different locations and inteference methods.

## Data confirmation modal