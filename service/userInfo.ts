import request from '@/utils/request'
class UserInfoService {
  getUserInfo = () => {
    return request('/api/user')
  }
}

export default new UserInfoService()
