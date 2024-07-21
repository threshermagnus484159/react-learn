// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import   {http} from '@/utils/request'
import { setToken as _settoken,getToken,removeToken } from '@/utils'


const userStore = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: getToken() || '',
  },
  // 同步修改方法
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _settoken(action.payload)
    }
  }
})


// 解构出actionCreater
const { setToken } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
        return async (dispatch) => {
      const res = await http.post('/authorizations', loginForm)
      dispatch(setToken(res.data.token))
    }
  }


export {setToken,fetchLogin }

export default userReducer