import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input, InputNumber } from 'antd';

// import { handleChangeValue } from '../actions';

const InputComponent = ({
  path,
  component_code,
  label,
  value,
  keyboard_type = 'default',
  show = true,
  validate = { required: false },
}) => {
  const dispatch = useDispatch();
  const onChangeInput = (e) => {
    const value = keyboard_type === 'numeric' ? e : e.target.value;
    console.log('PATH - VALUE: ', `${path}.value`, value);
    // dispatch(handleChangeValue(`${path}.value`, value));
  };

  return (
    // <>
    //   {show && (
    //     <Form.Item
    //       label={label}
    //       name={component_code}
    //       initialValue={value}
    //       rules={[{ required: validate.required }]}
    //     >
    //       {keyboard_type === 'numeric' ? (
    //         <InputNumber onChange={onChangeInput} />
    //       ) : (
    //           <Input onChange={onChangeInput} />
    //         )}
    //     </Form.Item>
    //   )}
    // </>
    <Form.Item
      label={label}
      name={`${path}.${component_code}`}
      initialValue={value}
      rules={[{ required: validate.required }]}
    >
      {keyboard_type === 'numeric' ? (
        <InputNumber onChange={onChangeInput} />
      ) : (
          <Input onChange={onChangeInput} />
        )}
    </Form.Item>
  );
};

InputComponent.propTypes = {
  path: PropTypes.string,
  component_code: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  keyboard_type: PropTypes.string,
  show: PropTypes.bool,
  validate: PropTypes.shape({
    required: PropTypes.bool,
  }),
};

export default InputComponent;
