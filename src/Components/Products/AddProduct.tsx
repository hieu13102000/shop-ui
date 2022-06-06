import React, { useState } from 'react'
import { Modal, Form, Input, Select, Row, Col, Button, message } from 'antd';
import ProjectsService from "../../Services/ProjectsService";

interface Values {
  title: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}


export default function AddProduct(ketnoi:any) {
  const [visible, setVisible] = useState(false);
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const { Option } = Select;
    const [confirmLoading, setConfirmLoading] = useState(false);
    return (
      <Modal
        visible={visible}
        title="Thêm sản phẩm"
        okText='Lưu'
        cancelText='Huỷ'
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              setConfirmLoading(true);
              setTimeout(() => {
                setConfirmLoading(false);
                setVisible(false)
                form.resetFields();
              }, 2000);
              onCreate(values);
            })
            .catch(info => {
              console.log('that bai ----------------------------------------------------------------', info);
            });
        }}

        confirmLoading={confirmLoading}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="form_in_modal"
        >
          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên sản phẩm!',
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Link ảnh sản phẩm"
            rules={[
              {
                required: true,
                type: 'url',
                message: 'Vui lòng nhập Link ảnh!',
              },
            ]}
            
            // icon check Validation
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá sản phẩm"
            rules={[
              {
                required: true,
                pattern: new RegExp("^[0-9]*$"),
                message: 'Vui lòng nhập giá sản phẩm!',
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="brand"
            label="Thương hiệu"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên thương hiệu!',
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="madeIn"
            label="Xuất xứ"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn nơi xuất sứ!',
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  };


  const onCreate = (values: any) => {
    console.log('giá trị form', values);
    ProjectsService.create(values)
      .then((response: any) => {
        message.success('Thêm sản phẩm thành công');
        const handleRefreshTable = ()=> {ketnoi.handleCallback()}
        setTimeout(handleRefreshTable
        , 2000)
        
      })
      .catch(()=> {
        message.error('Thêm sản phẩm thất bại')
      });
  };

  return (
    <>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={24}>
          <Button style={{ marginBottom: '22px' }} type="primary" onClick={() => {
            setVisible(true);
          }}>Thêm sản phẩm</Button>
        </Col>
      </Row>

      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  )
}
