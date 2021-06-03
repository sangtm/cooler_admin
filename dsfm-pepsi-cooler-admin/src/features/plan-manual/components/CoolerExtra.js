import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";

import CoolerItem from "./CoolerItem";
import { handleAddItem, handleDeleteItem } from "../actions";

const CoolerExtra = ({ storeStatus }) => {
  const dispatch = useDispatch();
  const { items, issue_name, store_status } = useSelector(
    (state) => state.planManualReducer.planData.data.issues.COOLER_EXTRA
  );

  const onClickAdd = () => {
    dispatch(handleAddItem());
  };

  const onClickDelete = (index, cooler_key) => {
    dispatch(handleDeleteItem(index, cooler_key));
  };

  const renderItem = (item, index) => {
    const { cooler_key, questionnaires } = item;

    return (
      <Card
        title={`Tủ ${index + 1}`}
        type="inner"
        key={cooler_key}
        extra={
          <Button
            type="primary"
            danger
            onClick={() => onClickDelete(index, cooler_key)}
          >
            Xóa
          </Button>
        }
      >
        <CoolerItem
          questionnaires={questionnaires}
          path={`issues.COOLER_EXTRA.items.${index}`}
          coolerKey={cooler_key}
        />
      </Card>
    );
  };

  return (
    <>
      {store_status.includes(storeStatus) && (
        <Card
          title={issue_name}
          extra={<Button onClick={onClickAdd}>Thêm tủ</Button>}
          size="small"
        >
          {items.length ? items.map(renderItem) : <p>Không có dữ liệu</p>}
        </Card>
      )}
    </>
  );
};

export default CoolerExtra;
