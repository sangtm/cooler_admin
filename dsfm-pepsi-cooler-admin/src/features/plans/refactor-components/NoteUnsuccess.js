import React from 'react'
import { Card } from 'antd';

import RenderComponent from './RenderComponent';

const NoteUnsuccess = ({ path, issue_name, storeStatus, store_status, items }) => {
  return (
    <>
      {
        store_status.includes(storeStatus) && (
          <Card title={issue_name} size="small" style={{ width: "100%" }}>
            {
              items.map((item, index) => (
                <RenderComponent
                  key={item.component_code}
                  {...item}
                  path={`${path}.items.${index}`}
                />
              ))
            }
          </Card>
        )
      }
    </>
  );
}

export default NoteUnsuccess;
