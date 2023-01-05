<template>
  <div class="home-view">
    <van-nav-bar>
      <template #left>
        <img class="title-logo" :src="logo" alt="" />
      </template>
      <template #right>
        <van-icon class="nav-search" name="search" />
      </template>
    </van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <img class="swipe-image" v-lazy="image" @click="startPreview(index)" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" square clickable>
      <van-grid-item v-for="(content, index) in gridContent" :key="index">
        <img class="grid-image" :src="content.image" />
        <span class="grid-text">{{ content.text }}</span>
      </van-grid-item>
    </van-grid>
    <van-notice-bar mode="closeable">{{ notice }}</van-notice-bar>
    <van-cell
      class="employment"
      icon="location-o"
      title="就业课"
      is-link
      value="更多"
    />
    <van-grid :column-num="3" :border="false" clickable>
      <van-grid-item v-for="(content, index) in employment" :key="index">
        <img class="employment-image" :src="content.image" />
      </van-grid-item>
    </van-grid>
    <van-tabs class="tabs" v-model="activeName">
      <van-tab title="精品" name="boutiques">
        <van-card
          :thumb="require('@/assets/images/quickAPP.jpg')"
          title="微信小程序"
          desc="描述信息"
          tag="热门"
          price="99.00"
          origin-price="129.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/wx.jpg')"
          title="快应用"
          desc="描述信息"
          price="19.00"
          origin-price="39.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/js.jpg')"
          title="JavaScript"
          desc="描述信息"
          price="0.00"
          origin-price="10.00"
          centered
        />
      </van-tab>
      <van-tab title="爆品" name="explosives">
        <van-card
          :thumb="require('@/assets/images/quickAPP.jpg')"
          title="微信小程序"
          desc="描述信息"
          tag="热门"
          price="99.00"
          origin-price="129.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/wx.jpg')"
          title="快应用"
          desc="描述信息"
          price="19.00"
          origin-price="39.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/js.jpg')"
          title="JavaScript"
          desc="描述信息"
          price="0.00"
          origin-price="10.00"
          centered
        />
      </van-tab>
      <van-tab title="优惠" name="deals">
        <van-card
          :thumb="require('@/assets/images/quickAPP.jpg')"
          title="微信小程序"
          desc="描述信息"
          tag="热门"
          price="99.00"
          origin-price="129.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/wx.jpg')"
          title="快应用"
          desc="描述信息"
          price="19.00"
          origin-price="39.00"
          centered
        />
        <van-card
          :thumb="require('@/assets/images/js.jpg')"
          title="JavaScript"
          desc="描述信息"
          price="0.00"
          origin-price="10.00"
          centered
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

export default {
  name: 'HomeView',
  data () {
    return {
      logo: require('@/assets/images/logo.png'),
      swipeImages: [
        require('@/assets/images/banner1.jpg'),
        require('@/assets/images/banner2.jpg'),
        require('@/assets/images/banner3.png')
      ],
      gridContent: [
        {
          image: require('@/assets/images/jiuyeke.png'),
          text: '就业课'
        },
        {
          image: require('@/assets/images/tishengke.png'),
          text: '提升课'
        },
        {
          image: require('@/assets/images/mainfeike.png'),
          text: '免费课'
        },
        {
          image: require('@/assets/images/courseType.png'),
          text: '课程分类'
        }
      ],
      notice: '前端与移动开发就业班课程【全面更新】！等待您的到来哦！',
      employment: [
        {
          image: require('@/assets/images/fe-list.png')
        },
        {
          image: require('@/assets/images/python.png')
        },
        {
          image: require('@/assets/images/wx.jpg')
        },
        {
          image: require('@/assets/images/data.png')
        },
        {
          image: require('@/assets/images/ui.png')
        },
        {
          image: require('@/assets/images/java.png')
        }
      ],
      activeName: 'boutiques'
    }
  },
  methods: {
    startPreview (index) {
      ImagePreview({
        images: this.swipeImages,
        startPosition: index
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title-logo {
  width: 91px;
}

.nav-search {
  font-size: 26px;
}

.swipe-image {
  width: 375px;
  height: 150px;
}

.grid-image {
  width: 37px;
  height: 37px;
}

.grid-text {
  margin-top: 5px;
  font-size: 14px;
}

.employment,
.tabs {
  margin-top: 10px;
}

.employment-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.card-image {
  width: 88px;
  height: 60px;
}

.van-tabs {
  /deep/ .van-tab--active {
    color: blue;
  }

  /deep/ .van-tabs__line {
    background-color: blue;
  }

  /deep/ .van-tabs__content {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
  }
}

.van-card {
  margin: 10px;

  .van-image {
    /deep/ img {
      object-fit: contain !important;
    }
  }

  .van-card__title {
    font-weight: 700;
  }

  .van-card__price {
    color: red;
  }
}
</style>
