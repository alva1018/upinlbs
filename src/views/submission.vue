<template>
  <div class="submission-page page-shell">
    <h1 class="page-title">Paper Submission and Publication</h1>

    <section class="section">
      <p class="section-text">
        <strong>Publication:</strong> All peer-reviewed and registered full 
        papers (up to 6 pages) presented at UPINLBS 2026 are eligible for 
        inclusion in the IEEE Xplore Digital Library and indexing by EI Compendex.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Call for Papers</h2>
      <p class="section-text">
        UPINLBS 2026 invites original research contributions on ubiquitous
        positioning, indoor navigation, location-based services, spatial
        intelligence, next-generation positioning and navigation systems,
        humanoid robots and embodied intelligence, quantum navigation, 3D indoor
        sensing and reconstruction, smart and collaborative agents, and 5G/6G
        positioning technologies.
      </p>
    </section>

    <section class="submission-grid">
      <div class="submission-option">
        <h2 class="option-title">Full paper submission</h2>
        <p class="option-text">
          Authors are requested to submit an original full paper as a PDF in
          <strong><a
            href="https://www.isprs.org/tc4-symposium2024/assets/files/ISPRSguidelines_authors_camera_ready_manuscript_final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE format for final papers</a></strong>,
          up to 6 pages. Accepted and registered full papers presented at the
          conference are eligible for inclusion in the IEEE Xplore Digital
          Library and indexing by EI Compendex.
        </p>
      </div>

      <div class="submission-option">
        <h2 class="option-title">Abstract-only submission</h2>
        <p class="option-text">
          Authors are invited to submit an abstract-only contribution as a PDF
          of 1-2 pages. After acceptance, authors will be invited to present
          their work as an oral, poster, or demo presentation. Abstract-only
          submissions will not be published in the proceedings.
        </p>
      </div>

      <!-- <div class="submission-option wide">
        <p class="option-text">
          Authors of selected papers might be invited to extend their paper for
          possible publication in ISPRS Journals.
        </p>
      </div> -->
    </section>

    <section class="guidelines-grid">
      <div class="section">
        <h2 class="section-title">Author Guidelines</h2>
        <ul class="guideline-list">
          <li>Submissions must be written in English.</li>
          <li>Submitted work must be original and unpublished.</li>
          <li>
            At least one author of each accepted contribution should register
            for the conference and present the work.
          </li>
          <li>
            The peer-reviewing process for UPINLBS 2026 will be managed through
            Microsoft CMT.
          </li>
        </ul>
      </div>

      <div class="section">
        <h2 class="section-title">Submission Guidelines</h2>
        <ul class="guideline-list">
          <li>Full papers must be submitted as PDF files in IEEE format.</li>
          <li>Full papers are limited to 6 pages.</li>
          <li>Abstract-only submissions must be 1-2 pages.</li>
          <li>
            Authors should review all title, abstract, author, affiliation, and
            file information before clicking Submit in CMT.
          </li>
        </ul>
      </div>
    </section>

    <section class="guidelines-grid">
      <div class="section">
        <h2 class="section-title">Where to Submit</h2>
        <p class="section-text">
          The CMT submission link will be available shortly.
        </p>
      </div>

      <div class="section">
        <h2 class="section-title">How to Submit</h2>
        <p class="section-text">
          Authors will need a Microsoft CMT account before submitting a paper or
          abstract. Please refer to the
          <a
            href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMT account creation guide</a
          >
          and the
          <a
            href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMT author submission guide</a
          >.
        </p>
      </div>
    </section>

    <section class="content-item">
      <h2 class="content-item-title">Important Dates</h2>
      <div class="content-item-s1">
        <p>Abstract Submission Deadline</p>
        <p><span>September 15, 2026</span></p>
        <p>Full Paper Submission Deadline</p>
        <p><span>September 30, 2026</span></p>
        <p>Notification of Acceptance</p>
        <p><span>October 15, 2026</span></p>
        <p>Final Paper Submission Deadline</p>
        <p><span>October 31, 2026</span></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.submission-page {
  display: grid;
  gap: 24px;
}

.section {
  padding: 24px 28px;
}

.section-text {
  margin-bottom: 0;
}

.submission-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.submission-option {
  min-height: 100%;
}

.submission-option.wide {
  grid-column: 1 / -1;
}

.option-title {
  margin-bottom: 12px;
  color: var(--color-primary-strong);
  font-size: 22px;
}

.guideline-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 20px;
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.75;
}

@media (max-width: 780px) {
  .submission-grid,
  .guidelines-grid {
    grid-template-columns: 1fr;
  }
}
</style>
