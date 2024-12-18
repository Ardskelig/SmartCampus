<template>
    <div class="password-page">
      <!-- 标题 -->
      <van-nav-bar title="密码管理" ></van-nav-bar>
  
      <!-- 搜索框 -->
      <div class="search-bar">
        <input type="text" placeholder="搜索" />
        <i class="search-icon">🔍</i>
      </div>
  
      <!-- 功能网格 -->
      <div class="grid">
        <div class="grid-item">
          <i class="icon blue">🔑</i>
          <span>全部</span>
          <span class="count">60</span>
        </div>
        <div class="grid-item">
          <i class="icon green">🗝️</i>
          <span>通行密钥</span>
          <span class="count">0</span>
        </div>
        <div class="grid-item">
          <i class="icon yellow">🔒</i>
          <span>验证码</span>
          <span class="count">0</span>
        </div>
        <div class="grid-item">
          <i class="icon blue-light">📶</i>
          <span>无线局域网</span>
          <span class="count">76</span>
        </div>
        <div class="grid-item">
          <i class="icon red">❗</i>
          <span>安全性</span>
          <span class="count">30</span>
        </div>
        <div class="grid-item">
          <i class="icon orange">🗑️</i>
          <span>已删除</span>
          <span class="count">0</span>
        </div>
      </div>
  
      <!-- 新建共享群组 -->
      <div class="share-group">
        <button class="new-group-btn">🧑‍🤝‍🧑 新建共享群组</button>
      </div>
  
      <!-- 共享说明 -->
      <div class="info-card">
        <p class="info-title">共享密码和通行密钥</p>
        <p class="info-desc">
          你可以与家人、朋友或其他关系密切的联系人安全地共享你选择的密码和通行密钥。
        </p>
        <a href="#" class="start-btn">开始使用</a>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  /* 基础布局样式 */
  .password-page {
    background-color: #f5f5f5; /* 修改为浅灰色背景 */
    color: #333; /* 全局字体颜色为深灰色 */
    font-family: Arial, sans-serif;
    height: 100vh;
    padding: 16px;
  }
  
  /* 标题 */
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
  }
  
  /* 搜索框 */
  .search-bar {
    position: relative;
    margin-bottom: 20px;
  }
  
  .search-bar input {
    width: 93%;
    padding: 8px 12px;
    border: 1px solid #ccc; /* 添加浅灰色边框 */
    border-radius: 8px;
    background-color: #fff; /* 输入框背景色为白色 */
    color: #333;
    font-size: 16px;
  }
  
  .search-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  /* 网格布局 */
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }
  
  .grid-item {
    background-color: #ffffff; /* 卡片背景为白色 */
    padding: 12px;
    border: 1px solid #e0e0e0; /* 添加浅灰色边框 */
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
  }
  
  .grid-item .icon {
    font-size: 24px;
    margin-bottom: 8px;
  }
  
  .grid-item .count {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 14px;
    color: #999;
  }
  
  /* 图标颜色 */
  .icon.blue {
    color: #4a90e2;
  }
  
  .icon.green {
    color: #34c759;
  }
  
  .icon.yellow {
    color: #ffcc00;
  }
  
  .icon.blue-light {
    color: #5ac8fa;
  }
  
  .icon.red {
    color: #ff3b30;
  }
  
  .icon.orange {
    color: #ff9500;
  }
  
  /* 新建共享群组 */
  .share-group {
    margin-bottom: 16px;
  }
  
  .new-group-btn {
    background-color: #f0f0f0; /* 按钮背景灰色 */
    border: 1px solid #ddd;
    color: #007aff; /* 蓝色字体 */
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px;
  }
  
  .new-group-btn::before {
    content: '➕';
    margin-right: 8px;
  }
  
  /* 信息卡片 */
  .info-card {
    background-color: #f8f8f8; /* 浅灰色背景 */
    padding: 16px;
    border: 1px solid #e0e0e0; /* 添加边框 */
    border-radius: 8px;
  }
  
  .info-title {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
  }
  
  .info-desc {
    font-size: 14px;
    margin-bottom: 8px;
    color: #666; /* 次要文本颜色 */
  }
  
  .start-btn {
    color: #007aff;
    text-decoration: none;
    font-size: 16px;
  }
  </style>
  