---
title: American Cancer Society
company: IBM

imgfolder: acs
cover: cover.jpg
---

In April 2016, IBM and the American Cancer Society announced a partnership to create an AI mobile app for those fighting cancer.

## The Challenge
Despite readily accessible resources on cancer today, <a href="https://www.ncbi.nlm.nih.gov/pubmed/25180371" target="_blank">numerous</a> <a href="https://www.ncbi.nlm.nih.gov/pubmed/12923796" target="_blank">studies</a> still show concern that lay understanding of cancer is suboptimal. Patients and their caregivers lack the medical framework to fully comprehend and manage their cancer.

<!-- <blockquote class="hasQuotes">
  <p>Information acquired [in the 100 days following diagnosis] shapes and defines patients' perspective about their condition.</p>
    <cite>
      <div>Weisman AD, Worden JW</div>
      <div>The existential plight in cancer: significance of the first 100 days.</div>
    </cite>
</blockquote> -->

In order to improve patients' understanding of their cancer, ACS and IBM saw an opportunity to combine powerful resources from both sides: ACS's massive database of cancer knowledge and IBM's artificial intelligent features, widely personified as "Watson".

The mission was to build a consumer-facing mobile app that empowers patients and caregivers to be more educated about their cancer.

## Process

I was the sole product designer of an early development team in Oct 2016 and worked alongside my project lead and three user researchers. We finished handoff to the production team in February 2017.

## The Cancer Journey

Nearly 40% of men and women in the US will be diagnosed with cancer within their lifetime. Each patient stands to undergo the most emotionally and physically significant experience they will ever have.

To understand this experience, we interviewed 8 patients, 15 caregivers, and 43 healthcare professionals ranging between oncologists, nurses, and medical assistants.

<figure class="js--zoom">
  <img src="../assets/img/acs/cancerjourney.svg" alt="User cancer journey" />
  <figcaption>The cancer journey at a high level</figcaption>
</figure>

After gaining a more sophisticated understanding of the cancer journey, we derived a few key insights:

### Patients' caregivers were typically their family members

Of all the patients we spoke to, very few were able to afford a licensed caregiver. Instead, most caregivers were the patient's spouse or children, who didn't have a medical background.

They often coped with their sense of helplessness by becoming the primary researcher and compiling cancer information on the patient's behalf.

### Doctors remained the preferred source of information

Despite an increasing variety and volume of cancer resources through the internet, patients still preferred to seek answers from their doctors because they were able to provide the most relevant and credible answers.

And even when patients expressed concern about their doctor's judgement, second opinions still came from other doctors.

### Patients had to repeat conversations with their doctor

Caregivers often accompanied patients to their oncology appointments in order to take copious notes as well as record their consultations. They would then take the information home, review and research it, and come back with more questions.

## The Solution

We tested early concepts with an additional 4 more patients and 3 caregivers, all of whom have experienced cancer treatment.

In an environment with a wealth of knowledge but no medical degree, both patients and caregivers struggled to take full advantage of doctor consultations. We ultimately designed a digital counterpart in the room that would make discussing complex topics more accessible and informative.

### Focus less on taking notes, more on the conversation

Doctors today are already accustomed to patients taping their sessions in order to digest the heavy amounts of information that they talk about. We piggybacked this behavior by providing live speech-to-text transcription.

<figure>
  <video loop autoplay controls name="Users can record the conversation at the doctor's office, take photos without stopping the tape, and view the speech-to-text transcription in real-time." poster="../assets/img/acs/proto_record_poster.jpg" src="../assets/img/acs/proto_record.mov" height="500px"></video>
  <figcaption>Users can record the conversation at the doctor's office, take photos without stopping the tape, and view the speech-to-text transcription in real-time.</figcaption>
</figure>

### Search through any conversation

Currently, patients keep archives of voice memos or a binder of notes as traceable receipts for important discussions they're afraid of forgetting.

But as conversations are transcribed to text in the app, each word is indexed so that *users can search through them at any time and no discussion is ever lost.*

Search also suggests the most incidental keywords across all conversations so patients can find recordings by theme.

<figure class="js--zoom">
  <img src="../assets/img/acs/screen-search.svg" alt="Users can store, track, and search through every conversation.">
  <figcaption>Users can store, track, and search through every conversation.</figcaption>
</figure>

### Rewind and review key topics

Once a patient leaves the doctor's office, they often want to revisit the conversation and do personal research on major topics. But even with speech-to-text, reviewing hours of transcripts is still tedious.

By training on the vast ACS database, *Watson can recognize and highlight keywords of interest in the transcript and break down the recording into sections of major topics so patients have digest the content quicker.*

<figure class="js--zoom">
  <img src="../assets/img/acs/screen-transcript.svg" alt="Watson can recognize and highlight keywords of interest in the transcript and break down the recording into sections of major topics so patients have digest the content quicker.">
</figure>

*The highlighted keywords also serve as faster, in-context search queries* by allowing users to click on them and be directed to ACS-approved resources on the phrase.

The aim for this process is to reduce the frequent "I don't know what I don't know" phenomenon. Traditionally, patients have to reconstruct what they took away from their doctor into a completed question to ask elsewhere. Instead, we lower the research barrier and use the recorded conversation itself as a search generator.

<figure>
  <video loop autoplay controls name="After the appointment, users can review both the transcript and recording and dive into highlighted keywords that Watson recognizes from the ACS database." src="../assets/img/acs/proto_transcript.mov" height="500px"></video>
  <figcaption>After the appointment, users can review both the transcript and recording and dive into highlighted keywords that Watson recognizes from the ACS database.</figcaption>
</figure>

## Outcome

Although both IBM and ACS stakeholders were excited with this direction, the partnership was ultimately put on hold and we hope that it returns from its hiatus in the near future.

We are happy, however, to have developed a collaborative relationship with ACS and their various facilities during our engagement so that design is able to connect with patients and caregivers on a regular basis.
