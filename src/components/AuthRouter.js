//封装高阶组件
//有token 正常跳转 
//没有token 去登录

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

function AuthRouter({children}) {
    const token = getToken()
    if (token) {
      return <>{children}</>
    } else {
      return <Navigate to={"/login"} replace/>   
    }   
}

export default AuthRouter
