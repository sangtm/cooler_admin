import React from 'react'
import { Form, Select, Input, Col } from 'antd';
import { TitleBox } from '../../../assets/styles';

function CheckQC({ isDisabled }) {
  return (
    <Col span={24} lg={24}>
      <div className="formBox">
        <TitleBox>Check QC</TitleBox>
        <div className="formBoxContent">
          <Form.Item
            name="qc_status"
            rules={[
              { required: true, message: 'Vui lòng check QC' }
            ]}
          >
            <Select placeholder="Check QC" disabled={isDisabled}>
              <Select.Option value="AWAIT" disabled>AWAIT</Select.Option>
              <Select.Option value="PASSED">PASSED</Select.Option>
              <Select.Option value="FAILED">FAILED</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.qc_status !== currentValues.qc_status}
          >
            {({ getFieldValue }) =>
              getFieldValue('qc_status') === 'FAILED' ? (
                <Form.Item
                  name="qc_note"
                  label="Note lỗi"
                  rules={[
                    { required: true, message: 'Vui lòng nhập lỗi' }
                  ]}
                >
                  <Input.TextArea disabled={isDisabled} />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </div>
      </div>
    </Col>
  );
}

export default React.memo(CheckQC);