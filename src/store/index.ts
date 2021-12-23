import { getUserInfo } from '@/request/apis'
import { createStore } from 'vuex'

// 创建状态管理
const store = createStore({
  state: {
    token: '',
    userInfo: {}
  },
  getters: {},
  mutations: {
    setUserInfo(state, payload) {
      const { auth_info, admin } = payload

      console.log(auth_info)
      state.token = auth_info.token
      state.userInfo = admin
    },
    logout(state) {
      state.token = ''
      localStorage.clear()
    }
  },
  actions: {
    login: async function ({ commit }, params: { username: string; password: string }) {
      const info = { auth_info: { token: 'xxx123xzz' }, admin: params } // await login(params)
      localStorage.setItem('token', info.auth_info.token)
      commit('setUserInfo', info)
    },

    getUserInfo: async function ({ commit }) {
      const token = localStorage.getItem('token') || ''
      const info = await getUserInfo({ token })
      commit('setUserInfo', info)
    }
  }
})

export default store
