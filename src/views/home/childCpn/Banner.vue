<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.id" @click="getInfo(item)">
        <img :src="item.image" :alt="item.title">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "carousel",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      getInfo(item){
        this.$toast(item.title)
      }
    }
  }
</script>

<style scoped>
  .goods-swipe img {
    width: 100%;
    display: block;
  }
</style>