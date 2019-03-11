import withAxios from './withAxios'

const apiPort = [
  {
    name: 'userLogin',
    url: 'www.baidu.com',
    method: 'get'
  },
  {
    name: 'getUserInfo',
    url: '/login/user',
    method: 'get'
  },
  {
    name: 'getDeptList',
    url: '/login/department',
    method: 'get'
  }
]

export default withAxios(apiPort)
