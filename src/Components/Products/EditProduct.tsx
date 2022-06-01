import React, {forwardRef, useImperativeHandle, useState } from 'react'
import { Modal, Form, Input, Select, message } from 'antd';
import ProjectsService from "../../Services/ProjectsService";

interface Values {
  title: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}


export default forwardRef( function EditProduct(props:any, ref:any) {
  console.log('awg',ref);
  const [openModal, setOpenModal] = useState(false);

 useImperativeHandle(ref, () => ({
  openModal: (value:any) => setOpenModal(value),
 }));

  if(!openModal) return null;



  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
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
        visible={openModal}
        title="Sửa sản phẩm"
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
                setOpenModal(false)
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
            // initialValue={{props.mame}}
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
      })
      .catch(()=> {
        message.error('Thêm sản phẩm thất bại')
      });
      setOpenModal(true);
  };

  return (
    <>
      <CollectionCreateForm
        visible={openModal}
        onCreate={onCreate}
        onCancel={() => {
          setOpenModal(false);
        }}
      />
    </>
  )
})
