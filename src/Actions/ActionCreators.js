import {
  DELETE_ALL_SYMBOL,
  DELETE_SYMBOL,
  EQUAL,
  SET_VALUE,
  ADD_HISTORY,
  LIGHT_THEME,
  DARK_THEME,
  COLORED_THEME,
  CLEAR_STORE,
  CHANGE_SIGN,
} from '../Constants/Actions';

export const ActionEqual = (num) => ({
  type: EQUAL,
  payload: num,
});

export const ActionSetValue = (num) => ({
  type: SET_VALUE,
  payload: num,
});

export const ActionDelSymbol = () => ({
  type: DELETE_SYMBOL,
});

export const ActionDelAllSymbol = () => ({
  type: DELETE_ALL_SYMBOL,
});

export const ActionAddHistory = (str) => ({
  type: ADD_HISTORY,
  payload: str,
});

export const ActionLight = () => ({
  type: LIGHT_THEME,
});

export const ActionDark = () => ({
  type: DARK_THEME,
});

export const ActionColored = () => ({
  type: COLORED_THEME,
});

export const ActionClearStore = () => ({
  type: CLEAR_STORE,
});

export const ActionChangeSign = () => ({
  type: CHANGE_SIGN,
});
