import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Input } from "antd";

import { handleChangeValueRefactor } from "../actions";

const TextAreaComponent = ({
  path,
  component_code,
  label,
  value,
  show = true,
  validate = { required: false },
  index,
}) => {
  const dispatch = useDispatch();
  const onChangeTextArea = (e) => {
    const value = e.target.value;
    // console.log("PATH - VALUE: ", path, value, index);
    dispatch(handleChangeValueRefactor({ path, value, index }));
  };

  return (
    <>
      {show && (
        <Form.Item
          label={label}
          name={`${path}.${component_code}`}
          initialValue={value}
          rules={[{ required: validate.required }]}
        >
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 6 }}
            onChange={onChangeTextArea}
          />
        </Form.Item>
      )}
    </>
  );
};

TextAreaComponent.propTypes = {
  path: PropTypes.string,
  component_code: PropTypes.string,
  label: PropTypes.string,
  show: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validate: PropTypes.shape({
    required: PropTypes.bool,
  }),
};

export default TextAreaComponent;
