/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './login.module.scss'
import classNames from 'classnames/bind';
import i18n from '../../translation/i18n';
import "antd/dist/antd.min.css"
import { Form, Input, Button, } from 'antd';

import Image from '../../assets/images/';
import AuthService from '../../Services/AuthService';
import { Navigate } from 'react-router-dom';
import { isLogIn } from '../../Services/useLocalStorage';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(style)

export default function Login() {
  const { t } = useTranslation()
  function changeLanguage(value:string) {
    i18n.changeLanguage(value);
}
  const user  = isLogIn();
  if (user ===true) {
    return <Navigate to="/dashboard/listProducts" replace />;
  }
  const onFinish = (values: any) => {
    AuthService.login(values.username,values.password)
  };
  return (
    <div className={cx('body')}>
      {/* <div className="loader">
        <div className="warpper">
          <div className="inner"></div>
          <div className="text">LOADING</div>
          </div>
          </div> */}
      <div className={cx('wrapper')}>
        <div className={cx('logo')}>
          <img src={Image.logo} alt="Logo" />
          <span>AntD Admin</span
          ></div>
        <div className={cx('ant-form')}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className={cx('ant-form-item')}>
              <div className={cx('ant-form-item-control')}>
                <div className={cx('ant-form-item-control-input')}>
                  <div className={cx('ant-form-item-control-input-content')}>
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Please input your Username!' }]}
                      // icon check Validation
                      hasFeedback
                    >
                      <Input placeholder={t('content.userName')} />
                    </Form.Item>
                  </div>
                </div>
              </div>

            </div>
            <div className={cx('ant-form-item')}>
              <div className={cx('ant-form-item-control')}>
                <div className={cx('ant-form-item-control-input')}>
                  <div className={cx('ant-form-item-control-input-content')}>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]}
                      // icon check Validation
                      hasFeedback
                    >
                      <Input
                        type="password"
                        autoComplete='on'
                        placeholder={t('content.passWord')}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div >

            </div>
            <div className={cx('ant-button')}>
              <Form.Item style={{ width: "100%",marginBottom: "0px"}}>
                <Button  style={{ width: "100%"}} type="primary" htmlType="submit" className="login-form-button">
                {t('content.logIn')}
                </Button>
              </Form.Item>
              <p><span className={cx('margin-right')}>{t('content.userName')}：dinhhieu</span>
                <span>{t('content.passWord')}：123456</span>
              </p>
            </div>
          </Form>
        </div>
      </div>
          <div className={cx('footer')}>
            <span className={cx('footer-item')}>{t('content.language')}</span>
            <span className={cx('footer-item')}> <a href="#" onClick={() => changeLanguage('en')}>English</a></span>
            <span className={cx('footer-item')}><a href="#" onClick={() => changeLanguage('vi')}>Vietnamese</a></span>
          </div>
    </div>
  )
}
