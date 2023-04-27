import axios from "axios";
import type { Method, AxiosRequestConfig } from "axios";
import { ElMessage } from 'element-plus'
import router from "@/router";

const URL_CONFIG = import.meta.env
let userUrl, tradeUrl, certOnlinePay, shoppingUrl;
const URL_TYPE = import.meta.env.VUE_APP_ENVVALUE;
if (URL_TYPE == '0') {
    //开发环境代理
    userUrl = URL_CONFIG.VUE_APP_USER_CONFIG_URL;
    tradeUrl = URL_CONFIG.VUE_APP_TRADE_CONFIG_URL;
    certOnlinePay = URL_CONFIG.VUE_APP_CERTONLINEPAY_CONFIG_URL
    shoppingUrl = URL_CONFIG.VUE_APP_SHOPPING_CONFIG_URL
} else if (URL_TYPE == '1') {
    //生产环境代理
    userUrl = URL_CONFIG.VUE_APP_USER_BASEURL;
    tradeUrl = URL_CONFIG.VUE_APP_TRADE_BASEURL;
    certOnlinePay = URL_CONFIG.VUE_APP_CONFIG_URL
    shoppingUrl = URL_CONFIG.VUE_APP_USER_SHOPURL
}
userUrl =  'http://219.141.234.132:9002/user'
tradeUrl =  'http://219.141.234.132:9002/trade'
interface PendingType {
    url?: string,
    method?: Method,
    data?: any,
    params?: any,
    cancel?: any
}
// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;
// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
};
/* 实例化请求配置 */
const request = axios.create({
    headers: {
        //php 的 post 传输请求头一定要这个 不然报错 接收不到值
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin-Type": '*'
    },
    // 请求时长
    timeout: 1000 * 30,
    // 请求的base地址 TODO:这块以后根据不同的模块调不同的api
    baseURL: tradeUrl,
    //     ? "测试"
    //     : "正式",
    // 表示跨域请求时是否需要使用凭证
    withCredentials: false,
})

request.interceptors.request.use(
    config => {
        removePending(config);
        config.cancelToken = new CancelToken((c) => {
            pending.push({ url: config.url, method: <Method>config.method, params: config.params, data: config.data, cancel: c });
        });


        return config;
    },
    error => {
        console.log(error)
        ElMessage(error.data.error.message)
        //   message.error(error.data.error.message);
        return Promise.reject(error.data.error.message);
    }
)
request.interceptors.response.use(
    response => {
        const res = response.data;
        const code = res.status,
            //下载文件流中不包含status，服务端返回值做一下下载标记
            downloadStatus = response.config.headers['download-status'] == 'no-status';


        if (code !== 200) {//状态码 !=200时，统一处理异常
            dealCase(code, res.message);
            return Promise.reject(res);
        } else if (downloadStatus) {
            return response;
        } else {
            return response.data;
        }
    },
    error => {
        let errMsg = "请求发生错误"
        ElMessage({
            message: errMsg,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }

)
const user = axios.create({
    headers: {
        //php 的 post 传输请求头一定要这个 不然报错 接收不到值
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin-Type": '*'
    },
    // 请求时长
    timeout: 1000 * 30,
    // 请求的base地址 TODO:这块以后根据不同的模块调不同的api
    baseURL: userUrl,
    //     ? "测试"
    //     : "正式",
    // 表示跨域请求时是否需要使用凭证
    withCredentials: false,
})

user.interceptors.request.use(
    config => {
        removePending(config);
        config.cancelToken = new CancelToken((c) => {
            pending.push({ url: config.url, method: <Method>config.method, params: config.params, data: config.data, cancel: c });
        });


        return config;
    },
    error => {
        console.log(error)
        ElMessage(error.data.error.message)
        //   message.error(error.data.error.message);
        return Promise.reject(error.data.error.message);
    }
)
user.interceptors.response.use(
    response => {
        const res = response.data;
        const code = res.status,
            //下载文件流中不包含status，服务端返回值做一下下载标记
            downloadStatus = response.config.headers['download-status'] == 'no-status';


        if (code !== 200) {//状态码 !=200时，统一处理异常
            dealCase(code, res.message);
            return Promise.reject(res);
        } else if (downloadStatus) {
            return response;
        } else {
            return response.data;
        }
    },
    error => {
        let errMsg = "请求发生错误"
        ElMessage({
            message: errMsg,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }

)
const codeCase = {
    case10002: () => {
        // Token 过期了; 或者Token存在其他问题
        // Message({
        // message: '会话失效已被登出，请重新登录',
        // type: 'error',
        // 	duration: 5 * 1000
        // // });
        // Vue.ls.remove('userId');
        // Vue.ls.remove('token');
        // Vue.ls.remove('userInfo');
        // Vue.ls.remove('channelId');
        // Vue.ls.remove('outUser');
        // Vue.ls.remove('customerNo');
        // sessionStorage.removeItem('thirdContinueWait')
        router.push({
            name: 'home'
        });
    }, case403: () => {
        ElMessage({
            message: '禁止访问',
            type: 'error',
            duration: 5 * 1000
        });
        router.push({
            path: "/exception/403"
        });
    }, case404: () => {
        //接口不存在
        ElMessage({
            message: '接口不存在，请确定您的接口是否正确',
            type: 'error',
            duration: 5 * 1000
        });
        router.push({
            path: "/exception/404"
        });
    }, case500: () => {
        ElMessage({
            message: '服务器发生错误',
            type: 'error',
            duration: 5 * 1000
        });
        router.push({
            path: "/exception/500"
        });
    }, caseOther: (msg: any) => {
        ElMessage({
            message: !!msg ? msg : '操作异常',
            type: 'error',
            duration: 3 * 1000
        });
        if (!!msg) console.error(msg);

    }
}
export default {user , request}
// export  {}