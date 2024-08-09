import { Flex, Typography, Avatar } from 'antd';
import Search from 'antd/es/transfer/search';
import React from 'react'
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';


const CustomHeader = () => {
  return (
    <div className='pt-4'>

      <Flex align='centre' justify='space-between '>
        <Typography.Title level={3} type='secondary ' >
          Welcome Back
        </Typography.Title>
        <div className='mx-40'>

          <Flex align='center' gap="10px" className=''>
            <Search placeholder='Search dashboard' allowClear />
            

              <Flex align='centre' gap='5px'>

              <MessageOutlined className='header-icon' />
              <NotificationOutlined className='header-icon' />
              <Avatar icon={<UserOutlined />} />
              </Flex>
         
          </Flex>
        </div>
      </Flex>
    </div>
  )

}
export default CustomHeader;
