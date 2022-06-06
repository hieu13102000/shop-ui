import React, { useState, useEffect,useRef} from "react";
import TypesProductData from "../../Types/Product"; 
import ProjectsService from "../../Services/ProjectsService";
import { Button, message, Modal, Table} from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from 'antd/lib/table';
import AddProduct from './AddProduct';
import EditProduct from "./EditProduct";

interface DataType {
  key?: React.Key;
  id?: any;
  name?: any;
  price?: any;
  image?: any;
  madeIn?: any;
  brand?: any;
}
export default function Products() {
  const [dataProduct, setDataProduct] = useState<Array<TypesProductData>>([]);
  const data:DataType[] = dataProduct
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const initRefreshTable=0
  const [refreshTable,setRefreshTable] = useState(initRefreshTable)
  const columns: ColumnsType<DataType> = [
    {
      key: '1',
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      render: (text, record) => (
        <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
          {text}
        </div>
      ),
      width: '400px',
    },
    {
      key: '2',
      title: 'Hình ảnh',
      dataIndex: 'image',
      render: (k, record) => (
        <>
          <img style={{ width: '100px', height: '100px' }} src={record.image} />
        </>
      )
    },
    {
      key: '3',
      title: 'Giá',
      dataIndex: 'price',
    },
    {
      key: '4',
      title: 'Thương hiệu',
      dataIndex: 'brand',
    },
    {
      key: '5',
      title: 'Xuất sứ',
      dataIndex: 'madeIn',
    },
    {
      key: '6',
      title: 'Thao tác',
      dataIndex: '',
      render: (text, record, index) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                handleOpenModalEdit(true,record)
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteProducts(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  
  const deleteSelected = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      removeAll(selectedRowKeys)
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  useEffect(() => {
    retrieveTutorials();
  }, [refreshTable]);
 
  const retrieveTutorials = () => {
    ProjectsService.getAll()
      .then((response: any) => {
        setDataProduct(response.data);
        setLoadingTable(false)
      })
      .catch((e: Error) => {
        console.log(e);
        setLoadingTable(false)
      });
  };
  const removeAll = (id:any) => {
    ProjectsService.remove(id)
    .then((response: any) => {
      console.log('thành công');
    })
    .catch((e: Error) => {
      message.error('chưa thể xoá tất cả mã id ' + id +' phía server đang gặp chưa có hàm sử lý ')
    });
  };
// action table
const onDeleteProducts = (record: any) => {
  Modal.confirm({
    title: "Bạn có chắc muốn xoá sản phẩm?",
    okText: "Vâng, tôi chắc",
    okType: "danger",
    cancelText:'Không',
    onOk: () => {
      ProjectsService.remove(record.id)
      .then((response: any) => {
        message.success('Xoá sản phẩm thành công');
        setRefreshTable(refreshTable+1)
      })
      .catch(()=> {
        message.error('X sản phẩm thất bại')
      });
    },
  });
};


const childRef:any = useRef(null);

  const handleOpenModalEdit = (value:any,record: any) => {
      childRef.current.openModal(value,record);
  }

const handleRefreshTable = ()=>{
  setRefreshTable(refreshTable+1)
}

  return (
    <>
    <AddProduct handleCallback={()=>handleRefreshTable()}/>
    <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary"  danger onClick={deleteSelected} disabled={!hasSelected} loading={loading}>
          Xoá tất cả
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Đã chọn ${selectedRowKeys.length} sản phẩm` : ''}
        </span>
      </div>
      <Table loading = {loadingTable} rowSelection={rowSelection} columns={columns}  dataSource={data.map((item: any) => ({ ...item, key: `${item.id}` }))} />
      <EditProduct ref={childRef} handleCallback={()=>handleRefreshTable()}/>
    </>
    )
}
