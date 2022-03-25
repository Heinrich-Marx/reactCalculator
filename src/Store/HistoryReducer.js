import { ADD_HISTORY, CLEAR_STORE } from '../Constants/Actions';

const initialState = {
  array: [],
};

export const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        array: [...state.array, action.payload],
      };
    case CLEAR_STORE:
      return {
        ...state,
        array: [],
      };
    default:
      return state;
  }
};
