import * as actionTypes from "./actionTypes";

const handleGetListAPI = (data) => {
  return {
    type: actionTypes.GET_LIST_API,
    payload: {
      data,
    },
  };
};

const handleGetListAPISuccess = (data) => {
  return {
    type: actionTypes.GET_LIST_API_SUCCESS,
    payload: {
      data,
    },
  };
};

const handleChangeValue = (path, value) => ({
  type: actionTypes.CHANGE_VALUE,
  payload: {
    path,
    value,
  },
});
const handleChangeSelect = (path, data) => ({
  type: actionTypes.CHANGE_SELECT,
  payload: {
    path,
    data,
  },
});

const handleChangeValueRefactor = (payload) => ({
  type: actionTypes.HANDLE_CHANGE_VALUE,
  payload,
});

const handleAddItem = () => ({
  type: actionTypes.HANDLE_ADD_ITEM,
});

const handleDeleteItem = (index, cooler_key) => ({
  type: actionTypes.HANDLE_DELETE_ITEM,
  payload: {
    index,
    cooler_key,
  },
});

const handleUpdateImageData = (payload) => ({
  type: actionTypes.HANDLE_UPDATE_IMAGE_DATA,
  payload,
});

const handleGetLocationAPI = ({ provinceCode = "", districtCode = "" }) => ({
  type: actionTypes.GET_LOCATION_API,
  provinceCode,
  districtCode,
});

const handleGetLocationAPISuccess = (payload) => ({
  type: actionTypes.GET_LOCATION_API_SUCCESS,
  payload,
});

const handleReloadLocationAPI = (payload, path, index) => ({
  type: actionTypes.LOCATION_RELOAD,
  payload,
  path,
  index,
});

const handleUpdateStoreStatus = (status) => ({
  type: actionTypes.UPDATE_STORE_STATUS,
  payload: {
    status,
  },
});

const handleCreatePlanManual = (data, callback) => ({
  type: actionTypes.CREATE_PLAN_MANUAL,
  payload: {
    data,
    callback,
  },
});

const handleClearState = () => ({
  type: actionTypes.CLEAR_STATE,
});

export {
  handleGetListAPI,
  handleGetListAPISuccess,
  handleChangeSelect,
  handleChangeValue,
  handleChangeValueRefactor,
  handleGetLocationAPI,
  handleGetLocationAPISuccess,
  handleReloadLocationAPI,
  handleAddItem,
  handleDeleteItem,
  handleUpdateImageData,
  handleUpdateStoreStatus,
  handleCreatePlanManual,
  handleClearState,
};
