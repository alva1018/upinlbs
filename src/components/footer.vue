<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-organizers">
        <div class="organizer-group">
          <p class="group-label">Organizer</p>
          <p>PolyU-Hefei Technology and Innovation Research Institute</p>
        </div>

        <div class="organizer-group">
          <p class="group-label">Local Organizer</p>
          <p>Anhui University</p>
        </div>

        <div class="organizer-group">
          <p class="group-label">Co-organizers</p>
          <p>
            Hong Kong Polytechnic University; State Key Laboratory of CNS/ATM,
            Beihang University; Key Laboratory of Intelligent Computing and
            Signal Processing of Ministry of Education, Anhui University; Hefei University of Technology;
          </p>
        </div>
      </div>

      <div class="primary-organizer-logo" aria-label="Organizer logo">
        <img
          src="/img/polyu-hefei-logo-hori.png"
          alt="PolyU-Hefei Technology and Innovation Research Institute"
        />
      </div>

      <div class="partner-logos" aria-label="Co-organizer logos">
        <!-- <img src="/img/school-1.png" alt="The Hong Kong Polytechnic University" /> -->
        <img src="/img/anhui-university-logo.png" alt="Anhui University" />
        <img
          src="/img/beihang-logo.png"
          alt="State Key Laboratory of CNS/ATM, Beihang University"
        />
        <img src="/img/hfut-logo.png" alt="Hefei University of Technology" />
        <img
          src="/img/key-lab-logo.png"
          alt="Key Laboratory of Intelligent Computing and Signal Processing of Ministry of Education, Anhui University"
        />
      </div>

      <p class="contact-line">
        Contact:
        <a href="mailto:contact@upinlbs2026.com">contact@upinlbs2026.com</a>
      </p>

      <p>Copyright &copy; 2026 UPINLBS 2026. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  color: rgba(255, 255, 255, 0.88);
  background: var(--color-primary-strong);
}

.footer-content {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
}

.footer p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.footer-organizers {
  display: grid;
  gap: 14px;
  max-width: 980px;
  margin: 0 auto 22px;
}

.organizer-group p {
  color: rgba(255, 255, 255, 0.84);
}

.organizer-group .group-label {
  margin-bottom: 3px;
  color: #fff;
  font-size: 13px;
  font-weight: 760;
  text-transform: uppercase;
}

.primary-organizer-logo {
  display: flex;
  justify-content: center;
  margin: 22px auto 16px;
}

.primary-organizer-logo img {
  width: min(100%, 360px);
  max-height: 82px;
  object-fit: contain;
  padding: 10px 16px;
  background: #fff;
  border-radius: 8px;
}

.partner-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 16px auto 24px;
}

.partner-logos img {
  max-width: 168px;
  max-height: 70px;
  object-fit: contain;
  padding: 8px 12px;
  background: #fff;
  border-radius: 8px;
}

.partner-logos img:nth-child(2),
.partner-logos img:nth-child(3),
.partner-logos img:nth-child(4),
.partner-logos img:nth-child(5) {
  width: 70px;
  height: 70px;
}

.contact-line {
  margin: 0 0 14px !important;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 680;
}

.contact-line a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 640px) {
  .footer-content {
    width: min(100% - 24px, var(--container-width));
    padding: 24px 0;
  }

  .partner-logos {
    gap: 10px;
  }

  .primary-organizer-logo {
    margin: 18px auto 14px;
  }

  .primary-organizer-logo img {
    width: min(100%, 300px);
    max-height: 72px;
    padding: 8px 12px;
  }

  .partner-logos img {
    max-width: 142px;
    max-height: 62px;
  }

  .partner-logos img:nth-child(2),
  .partner-logos img:nth-child(3),
  .partner-logos img:nth-child(4),
  .partner-logos img:nth-child(5) {
    width: 62px;
    height: 62px;
  }
}
</style>
