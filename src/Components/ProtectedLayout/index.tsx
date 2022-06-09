import React, { useState, } from 'react';
import {Link, Navigate, useOutlet } from 'react-router-dom';
import "antd/dist/antd.min.css"
import classNames from 'classnames/bind';
import '../../App.css'
import style from '../HeaderItem/headerItem.module.scss'
import { Col, Layout, Menu, Row } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShoppingOutlined,
  TeamOutlined
} from '@ant-design/icons';
import logo from '../../assets/images/logo.svg';
import HeaderItem from '../HeaderItem';
import { isLogIn } from '../../Services/useLocalStorage';

const { Header, Sider, Content } = Layout;
const ProtectedLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const cx = classNames.bind(style)
  const outlet = useOutlet();
  const user  = isLogIn();
  if (user ===false) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,

          }} breakpoint='lg' onBreakpoint={
            (e) => {
              if (e) {
                setCollapsed(!collapsed)
              } else {
                setCollapsed(false)
              }
            }
          } trigger={null} collapsible collapsed={collapsed}
        >
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '36px', marginRight: '8px' }} />
            {!collapsed && <h1>AntD Admin</h1>}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <ShoppingOutlined />,
                label:<Link to="/dashboard/listProducts">Sản Phẩm</Link>,
              },
              {
                key: '2',
                icon: <TeamOutlined />,
                label:  <Link to="/dashboard/listMembership">Nhân viên</Link>,
              
              },
            ]}
          />
        </Sider>
        <Layout
          className={collapsed ? 'customWidth' : 'site-layout-background'}
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position: 'fixed',
              backgroundColor: '#fff',
              height: '72px',
              zIndex: 1, width: '100%'

            }}
          >
            <Row>
              <Col span={24} style={{ display: 'inline-flex' }}> {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
                <div className={!collapsed ? cx('header-item-right') : cx('header-item-rightClose')}>
                  <HeaderItem/>
                </div>
              </Col>
            </Row>



          </Header>
          <Content
            style={{
              margin: '61px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {outlet}
          </Content>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2022 Created by Dinh Hieu
          </div>
        </Layout>
      </Layout>

    </>
  );
};

export default ProtectedLayout;




