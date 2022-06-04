import React from 'react';
import style from './login.module.scss'
import classNames from 'classnames/bind';
import Image from '../../assets/images/';
import 'antd/dist/antd.css'
import { Form, Input, Button, } from 'antd';

const cx = classNames.bind(style)

export default function Login() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <body className={cx('body')}>
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
                      <Input placeholder="Username" />
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
                        placeholder="Password"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>

            </div>
            <div className={cx('ant-button')}>
              <Form.Item style={{ width: "100%",marginBottom: "0px"}}>
                <Button  style={{ width: "100%"}} type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
              <p><span className={cx('margin-right')}>Username：dinhhieu</span>
                <span>Password：123456</span>
              </p>
            </div>
          </Form>
        </div>
      </div>

    </body>
  )
}
