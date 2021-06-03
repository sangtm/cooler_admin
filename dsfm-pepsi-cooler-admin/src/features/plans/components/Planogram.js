import React, { Fragment } from 'react';
import { Table, Collapse, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import { ROLE } from '../../../constants';

export default function Planogram({ groups }) {
  const { role } = useSelector((state) => state.auth.userInfo);

  const columns = [
    {
      title: 'Code sản phẩm',
      dataIndex: 'sku_code'
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'sku_name'
    },
    {
      title: 'Số mặt',
      dataIndex: 'facing'
    },
    {
      title: 'Số lượng',
      dataIndex: 'value',
      render: (value) => <InputNumber min={0} defaultValue={value} disabled={(role===ROLE.GUEST)}
 />
    }
  ];

  return (
    <Fragment>
      {
        groups.map((group) => {
          return (
            <Table
              key={group.group_id}
              rowKey="sku_code"
              // title={() => group.group_name}
              bordered={true}
              columns={columns}
              dataSource={group.skus}
              pagination={false}
            />
          );
        })
      }
    </Fragment>
    // <Collapse>
    //   {
    //     groups.map((group) => {
    //       return (
    //         <Collapse.Panel header={group.group_name} key={group.group_id}>
    //           <Table bordered={true} columns={columns} dataSource={group.skus} pagination={false} />
    //         </Collapse.Panel>
    //       );
    //     })
    //   }
    // </Collapse>
  );
}
