import { COLORED_THEME, DARK_THEME, LIGHT_THEME } from '../Constants/Actions';

const initialState = {
  value: 'Light Theme',
  string: 'light',
};

export function SwitchThemeReducer(state = initialState, action) {
  switch (action.type) {
    case COLORED_THEME:
      return {
        ...state,
        value: 'Colored Theme',
        string: 'colored',
      };
    case DARK_THEME:
      return {
        ...state,
        value: 'Dark Theme',
        string: 'dark',
      };
    case LIGHT_THEME:
      return {
        ...state,
        value: 'Light Theme',
        string: 'light',
      };
    default:
      return state;
  }
}
