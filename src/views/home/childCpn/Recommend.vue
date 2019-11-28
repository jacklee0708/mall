<template>
  <div class="recommend">
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="item in recommends">
        <a :href="item.link">
          <van-image :src="item.image"/>
          <div class="recommend-span">{{item.title}}</div>
        </a>
      </van-grid-item>
    </van-grid>
  </div>

</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-span {
    text-align: center;
    padding-top: 3px;
    font-size: 14px;
  }

  .van-grid-item__content {
    padding: 8px 8px;
  }
</style>