<template>
  <footer class="footer">
    <div class="footer-content">
      <p>Copyright &copy; 2026 Hong Kong Polytechnic University. All rights reserved.</p>
      <p class="cmt-ack">
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure cloud
        services as well as for software development and support.
      </p>
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
  padding: 28px 0;
  text-align: center;
}

.footer p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.cmt-ack {
  max-width: 980px;
  margin: 10px auto 0 !important;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px !important;
}

@media (max-width: 640px) {
  .footer-content {
    width: min(100% - 24px, var(--container-width));
    padding: 24px 0;
  }
}
</style>
