import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Select } from "antd";
import { get, isEmpty, includes } from "lodash";

import {
	handleChangeValueRefactor,
	handleGetLocationAPI,
	handleReloadLocationAPI,
} from "../actions";
import { LOCATION_COMPONENT_CODE } from "../../../constants";

const SelectComponent = ({
	component_code,
	keyboard_type,
	label = "",
	validate = { required: false },
	value,
	options = [],
	path,
	show = true,
	index,
	province = [],
	ward = [],
	district = [],
	_cityRefs,
	_onRefs,
	_onReload,
	_checkReload,
}) => {
	const dispatch = useDispatch();

	let _optionRender = "";

	switch (component_code) {
		case LOCATION_COMPONENT_CODE[0]:
			_optionRender = province;
			break;
		case LOCATION_COMPONENT_CODE[1]:
			_optionRender = district;
			break;
		case LOCATION_COMPONENT_CODE[2]:
			_optionRender = ward;
			console.log("ward ne");
			break;
		default:
			_optionRender = options;
			break;
	}

	const onChangeSelect = (value) => {
		switch (component_code) {
			case LOCATION_COMPONENT_CODE[0]:
				_onRefs(true, value);
				_onReload(LOCATION_COMPONENT_CODE[0]);
				dispatch(handleGetLocationAPI({ provinceCode: value }));
				// dispatch(
				// 	handleReloadLocationAPI(LOCATION_COMPONENT_CODE[0], path, index)
				// );
				break;
			case LOCATION_COMPONENT_CODE[1]:
				_onRefs(false, value);
				_onReload(LOCATION_COMPONENT_CODE[1]);
				dispatch(
					handleGetLocationAPI({
						provinceCode: _cityRefs,
						districtCode: value,
					})
				);
				// dispatch(
				// 	handleReloadLocationAPI(LOCATION_COMPONENT_CODE[1], path, index)
				// );
				break;
		}
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
					<Select
						onChange={onChangeSelect}
						mode={keyboard_type === "multiple" ? "multiple" : undefined}
					>
						{!isEmpty(_optionRender) &&
							_optionRender.map((option) => {
								return (
									<Select.Option
										value={get(option, "value", option.code)}
										key={get(option, "value", option.code)}
									>
										{get(option, "label", option.name)}
									</Select.Option>
								);
							})}
					</Select>
				</Form.Item>
			)}
		</>
	);
};

SelectComponent.propTypes = {
	component_code: PropTypes.string,
	keyboard_type: PropTypes.string,
	label: PropTypes.string,
	validate: PropTypes.shape({
		required: PropTypes.bool,
	}),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	options: PropTypes.array,
	path: PropTypes.string,
};

export default SelectComponent;
