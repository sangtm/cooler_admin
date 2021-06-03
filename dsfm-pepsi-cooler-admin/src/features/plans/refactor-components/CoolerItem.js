import React from 'react';
import { Card } from 'antd';

import RenderComponent from './RenderComponent';

const CoolerItem = ({ index, path, questionnaires }) => {
  return (
    <Card type="inner" title={`Tủ ${index}`}>
      {
        questionnaires.map((questionnairy, index) => (
          <RenderComponent
            key={questionnairy.component_code}
            {...questionnairy}
            path={`${path}.questionnaires.${index}`}
          />
        ))
      }
    </Card>
  )
}

export default CoolerItem;
