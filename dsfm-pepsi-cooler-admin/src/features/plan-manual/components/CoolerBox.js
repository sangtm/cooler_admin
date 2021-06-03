import React from 'react';
import { Card } from 'antd';
import {PropTypes} from 'prop-types'
import CoolerItem from './CoolerItem';

const CoolerBox = ({ path, issue_name, items }) => {
  return (
    <Card title={issue_name}>
      {items.map((item, key) => {
        return (
          <div>
            <CoolerItem
              key={key}
              path={`${path}.items.${key}`}
              {...item}
            />
          </div>
        );
      })}
    </Card>
  );
};

CoolerBox.propTypes = {
  path:       PropTypes.string,
  issue_name: PropTypes.string,
  items:      PropTypes.array,
};

CoolerBox.defaultProps = {
  path:       '',
  issue_name: '',
  items:      [],
};


export default CoolerBox;
