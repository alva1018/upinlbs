<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const current = ref(["home"]);
const isMenuOpen = ref(false);

const items = [
  { key: "home", label: "HOME", title: "HOME" },
  {
    key: "generalinformation",
    label: "GENERAL INFORMATION",
    title: "GENERAL INFORMATION",
  },
  { key: "submission", label: "SUBMISSION", title: "SUBMISSION" },
  {
    key: "PROGRAMME",
    label: "PROGRAMME",
    title: "PROGRAMME",
    children: [
      { label: "Keynote Programmes", key: "keynoteProgrammes" },
      { label: "Technical Sub-forums", key: "technicalSubForums" },
      { label: "Poster Sessions", key: "posterSessions" },
    ],
  },
  { key: "venue", label: "VENUE", title: "VENUE" },
  { key: "registration", label: "REGISTRATION", title: "REGISTRATION" },
  { key: "sponsorship", label: "SPONSORSHIP", title: "SPONSORSHIP" },
];

const syncCurrentRoute = () => {
  const key = route.path === "/" ? "home" : route.path.replace("/", "");
  current.value = [key || "home"];
};

const jumpToRoute = ({ key }) => {
  isMenuOpen.value = false;
  router.push({ path: key === "home" ? "/" : `/${key}` });
};

watch(() => route.path, syncCurrentRoute, { immediate: true });
</script>

<template>
  <div class="navbar">
    <header class="header">
      <div
        class="logo-link"
        aria-label="PolyU-Hefei Technology and Innovation Research Institute"
      >
        <img
          class="logo-image"
          src="../../public/img/logo.png"
          alt="UPINLBS 2026"
        />
      </div>

      <nav class="desktop-menu" aria-label="Primary navigation">
        <a-menu
          v-model:selectedKeys="current"
          @click="jumpToRoute"
          mode="horizontal"
          :items="items"
        />
      </nav>

      <button
        class="hamburger"
        :class="{ open: isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span class="hamburger-icon"></span>
      </button>

      <nav v-if="isMenuOpen" class="mobile-menu" aria-label="Mobile navigation">
        <a-menu
          v-model:selectedKeys="current"
          @click="jumpToRoute"
          mode="inline"
          :items="items"
        />
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(216, 226, 236, 0.9);
  box-shadow: 0 10px 28px rgba(8, 39, 68, 0.08);
  backdrop-filter: blur(14px);
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(var(--container-width), calc(100% - 48px));
  height: var(--header-height);
  margin: 0 auto;
  gap: 24px;
}

.logo-link {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 0;
}

.logo-link:hover {
  background: transparent;
}

.logo-image {
  width: auto;
  height: 58px;
  display: block;
  filter: drop-shadow(0 4px 10px rgba(8, 39, 68, 0.12));
}

.desktop-menu {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  min-width: 0;
}

.hamburger {
  position: relative;
  display: none;
  width: 42px;
  height: 42px;
  padding: 0;
  cursor: pointer;
  background: var(--color-primary);
  border: 0;
  border-radius: 6px;
}

.hamburger-icon,
.hamburger-icon::before,
.hamburger-icon::after {
  position: absolute;
  left: 11px;
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger-icon {
  top: 20px;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: "";
  left: 0;
}

.hamburger-icon::before {
  top: -7px;
}

.hamburger-icon::after {
  top: 7px;
}

.hamburger.open .hamburger-icon {
  background: transparent;
}

.hamburger.open .hamburger-icon::before {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .hamburger-icon::after {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  padding: 10px 0;
  background: #fff;
  border: 1px solid var(--color-border);
  border-top: 0;
  box-shadow: 0 18px 32px rgba(8, 39, 68, 0.12);
}

:deep(.ant-menu) {
  flex: 1;
  justify-content: flex-end;
  color: var(--color-primary-strong);
  background: transparent;
  border-bottom: 0;
}

:deep(.ant-menu-horizontal) {
  line-height: 46px;
}

:deep(.ant-menu-title-content) {
  font-size: 13px;
  font-weight: 720;
  letter-spacing: 0;
}

:deep(.ant-menu-item),
:deep(.ant-menu-submenu-title) {
  border-radius: 6px;
}

:deep(.ant-menu-item-selected),
:deep(.ant-menu-submenu-selected > .ant-menu-submenu-title) {
  color: var(--color-primary-strong) !important;
  background: var(--color-primary-soft) !important;
}

:deep(.ant-menu-item-selected::after),
:deep(.ant-menu-submenu-selected::after) {
  border-bottom-color: var(--color-accent) !important;
}

@media (max-width: 1100px) {
  :deep(.ant-menu-title-content) {
    font-size: 12px;
  }
}

@media (max-width: 900px) {
  .header {
    width: min(100% - 32px, var(--container-width));
    height: 68px;
  }

  .logo-image {
    height: 50px;
  }

  .desktop-menu {
    display: none;
  }

  .hamburger {
    display: block;
  }

  :deep(.ant-menu) {
    display: block;
  }
}

@media (max-width: 420px) {
  .logo-image {
    height: 43px;
  }
}
</style>
