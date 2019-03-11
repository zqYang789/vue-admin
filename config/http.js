import axios from 'axios'
import Cookie from 'js-cookie'


var baseUrl = '';


axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = false;
axios.defaults.headers.post
//POST传参序列化
axios.interceptors.request.use(function(config){
    if(Cookie.get('token')){
        //配置header中的api_key
        //config.headers.common['api_key'] = Cookie.get('token');
    }
    return config;
},function(error){
    return Promise.reject(error);
});



// http response 拦截器
axios.interceptors.response.use(function(response){
    return response;
},function (error) {
    if(error.response.status == 401){
            window.location.href = './#/login'
      }
      return Promise.reject(error);
});

export default axios;
