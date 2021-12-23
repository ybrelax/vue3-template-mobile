declare namespace API {
  interface LoginParamType {
    password: string
    username: string
    code?: string
  }
  interface UserInfoType {
    id: string
    company_id: string
    allow_mall_id: string // '["0"]';
    fullname: string
    username: string
    password: string
    role_id: string
    type: number
    status: number
    update_time: string
    create_time: string
    is_admin: number
    login_time: string
    login_token: string
    mall_id: string
    avatar: string
    need_double_factor_authentication: boolean
    account_type: 0 | 1 // 0 正常 1 测试
  }
  interface CompanyInfoType {
    id: string
    name: string
    fullname: string
    phone: string
    address: string
    type: number
    status: number
    update_time: string
    create_time: string
    app_key: string
    app_secret: string
    image_mode: number
    pc_mode: number
    longitude: string
    latitude: string
  }
  interface PageResourcesType {
    mall_ids: string[]
    pages: string[]
    page_ids?: string[]
    role_ids: string[]
  }
  interface MallInfoType {
    address: string
    company_id: string
    create_time: string
    data_version: number
    device_count: number
    exit_count: number
    floors_count: number
    id: string
    image_mode: number
    latitude: string
    longitude: string
    mall_index: number
    name: string
    region_count: number
    shop_count: number
    tree_node_id: string
    update_time: string
  }
  interface CompanyAdminBodyType {
    admin: UserInfoType
    company: CompanyInfoType
    page_resources: PageResourcesType
    need_double_factor_authentication: boolean
    phone: string
    auth_info: {
      token: string
    }
  }
}
