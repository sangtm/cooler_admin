import React from 'react';
import { Card } from 'antd';

import CoolerItem from './CoolerItem';

const Cooler = ({ path, issue_name, storeStatus, store_status, items }) => {
  return (
    <>
      {
        store_status.includes(storeStatus) && (
          <Card title={issue_name} size="small" style={{ width: "100%" }}>
            {
              items.length ? (
                items.map((item, index) => (
                  <CoolerItem
                    key={item.cooler_key}
                    {...item}
                    path={`${path}.items.${index}`}
                    index={index + 1}
                  />
                ))
              ) : <p>Không có dữ liệu</p>
            }
          </Card>
        )
      }
    </>
  );
}

export default Cooler;
