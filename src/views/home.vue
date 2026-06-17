<template>
  <div class="home content">
    <section class="welcome-grid">
      <div class="welcome-copy page-card">
        <p class="eyebrow">Welcome to UPINLBS 2026</p>
        <h2 class="title">Next Generation Positioning</h2>
        <p class="content-text">
          Ubiquitous positioning is now playing a significant role in AI
          applications. Spatially aware AI agents are getting smarter while they
          are interacting with people. The research area of Location-Based
          Service (LBS) is transitioning to a new era of Spatially Aware AI
          Agents (SA3).
        </p>
        <p class="content-text">
          The 10th IEEE International Conference on Ubiquitous Positioning,
          Indoor Navigation and Location-Based Services (UPINLBS 2026) will
          center on the theme "Next Generation Positioning," driving
          advancements in ubiquitous positioning through emerging technologies,
          intelligent systems, and innovative applications. As a key forum for
          scholarly exchange and research dissemination, UPINLBS has
          successfully convened nine prior editions in countries such as
          Finland, the United States, Australia, and China.
        </p>
      </div>

      <aside class="quick-facts page-card" aria-label="Conference quick facts">
        <div class="fact-item">
          <span>Date</span>
          <strong>November 6-8, 2026</strong>
        </div>
        <div class="fact-item">
          <span>Location</span>
          <strong>Hefei, China</strong>
        </div>
        <div class="fact-item">
          <span>Publication</span>
          <strong>IEEE Xplore and EI Compendex</strong>
        </div>
      </aside>
    </section>

    <section class="page-card">
      <h2 class="section-title">About the Conference</h2>
      <p class="content-text">
        Hefei, a national innovation hub and a core driver of scientific and
        technological progress in the Yangtze River Delta region, is vigorously
        advancing quantum information, artificial intelligence, new energy
        vehicles, and intelligent manufacturing. Home to leading research
        institutions such as the University of Science and Technology of China
        (USTC) and pioneering enterprises including Origin Quantum, QuantumCTek,
        and BOE Technology, Hefei serves as a natural testbed for spatial
        intelligence and next-generation positioning technologies.
      </p>
      <p class="content-text">
        UPINLBS 2026 will spotlight Next Generation Positioning and Navigation
        Systems, spatial intelligence, humanoid robots and embodied
        intelligence. The conference will explore cutting-edge topics including
        quantum navigation system, 3D indoor environment sensing and
        reconstruction, smart and collaborative agents, and 5G/6G. We warmly
        invite scholars, engineers, and industry professionals worldwide to
        submit contributions and participate in the event.
      </p>
      <p class="publication-note">
        <strong>Publication:</strong> All peer-reviewed and registered full
        papers (up to 6 pages) presented at UPINLBS 2026 will be included in
        the IEEE Xplore Digital Library and indexed by EI Compendex.
      </p>
    </section>

    <div class="content-button">
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

      <section class="content-item">
        <h2 class="content-item-title">Past Conferences</h2>
        <div class="content-item-s2">
          <p>
            <a href="https://upinlbs2025.ubinp.com/" target="_blank" rel="noopener noreferrer">
              UPINLBS 2025
            </a>
          </p>
          <p>UPINLBS 2024</p>
          <p>UPINLBS 2022</p>
          <p>UPINLBS 2019</p>
          <p>UPINLBS 2018</p>
          <p>UPINLBS 2016</p>
          <p>UPINLBS 2014</p>
          <p>UPINLBS 2012</p>
          <p>UPINLBS 2010</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  gap: 24px;
}

.welcome-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 24px;
}

.eyebrow {
  margin-bottom: 10px;
  color: var(--color-accent);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quick-facts {
  display: grid;
  align-content: center;
  gap: 16px;
  background: var(--color-primary);
}

.fact-item {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.fact-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.fact-item span,
.fact-item strong {
  display: block;
}

.fact-item span {
  color: rgba(255, 255, 255, 0.68);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.fact-item strong {
  margin-top: 6px;
  color: #fff;
  font-size: 20px;
  line-height: 1.35;
}

.publication-note {
  margin: 22px 0 0;
  padding: 18px 20px;
  color: var(--color-primary-strong);
  background: var(--color-accent-soft);
  border-left: 4px solid var(--color-accent);
  border-radius: 6px;
}

@media (max-width: 920px) {
  .welcome-grid {
    grid-template-columns: 1fr;
  }
}
</style>
