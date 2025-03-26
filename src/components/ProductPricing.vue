<!-- 定价方案 -->
<template>
  <section class="pricing">
    <div class="section-header">
      <h2 class="title">灵活定价，满足不同企业需求</h2>
      <p class="description">我们提供多种定价方案，确保满足不同规模企业的需求。选择适合您业务的方案，开启智能化数据决策之旅。</p>
    </div>

    <div class="pricing-options">
      <div class="pricing-card">
        <div class="price-header">
          <h3>基础版</h3>
          <div class="price-tag">
            <span class="currency">¥</span>
            <span class="amount">49</span>
            <span class="period">/ 月</span>
          </div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>基本 AI 数据分析</li>
          <li>每月最多50篇文档</li>
          <li>舆情监控（基础版）</li>
          <li>24/7 在线客户支持</li>
          <li>单用户访问</li>
        </ul>
        <button class="pricing-button">选择方案</button>
      </div>

      <div class="pricing-card featured">
        <div class="popular-tag">推荐</div>
        <div class="price-header">
          <h3>专业版</h3>
          <div class="price-tag">
            <span class="currency">¥</span>
            <span class="amount">99</span>
            <span class="period">/ 月</span>
          </div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>高级 AI 模型</li>
          <li>每月最多200篇文档</li>
          <li>舆情监控（专业版）</li>
          <li>多用户协作</li>
          <li>优先客户支持</li>
          <li>API 访问支持</li>
        </ul>
        <button class="pricing-button">选择方案</button>
      </div>

      <div class="pricing-card">
        <div class="price-header">
          <h3>企业版</h3>
          <div class="price-tag enterprise">
            <span class="custom-price">定制</span>
          </div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>专属 AI 训练</li>
          <li>无限文档处理能力</li>
          <li>全功能舆情分析</li>
          <li>无限 API 调用</li>
          <li>专属客户经理</li>
          <li>定制化解决方案</li>
        </ul>
        <button class="pricing-button">联系我们</button>
      </div>
    </div>
    
    <div class="cta-section">
      <div class="cta-content">
        <h3>需要更多信息？</h3>
        <p>如果您有任何疑问或需要了解更多详情，我们的专业团队随时为您提供帮助。</p>
      </div>
      <button class="cta-button">预约演示</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductPricing',
};
</script>

<style scoped>
.pricing {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 40px;
  color: #ffffff;
  overflow-x: hidden;
}

/* 标题样式 */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header .title {
  font-size: 4.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.section-header .description {
  font-size: 2.2rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 定价方案卡片 */
.pricing-options {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 60px 0;
  flex-wrap: wrap;
}

.pricing-card {
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  background-color: #1d1e2c;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(156, 92, 255, 0.2);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #9c5cff, #ff72b1);
}

/* 特色卡片样式 */
.pricing-card.featured {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 15px 50px rgba(156, 92, 255, 0.3);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-tag {
  position: absolute;
  top: 20px;
  right: -30px;
  background: linear-gradient(90deg, #9c5cff, #ff72b1);
  color: white;
  padding: 5px 30px;
  font-size: 1.6rem;
  transform: rotate(45deg) translateX(22px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 600;
}

/* 价格头部 */
.price-header {
  margin-bottom: 25px;
}

.price-header h3 {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
}

.price-tag {
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: #9c5cff;
}

.currency {
  font-size: 2.5rem;
  margin-right: 5px;
  font-weight: 600;
}

.amount {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
}

.period {
  font-size: 2rem;
  color: #ccc;
  margin-left: 5px;
}

.price-tag.enterprise .custom-price {
  font-size: 3.5rem;
  font-weight: 700;
  color: #9c5cff;
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(156, 92, 255, 0.3), transparent);
  margin: 20px 0 30px;
}

/* 功能列表 */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  text-align: left;
}

.features-list li {
  font-size: 1.8rem;
  color: #ccc;
  padding: 12px 0 12px 30px;
  position: relative;
}

.features-list li::before {
  content: '✓';
  color: #9c5cff;
  position: absolute;
  left: 0;
  font-weight: 600;
}

/* 按钮样式 */
.pricing-button {
  width: 100%;
  padding: 15px 0;
  border: 2px solid #9c5cff;
  background-color: transparent;
  color: #9c5cff;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background-color: #9c5cff;
  color: white;
}

/* CTA区域 */
.cta-section {
  margin-top: 80px;
  background-color: #1d1e2c;
  padding: 50px 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #9c5cff, #ff72b1);
}

.cta-content {
  text-align: left;
  flex: 1;
  min-width: 280px;
}

.cta-content h3 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #fff;
}

.cta-content p {
  font-size: 1.8rem;
  color: #ccc;
  margin: 0;
  line-height: 1.6;
}

.cta-button {
  padding: 15px 40px;
  background: linear-gradient(90deg, #9c5cff, #ff72b1);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(156, 92, 255, 0.4);
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .pricing {
    padding: 60px 30px;
  }
  
  .pricing-options {
    gap: 20px;
  }
  
  .pricing-card {
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .section-header .title {
    font-size: 3.6rem;
  }
  
  .section-header .description {
    font-size: 2rem;
  }
  
  .cta-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }
  
  .cta-content {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .pricing {
    padding: 40px 20px;
  }
  
  .section-header .title {
    font-size: 3rem;
  }
  
  .section-header .description {
    font-size: 1.8rem;
  }
  
  .pricing-card {
    min-width: 100%;
  }
  
  .pricing-card.featured {
    transform: scale(1);
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .price-header h3 {
    font-size: 2.4rem;
  }
  
  .currency {
    font-size: 2rem;
  }
  
  .amount {
    font-size: 4rem;
  }
  
  .features-list li {
    font-size: 1.6rem;
  }
}
</style>
