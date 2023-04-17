import React, {forwardRef, useImperativeHandle, useState } from 'react'
import { Modal, Form, Input, Select, message } from 'antd';
import ProjectsService from "../../Services/ProductsService";
import { useTranslation } from 'react-i18next';

interface Values {
  title: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (id:any,values: Values) => void;
  onCancel: () => void;
}

export default forwardRef( function EditProduct(props:any, ref:any) {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false);
  const [valueFormEdit, setValueFormEdit] = useState({id: '',name: '', price: 0, brand: '', image: '', madeIn: ''});
 useImperativeHandle(ref, () => ({
  openModal: (value:any,record:any) => {setOpenModal(value)
    setValueFormEdit(record)}
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
        title={t('content.editProduct')}
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
                setOpenModal(false)
                form.resetFields();
              }, 2000);
              const handleRefreshTable = ()=> {props.handleCallback()}
              setTimeout(handleRefreshTable
              , 2000)
              onCreate(valueFormEdit.id,values);
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
            initialValue={valueFormEdit.name}
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
            initialValue={valueFormEdit.image}
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
            initialValue={valueFormEdit.price}
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
            initialValue={valueFormEdit.brand}
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
            initialValue={valueFormEdit.madeIn}
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


  const onCreate = (id: any,values: any) => {
    // ProjectsService.update(id,values)
    //   .then((response: any) => {
    //     message.success(`${t('content.messageSuccessEdit')}`);
    //   })
    //   .catch(()=> {
    //     message.error(`${t('content.messageErrorEdit')}`)
    //   });
    //   setOpenModal(true);
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
