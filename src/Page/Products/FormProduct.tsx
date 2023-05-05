import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, Spin, Upload, message } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { default as ProductsService, default as ProjectsService } from "../../Services/ProductsService";
import { ArrayList } from '../../Types/Product';
import Toast from '../../core/Toast';
import styles from "./ListProduct.module.scss";

export default forwardRef(function FormProduct(props: any, ref: any) {
  const { t } = useTranslation()
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState<string>("");
  const [isEdit, setIsEdit] =useState(false);
  const [currentId, setCurrentId] =useState<number>(0);

  const getDetailById = (id: number) => {
    ProjectsService.getByIDProduct(id)
      .then((response: any) => {
        console.log("response", response.data);
        form.setFieldsValue({
          productName: response.data.productName,
          brandName: response.data.brand.brandName,
          categoryName: response.data.category.categoryName,
          productMadeIn: response.data.productMadeIn,
          productPrice: response.data.productPrice,
          productSaleOFF:response.data.productSaleOff
        });
         setAvatar(response.data.productImage);
      })
      .catch(() => {
        message.error(`${t('content.messageErrorEdit')}`)
      });
  }

  useImperativeHandle(ref, () => ({
    openModal: (isOpen: boolean, payloadId?: number) => {
      setIsModalOpen(isOpen)
      if (payloadId) {
        setIsEdit(true)
        setCurrentId(payloadId)
        getDetailById(payloadId)
      }
    }
  }));

  const handleOk = () => {
    form
    .validateFields()
    .then((values) => {
      const currentValue = form.getFieldsValue();
      const payload ={
        name: currentValue.productName,
        price: currentValue.productPrice,
        saleOff:convertNameToId(arrSaleOff,currentValue.productSaleOFF),
        image:  avatar ? avatar :"https://firebasestorage.googleapis.com/v0/b/webshop-a5ab0.appspot.com/o/add.png?alt=media&token=1cc404b4-4ab2-4bc3-afcd-f3de66dec8f2",
        madeIn: currentValue.productMadeIn,
        categoryId:1,
        brandId: convertNameToId(arrBrand,currentValue.brandName)
      }
      if(isEdit){
    ProjectsService.updateProduct(currentId,payload)
      .then((response: any) => {
        message.success(`${t('content.messageSuccessEdit')}`);
        setIsModalOpen(false)
        // handleRefreshTable
        props.handleCallback()
      })
      .catch(()=> {
        message.error(`${t('content.messageErrorEdit')}`)
      });
      }
      else{
        ProjectsService.createProduct(payload)
        .then((response: any) => {
          message.success(`${t('content.messageSuccessAdd')}`);
          setIsModalOpen(false)
        // handleRefreshTable
        props.handleCallback()
        })
        .catch(()=> {
          message.error(`${t('content.messageErrorAdd')}`)
        });
        }
    })
    .catch((info) => {
      console.log("Validate Failed:", info);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  //upload image product
  const handleAvatar = async (e: any) => {
    if (e.file.status !== 'uploading') {
      setLoading(true)
      const formData = new FormData();
      formData.append('fileImage', e.file.originFileObj)
      await ProductsService.uploadImgae(formData).then((res: any) => {
        setAvatar(res.data.url);
        setLoading(false);
      });
    }
  }
  const arrBrand = [
    { value: '1', label: 'Dior' },
    { value: '2', label: 'Gucci' },
    { value: '3', label: 'Chanel' },
  ]

  const arrSaleOff = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' }
  ]

  const handleChangeBrand = (value: string) => {
    console.log(`handleChangeBrand ${value}`);
    form.setFieldsValue({
      brandName: value,
    });
  };
  const handleChangeSaleOff = (value: string) => {
    form.setFieldsValue({
      productSaleOFF:value
    });
  };
  const handleChangeMadeIn = (value: string) => {
    form.setFieldsValue({
      productMadeIn: value,
    });
  };

  const handleChangeCategory = (value: string) => {
    form.setFieldsValue({
      categoryName: value,
    });
  };

  const convertNameToId = (array: ArrayList[],value:any) => {   
    if(!isNaN(value)){
      return parseInt(value)
    }
    else{
      const labelToFind = value;
      const brand = arrBrand.find((item) => item.label === labelToFind);
      if (brand) {
        console.log(brand.value);
        return brand.value
      } else {
        console.log(`Brand with label "${labelToFind}" not found`);
        return null; 
      }
    }

  };
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  return (
    <>
      <Toast />
      <Modal
        visible={isModalOpen}
        title={isEdit ? t('content.editProduct') : t('content.addProduct')}
        okText={t('content.save')}
        cancelText={t('content.cancel')}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        centered
      >
        <Form form={form} layout="vertical" hideRequiredMark
        >
          <Row gutter={[32, 8]}>
            <Col id="formLeft" span={12}>
                <img className={styles.avatar} style={{ opacity: loading ? "0.5" : "1" }}
                  src={avatar ? avatar : "https://firebasestorage.googleapis.com/v0/b/webshop-a5ab0.appspot.com/o/add.png?alt=media&token=1cc404b4-4ab2-4bc3-afcd-f3de66dec8f2"}
                  alt="Italian Trulli" />
                {loading && <Spin className={styles.loading} indicator={antIcon} />}
                <Upload
                  showUploadList={false}
                  onChange={handleAvatar}
                >
                  <Button className={styles["btn-avatar"]}>
                    {/* {t.mb_upload} */}
                    tai len
                  </Button>
                </Upload>
            </Col>
            <Col id="formRight" span={12}>
              <Form.Item
                name="productName"
                className={styles["mb-12"]}
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
                name="productPrice"
                className={styles["mb-12"]}
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
                name="productSaleOFF"
                className={styles["mb-12"]}
                label="giảm giá"
                rules={[
                  {
                    required: true,
                    message: `${t('content.messErrorMadeIn')}`,
                  },
                ]}
                // icon check Validation
                hasFeedback
              >
                <Select placeholder={t('content.placeholderMadeIn')}
                  onChange={handleChangeSaleOff}
                  options={[
                    { value: '10', label: '10' },
                    { value: '20', label: '20' },
                    { value: '30', label: '30' }
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="categoryName"
                className={styles["mb-12"]}
                label={t('content.categoryName')}
                rules={[
                  {
                    required: true,
                    message: `${t('content.messErrorName')}`,
                  },
                ]}
                hasFeedback
              >
                <Select placeholder={t('content.placeholderCategory')}
                  onChange={handleChangeCategory}
                  options={[
                    { value: '1', label: 'Son' },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="brandName"
                className={styles["mb-12"]}
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
                <Select placeholder={t('content.placeholderBrand')}
                  onChange={handleChangeBrand}
                  options={[
                    { value: '1', label: 'Dior' },
                    { value: '2', label: 'Chanel' },
                    { value: '3', label: 'Gucci' }
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="productMadeIn"
                className={styles["mb-12"]}
                label={t('content.madeIn')}
                rules={[
                  {
                    required: true,
                    message: `${t('content.messErrorMadeIn')}`,
                  },
                ]}
                // icon check Validation
                hasFeedback
              >
                <Select placeholder={t('content.placeholderMadeIn')}
                 onChange={handleChangeMadeIn}
                  options={[
                    { value: 'Pháp', label: 'Pháp' },
                    { value: 'Anh', label: 'Anh' },
                    { value: 'Mỹ', label: 'Mỹ' }
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
})
