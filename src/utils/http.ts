import axios from 'axios'

const instance = axios.create({
    // 基础路径
    baseURL: 'http://mock.js/',
    // 请求超时时间
    timeout: 60000,
    // ....其他配置
  })
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  })
export default instance