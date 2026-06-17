<template>
  <section class="banner" aria-label="UPINLBS 2026 conference overview">
    <img src="../../public/img/banner.jpg" alt="Hefei conference banner" />
    <div class="banner-overlay"></div>
    <div class="banner-content">
      <p class="eyebrow">IEEE International Conference</p>
      <h1>
        The 10th International Conference on Ubiquitous Positioning, Indoor
        Navigation and Location-Based Services
      </h1>
      <div class="conference-name">UPINLBS 2026</div>
      <div class="banner-meta">
        <span>November 6-8, 2026</span>
        <span>Hefei, China</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: min(var(--container-width), calc(100% - 48px));
  min-height: 430px;
  margin: 28px auto 0;
  overflow: hidden;
  color: #fff;
  background: var(--color-primary-strong);
  border-radius: 8px;
  box-shadow: 0 24px 54px rgba(8, 39, 68, 0.2);
}

.banner img,
.banner-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.banner img {
  object-fit: cover;
}

.banner-overlay {
  background:
    linear-gradient(90deg, rgba(8, 39, 68, 0.92) 0%, rgba(18, 58, 99, 0.75) 48%, rgba(8, 39, 68, 0.22) 100%),
    linear-gradient(180deg, rgba(8, 39, 68, 0.1), rgba(8, 39, 68, 0.45));
}

.banner-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 820px;
  min-height: 430px;
  padding: 56px;
}

.eyebrow {
  margin-bottom: 12px;
  color: #f6d995;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  max-width: 780px;
  margin-bottom: 18px;
  font-size: clamp(31px, 4.2vw, 54px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: 0;
}

.conference-name {
  margin-bottom: 22px;
  color: #fff;
  font-size: clamp(22px, 2.5vw, 34px);
  font-weight: 760;
}

.banner-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.banner-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 8px 14px;
  color: #fff;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 6px;
}

@media (max-width: 768px) {
  .banner {
    width: min(100% - 32px, var(--container-width));
    min-height: 390px;
    margin-top: 20px;
  }

  .banner-content {
    min-height: 390px;
    padding: 32px;
  }
}

@media (max-width: 520px) {
  .banner {
    width: min(100% - 24px, var(--container-width));
    min-height: 420px;
  }

  .banner-content {
    min-height: 420px;
    padding: 24px;
  }

  .banner-meta {
    flex-direction: column;
  }
}
</style>
