import { ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { MyContextValue } from "../../Types/ThemContext";
import logo from '../../assets/images/logo.svg';
import { MyContext } from "../ThemContext";
import style from './Sidebar.module.scss';

export default function Sidebar() {
  const { t } = useTranslation()
  const context = useContext(MyContext) as MyContextValue;
  return (
    <Sider
      className={style["sider"]}
      breakpoint='lg' onBreakpoint={
        (e) => {
          e ? context.showSidebar() : context.hideSidebar()
        }
      } trigger={null} collapsible collapsed={context.collapsed}
    >
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '36px', marginRight: '8px' }} />
        {!context.collapsed && <h1>AntD Admin</h1>}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className={style["menu"]}
        items={[
          {
            key: '1',
            icon: <ShoppingOutlined />,
            label: <Link to="/listProducts">{t('content.products')}</Link>,
          },
          {
            key: '2',
            icon: <TeamOutlined />,
            label: <Link to="/listMembership">{t('content.Staff')}</Link>,

          },
        ]}
      />
    </Sider>
  )
}
