import React, { useState } from 'react'
import { Modal, Form, Input, Select, Row, Col, Button, message } from 'antd';
import ProjectsService from "../../Services/ProjectsService";
import { useTranslation } from 'react-i18next';

interface Values {
  title: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}


export default function AddProduct(ketnoi:any) {
  const { t } = useTranslation()
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
        title={t('content.addProduct')}
        okText={t('content.save')}
        cancelText={t('content.cancel')}
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
            label={t('content.nameProduct')}
            rules={[
              {
                required: true,
                message: `${t('content.messErrorName')}`,
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label={t('content.productPhotoLink')}
            rules={[
              {
                required: true,
                type: 'url',
                message:  `${t('content.messErrorLinkIMG')}`,
              },
            ]}
            
            // icon check Validation
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label={t('content.price')}
            rules={[
              {
                required: true,
                pattern: new RegExp("^[0-9]*$"),
                message: `${t('content.messErrorPrice')}`,
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="brand"
            label={t('content.brand')}
            rules={[
              {
                required: true,
                message: `${t('content.messErrorBrand')}`,
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Select placeholder={t('content.placeholderBrand')}>
              <Option value="Dior">Dior</Option>
              <Option value="Chanel">Chanel</Option>
              <Option value="Gucci">Gucci</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="madeIn"
            label={t('content.madeIn')}
            rules={[
              {
                required: true,
                message:`${t('content.messErrorMadeIn')}`,
              },
            ]}
            // icon check Validation
            hasFeedback
          >
            <Select placeholder={t('content.placeholderBrand')}>
              <Option value="Pháp">Pháp</Option>
              <Option value="Anh">Anh</Option>
              <Option value="Mỹ">Mỹ</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  };


  const onCreate = (values: any) => {
    console.log('giá trị form', values);
    // ProjectsService.create(values)
    //   .then((response: any) => {
    //     message.success(`${t('content.messageSuccessAdd')}`);
    //     const handleRefreshTable = ()=> {ketnoi.handleCallback()}
    //     setTimeout(handleRefreshTable
    //     , 2000)
        
    //   })
    //   .catch(()=> {
    //     message.error(`${t('content.messageErrorAdd')}`)
    //   });
  };

  return (
    <>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={24}>
          <Button style={{marginBottom:'-25px',marginRight:"36px",marginTop:"22px"}} type="primary" onClick={() => {
            setVisible(true);
          }}>{t('content.addProduct')}</Button>
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
