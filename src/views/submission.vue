<template>
  <div class="submission-page page-shell">
    <h1 class="page-title">Paper Submission and Publication</h1>

    <section class="section">
      <p class="section-text">
        <strong>Publication:</strong> All peer-reviewed and registered full
        papers (up to 6 pages) presented at UPINLBS 2026 will be included in
        the IEEE Xplore Digital Library and indexed by EI Compendex.
      </p>
    </section>

    <section class="submission-grid">
      <div class="submission-option">
        <h2 class="option-title">Full paper submission</h2>
        <p class="option-text">
          Authors are requested to submit a final paper in
          <a
            href="https://www.isprs.org/tc4-symposium2024/assets/files/ISPRSguidelines_authors_camera_ready_manuscript_final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE format for final papers</a
          >. Papers not accepted for IEEE Annals might be considered for the
          IEEE Archives. Accepted Annals submissions will have the opportunity
          to present at the conference as an oral presentation.
        </p>
      </div>

      <div class="submission-option">
        <h2 class="option-title">Abstract-only submission</h2>
        <p class="option-text">
          Authors are invited to submit an abstract (min 1 and max 2 pages
          without references) in free format. After acceptance, the authors will
          be invited to present their work (oral/poster/demo). The abstract on
          its own will not be published.
        </p>
      </div>

      <div class="submission-option wide">
        <p class="option-text">
          Authors of selected papers might be invited to extend their paper for
          possible publication in ISPRS Journals.
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

@media (max-width: 780px) {
  .submission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
