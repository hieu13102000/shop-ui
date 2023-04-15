
import classNames from 'classnames/bind';
import style from './headerItem.module.scss'
import { Avatar, Dropdown, Menu } from 'antd';
import {
  BellOutlined
} from '@ant-design/icons';
// import { removeLocalStorage } from '../../Services/useLocalStorage';
import images from '../../assets/images';
import avatar from '../../assets/images/avtar.png';
import { useTranslation } from 'react-i18next';
import AuthService from '../../Services/AuthService';
const cx = classNames.bind(style)
const logout = (() => {
  AuthService.Logout()
})

export default function HeaderItem() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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
            <a href="#" onClick={logout}>
             {t('content.logout')}
            </a>
          ),
        }
      ]}
    />
  );
  function changeLanguage(value:string) {
    i18n.changeLanguage(value);
}
  return (
    <>
      {/* <Dropdown className={cx('dropdown-trigger')} overlay={menu} placement="bottom">
        <span> <BellOutlined style={{ fontSize: 24, paddingTop: '2%' }} /></span>
      </Dropdown> */}



      <Dropdown className={cx('dropdown-trigger')} overlay={menu} placement="bottom">
        {i18n.language === 'vi' ? <img src={images.flag_vi} alt="flag" className={cx('img-circle')} /> : <img src={images.flag_en} alt="Logo" className={cx('img-circle')} />}
      </Dropdown>
      <Dropdown className={cx('dropdown-trigger')} overlay={profile} placement="bottom">
        <div>
          <span>{t('content.hi')}</span>
          <span style={{ marginRight: '5px' }}>dinhhieu</span>
          <span> <img src={avatar} alt="Logo" className={cx('img-circle')} /></span>

        </div>

      </Dropdown>
    </>
  )
}
