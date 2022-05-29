import React from 'react';
import { Table} from 'antd';
import type { TableRowSelection } from 'antd/lib/table/interface';
import type { ColumnsType } from 'antd/lib/table';
import AddProduct from '../Products/AddProduct';

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
    render: (k, record) => (
      <>
        <img style={{ width: '40px', height: '40px' }} src={record.image} />
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
  },
  {
    id: '3',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "4",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "5",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: '6',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "7",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "8",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: '9',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "10",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "11",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: '12',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "13",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "14",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: '15',
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "16",
    name: "Son Dưỡng Dior Addict Lip Glow To The Max 201 Pink",
    image: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/son-duong-dior-addict-lip-glow-to-the-max-201-pink-2019-5cee2d7346a2e-29052019135755.jpg",
    price: 719.000,
    madeIn: "Pháp",
    brand: "Dior",
  },
  {
    id: "17",
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
  


  return (
    <>
    <AddProduct/>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data.map((item: any) => ({ ...item, key: `${item.id}` }))} />
    </>)
}
