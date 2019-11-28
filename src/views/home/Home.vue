<template>
  <div class="home">
    <van-nav-bar title="首页" class="nav-bar">
      <van-icon name="search" slot="right" @click="search()"/>
    </van-nav-bar>
    <banner :banners="banners" class="home-banner"/>
    <recommend :recommends="recommends"/>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import Banner from './childCpn/Banner'
  import Recommend from './childCpn/Recommend'

  export default {
    name: "Home",
    components: {
      TabBar,
      Banner,
      Recommend
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      this.getBanner()
      this.getRecommend()
    },
    methods: {
      search() {
        this.$router.push('/search')
      },
      async getBanner() {
        try {
          const res = await this.$request.get("home/banner")
          this.banners = res.data.banner
        } catch (err) {
        }
      },
      async getRecommend() {
        try {
          const res = await this.$request.get("home/recommend")
          this.recommends = res.data.recommend
        } catch (err) {
        }
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100vh;
    background-color: #eeeeee;
  }
  .nav-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .home-banner{
    padding-top: 46px;
  }
</style>