<template>
    <van-nav-bar title="校园服务" ></van-nav-bar>
    <div class="container">
    <!-- 新添加活动 -->
      <section>
        <h2 class="section-title">校园活动</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in activities" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }" @click="router.push('/club')">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
      <!-- 校务办公 -->
      <section>
        <h2 class="section-title">校务办公</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in office" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>

      <!-- 教务教学 -->
      <section>
        <h2 class="section-title">教务教学</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in education" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>

      <!-- 学工服务 -->
      <section>
        <h2 class="section-title">学工服务</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in student" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>

      <!-- 信息化服务 -->
      <section>
        <h2 class="section-title">信息化服务</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in info" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  import { reactive } from "vue";
  import { useRoute,useRouter } from 'vue-router';
const router=useRouter()

  const activities = reactive([
    { title: "校园开放日", icon: "⭐", bgColor: "#4baef5" },
  ]);

  const office = reactive([
    { title: "统一身份认证", icon: "📅", bgColor: "#4baef5" },
    { title: "党籍管理", icon: "✉️", bgColor: "#4baef5" },
    { title: "经费报销", icon: "📋", bgColor: "#9c6e3c" },
    { title: "成绩管理", icon: "👤", bgColor: "#b566d5" },
  ]);

  const education = reactive([
    { title: "社团职务/身份验证", icon: "📆", bgColor: "#30c8c8" },
    { title: "志愿时长认证", icon: "📆", bgColor: "#30c8c8" },
    { title: "评奖评优认定", icon: "📚", bgColor: "#00b3f5" },
    { title: "心理咨询", icon: "💡", bgColor: "#b8a1d5" },
    { title: "社会实践流程", icon: "🏃‍♂️", bgColor: "#f67733" },
  ]);

  const student = reactive([
    { title: "微就业", icon: "💼", bgColor: "#e94e77" },
    { title: "迎新", icon: "🎓", bgColor: "#4baef5" },
    { title: "活动平台", icon: "⭐", bgColor: "#39c27b" },
    { title: "异地培养申请", icon: "📝", bgColor: "#4baef5" },
    { title: "心理测评", icon: "💟", bgColor: "#a090c0" },
    { title: "走读申请", icon: "🚶‍♀️", bgColor: "#4baef5" },
    { title: "勤工助学", icon: "💰", bgColor: "#4baef5" },
    { title: "项目报名", icon: "✏️", bgColor: "#9e9e9e" },
    { title: "毕业离校", icon: "🎓", bgColor: "#4baef5" },
    { title: "满意度测评", icon: "📊", bgColor: "#57bfff" },
  ]);

  const info = reactive([
    { title: "统一身份认证", icon: "🔒", bgColor: "#39c27b" },
    { title: "支付码", icon: "💳", bgColor: "#f76c9b" },
    { title: "认证码", icon: "🔑", bgColor: "#b566d5" },
    { title: "证件照采集", icon: "🆔", bgColor: "#4baef5" },
    { title: "人脸特征采集", icon: "😊", bgColor: "#89d467" },
    { title: "工大云盘", icon: "☁️", bgColor: "#d67b47" },
    { title: "可信电子凭证", icon: "📜", bgColor: "#d67b47" },
  ]);
  </script>

  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    padding: 16px;
  }

  .section-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
  </style>
