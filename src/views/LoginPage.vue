<template>
    <div class="login-container">
      <!-- 页面标题 -->
      <h1 class="title">登录</h1>
  
      <!-- 输入表单 -->
      <van-form @submit="onSubmit">
        <!-- 账号输入框 -->
        <van-field
          v-model="username"
          name="username"
          label="账号"
          placeholder="请输入账号"
          left-icon="user-o"
          :rules="[{ required: true, message: '请输入账号' }]"
        />
  
        <!-- 密码输入框 -->
        <van-field
          v-model="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          left-icon="lock"
          type="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
  
        <!-- 左下角忘记密码提示 -->
        <div class="forgot-password">
          <a href="#" @click="onForgotPassword">忘记密码</a>
        </div>
  
        <!-- 登录按钮 -->
        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { showToast } from 'vant';
  
  // 响应式数据
  const username = ref('');
  const password = ref('');
  
  // 登录提交事件
  const onSubmit = (values) => {
    console.log('提交数据:', values);
    if (username.value && password.value) {
      showToast('登录成功');
    } else {
      showToast('请输入完整信息');
    }
  };
  
  // 忘记密码事件
  const onForgotPassword = () => {
    showToast('请联系管理员或重置密码');
  };
  </script>
  
  <style scoped>
  /* 登录页面基础样式 */
  .login-container {
    padding: 30px 20px;
    background-color: #f7f8fa;
    height: 100vh;
    box-sizing: border-box;
  }
  
  /* 标题样式 */
  .title {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* 忘记密码链接样式 */
  .forgot-password {
    margin: 10px 0 20px;
    text-align: left;
    font-size: 14px;
  }
  
  .forgot-password a {
    color: #1989fa;
    text-decoration: none;
  }
  
  /* 提交按钮样式 */
  .submit-btn {
    margin-top: 20px;
  }
  </style>
  