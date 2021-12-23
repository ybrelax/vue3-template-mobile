import { extend, RequestOptionsInit, ResponseType } from 'umi-request'

const BaseUrl = ''

interface ParamType {
  url: string
  method: 'post' | 'get'
  data: unknown
  responseType?: ResponseType
}

const request = extend({
  prefix: BaseUrl,
  timeout: 50000,
  header: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

/**
 * 过滤参数为空的属性
 * @param params
 */
const filterParams = (params: Record<string, unknown>) => {
  if (!params) {
    return params
  }
  const keys = Object.keys(params)
  if (keys.length) {
    keys.forEach((key: string) => {
      if (!params[key] && params[key] !== 0 && params[key] !== '' && params[key] !== false) {
        delete params[key]
      }
    })
  }
  return params
}

// 业务处理
const handleBusinessEvent = (options: RequestOptionsInit) => {
  const { data, headers } = options
  const token = localStorage.getItem('token')
  if (token) {
    ;(headers as { token: string }).token = token
    ;(headers as { client?: number }).client = 0 // 移动端标识
  }
  return filterParams(data)
}

// 请求拦截
request.interceptors.request.use((url, options) => {
  options.data = handleBusinessEvent(options)

  return {
    url,
    options: { ...options, interceptors: true }
  }
})

// 相应拦截
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json()
  if (data.code === 0 || data.code === 200) {
    return response
  } else {
    throw new Error(data.message)
  }
})

const umiRequest = async (param: ParamType) => {
  const result = await request(param.url, {
    prefix: param.url.indexOf('http') < 0 ? BaseUrl : '',
    method: param.method,
    data: param.data,
    responseType: param.responseType || 'json'
  })
  return result.data
}

export default umiRequest
