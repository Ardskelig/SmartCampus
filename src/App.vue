<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
const router=useRouter()
const active = ref('home');
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o" @click="router.push('/home')">主页</van-tabbar-item>
  <van-tabbar-item name="service" icon="search" @click="router.push('/service')">服务</van-tabbar-item>
  <van-tabbar-item name="password" icon="setting-o" @click="router.push('/password')">did管理</van-tabbar-item>
</van-tabbar>

</template>

<style scoped>
</style>
