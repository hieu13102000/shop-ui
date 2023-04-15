/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import TypesProductData from "../../Types/Product";
import ProjectsService from "../../Services/ProjectsService";
import { Breadcrumb, Button, Input, InputRef, message, Modal, Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined, DashboardOutlined, ShoppingOutlined } from "@ant-design/icons";
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import AddProduct from './AddProduct';
import EditProduct from "./EditProduct";
import { useTranslation } from "react-i18next";
import { FilterConfirmProps } from "antd/lib/table/interface";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
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
  // const { t } = useTranslation()
  // const [dataProduct, setDataProduct] = useState<Array<TypesProductData>>([]);
  // const data: DataType[] = dataProduct
  // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [loadingTable, setLoadingTable] = useState(true);
  // const initRefreshTable = 0
  // const [refreshTable, setRefreshTable] = useState(initRefreshTable)


  // type DataIndex = keyof DataType;
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef<InputRef>(null);
  // const handleSearch = (
  //   selectedKeys: string[],
  //   confirm: (param?: FilterConfirmProps) => void,
  //   dataIndex: DataIndex,
  // ) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = (clearFilters: () => void) => {
  //   clearFilters();
  //   setSearchText('');
  // };
  // const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
  //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
  //     <div style={{ padding: 8 }}>
  //       <Input
  //         ref={searchInput}
  //         placeholder={t('content.searchName')}
  //         value={selectedKeys[0]}
  //         onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
  //         style={{ marginBottom: 8, display: 'block' }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           {t('content.search')}
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             clearFilters && handleReset(clearFilters)
  //             handleSearch(selectedKeys as string[], confirm, dataIndex)
  //           }
  //           }
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           {t('content.reset')}
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered: boolean) => (
  //     <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex]
  //       .toString()
  //       .toLowerCase()
  //       .includes((value as string).toLowerCase()),
  //   onFilterDropdownVisibleChange: visible => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: text =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
  //         searchWords={[searchText]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ''}
  //       />
  //     ) : (
  //       text
  //     ),
  // });

  // const columns: ColumnsType<DataType> = [
  //   {
  //     key: '1',
  //     title: `${t('content.nameProduct')}`,
  //     dataIndex: 'name',
  //     render: (text, record) => (
  //       <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
  //         {text}
  //       </div>
  //     ),
  //     width: '400px',
  //     ...getColumnSearchProps('name'),
  //   },
  //   {
  //     key: '2',
  //     title: `${t('content.image')}`,
  //     dataIndex: 'image',
  //     render: (k, record) => (
  //       <>
  //         <img style={{ width: '100px', height: '100px' }} src={record.image} />
  //       </>
  //     )
  //   },
  //   {
  //     key: '3',
  //     title: `${t('content.price')}`,
  //     dataIndex: 'price',
  //     sorter: {
  //       compare: (a, b) => a.price - b.price,
  //       multiple: 1,
  //     },
  //   },
  //   {
  //     key: '4',
  //     title: `${t('content.brand')}`,
  //     dataIndex: 'brand',
  //   },
  //   {
  //     key: '5',
  //     title: `${t('content.madeIn')}`,
  //     dataIndex: 'madeIn',
  //   },
  //   {
  //     key: '6',
  //     title: `${t('content.action')}`,
  //     dataIndex: '',
  //     render: (text, record, index) => {
  //       return (
  //         <>
  //           <EditOutlined
  //             onClick={() => {
  //               handleOpenModalEdit(true, record)
  //             }}
  //           />
  //           <DeleteOutlined
  //             onClick={() => {
  //               onDeleteProducts(record);
  //             }}
  //             style={{ color: "red", marginLeft: 12 }}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  // const deleteSelected = () => {
  //   setLoading(true);
  //   // ajax request after empty completing
  //   setTimeout(() => {
  //     removeAll(selectedRowKeys)
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };

  // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //   console.log('selectedRowKeys changed: ', selectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };
  // const hasSelected = selectedRowKeys.length > 0;
  // useEffect(() => {
  //   retrieveTutorials();
  // }, [refreshTable]);

  // const retrieveTutorials = () => {
  //   ProjectsService.getAll()
  //     .then((response: any) => {
  //       setDataProduct(response.data);
  //       setLoadingTable(false)
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //       setLoadingTable(false)
  //     });
  // };
  // const removeAll = (id: any) => {
  //   ProjectsService.remove(id)
  //     .then((response: any) => {
  //       console.log('thành công');
  //     })
  //     .catch((e: Error) => {
  //       message.error('chưa thể xoá tất cả mã id ' + id + ' phía server đang gặp chưa có hàm sử lý ')
  //     });
  // };
  // // action table
  // const onDeleteProducts = (record: any) => {
  //   Modal.confirm({
  //     title: `${t('content.infDelete')}`,
  //     okText: `${t('content.yes')}`,
  //     okType: "danger",
  //     cancelText: `${t('content.no')}`,
  //     onOk: () => {
  //       ProjectsService.remove(record.id)
  //         .then((response: any) => {
  //           message.success(`${t('content.messageSuccessDelete')}`);
  //           setRefreshTable(refreshTable + 1)
  //         })
  //         .catch(() => {
  //           message.error(`${t('content.messageErrorDelete')}`)
  //         });
  //     },
  //   });
  // };


  // const childRef: any = useRef(null);
  // const handleOpenModalEdit = (value: any, record: any) => {
  //   childRef.current.openModal(value, record);
  // }
  // const handleRefreshTable = () => {
  //   setRefreshTable(refreshTable + 1)
  // }
  // return (
  //   <>
  //     <Breadcrumb style={{ margin: '16px 0' }}>
  //       <Breadcrumb.Item><DashboardOutlined /> {t('content.dashboard')}</Breadcrumb.Item>
  //       <Breadcrumb.Item><ShoppingOutlined /> {t('content.products')}</Breadcrumb.Item>
  //     </Breadcrumb>
  //     <div style={{ backgroundColor: 'white' }}>
  //       <AddProduct handleCallback={() => handleRefreshTable()} />
  //       <div
  //         style={{
  //           marginBottom: '16px',
  //         }}
  //       >
  //         <Button type="primary" danger onClick={deleteSelected} disabled={!hasSelected} loading={loading}>
  //           Xoá tất cả
  //         </Button>
  //         <span
  //           style={{
  //             marginLeft: 8,
  //           }}
  //         >
  //           {hasSelected ? `Đã chọn ${selectedRowKeys.length} sản phẩm` : ''}
  //         </span>
  //       </div>
  //       <Table loading={loadingTable} rowSelection={rowSelection} columns={columns} dataSource={data.map((item: any) => ({ ...item, key: `${item.id}` }))} />
  //       <EditProduct ref={childRef} handleCallback={() => handleRefreshTable()} />
  //     </div>
  //   </>
  // )
}
