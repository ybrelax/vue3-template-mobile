import { RouteLocationNormalized, NavigationGuardNext, Router } from 'vue-router'

export const beforeEach = (router: Router) =>
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
      const token = localStorage.getItem('token')
      // 路由守卫判断
      if (to.meta.type === 'login' && token) {
        next({ name: 'home' })
        return
      }

      if (to.meta.type !== 'login' && !token) {
        next({ name: 'login' })
        return
      }

      next()
    }
  )
