import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { OperatorsReducer } from './OperatorsReducer';
import { HistoryReducer } from './HistoryReducer';
import { SwitchThemeReducer } from './SwitchThemeReducer';
const rootReducer = combineReducers({
  operators: OperatorsReducer,
  history: HistoryReducer,
  switchTheme: SwitchThemeReducer,
});

export const store = createStore(rootReducer);
