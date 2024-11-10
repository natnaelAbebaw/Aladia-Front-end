<template>
  <div class="app">
    <div ref="topbar">
      <TopBar />
    </div>
    <MiddleLinksBar :isStickyTopBar="isStickyTopBar" />
    <Hero :isNotStickyCardAfterFooter="isNotStickyCardAfterFooter" />
    <Main />
    <div ref="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  ssr: false,
});
import TopBar from "./components/TopBar.vue";
import MiddleLinksBar from "./components/MiddleLinksBar.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";

import { ref, onMounted, onUnmounted } from "vue";
const isNotStickyCardAfterFooter = ref(false);

const isStickyTopBar = ref(false);

const topbar = ref(null);
const footer = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isStickyTopBar.value = !entry.isIntersecting;
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  const observer2 = new IntersectionObserver(
    ([entry]) => {
      isNotStickyCardAfterFooter.value = !entry.isIntersecting;
      console.log("isNotStickyCardAfterFooters", entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  if (topbar.value) observer.observe(topbar.value);
  if (footer.value) observer2.observe(footer.value);

  onUnmounted(() => {
    if (topbar.value) observer.unobserve(topbar.value);
    if (footer.value) observer2.unobserve(footer.value);
  });
});
</script>

<style>
.app {
}
</style>
