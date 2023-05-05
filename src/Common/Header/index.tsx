
import { Avatar, Col, Dropdown, Menu, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import AuthService from '../../Services/AuthService';
import { getInfo } from '../../Services/CookiesService';
import images from '../../assets/images';
import avatar from '../../assets/images/avtar.png';
import style from './header.module.scss';
import { Header as Headers  } from 'antd/lib/layout/layout';
import { MyContextValue } from '../../Types/ThemContext';
import { MyContext } from '../ThemContext';
import { useContext } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import React from 'react';

export default function Header() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const hanldeLogout = (() => {
    AuthService.logout()
  })
  const getUser = (() => {
    return getInfo()
  })
  const menu = (
    <Menu
      key="language"
      // selectedKeys={[currentLanguage.key]}
      mode="horizontal"
    >
      <Menu.Item onClick={() => changeLanguage('vi')}>
        <Avatar
          size="small"
          style={{ marginRight: 8 }}
          src={images.flag_vi}
        />
        {t('content.vietnamese')}
      </Menu.Item>
      <Menu.Item onClick={() => changeLanguage('en')}>
        <Avatar
          size="small"
          style={{ marginRight: 8 }}
          src={images.flag_en}
        />
        {t('content.english')}
      </Menu.Item>
    </Menu>
  );
  const profile = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" onClick={hanldeLogout}>
              {t('content.logout')}
            </a>
          ),
        }
      ]}
    />
  );
  function changeLanguage(value: string) {
    i18n.changeLanguage(value);
  }

  const context = useContext(MyContext) as MyContextValue;
  return (
    <>
      <Headers className={style.header}>
        <Row>
          <Col span={24} style={{ display: 'inline-flex' }}>
            {React.createElement(context.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => context.collapsed ? context.hideSidebar() : context.showSidebar()
            })}
            <div className={!context.collapsed ? style['header-item-right'] : style['header-item-rightClose']}>
              <Row>
                <Col span={24}>
                  <Dropdown className={style["dropdown-trigger"]} overlay={menu} placement="bottom">
                    {i18n.language === 'vi' ? <img src={images.flag_vi} alt="flag" className={style['img-circle']} /> : <img src={images.flag_en} alt="Logo" className={style['img-circle']} />}
                  </Dropdown>
                  <Dropdown className={style['dropdown-trigger']} overlay={profile} placement="bottom">
                    <div>
                      <span>{t('content.hi')}</span>
                      <span style={{ marginRight: '5px' }}>{getUser()}</span>
                      <span> <img src={avatar} alt="Logo" className={style['img-circle']} /></span>
                    </div>
                  </Dropdown>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Headers>
    </>
  )
}
