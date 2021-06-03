// import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { Form, Input, InputNumber } from 'antd';
// import { handleChangeValue } from '../actions';

// const InputComponent = ({
//   component_code,
//   keyboard_type,
//   label = '',
//   validate = { required: false },
//   value,
//   show = true,
//   path,
// }) => {
//   const dispatch = useDispatch();

//   const onChangeInput = (e) => {
//     const value = keyboard_type === 'numeric' ? e : e.target.value;
//     console.log('Value: ', `${path}.value`, value);
//     dispatch(handleChangeValue(`${path}.value`, value));
//   };

//   return (
//     <>
//       {show && (
//         <Form.Item
//           label={label}
//           name={component_code}
//           initialValue={value}
//           rules={[{ required: validate.required }]}
//         >
//           {keyboard_type === 'numeric' ? (
//             <InputNumber onChange={onChangeInput} />
//           ) : (
//             <Input onChange={onChangeInput} />
//           )}
//         </Form.Item>
//       )}
//     </>
//   );
// };

// InputComponent.propTypes = {
//   component_code: PropTypes.string,
//   keyboard_type: PropTypes.string,
//   label: PropTypes.string,
//   validate: PropTypes.shape({
//     required: PropTypes.bool,
//   }),
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   path: PropTypes.string,
// };

// export default InputComponent;
