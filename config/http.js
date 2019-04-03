import axios from 'axios'
import Cookie from 'js-cookie'
import { Message } from 'element-ui'


var baseUrl = '';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = false;
axios.defaults.headers.post
//POST传参序列化
axios.interceptors.request.use(function(response){
    if(Cookie.get('token')){
        //配置header中的api_key
        //config.headers.common['api_key'] = Cookie.get('token');
    }
    return response;
},function(error){
    return Promise.reject(error);
});



// http response 拦截器
axios.interceptors.response.use(function(response){
    return response;
},function (error) {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    if(error.response.status == 401){
            window.location.href = './#/login'
      }
      return Promise.reject(error);
});

export default axios;
