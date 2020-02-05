---
title: Detecting breast cancer using AI
company: IBM Watson

imgfolder: ca-breast
cover: cover.webp
---

In a world short on doctors, Care Advisor for Breast uses computer vision to read mammograms and detect breast cancer.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/cover.webp" />
</figure>

## The Challenge

Screening mammography is the most effective non-invasive procedure used to detect early signs of breast cancer. However, *there is a global shortage of radiologists and an increasing demand for mammograms.*

Our high level goals were to:
- Investigate breast imaging practices in the US and UK markets
- Produce a solution using IBM Watson's AI services

## My Role

I led the user research and design of the project from 2017 to 2018. I collaborated with a product manager as well as the AI research, regulatory, and engineering teams.

I stopped working at the company once we submitted our solution for clinical trials.

## Key Research Insights

During the project's inaugural 6 months, the PM and I conducted contextual inquiries at 5 breast imaging institutions with 22 total participants.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/research.webp" />
</figure>

### 1. Screening mammograms are very tedious

Radiologists perform tasks far beyond screening mammograms and only 5-10% of them have cause for further investigation. As a result, radiologists have to wade through a high and monotonous volume of routine cases in order to find the small handful with signs of cancer that they can't afford to miss.

### 2. The breast imaging community has "suffered" from AI already

Computer-aided detection (CAD) was an initiatve to make sure nothing was ever missed in the mammogram by applying AI to point out areas of suspicion. This technology is widely enforced but negatively received.

Only 20% of the radiologists we observed glanced at the CAD markings before making their own interpretation and most agree that it was like reading with a med student.

### 3. The US market was short on specialists, not generalists

American breast imaging centers are actually well staffed with radiologists when compared to the rest of world. Rather, they suffer from a shortage of radiologists who specialize in breast imaging.

Only 10% of American radiologists complete a fellowship focusing on breast imaging, meaning more uncertainty in complex cases.


## The Solution

After consistent feedback on more than 10 concepts, we green lit what would become Care Advisor for Breast.

*This solution used the computer vision capabilities of IBM Watson to automate up to 95% of mammogram studies that are completely normal.* This means that if any evidence of breast cancer is detected, it is queued to be read by a human radiologist.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/cover.webp" />
</figure>

### Writing reports
Comparing the reporting styles of more than 30 radiologists, I observed a wide variety of stylistic choices ranging from meticulous detailing to omitting mention of benign findings altogether.

In order to save annotation costs for ML training, Watson discards irrefutably benign findings from the report. For any that are described, it is explicit about the finding's morphology and location to the extent that it's counterpart in the mammogram image is clear.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/findings.webp" />
</figure>

### Considering prior mammograms
There is no way to know what is truly normal within a woman's breast because many patients have natural biological markers that are unique to them.

Watson imitates good human practices by preferring mammograms that are at least 2 years old so that changes are more blatant but no older than 5 years old so that it remains relevant.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/priors.webp" />
</figure>

### Flagging higher risk women
Depending on personal and family history of breast cancer, as well as rare genetic mutations, some women are predisposed to develop breast cancer.

These patients would receive additional considerations (supplementary MRI, shorter intervals between screenings, etc) in accordance to each institution protocol.

<figure>
  <img src="../assets/img/{{ page.imgfolder }}/highrisk.webp" />
</figure>

## Conclusion
My time up until my departure has been overwhelmingly spent with the research and engineering teams to design a machine learning algorithm, decide how to collect and annotate data in order to train the algorithm, and determine the way its outputs translate into real product application.

The first release of Care Advisor for Breast began testing at hospitals and undergoing regulatory review by the FDA in late 2018.
