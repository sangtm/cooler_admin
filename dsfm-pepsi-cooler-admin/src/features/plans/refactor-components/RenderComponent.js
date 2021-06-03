import React from 'react';
import { useSelector } from 'react-redux';

import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';
import SelectComponent from './SelectComponent';

const RenderComponent = (props) => {
  const { provinces, districts, wards } = useSelector((state) => state.publicReducer);
  const mapProvinces = provinces.map((item) => ({ label: item.display_name, value: item.code }));
  const mapDistricts = districts.map((item) => ({ label: item.display_name, value: item.code }));
  const mapWards = wards.map((item) => ({ label: item.display_name, value: item.code }));

  switch (props.component_type) {
    case 'TEXT': {
      return <InputComponent {...props} />;
    }

    case 'TEXTAREA': {
      return <TextAreaComponent {...props} />;
    }

    case 'SELECT': {
      return <SelectComponent {...props} />;
    }

    case 'PROVINCE_SELECT': {
      return <SelectComponent {...props} options={mapProvinces} />;
    }

    case 'DISTRICT_SELECT': {
      return <SelectComponent {...props} options={mapDistricts} />;
    }

    case 'WARD_SELECT': {
      return <SelectComponent {...props} options={mapWards} />;
    }

    default: {
      return null;
    }
  }
};

export default RenderComponent;
