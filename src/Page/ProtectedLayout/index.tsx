import { Layout } from 'antd';
import React, { useContext } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { Footer, Header, MyContext, Sidebar } from '../../Common/';
import GuardService from '../../Services/GuardService';
import { MyContextValue } from '../../Types/ThemContext';
import '../../global.scss';
import styles from './ProtectedLayout.module.scss';
const { Content } = Layout;

const ProtectedLayout: React.FC = () => {
  const context = useContext(MyContext) as MyContextValue;
  const outlet = useOutlet();
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const isAuthenticated = GuardService();

  // Nếu người dùng chưa đăng nhập, redirect đến trang đăng nhập
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Layout
          className={context.collapsed ? 'customWidth' : 'site-layout-background'}
        >
          <Header />
          <Content className={styles.content}>{outlet}</Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default ProtectedLayout;
