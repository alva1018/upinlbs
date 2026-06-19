<template>
  <section class="keynote-programmes content">
    <h1 class="content-title">Keynote Programmes</h1>
    <p class="intro-text">
      Keynote sessions are scheduled for the morning of 7 November 2026. Topics
      will be announced later.
    </p>

    <div class="keynote-list">
      <article v-for="keynote in keynotes" :key="keynote.number" class="keynote-card">
        <div class="keynote-time">
          <span class="date">7 November 2026</span>
          <span class="time">{{ keynote.time }}</span>
        </div>
        <div class="keynote-details">
          <p class="keynote-label">Keynote {{ keynote.number }}</p>
          <h2>{{ keynote.speaker }}</h2>
          <div class="detail-row">
            <span>Topic</span>
            <strong>To be determined</strong>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const keynotes = [
  {
    number: 1,
    time: "9:00-9:45",
    speaker: "Prof. Chuang Shi (施闯 院士), Beihang University, China",
  },
  {
    number: 2,
    time: "9:45-10:30",
    speaker: "Prof. Allison N. Kealy, Swinburne University of Technology，Australia",
  },
  {
    number: 3,
    time: "10:45-11:30",
    speaker: "Prof. Wu Chen, The Hong Kong Polytechnic University, Hong Kong",
  },
];
</script>

<style scoped>
.keynote-programmes {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

.intro-text {
  max-width: 820px;
  margin: -8px auto 32px;
  color: var(--color-text-muted);
  font-size: 18px;
  line-height: 1.7;
  text-align: center;
}

.keynote-list {
  display: grid;
  gap: 18px;
}

.keynote-card {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;
  gap: 26px;
  padding: 26px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 5px solid var(--color-primary);
  border-radius: 8px;
  box-shadow: 0 12px 32px var(--color-shadow);
}

.keynote-card:nth-child(2n) {
  border-left-color: var(--color-accent);
}

.keynote-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding-right: 24px;
  border-right: 1px solid var(--color-border);
}

.keynote-time .date {
  color: var(--color-text-muted);
  font-size: 15px;
}

.keynote-time .time {
  color: var(--color-primary-strong);
  font-size: 26px;
  font-weight: 780;
  line-height: 1.2;
}

.keynote-label {
  margin: 0 0 8px;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.keynote-details h2 {
  margin: 0 0 18px;
  color: var(--color-primary-strong);
  font-size: 26px;
  line-height: 1.3;
}

.detail-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 16px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.detail-row span {
  font-weight: 720;
}

.detail-row strong {
  color: var(--color-primary-strong);
  font-weight: 720;
}

@media (max-width: 768px) {
  .keynote-card {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .keynote-time {
    padding-right: 0;
    padding-bottom: 18px;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .intro-text {
    text-align: left;
  }
}
</style>
