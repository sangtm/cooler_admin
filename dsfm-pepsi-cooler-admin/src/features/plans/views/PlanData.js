import React from 'react';
import styled from 'styled-components';
import { Row, Col, Form } from 'antd';
import { validateMessages } from '../../../utils/helpers';
import { Note, NoteUnsuccess, QuestionAnswer, Survey, ExpiredDate, Camera, Facing } from '../components';


// Refactor
import IssueItem from '../refactor-components/IssueItem';

const BoxWrapper = styled.div`
  max-height: 800px;
  overflow: auto;
  .ant-form-item-label > label {
    height: auto;
    white-space: normal;
  }

  & > .ant-card-small > .ant-card-head {
    color: #fff;
    background-color: #007eb3;
  }
`;


function PlanData({ planData, images, planSid, handleReload }) {
  const [form] = Form.useForm();
  console.log('Plan Data component: ', planData, images);

  const storeStatus = planData.store.status;
  const renderIssueList = () => {
    return Object.keys(planData.issues).map((issue) => (
      <IssueItem
        key={issue}
        issueKey={issue}
        {...planData.issues[issue]}
        path="data.issues"
        storeStatus={storeStatus}
      />
    ))
  }

  return (
    <Form
      form={form}
      size="small"
      layout="horizontal"
      validateMessages={validateMessages}
      colon={false}
    >
      <Row gutter={[24, 24]}>
        <Col span={24} lg={10}>
          <BoxWrapper>
            {
              renderIssueList()
            }
          </BoxWrapper>
        </Col>

        <Col span={24} lg={14}>
          <BoxWrapper>
            {
              planData.issues['CAMERA'] && (<Camera {...planData.issues['CAMERA']} images={images} status={planData.store.status} planSid={planSid} handleReload={handleReload} />)
            }
          </BoxWrapper>
        </Col>
      </Row>
    </Form>
  );
}

export default React.memo(PlanData)