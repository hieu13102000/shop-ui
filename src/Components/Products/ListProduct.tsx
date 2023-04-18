/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import ProjectsService from "../../Services/ProductsService";
import { Breadcrumb, Button, Col, Input, InputRef, message, Modal, Pagination, PaginationProps, Row, Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined, DashboardOutlined, ShoppingOutlined } from "@ant-design/icons";
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import FormProduct from "./FormProduct";
import { useTranslation } from "react-i18next";
import { TypesProductData } from "../../Types/Product";
import Toast, { toastError, toastSuccess } from "../../core/Toast";
import styles from "./ListProduct.module.scss";
import Card from "../../core/Card";

export default function Products() {
  const { t } = useTranslation()
  const [dataProduct, setDataProduct] = useState<Array<TypesProductData>>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const initRefreshTable = 0
  const [refreshTable, setRefreshTable] = useState(initRefreshTable)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const onChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };
  
  const columns: ColumnsType<TypesProductData> = [
    {
      key: '1',
      title: `${t('content.nameProduct')}`,
      dataIndex: 'productName',
    },
    {
      key: '2',
      title: `${t('content.image')}`,
      dataIndex: 'productImage',
      render: (k, record) => (
        <>
          <img style={{ width: '100px', height: '100px' }} src={record.productImage} />
        </>
      )
    },
    {
      key: '3',
      title: `${t('content.price')}`,
      dataIndex: 'productPrice',
      sorter: {
        compare: (a, b) => a.productPrice - b.productPrice,
        multiple: 1,
      },
    },
    {
      key: '4',
      title: `${t('content.brand')}`,
      dataIndex: 'brandName',
    },
    {
      key: '5',
      title: `${t('content.madeIn')}`,
      dataIndex: 'productMadeIn',
    },
    {
      key: '6',
      title: `${t('content.action')}`,
      dataIndex: '',
      render: (text, record, index) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                handleOpenModalProduct(true, record.productId)
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
    const payload = {
      productIds: selectedRowKeys.map(key => Number(key))
    }
    ProjectsService.removeMultiple(payload)
      .then((response) => {
        toastSuccess("Xoá thành công !")
        setSelectedRowKeys([]);
        setLoading(false);
        getAllProducts()
      })
      .catch((e: Error) => {
        toastError("Xoá không thành công !")
        setLoading(false);
      });
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
    getAllProducts();
  }, [refreshTable,currentPage]);

  const getAllProducts = () => {
    const param = {
      page: currentPage,
      limit: 10,
    }
    ProjectsService.getAllProducts(param)
      .then((response) => {
        setDataProduct(response.data.data);
        setTotalPage(response.data.totalItems)
        setLoadingTable(false)
      })
      .catch((e: Error) => {
        console.log(e);
        setLoadingTable(false)
      });
  };
  // action table
  const onDeleteProducts = (record: TypesProductData) => {
    Modal.confirm({
      title: `${t('content.infDelete')}`,
      okText: `${t('content.yes')}`,
      okType: "danger",
      cancelText: `${t('content.no')}`,
      onOk: () => {
        ProjectsService.removeById(record.productId)
          .then((response: any) => {
            toastSuccess(`${t('content.messageSuccessDelete')}`);
            setRefreshTable(refreshTable + 1)
          })
          .catch(() => {
            toastError(`${t('content.messageErrorDelete')}`)
          });
      },
    });
  };


  const childRef: any = useRef(null);
  const handleOpenModalProduct = (isOpen: boolean, payloadId?: number) => {
    if (payloadId !== undefined) {
      childRef.current.openModal(isOpen, payloadId);
    } else {
      childRef.current.openModal(isOpen);
    }
  }
  
  const handleRefreshTable = () => {
    console.log("ggg");
    
    setRefreshTable(refreshTable + 1)
  }
  return (
    <>
      <Toast></Toast>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item><DashboardOutlined /> {t('content.dashboard')}</Breadcrumb.Item> */}
        <Breadcrumb.Item><ShoppingOutlined /> {t('content.products')}</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Row gutter={[0, 16]}>
          <Col span={12}>
            <Space size={"middle"}>
              <Button type="primary" danger onClick={deleteSelected} disabled={!hasSelected} loading={loading}>
                Xoá tất cả
              </Button>
              {hasSelected ? `Đã chọn ${selectedRowKeys.length} sản phẩm` : ''}
            </Space>
          </Col>
          <Col span={12}  className={styles["align-right"]}>
            {/* <AddProduct handleCallback={() => handleRefreshTable()} /> */}
            <Button style={{ textAlign: 'right' }} type="primary" onClick={()=>handleOpenModalProduct(true)}>
              {t('content.addProduct')}
              </Button>
          </Col>
          <Col span={24}>
            <Table
              loading={loadingTable}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataProduct.map((item: TypesProductData) => ({ ...item, key: item.productId }))}
              pagination={false}
            />
          </Col>
          <Col span={24}>
            <Pagination
              className={styles["pagination"]}
              current={currentPage} onChange={onChangePage} pageSize={10}
              showSizeChanger={false} total={totalPage}
              hideOnSinglePage={dataProduct.length !== 0 ? false : true} />
          </Col>
        </Row>
        <FormProduct ref={childRef} handleCallback={() => handleRefreshTable()} />
      </Card>
    </>
  )
}
