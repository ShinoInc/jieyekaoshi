<template>
  <div class="personal-view">
    <van-nav-bar title="个人中心" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        name="username"
        placeholder="用户名"
        required
        clearable
        left-icon="contact"
      >
        <template #right-icon>
          <van-icon name="question-o" @click="toastAdmin" />
        </template>
      </van-field>
      <van-field
        v-model="password"
        label="密码"
        name="password"
        type="password"
        placeholder="密码"
        required
        clearable
        left-icon="edit"
      >
        <template #right-icon>
          <van-icon name="question-o" @click="toastPwd" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Notify, Toast } from 'vant'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toastAdmin () {
      Toast('用户名: admin')
    },
    toastPwd () {
      Toast('密码: 123456')
    },
    onSubmit (values) {
      if (values.username === 'admin' && values.password === '123456') {
        Notify({ type: 'primary', message: '登录成功' })
        window.location.href = 'https://m.boxuegu.com/'
      } else {
        Notify('用户名或密码不正确')
      }
    }
  }
}
</script>
