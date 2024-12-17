<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <van-nav-bar title="密码管理" ></van-nav-bar>
  <van-search
  v-model="value"
  placeholder="搜索密码"
  input-align="center"
/>
<van-row>
  <van-col span="12">666</van-col>
  <van-col span="12">span: 12</van-col>
</van-row>
</template>

<style scoped>
</style>