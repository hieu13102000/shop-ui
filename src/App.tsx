import React, { useState,} from 'react';
import 'antd/dist/antd.css'
import './App.css'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import logo from './assets/images/logo.svg';
import Products from './Components/Products';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider breakpoint='lg' onBreakpoint={
        (e) => {
          if (e) {
            setCollapsed(!collapsed)
          } else {
            setCollapsed(false)
          }
        }
      } trigger={null} collapsible collapsed={collapsed} >
        <div className="logo">
        <img src={logo} alt="Logo" style={{width:'36px',marginRight: '8px'}} />
        {!collapsed && <h1>AntD Admin</h1>}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout
        className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Products />
        </Content>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </div>
      </Layout>
    </Layout>
  );
};

export default App;