import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";

import CoolerItem from "./CoolerItem";

const Cooler = ({ storeStatus }) => {
  const { items, issue_name, store_status } = useSelector(
    (state) => state.planManualReducer.planData.data.issues.COOLER
  );

  const renderItem = (item, index) => {
    const { cooler_key, questionnaires } = item;

    return (
      <Card title={`Tủ ${index + 1}`} type="inner" key={cooler_key}>
        <CoolerItem
          questionnaires={questionnaires}
          path={`issues.COOLER.items.${index}`}
          coolerKey={cooler_key}
        />
      </Card>
    );
  };

  return (
    <>
      {store_status.includes(storeStatus) && (
        <Card title={issue_name} size="small">
          {items.map(renderItem)}
        </Card>
      )}
    </>
  );
};

export default Cooler;
