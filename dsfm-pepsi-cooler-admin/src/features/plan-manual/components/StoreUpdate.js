import React, { useRef, useState } from "react";
import { Card } from "antd";
import { get } from "lodash";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { LOCATION_COMPONENT_CODE } from "../../../constants";

const StoreUpdate = ({ data, location, storeStatus }) => {
  const locationRefs = useRef({
    selectCity: "",
    selectDistrict: "",
  });

  const [reload, setReload] = useState(-1);

  const _renderStoreItem = (data, index) => {
    const storeProps = {
      index,
      key: data.component_code,
      path: `issues.STORE_UPDATE.items`,
      ...data,
      province: get(location, "province", []),
      district: get(location, "district", []),
      ward: get(location, "ward", []),
    };
    const type = data.component_type;

    switch (type) {
      case "TEXT": {
        return <InputComponent {...storeProps} />;
      }
      case "WARD_SELECT":
      case "DISTRICT_SELECT":
      case "PROVINCE_SELECT": {
        return (
          <SelectComponent
            {...storeProps}
            _onRefs={_onRefsLocation}
            _districtRefs={locationRefs.current.selectDistrict}
            _cityRefs={locationRefs.current.selectCity}
            _onReload={_onReloadLocation}
            _checkReload={reload}
          />
        );
      }
    }
  };

  const _onRefsLocation = (check, value) => {
    check
      ? (locationRefs.current.selectCity = value)
      : (locationRefs.current.selectDistrict = value);
  };

  const _onReloadLocation = (value) => {
    value === LOCATION_COMPONENT_CODE[0] ? setReload(1) : setReload(0);
  };

  return (
    <>
      {data.store_status.includes(storeStatus) && (
        <Card title={data.issue_name} size="small">
          {data.items.map((item, index) => {
            return <div key={index}>{_renderStoreItem(item, index)}</div>;
          })}
        </Card>
      )}
    </>
  );
};

export default StoreUpdate;
