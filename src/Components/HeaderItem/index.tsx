import React from 'react'
import classNames from 'classnames/bind';
import style from './headerItem.module.scss'
import { Button, Dropdown, Menu } from 'antd';
import {
  BellOutlined
} from '@ant-design/icons';

const cx = classNames.bind(style)
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);
const profile = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Đăng xuất
          </a>
        ),
      }
    ]}
  />
);
export default function HeaderItem(collapsed:any) {
  console.log('test klkklkkl',collapsed);
  
  return (
  <>
   <Dropdown overlay={menu} placement="bottom">
   <BellOutlined />
      </Dropdown>
      <Dropdown overlay={menu} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown overlay={profile} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
  </>
  )
}
