<template>
  <div class="home" v-model="active">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="comment-o">
        消息
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "MainTabBar",
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>

</style>