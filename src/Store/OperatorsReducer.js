import {
  SET_VALUE,
  EQUAL,
  DELETE_SYMBOL,
  DELETE_ALL_SYMBOL,
  CHANGE_SIGN,
} from '../Constants/Actions';

const initialState = { value: '0', operator: null };

export function OperatorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: state.value == 0 ? action.payload : state.value + action.payload,
      };
    case EQUAL:
      return { ...state, value: action.payload };
    case DELETE_SYMBOL:
      return {
        ...state,
        value:
          state.value.length <= 1
            ? '0'
            : state.value.substring(0, state.value.length - 1),
      };
    case DELETE_ALL_SYMBOL:
      return {
        ...state,
        value: '0',
      };
    case CHANGE_SIGN:
      return {
        ...state,
        value: state.value == 0 ? '' : +state.value * -1,
      };
    default:
      return state;
  }
}
