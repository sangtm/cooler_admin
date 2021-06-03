import { takeEvery, put, call, all } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import moment from "moment";
import {
  get_structure_api,
  get_detail_api,
  get_plan_api,
  update_plan_api,
  create_plan_data_api,
  upload_plan_image_api,
} from "../../api/plans";

function* handleGetAPI({ payload }) {
  const { data } = payload;
  try {
    const [plan, structure] = yield all([
      call(get_detail_api, data),
      call(get_structure_api),
    ]);
    let arrItemCooler = [];
    for (let i = 0; i < plan.data.store.num_of_coolers; i++) {
      arrItemCooler.push({
        ...structure.data.content.issues.COOLER.item_structure,
        cooler_key: `EX${(Math.random() * 1000000).toFixed(0)}`,
      });
    }
    const planSData = structure.data.content.issues;
    planSData.COOLER.items = arrItemCooler;
    const planMData = {
      plan_sid: data,
      pg_sid: plan.data.pgs[0].sid,
      data: {
        sid: data,
        store: {
          code: plan.data.store.code,
          name: plan.data.store.name,
          address: plan.data.store.location,
          lat: plan.data.store.lat,
          lng: plan.data.store.lng,
          regionCode: plan.data.store.region.code,
          numCooler: plan.data.store.num_of_coolers,
          status: null,
        },
        trackingTime: null,
        issues: planSData,
      },
    };
    console.log("data: ", planMData);
    yield put(actions.handleGetListAPISuccess(planMData));
  } catch (error) {
    console.log("err:", error);
    if (error.response) {
      if (error.response.status !== 401 && error.response.status !== 403) {
        const message = error.response.data?.message || error.message;
        // yield put(actions.handleGetAPIErro());
      }
    }
  }
}

function* handleGetLocationAPI(data) {
  const { provinceCode, districtCode } = data || {};
  try {
    const result = yield call(get_plan_api, {
      provinceCode,
      districtCode,
    });
    const newResult = {
      province: !provinceCode && !districtCode ? result.data : undefined,
      district: provinceCode && !districtCode ? result.data : undefined,
      ward: provinceCode && districtCode ? result.data : undefined,
    };
    yield put(actions.handleGetLocationAPISuccess(newResult));
  } catch (error) {
    console.log("err:", error);
    if (error.response) {
      if (error.response.status !== 401 && error.response.status !== 403) {
        const message = error.response.data?.message || error.message;
      }
    }
  }
}

function* handleCreatePlanManual({ payload }) {
  const { data: planData, callback } = payload;
  const { data, images, lastCheckin } = planData;
  const { plan_sid, pg_sid } = data;

  try {
    const formDataImages = [];
    yield images.forEach((image) => {
      const { cooler_key, data, type_id } = image;
      if (data.length) {
        const dataForm = new FormData();
        dataForm.append("plan_sid", plan_sid);
        dataForm.append("pg_sid", pg_sid);
        dataForm.append("image_type_id", type_id);
        dataForm.append("cooler_key", cooler_key);
        for (let i = 0; i < data.length; i++) {
          dataForm.append("files", data[i]);
        }
        formDataImages.push(dataForm);
      }
    });
    const result = yield all([
      call(update_plan_api, {
        plan_sid,
        status: "DONE",
        is_manual: 1,
        last_checkin: lastCheckin,
        last_checkout: new Date().toISOString(),
      }),
      call(create_plan_data_api, {
        plan_sid,
        data,
      }),
      all(
        formDataImages.map((item) =>
          call(upload_plan_image_api, plan_sid, item)
        )
      ),
    ]);
    callback({ error: false, message: "Tạo mới thành công" });
  } catch (error) {
    if (error.response) {
      if (error.response.status !== 401 && error.response.status !== 403) {
        const message = error.response.data?.message || error.message;
        callback({ error: true, message });
      }
    }
  }
}

export default [
  takeEvery(actionTypes.GET_LIST_API, handleGetAPI),
  takeEvery(actionTypes.GET_LOCATION_API, handleGetLocationAPI),
  takeEvery(actionTypes.CREATE_PLAN_MANUAL, handleCreatePlanManual),
];
