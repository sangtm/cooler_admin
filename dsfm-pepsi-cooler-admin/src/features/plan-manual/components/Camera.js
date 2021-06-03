import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Card, Form, Upload } from "antd";

import { handleChangeValueRefactor, handleUpdateImageData } from "../actions";

const Camera = ({ storeStatus }) => {
  const dispatch = useDispatch();
  const { items, issue_name, store_status } = useSelector(
    (state) => state.planManualReducer.planData.data.issues.CAMERA
  );

  const onChangeImage = (files, index, type_id) => {
    const parseFiles = files.map((file) => file.originFileObj);
    const value = parseFiles.map(({ name }) => ({
      name,
    }));

    dispatch(
      handleChangeValueRefactor({
        path: "issues.CAMERA.items",
        value,
        index,
      })
    );
    dispatch(
      handleUpdateImageData({
        data: parseFiles,
        type_id,
        cooler_key: null,
      })
    );
  };

  const renderItem = (item, index) => {
    const { type_id, type_name, validate, value } = item;

    return (
      <Form.Item
        key={type_id}
        name={type_id}
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
          onChange={(value) => onChangeImage(value.fileList, index, type_id)}
        >
          {value.length < validate.max ? <PlusOutlined /> : null}
        </Upload>
      </Form.Item>
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

export default Camera;
