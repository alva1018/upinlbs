<template>
  <div class="sponsorship page-shell">
    <h1 class="page-title">Sponsors</h1>
    <section class="sponsor-grid" aria-label="Conference sponsors">
      <div class="sponsor-card">
        <img src="../../public/img/polyu-hefei-logo-hori.png" alt="Sponsor logo" />
      </div>
      <div class="sponsor-card">
        <img src="../../public/img//anhui-university-logo.png" alt="Sponsor logo" />
      </div>
      <div class="sponsor-card">
        <img src="../../public/img/China_Construction_Bank.svg" alt="Sponsor logo" />
      </div>
      <div class="sponsor-card">
        <img src="../../public/img/school-1.png" alt="Sponsor logo" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.sponsor-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  padding: 22px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 12px 32px var(--color-shadow);
}

.sponsor-card img {
  max-height: 88px;
  object-fit: contain;
}

@media (max-width: 900px) {
  .sponsor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .sponsor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
