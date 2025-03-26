<template>
  <div>
    <Header :isHover="false" />

    <main class="company-section">
      <AboutUs />
    </main>

    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import Footer from '@/components/FooterComponent.vue';
import AboutUs from '@/components/AboutUs.vue';

export default {
  components: {
    Header: HomeHeader,
    Footer,
    AboutUs,
  },
};
</script>

<style scoped>
.company-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
</style>