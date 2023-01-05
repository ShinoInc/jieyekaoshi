<template>
  <div class="learning-view">
    <van-nav-bar title="学习进度" />
    <van-circle
      class="circle"
      v-model="currentRate"
      :rate="30"
      layer-color="#fafafa"
      :speed="100"
      :text="text"
    />
    <van-collapse class="collapse" v-model="activeNames">
      <van-collapse-item title="第一阶段：前端开发基础" name="1" icon="hot-o">
        HTML+CSS
      </van-collapse-item>
      <van-collapse-item title="第二阶段：前端开发基本功" name="2" icon="hot-o">
        JavaScript+jQuery
      </van-collapse-item>
      <van-collapse-item title="第三阶段：前后端交互" name="3" icon="hot-o">
        Ajax+跨域
      </van-collapse-item>
      <van-collapse-item title="第四阶段：后端开发" name="4" icon="hot-o">
        Node.js+Express
      </van-collapse-item>
      <van-collapse-item title="第五阶段：前端框架" name="5" icon="hot-o">
        Vue+Webpack
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: 'LearningView',
  data () {
    return {
      currentRate: 0,
      activeNames: []
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>

<style lang="less" scoped>
.circle {
  border-top: 10px solid #fafafa;
  width: 100%;
  height: 120px;

  /deep/ svg {
    padding: 10px 0;
    height: 100px;
  }
}

.collapse {
  border-top: 10px solid #fafafa;
}
</style>
