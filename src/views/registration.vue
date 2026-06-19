<template>
  <div class="registration page-shell">
    <h1 class="page-title">Registration Fee</h1>
    <section class="registration-card">
      <table class="fee-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Registration</td>
            <td>2,000 CNY</td>
          </tr>
          <tr>
            <td>Student Registration</td>
            <td>1,000 CNY</td>
          </tr>
        </tbody>
      </table>
      <p class="registration-placeholder">
        The registration link will be available shortly.
      </p>
    </section>
  </div>
</template>

<style scoped>
.registration-card {
  max-width: 760px;
  margin: 0 auto;
  padding: 28px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 12px 32px var(--color-shadow);
}

.fee-table {
  border-collapse: collapse;
}

.fee-table th,
.fee-table td {
  padding: 18px 24px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.fee-table th {
  color: #fff;
  font-size: 15px;
  font-weight: 760;
  background: var(--color-primary);
}

.fee-table td {
  color: var(--color-text);
  font-size: 18px;
}

.fee-table td:last-child {
  color: var(--color-primary-strong);
  font-weight: 760;
}

.fee-table tr:last-child td {
  border-bottom: none;
}

.registration-placeholder {
  margin: 22px 0 0;
  color: var(--color-primary-strong);
  font-size: 17px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 560px) {
  .registration-card {
    padding: 18px;
  }

  .fee-table th,
  .fee-table td {
    padding: 14px 12px;
    font-size: 15px;
  }
}
</style>
