<template>
    <van-nav-bar left-text="返回" title="校园开放日" @click-left="onClickLeft"></van-nav-bar>
    <div class="community-page">
      <!-- 社团卡片 -->
      <div class="community-card" v-for="item in communities" :key="item.id">
        <!-- 社团头部 -->
        <div class="header">
          <div class="header-left">
            <img :src="item.icon" alt="logo" class="icon" />
            <div class="title">
              <h3>{{ item.name }}</h3>
              <p class="subtitle">{{ item.university }}</p>
            </div>
          </div>
          <button class="enter-button">报名参加</button>
        </div>
  
        <!-- 社团内容 -->
        <div class="content">
          <h4 class="headline">{{ item.headline }}</h4>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import { useRoute,useRouter } from 'vue-router';
const router=useRouter()
const onClickLeft = () => history.back();
  // 模拟数据
  const communities = reactive([
    {
      id: 1,
      name: "意想社团",
      university: "广大学软",
      icon: "https://via.placeholder.com/40", // 替换为真实图片链接
      headline: "新媒体在路上，等风也等你",
      description:
        "你认为自己天赋异禀并愿意为社团贡献力量吗？如果你热爱青春、期望展示自我，那就加入学生会。",
    },
    {
      id: 2,
      name: "社团联合会",
      university: "广大学软",
      icon: "https://via.placeholder.com/40", // 替换为真实图片链接
      headline: "共聚学生会，一齐快乐分享",
      description:
        "看星星是一种很奢侈的行为。恒星发射光芒，光芒穿过百万光年的距离向你靠拢而来，达到地球时已然成为微弱的闪烁。",
    },
    {
      id: 3,
      name: "软件系新媒体工作部",
      university: "软件系",
      icon: "https://via.placeholder.com/40", // 替换为真实图片链接
      headline: "学生会，逐梦开始的地方",
      description:
        "看星星是一种很奢侈的行为。恒星发射光芒，光芒穿过百万光年的距离向你靠拢而来，达到地球时已然成为微弱的闪烁。",
    },
  ]);
  </script>
  
  <style scoped>
  /* 页面布局整体样式 */
  .community-page {
    background-color: #f9f9f9;
    padding: 16px;
    font-family: Arial, sans-serif;
  }
  
  /* 社团卡片样式 */
  .community-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  /* 头部布局 */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  
  .subtitle {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
  
  .enter-button {
    background-color: #ffaf33;
    border: none;
    padding: 6px 12px;
    border-radius: 16px;
    color: #333;
    font-size: 12px;
    cursor: pointer;
  }
  
  .enter-button:hover {
    background-color: #ffa000;
  }
  
  /* 内容区域 */
  .content {
    margin-top: 8px;
  }
  
  .headline {
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0;
    color: #333;
  }
  
  .description {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
  }
  </style>
  