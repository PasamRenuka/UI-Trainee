import { API_REQUEST, API_SUCCESS, API_ERROR } from "./type";
const initialState = {
  datas: [],
  loading: false,
  error: "",
};
export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        loading: false,
        datas: action.payload,
      };
    case API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
