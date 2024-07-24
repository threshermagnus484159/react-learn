import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {  useState } from 'react' 

import { createArticleAPI } from '@/apis/article'
import { useChannel } from '@/hooks/useChannel'

const { Option } = Select

const Publish = () => {
  const {channelList} = useChannel()

  //提交表单
  const onFinish = (formvalue) => {
    if(imageList.length !== typechange) return message.warning('封面类型和封面图片不匹配')

    const {title,channel_id,content,cover} = formvalue
    console.log(formvalue)
    //按照文档格式处理收集到的数据
    const reaData = {
      title:title,
      content:content,
      cover:{
        type:typechange,
        images:imageList.map(item=>item.response.data.url)
      },
      channel_id:channel_id
      }
      createArticleAPI(reaData)
    }

    const [imageList,setimageList] = useState([])
    const onChange=(value)=>{
      setimageList(value.fileList)
    }  

    const [typechange,settypechange] = useState(0)
    const onTypeChange = (e) => {
      console.log('切换页面',e.target.value)
      settypechange(e.target.value)
    }


  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>

          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item=><Option value={item.id} key={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
          <Upload
            listType="picture-card"
            showUploadList
            action={'http://geek.itheima.net/v1_0/upload'}
            name='image'
            onChange={onChange}
            maxCount={typechange}
          >
            {typechange === 0? null:
            <div style={{ marginTop: 8 }}>
            <PlusOutlined />
            </div>
           }
            
          </Upload>
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <ReactQuill
            className='publish-quill'
            theme="snow"
            placeholder="请输入文章内容"
          />
          </Form.Item>

          

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>

        </Form>
      </Card>
    </div>
  )
}
export default Publish