import React, { useState } from 'react';
import { Table ,Button, Row, Col, Modal, Form, Input, Select} from 'antd';
import type { TableRowSelection } from 'antd/lib/table/interface';
import type { ColumnsType } from 'antd/lib/table';

interface DataType {
  key?: React.Key;
  id: any;
  name?: any;
  price?: any;
  image?: any;
  madeIn?: any;
  brand?: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: (k,record) => (
      <>
        <img style={{ width: '40px',height: '40px'}} src={record.image} />
      </>
    )
  },
  {
    title: 'Price',
    dataIndex: 'price', 
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'MadeIn',
    dataIndex: 'madeIn',
  },

];

const data: DataType[] = [
  {
    id: '0',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "1",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "2",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  }
];



export default function Products() {
  const rowSelection: TableRowSelection<DataType> = {
  }
  const [visible, setVisible] = useState(false);
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
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const { Option } = Select;


  return (
    <>
    <Row>
      <Col style={{display: 'flex',justifyContent: 'flex-end'}} span={24}>
        <Button style={{marginBottom: '22px'}} type="primary" onClick={() => setVisible(true)}>Thêm sản phẩm</Button>
        <Modal okText='Lưu'
        title="Thêm sản phẩm"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
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
        hasFeedback
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="image"
        label="Link ảnh sản phẩm"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập Link ảnh!',
          },
        ]}
        hasFeedback
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="price"
        label="Giá sản phẩm"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập giá sản phẩm!',
          },
        ]}
        hasFeedback
      >
        <Input/>
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
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>  
      </Form>
      </Modal>
        </Col>
    </Row>
     <Table rowSelection={rowSelection} columns={columns} dataSource={data.map((item: any) => ({ ...item, key: `${item.id}`}) )} />
    </>)
}
