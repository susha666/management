// 引入axios
import axios from 'axios'
const MyHttpServer = {}
//配置vue插件

MyHttpServer.install = (Vue) => {
    axios.defaults.baseURL="http://localhost:8888/api/private/v1/"
  Vue.prototype.$http = axios
}
 export default MyHttpServer
