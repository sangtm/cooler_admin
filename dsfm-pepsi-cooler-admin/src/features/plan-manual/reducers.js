import * as actionTypes from "./actionTypes";
import { get, set, size } from "lodash";
import { LOCATION_COMPONENT_CODE } from "../../constants";

const initialState = {
  lastCheckin: null,
  images: [],
  planData: null,
  location: {
    province: {},
    district: {},
    ward: {},
  },
};

export default (state = initialState, action = {}) => {
  let _statePlanData = state.planData;
  let _stateLocation = state.location;
  switch (action.type) {
    case actionTypes.GET_LIST_API_SUCCESS: {
      return {
        ...state,
        planData: action.payload.data,
        lastCheckin: new Date().toISOString(),
        // planData: MOCK_PLAN_DATA, // test
      };
    }

    case actionTypes.HANDLE_CHANGE_VALUE: {
      const { path, value, index } = action.payload;
      let newItems = [...get(state.planData.data, path)];
      const questionActions = newItems[index]?.actions ?? {};

      if (newItems[index]) {
        const oldValue = newItems[index].value;
        if (questionActions[oldValue]) {
          newItems = newItems.map((item) => {
            return questionActions[oldValue]?.show.includes(item.component_code)
              ? { ...item, show: false }
              : item;
          });
        }

        if (questionActions[value]) {
          console.log("Found: ", questionActions[value]);
          newItems = newItems.map((item) => {
            return questionActions[value]?.show.includes(item.component_code)
              ? { ...item, show: true }
              : item;
          });
        }

        newItems = newItems.map((item, idx) => {
          return idx === index ? { ...item, value } : item;
        });
      }

      // console.log("newITems: ", newItems, state);

      const newData = { ...state.planData.data };
      set(newData, path, newItems);

      return {
        ...state,
        planData: {
          ...state.planData,
          data: newData,
        },
      };
    }

    case actionTypes.HANDLE_ADD_ITEM: {
      const items = [
        ...state.planData.data.issues.COOLER_EXTRA.items,
        {
          ...state.planData.data.issues.COOLER_EXTRA.item_structure,
          cooler_key: `EX${(Math.random() * 1000000).toFixed(0)}`,
        },
      ];

      const newData = { ...state.planData.data };
      set(newData, "issues.COOLER_EXTRA.items", items);

      return {
        ...state,
        planData: {
          ...state.planData,
          data: newData,
        },
      };
    }

    case actionTypes.HANDLE_DELETE_ITEM: {
      const { index, cooler_key } = action.payload;

      const items = state.planData.data.issues.COOLER_EXTRA.items.filter(
        (_, idx) => {
          return idx !== index;
        }
      );
      const images = state.images.filter(
        (item) => item.cooler_key !== cooler_key
      );

      const newData = { ...state.planData.data };
      set(newData, "issues.COOLER_EXTRA.items", items);

      return {
        ...state,
        images,
        planData: {
          ...state.planData,
          data: newData,
        },
      };
    }

    case actionTypes.GET_LOCATION_API_SUCCESS: {
      const { province, district, ward } = action.payload;
      const location = {};
      if (province) {
        location.province = province;
      }
      if (district) {
        location.district = district;
      }
      if (ward) {
        location.ward = ward;
      }
      return {
        ...state,
        location: {
          ...state.location,
          ...location,
        },
      };
    }

    case actionTypes.HANDLE_UPDATE_IMAGE_DATA: {
      const { cooler_key, data, type_id } = action.payload;
      let items = [...state.images];

      const indexItem = items.findIndex(
        (item) => item.type_id === type_id && item.cooler_key === cooler_key
      );
      if (indexItem !== -1) {
        items = items.map((item, index) =>
          index === indexItem ? { ...item, data } : item
        );
      } else {
        items = [...items, { cooler_key, data, type_id }];
      }

      return {
        ...state,
        images: items,
      };
    }

    case actionTypes.UPDATE_STORE_STATUS: {
      const { status } = action.payload;

      return {
        ...state,
        planData: {
          ...state.planData,
          data: {
            ...state.planData.data,
            store: {
              ...state.planData.data.store,
              status,
            },
          },
        },
      };
    }

    case actionTypes.CLEAR_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
