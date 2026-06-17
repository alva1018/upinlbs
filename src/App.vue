<script setup>
import { RouterView, useRoute } from "vue-router";
import topMenu from "./components/topMenu.vue";
import banner from "./components/banner.vue";
import organizer from "./components/organizer.vue";
import bottomFooter from "./components/footer.vue";

const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <topMenu />
    <main class="body-main">
      <banner />
      <RouterView />
      <organizer v-if="route.path !== '/sponsorship'" />
    </main>
    <bottomFooter />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--header-height);
}

.body-main {
  flex: 1;
  width: 100%;
  padding-bottom: 52px;
}

@media (max-width: 768px) {
  .wrapper {
    padding-top: 68px;
  }
}
</style>
