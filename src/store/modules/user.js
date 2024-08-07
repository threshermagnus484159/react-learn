// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import   {http} from '@/utils/request'
import { setToken as _settoken,getToken,removeToken } from '@/utils'


const userStore = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: getToken() || '',
    userInfo : {}
  },
  // 同步修改方法
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _settoken(action.payload)
    },
    setUserInfo (state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
    }
  })


// 解构出actionCreater
const { setToken ,setUserInfo,clearUserInfo} = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
        return async (dispatch) => {
      const res = await http.post('/authorizations', loginForm)
      dispatch(setToken(res.data.token))
    }
  }
  const fetchUserInfo = () => {
    return async (dispatch) => {
      const res = await http.get('/user/profile')
      dispatch(setUserInfo(res.data))
    }
  }


export {setToken,fetchLogin,fetchUserInfo ,clearUserInfo}

export default userReducer