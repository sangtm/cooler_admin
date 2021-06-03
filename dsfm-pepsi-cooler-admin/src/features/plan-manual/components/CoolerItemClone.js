import React from "react";

import SelectComponent from "./SelectComponent";
import TextAreaComponent from "./TextAreaComponent";
import InputComponent from "./InputComponent";

const CoolerItemClone = ({ questionnaires, path }) => {
  const renderItem = (item, index) => {
    switch (item.component_type) {
      case "SELECT": {
        return (
          <SelectComponent
            key={`${path}.questionnaires.${item.component_code}`}
            {...item}
            path={`${path}.questionnaires`}
            index={index}
          />
        );
      }

      case "TEXTAREA": {
        return (
          <TextAreaComponent
            key={`${path}.questionnaires.${item.component_code}`}
            {...item}
            path={`${path}.questionnaires`}
            index={index}
          />
        );
      }

      case "TEXT": {
        return (
          <InputComponent
            key={`${path}.questionnaires.${item.component_code}`}
            {...item}
            path={`${path}.questionnaires`}
            index={index}
          />
        );
      }

      default: {
        return null;
      }
    }
  };

  return <>{questionnaires.map(renderItem)}</>;
};

export default CoolerItemClone;
