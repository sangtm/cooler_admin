import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Select } from "antd";
import styled from "styled-components";
import {
  handleGetListAPI,
  handleGetLocationAPI,
  handleUpdateStoreStatus,
  handleCreatePlanManual,
  handleClearState,
} from "../actions";
import { get } from "lodash";
import { Loader, Notification } from "../../../components";
import { LayoutWrapper, BoxWrapper } from "../../../assets/styles";
import { validateMessages } from "../../../utils/helpers";

import Cooler from "../components/Cooler";
import CoolerExtra from "../components/CoolerExtra";
import NoteUnsuccess from "../components/NoteUnsuccess";
import Camera from "../components/Camera";
import StoreUpdate from "../components/StoreUpdate";

const Wrapper = styled.div`
  & > .ant-card > .ant-card-head {
    color: #fff;
    background-color: #007eb3;
  }
`;

const PlanManual = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const plan = useSelector((state) => state.planManualReducer);
  const sUpdateProps = {
    data: get(plan, "planData.data.issues.STORE_UPDATE", {}),
    location: get(plan, "location", {}),
  };

  useEffect(() => {
    dispatch(handleGetListAPI(id));
    dispatch(handleGetLocationAPI([]));

    return () => {
      dispatch(handleClearState());
    };
  }, [dispatch, id]);

  if (!get(plan, "planData")) {
    return <Loader />;
  }

  const onChangeStoreStatus = (status) => {
    dispatch(handleUpdateStoreStatus(status));
  };

  const onFinish = () => {
    const { images, planData, lastCheckin } = plan;
    setIsLoading(true);
    dispatch(
      handleCreatePlanManual(
        { images, data: planData, lastCheckin },
        ({ error, message }) => {
          setIsLoading(false);
          if (error) {
            Notification("error", message);
          } else {
            Notification("success", message);
            setTimeout(() => {
              history.goBack();
            }, 1000);
          }
        }
      )
    );
  };

  return (
    <LayoutWrapper>
      <BoxWrapper>
        <Form
          layout="vertical"
          form={form}
          size="small"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Form.Item
            name="store_status"
            rules={[{ required: true }]}
            label="Trạng thái cửa hàng"
          >
            <Select onChange={onChangeStoreStatus}>
              <Select.Option value="SUCCESS">Thành công</Select.Option>
              <Select.Option value="UNSUCCESS">Không thành công</Select.Option>
            </Select>
          </Form.Item>

          {plan.planData.data.store.status !== null && (
            <Wrapper>
              <Camera storeStatus={plan.planData.data.store.status} />
              <Cooler storeStatus={plan.planData.data.store.status} />
              <CoolerExtra storeStatus={plan.planData.data.store.status} />
              <StoreUpdate
                storeStatus={plan.planData.data.store.status}
                {...sUpdateProps}
              />
              <NoteUnsuccess storeStatus={plan.planData.data.store.status} />
              <div style={{ textAlign: "center", marginTop: 30 }}>
                <Button htmlType="submit" loading={isLoading}>
                  Tạo
                </Button>
              </div>
            </Wrapper>
          )}
        </Form>
      </BoxWrapper>
    </LayoutWrapper>
  );
};

export default PlanManual;
