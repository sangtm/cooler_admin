import React from 'react';

const ScanQR = ({ type_name, show, component_code }) => {
  return (
    <>
      {show && (
        <div>
          <h1>
            {type_name} (ScanQR component) {component_code}
          </h1>
        </div>
      )}
    </>
  );
};

export default ScanQR;
