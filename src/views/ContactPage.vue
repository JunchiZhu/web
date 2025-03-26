<template>
  <div>
    <Header :isHover="false" />

    <main class="contact-section">
      <ContactHero />
    </main>

    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import Footer from '@/components/FooterComponent.vue';
import ContactHero from '@/components/ContactHero.vue';

export default {
  components: {
    Header: HomeHeader,
    Footer,
    ContactHero,
  },
};
</script>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
</style>
