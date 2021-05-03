import { REGISTER } from "redux-persist/es/constants";
import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  LOGIN,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: true,
  isLoading: false,
  errors: null,
  message: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };
    case REGISTER_SUCCESS:
      return {
        isAuthenticated: false,
        isLoading: false,
        errors: null,
        message: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errors: action.payload,
      };
  }
};

export default auth;
