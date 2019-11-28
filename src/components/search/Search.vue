<template>
  <div class="search">
    <van-row>
      <van-col span="4">
        <div class="backButton" @click="back()">
          <van-icon name="arrow-left"></van-icon>
        </div>
      </van-col>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" v-model="searchValue" @search="onSearch"/>
      </van-col>
    </van-row>
  </div>

</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        searchValue: ""
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      onSearch(){
        this.$toast('暂无后续逻辑')
      }
    }
  }
</script>

<style scoped>
  .backButton {
    line-height: 34px;
    text-align: center;
    padding: 8px 0 4px 0;
    background-color: white;
  }

  .van-row {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .van-search {
    padding: 6px 6px 6px 0;
  }
</style>