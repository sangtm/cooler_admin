import React from "react";
import { useDispatch } from "react-redux";
import { Form, Select, Input, InputNumber, Upload } from "antd";

import { handleChangeValueRefactor, handleUpdateImageData } from "../actions";
import { PlusOutlined } from "@ant-design/icons";

const CoolerItem = ({ questionnaires, path, coolerKey }) => {
  const dispatch = useDispatch();

  const onChangeValue = (value, index) => {
    dispatch(
      handleChangeValueRefactor({
        path: `${path}.questionnaires`,
        value,
        index,
      })
    );
  };

  const onChangeImage = (files, index, type_id) => {
    const parseFiles = files.map((file) => file.originFileObj);
    const value = parseFiles.map(({ name }) => ({
      name,
    }));

    console.log("files - index - type_id: ", files, index, type_id);

    onChangeValue(value, index);
    dispatch(
      handleUpdateImageData({
        data: parseFiles,
        type_id,
        cooler_key: coolerKey,
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
      type_id,
      type_name,
    } = item;

    if (!show) {
      return null;
    }

    switch (component_type) {
      case "SELECT": {
        return (
          <Form.Item
            label={label}
            name={`${coolerKey}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${coolerKey}.${component_code}`}
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
            name={`${coolerKey}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${coolerKey}.${component_code}`}
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
            name={`${coolerKey}.${component_code}`}
            initialValue={value}
            rules={[{ required: validate.required }]}
            key={`${coolerKey}.${component_code}`}
          >
            {keyboard_type === "numeric" ? (
              <InputNumber onChange={(value) => onChangeValue(value, index)} />
            ) : (
              <Input onChange={(e) => onChangeValue(e.target.value, index)} />
            )}
          </Form.Item>
        );
      }

      case "CAMERA": {
        return (
          <Form.Item
            key={`${coolerKey}.${component_code}`}
            name="file"
            valuePropName="file"
            label={type_name}
            rules={[{ required: validate.required }]}
          >
            <Upload
              name="image"
              listType="picture-card"
              className="avatar-uploader"
              // multiple={true}
              accept=".jpeg, .png, .jpg"
              showUploadList={true}
              beforeUpload={() => false}
              onChange={(value) =>
                onChangeImage(value.fileList, index, type_id)
              }
            >
              {value.length < validate.max ? <PlusOutlined /> : null}
            </Upload>
          </Form.Item>
        );
      }

      case "SCAN_QR": {
        return (
          <Form.Item
            key={`${coolerKey}.${component_code}`}
            name="file"
            valuePropName="file"
            label={type_name}
            rules={[{ required: validate.required }]}
          >
            <Upload
              name="image"
              listType="picture-card"
              className="avatar-uploader"
              // multiple={true}
              accept=".jpeg, .png, .jpg"
              showUploadList={true}
              beforeUpload={() => false}
              onChange={(value) =>
                onChangeImage(value.fileList, index, type_id)
              }
            >
              {value.length < validate.max ? <PlusOutlined /> : null}
            </Upload>
          </Form.Item>
        );
      }

      default: {
        return null;
      }
    }
  };

  return <>{questionnaires.map(renderItem)}</>;
};

export default CoolerItem;
