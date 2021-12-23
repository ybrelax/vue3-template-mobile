import request from '@/request'

let prefix = '/read-data/seeplusauth'
if (import.meta.env.MODE === 'development') {
  prefix = ''
}

// 登录
export const login = (data?: API.LoginParamType): Promise<API.CompanyAdminBodyType> =>
  request({
    url: '/token-login',
    // url: prefix + '/company-admin/login',
    method: 'post',
    data
  })

// 获取用户信息
export const getUserInfo = (data: { token: string }): Promise<API.CompanyAdminBodyType> =>
  request({
    url: prefix + '/company-admin/logininfo',
    method: 'post',
    data
  })
