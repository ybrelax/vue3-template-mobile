<template>
  <div class="container">
    <div class="nav shadow-blur">
      <div>
        <img
          class="logo"
          src="https://seeplus-sass.oss-cn-shenzhen.aliyuncs.com/miniapps/bg/logo.png"
        />
        <span>vue3 + vite </span>
      </div>
      <img
        src="https://seeplus-sass.oss-cn-shenzhen.aliyuncs.com/miniapps/bg/wave.gif"
        mode="scaleToFill"
        class="gif-wave"
      />
    </div>
    <van-form class="form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
  import store from '@/store'
  import { watch, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import './index.less'

  const $store = useStore()
  const $router = useRouter()

  const formData = reactive({
    username: '',
    password: ''
  })

  watch([() => $store.state.token], () => {
    // 登录
    $router.push({ path: '/home' })
  })

  const onSubmit = (values: { username: string; password: string }) => {
    store.dispatch('login', values)
  }
</script>
