import React from 'react'
import classNames from 'classnames/bind';
import style from './headerItem.module.scss'
import {Dropdown, Menu } from 'antd';
import {
  BellOutlined
} from '@ant-design/icons';
import { removeLocalStorage } from '../../Services/useLocalStorage';
import avatar from '../../assets/images/avtar.png';
import flag from '../../assets/images/Flag_vn.png'
const cx = classNames.bind(style)
const logout = (() => {
  removeLocalStorage("UserAdmin")
})
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
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#" onClick={logout}>
            Đăng xuất
          </a>
        ),
      }
    ]}
  />
);
export default function HeaderItem() {
  return (
    <>
      {/* <Dropdown className={cx('dropdown-trigger')} overlay={menu} placement="bottom">
        <span> <BellOutlined style={{ fontSize: 24, paddingTop: '2%' }} /></span>
      </Dropdown> */}
      {/* <Dropdown className={cx('dropdown-trigger')} overlay={menu} placement="bottom">
        <img src={flag} alt="flag" className={cx('img-circle')} />
      </Dropdown> */}
      <Dropdown className={cx('dropdown-trigger')} overlay={profile} placement="bottom">
        <div>
          <span>Xin chào,</span>
          <span style={{marginRight:'5px'}}>Hiếu</span>
          <span> <img src={avatar} alt="Logo" className={cx('img-circle')} /></span>

        </div>

      </Dropdown>
    </>
  )
}
