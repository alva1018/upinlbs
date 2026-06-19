<template>
  <section class="technical-subforums content">
    <h1 class="content-title">Technical Sub-forums</h1>
    <p class="intro-text">
      UPINLBS 2026 will feature ten technical sessions around next-generation
      positioning, navigation, and spatial intelligence. Detailed chairs,
      speakers, and presentation schedules will be announced later.
    </p>

    <div class="session-grid">
      <article
        v-for="session in sessions"
        :key="session.number"
        class="session-card"
      >
        <p class="session-kicker">Session {{ session.number }}</p>
        <h2>{{ session.theme }}</h2>
      </article>
    </div>
  </section>
</template>

<script setup>
const sessions = [
  {
    number: 1,
    theme: "Quantum and Resilient PNT for Next-Generation Navigation",
  },
  {
    number: 2,
    theme: "Data-Driven Indoor Positioning and Spatial Intelligence",
  },
  {
    number: 3,
    theme: "Visual SLAM and 3D Indoor Environment Reconstruction",
  },
  {
    number: 4,
    theme: "Magnetic, Acoustic, and RF Sensing for Indoor Localization",
  },
  {
    number: 5,
    theme: "5G/6G Positioning and Integrated Communication-Sensing",
  },
  {
    number: 6,
    theme: "Multi-Modal Sensor Fusion for Robust Autonomous Navigation",
  },
  {
    number: 7,
    theme: "LLM-Enabled Navigation and Human-Centric Spatial AI",
  },
  {
    number: 8,
    theme: "Humanoid Robots, Embodied Intelligence, and Collaborative Agents",
  },
  {
    number: 9,
    theme: "Security, Privacy, and Trustworthy Location-Based Services",
  },
  {
    number: 10,
    theme:
      "PNT for Intelligent Transportation, Low-Altitude Mobility, and Extreme Environments",
  },
];
</script>

<style scoped>
.technical-subforums {
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

.intro-text {
  max-width: 900px;
  margin: -8px auto 32px;
  color: var(--color-text-muted);
  font-size: 18px;
  line-height: 1.7;
  text-align: center;
}

.session-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.session-card {
  min-height: 150px;
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 5px solid var(--color-primary);
  border-radius: 8px;
  box-shadow: 0 12px 32px var(--color-shadow);
}

.session-card:nth-child(2n) {
  border-left-color: var(--color-accent);
}

.session-kicker {
  margin: 0 0 10px;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.session-card h2 {
  margin: 0;
  color: var(--color-primary-strong);
  font-size: 22px;
  line-height: 1.35;
}

@media (max-width: 768px) {
  .session-grid {
    grid-template-columns: 1fr;
  }

  .intro-text {
    text-align: left;
  }
}
</style>
