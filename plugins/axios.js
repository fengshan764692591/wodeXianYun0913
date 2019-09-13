// Message = this.$messasge
import { Message } from "element-ui";

// axios拦截器
// 第一个参数是nuxt对象
export default ( { $axios,redirect } ) => {

    // 拦截axios的错误请求
    $axios.onError(err => {
        const {message, statusCode} = err.response.data;

        if(statusCode === 400){
            // 错误提示
            Message.error(message);
        }
        // 未授权
        if(statusCode === 401 || statusCode === 403){
            // 跳转到登录页面
            redirect("/user/login")
        }
    });
}
