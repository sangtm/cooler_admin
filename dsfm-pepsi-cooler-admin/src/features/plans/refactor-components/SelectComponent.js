import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { Form, Select } from 'antd';

// import { handleChangeValue, handleChangeShowHide } from '../actions';

const SelectComponent = ({
  path,
  component_code,
  label,
  value,
  keyboard_type = 'default',
  show = true,
  validate = { required: false },
  options = [],
  actions = {},
}) => {
  const dispatch = useDispatch();
  const onChangeSelect = (value) => {
    console.log('PATH - VALUE - ACTIONS: ', path, value, actions);
    // if (!isEmpty(actions)) {
    //   dispatch(handleChangeShowHide(actions[value].show));
    //   dispatch(handleChangeValue(`${path}.value`, value));
    // } else {
    //   dispatch(handleChangeValue(`${path}.value`, value));
    // }
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
    //       <Select
    //         onChange={onChangeSelect}
    //         mode={keyboard_type === 'multiple' ? 'multiple' : undefined}
    //       >
    //         {options.map((option) => (
    //           <Select.Option value={option.value} key={option.value}>
    //             {option.label}
    //           </Select.Option>
    //         ))}
    //       </Select>
    //     </Form.Item>
    //   )}
    // </>
    <Form.Item
      label={label}
      name={`${path}.${component_code}`}
      initialValue={value}
      rules={[{ required: validate.required }]}
    >
      <Select
        onChange={onChangeSelect}
        mode={keyboard_type === 'multiple' ? 'multiple' : undefined}
      >
        {options.map((option) => (
          <Select.Option value={option.value} key={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

SelectComponent.propTypes = {
  path: PropTypes.string,
  component_code: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  keyboard_type: PropTypes.string,
  show: PropTypes.bool,
  validate: PropTypes.shape({
    required: PropTypes.bool,
  }),
  options: PropTypes.array,
  actions: PropTypes.object,
};

export default SelectComponent;
