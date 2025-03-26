<template>
  <div class="news-page">
    <Header :isHover="false" />

    <!-- Hero Section with Cover Image -->
    <div class="hero-section">
      <div class="hero-overlay">
        <h1 class="hero-title">产品定价</h1>
      </div>
    </div>

    <main class="main-section">
      <Pricing />
    </main>

    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import Footer from '@/components/FooterComponent.vue';
import Pricing from '@/components/ProductPricing.vue';

export default {
  components: {
    Header: HomeHeader,
    Footer: Footer,
    Pricing,
  },
};
</script>

<style scoped>
.news-page {
  width: 100%;
  color: #ffffff;
  background-color: #121420;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 32, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

.hero-title {
  font-size: 8rem;
  color: white;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: 300;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5vh 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
  }
  
  .hero-section {
    height: 40vh;
  }
}
</style>
