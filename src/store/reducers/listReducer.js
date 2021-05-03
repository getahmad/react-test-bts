import {
  ADD_LIST_REQUEST,
  ADD_LIST_SUCCESS,
  LIST_REQUEST,
  LIST_SUCCESS,
} from "../actions/types";

const initialState = {
  isLoading: false,
  lists: [],
  errors: null,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case LIST_REQUEST:
    case ADD_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_SUCCESS:
    console.log(action.payload);
      return {
        isLoading: false,
        lists: action.payload,
      };

    case ADD_LIST_SUCCESS:
      return {
        isLoading: false,
        lists: [...state.lists, action.payload],
      };
  }
};

export default list;
