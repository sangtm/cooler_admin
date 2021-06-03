import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Form, Select, Input, InputNumber } from "antd";

import { handleChangeValueRefactor } from "../actions";

const NoteUnsuccess = ({ storeStatus }) => {
  const dispatch = useDispatch();
  const { items, issue_name, store_status } = useSelector(
    (state) => state.planManualReducer.planData.data.issues.NOTE_UNSUCCESS
  );
  const path = "issues.NOTE_UNSUCCESS";

  const onChangeValue = (value, index) => {
    dispatch(
      handleChangeValueRefactor({
        path: `${path}.items`,
        value,
        index,
      })
    );
  };

  const renderItem = (item, index) => {
    const {
      component_type,
      component_code,
      keyboard_type,
      label,
      value,
      show = true,
      validate,
      options = [],
    } = item;

    if (!show) {
      return null;
    }

    switch (component_type) {
      case "SELECT": {
        return (
          <Form.Item
            label={label}
            name={`${path}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${path}.${component_code}`}
          >
            <Select
              onChange={(value) => onChangeValue(value, index)}
              mode={keyboard_type === "multiple" ? "multiple" : undefined}
            >
              {options.map((option) => (
                <Select.Option value={option.value} key={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );
      }

      case "TEXTAREA": {
        return (
          <Form.Item
            label={label}
            name={`${path}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${path}.${component_code}`}
          >
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => onChangeValue(e.target.value, index)}
            />
          </Form.Item>
        );
      }

      case "TEXT": {
        return (
          <Form.Item
            label={label}
            name={`${path}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${path}.${component_code}`}
          >
            {keyboard_type === "numeric" ? (
              <InputNumber onChange={(value) => onChangeValue(value, index)} />
            ) : (
              <Input onChange={(e) => onChangeValue(e.target.value, index)} />
            )}
          </Form.Item>
        );
      }

      default: {
        return null;
      }
    }
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

export default NoteUnsuccess;
