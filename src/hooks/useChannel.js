//封装获取频道列表的逻辑
import { useState,useEffect } from "react"
import { getChannelAPI } from "@/apis/article"

function useChannel() {

    const [channelList, setChannelList] = useState([])
    useEffect(() => {
      const getChannelList = async () => {
        const res = await getChannelAPI()
        setChannelList(res.data.channels)
      }
  
      getChannelList()

    }, [])
    return {channelList}
}
export { useChannel}