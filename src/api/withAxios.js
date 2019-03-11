import axios from 'axios'
import Cookie from 'js-cookie'

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.post
//POST传参序列化
axios.interceptors.request.use(function(config){
  if(Cookie.get('token')){
    config.headers.common['api_key'] = Cookie.get('token');
  }
  return config;
},function(error){
  return Promise.reject(error);
});


axios.interceptors.response.use(function(response){
  return response;
},function (error) {
  if(error.response.status == 401){
    window.location.href = './#/login'
  }
  return Promise.reject(error);
});




const withAxios = apiConfig => {
  const serviceMap = {}
  apiConfig.map(({ name, url, method }) => {
    serviceMap[name] = async function(data = {}) {
      let key = 'params';
      if (method === 'post' || method === 'put') {
        key = 'data'
      }
      return axios({
        method,
        url: url,
        [key]: data
      })
    }
  })
  return serviceMap
}

export default withAxios
