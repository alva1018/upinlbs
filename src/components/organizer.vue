<template>
  <section class="organizer-section">
    <div class="organizer-inner">
      <p class="section-kicker">Hosted by</p>
      <div class="organizer-list">
        <a href="https://www.polyu.edu.hk/" target="_blank" rel="noopener noreferrer">
          <img src="../../public/img/school-1.png" alt="The Hong Kong Polytechnic University" />
        </a>
        <a
          href="https://polyu-hfri.com/polyU_hefei/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="polyuhfri-logo"
            src="../../public/img/school-2-footer.png"
            alt="PolyU-Hefei Technology and Innovation Research Institute"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.organizer-section {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 10px auto 0;
  padding: 34px 0 12px;
}

.organizer-inner {
  padding: 28px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.section-kicker {
  margin: 0 0 18px;
  color: var(--color-primary-strong);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.organizer-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 18px;
}

.organizer-list a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  padding: 22px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.organizer-list a:hover {
  background: #fff;
  box-shadow: 0 12px 28px rgba(13, 39, 67, 0.1);
}

.organizer-list img {
  display: block;
  width: 100%;
  max-width: 520px;
  max-height: 84px;
  object-fit: contain;
}

@media (max-width: 680px) {
  .organizer-section {
    width: min(100% - 24px, var(--container-width));
  }

  .organizer-list {
    grid-template-columns: 1fr;
  }
}
</style>
