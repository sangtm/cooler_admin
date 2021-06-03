import moment from "moment";
import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useParams, useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Space,
  Spin,
  Select,
  DatePicker,
  Row,
  Col,
  Tag,
  Modal,
  Button,
  Divider,
} from "antd";

import { STATUS_CODE, ROLE } from "../../../constants";
import { ButtonCancel, ButtonSave } from "../../../components/Button";
import { Notification, Loader } from "../../../components";
import { validateMessages } from "../../../utils/helpers";
import {
  LayoutWrapper,
  TitleWrapper,
  TitleHeader,
  TitleBox,
  BoxWrapper,
} from "../../../assets/styles";

import { TimeTrackings, CheckQC } from "../components";
import PlanData from "./PlanData";

import {
  handleGetDetail,
  handleGetData,
  handleUpdate,
  handleGetImageFiles,
} from "../actions";
import { handleGetList as handleGetCampaignList } from "../../campaigns/actions";
import { handleGetList as handleGetPgList } from "../../pgs/actions";
import { handleGetList as handleGetStoreList } from "../../stores/actions";
import { handleGetList as handleGetRegionList } from "../../regions/actions";
import {
  handleGetProvinces,
  handleGetDistricts,
  handleGetWards,
} from "../../public/actions";

const groupImageByTypeId = (data) => {
  let imagesbytype = {};

  data.forEach((item) => {
    let image_key = item.image_type_id;
    if (!imagesbytype[image_key]) {
      imagesbytype[image_key] = [];
    }

    imagesbytype[image_key].push(item);
  });

  return imagesbytype;
};

export default function PlanCreate() {
  const match = useRouteMatch();
  const { role } = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true); // Is disabled if different TODO
  const [plan, setPlan] = useState(null);
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [planData, setPlanData] = useState(null);
  const [images, setImages] = useState(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState(null);
  const [dataReload, setDataReload] = useState(null);
  const [reloadImage, setReloadImage] = useState(null);

  console.log("match: ", match);

  useEffect(() => {
    dispatch(
      handleGetDetail(id, ({ error, data, message }) => {
        if (error) {
          Notification("error", message);
        } else {
          setPlan(data);

          const {
            status,
            code,
            campaign_code,
            start_date,
            end_date,
            store,
            pgs,
            qc_status,
            qc_note,
          } = data;

          form.setFieldsValue({
            status,
            code: store.code,
            campaign_code,
            start_date: moment(start_date, "YYYY/MM/DD"),
            end_date: moment(end_date, "YYYY/MM/DD"),
            store_name: store.name,
            store_sid: store.sid,
            region_id: store.region.id,
            location: store.location,
            province_code: store.province?.code,
            pg_public_id: `${pgs[0].username} - ${pgs[0].full_name}`,
            qc_status,
            qc_note,
          });
        }
      })
    );
  }, [dataReload]);

  useEffect(() => {
    dispatch(
      handleGetImageFiles(
        id,
        { page: 1, page_size: 100 },
        ({ error, message, data }) => {
          if (error) {
            Notification("error", message);
          } else {
            setImages(data);
          }
        }
      )
    );
  }, [reloadImage])

  useEffect(() => {
    dispatch(
      handleGetData(id, ({ error, data, message }) => {
        if (error) {
          Notification("error", message);
        } else {
          if (data.length) {
            setPlanData(data[0].data);

            const provinceCode =
              data[0].data.issues.STORE_UPDATE.items[2].value;
            const districtCode =
              data[0].data.issues.STORE_UPDATE.items[3].value;

            dispatch(handleGetDistricts("VNM", provinceCode, () => { }));
            dispatch(
              handleGetWards("VNM", provinceCode, districtCode, () => { })
            );
          } else {
            setPlanData(data);
          }
        }
      })
    );

    dispatch(
      handleGetRegionList({}, ({ error, message, data }) => {
        if (error) {
          Notification("error", message);
        } else {
          setRegions(data);
        }
      })
    );

    dispatch(
      handleGetProvinces("VNM", ({ error, message, data }) => {
        if (error) {
          Notification("error", message);
        } else {
          setProvinces(data);
        }
      })
    );
  }, []);

  const onFinish = (values) => {
    const convertValues = {
      ...values,
      // start_date: values['start_date'].format('YYYY-MM-DD'),
      // end_date: values['end_date'].format('YYYY-MM-DD'),
      id,
      qc_note: values.qc_note || null,
    };

    setValues(convertValues);
    setVisible(true);
  };

  const onClickOk = () => {
    setIsLoading(true);
    dispatch(
      handleUpdate(values, ({ error, message, data }) => {
        setIsLoading(false);
        if (error) {
          Notification("error", message);
        } else {
          Notification("success", message);
          setDataReload(data);
        }
      })
    );

    setVisible(false);
  };

  const onClickCancel = () => {
    setVisible(false);
  };

  if (plan && isDisabled && plan.status === "TODO") {
    setIsDisabled(false);
  }

  if (!plan || planData === null || !images) {
    return <Loader />;
  }

  const handleReload = (data) => {
    setReloadImage(data);
  };

  return (
    <Fragment>
      <Modal
        visible={visible}
        onOk={onClickOk}
        onCancel={onClickCancel}
        closable={false}
        centered
        footer={[
          <Button key="submit" type="primary" size="large" onClick={onClickOk}>
            CÓ
          </Button>,
          <Button key="back" size="large" onClick={onClickCancel}>
            KHÔNG
          </Button>,
        ]}
      >
        <h3 style={{ fontSize: 25 }}>
          Thao tác check QC chỉ thực hiện 1 lần. Bạn có muốn thực hiện?
        </h3>
      </Modal>
      <LayoutWrapper>
        <TitleWrapper>
          <TitleHeader>Plan Info</TitleHeader>
          {plan.status === "TODO" && (
            <Link to={`${match.url}/manual`}>
              <Button type="primary" danger size="large">
                Plan manual
              </Button>
            </Link>
          )}
        </TitleWrapper>

        <BoxWrapper>
          <Spin spinning={isLoading}>
            <Form
              form={form}
              size="small"
              layout="horizontal"
              labelAlign="left"
              initialValues={{}}
              onFinish={onFinish}
              validateMessages={validateMessages}
              labelCol={{ span: 6 }}
            >
              <Row gutter={[24, 24]}>
                <Col span={24} lg={24}>
                  <div className="formBox">
                    <TitleBox>Thông tin cửa hàng</TitleBox>
                    <div className="formBoxContent">
                      <Row gutter={[48, 0]}>
                        <Col span={24} lg={12}>
                          <Form.Item
                            name="store_name"
                            label="Store"
                            rules={[{ required: true }]}
                          >
                            <Input disabled={isDisabled} />
                          </Form.Item>

                          <Form.Item
                            name="code"
                            label="Smollan code"
                            rules={[{ required: true }]}
                          >
                            <Input disabled={isDisabled} />
                          </Form.Item>

                          <Form.Item
                            name="location"
                            label="Location"
                            rules={[{ required: false }]}
                          >
                            <Input disabled={isDisabled} />
                          </Form.Item>

                          <Form.Item
                            name="pg_public_id"
                            label="Mer"
                            rules={[{ required: true }]}
                          >
                            <Input disabled={isDisabled} />
                          </Form.Item>

                          {planData && planData?.length !== 0 && (
                            <Form.Item
                              name="numCooler"
                              label="Number of Cooler"
                              rules={[{ required: false }]}
                              initialValue={planData.store.numCooler}
                            >
                              <Input disabled />
                            </Form.Item>
                          )}
                        </Col>

                        <Col span={24} lg={12}>
                          {planData && planData?.length !== 0 && (
                            <Form.Item
                              name="rating"
                              label="Rating"
                              rules={[{ required: false }]}
                              initialValue={planData.store.status}
                            >
                              <Select disabled>
                                <Select.Option value="SUCCESS">
                                  Thành công
                                </Select.Option>
                                <Select.Option value="UNSUCCESS">
                                  Không thành công
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          )}

                          <Form.Item
                            name="status"
                            label="Status"
                            rules={[{ required: false }]}
                          >
                            <Select
                              showSearch
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")
                                  .toLowerCase()
                                  .indexOf(
                                    input
                                      .normalize("NFD")
                                      .replace(/[\u0300-\u036f]/g, "")
                                      .toLowerCase()
                                  ) >= 0
                              }
                              disabled={isDisabled}
                            >
                              {STATUS_CODE.map((item) => (
                                <Select.Option key={item.id} value={item.id}>
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            name="region_id"
                            label="Region"
                            rules={[{ required: false }]}
                          >
                            <Select
                              allowClear
                              showSearch
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")
                                  .toLowerCase()
                                  .indexOf(
                                    input
                                      .normalize("NFD")
                                      .replace(/[\u0300-\u036f]/g, "")
                                      .toLowerCase()
                                  ) >= 0
                              }
                              disabled
                            >
                              {regions.map((item) => (
                                <Select.Option key={item.id} value={item.id}>
                                  {item.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            name="province_code"
                            label="Province"
                            rules={[{ required: false }]}
                          >
                            <Select
                              allowClear
                              showSearch
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")
                                  .toLowerCase()
                                  .indexOf(
                                    input
                                      .normalize("NFD")
                                      .replace(/[\u0300-\u036f]/g, "")
                                      .toLowerCase()
                                  ) >= 0
                              }
                              disabled
                            >
                              {provinces.map((item) => (
                                <Select.Option
                                  key={item.code}
                                  value={item.code}
                                >
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Divider orientation="left">Time Tracking</Divider>
                          <TimeTrackings timeTrackings={plan.timetrackings} />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row gutter={[24, 24]}>
                {planData && planData?.length !== 0 && (
                  <Col span={24}>
                    <PlanData planData={planData} images={images} planSid={plan.sid} handleReload={handleReload} />
                  </Col>
                )}
                {plan.status === "DONE" && (
                  <CheckQC
                    isDisabled={
                      plan.qc_status !== "AWAIT" || role === ROLE.GUEST
                    }
                  />
                )}
              </Row>

              <Form.Item
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.qc_status !== currentValues.qc_status
                }
              >
                {({ getFieldValue }) => {
                  const isDisabled = getFieldValue("qc_status") === "AWAIT";

                  return (
                    <div style={{ textAlign: "center" }}>
                      {plan.status === "DONE" &&
                        plan.qc_status === "AWAIT" &&
                        role !== ROLE.GUEST && (
                          <ButtonSave disabled={isDisabled} />
                        )}
                      <ButtonCancel />
                    </div>
                  );
                }}
              </Form.Item>
            </Form>
          </Spin>
        </BoxWrapper>
      </LayoutWrapper>
    </Fragment>
  );
}
