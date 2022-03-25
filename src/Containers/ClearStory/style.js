import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const Button = styled.button`
  width: ${props.BIG_BTN_W}px;
  height: ${props.BTN_HEIGHT}px;
  border: ${props.BORDER_WIDTH}px solid;
  border-color: ${props.BG_BLACK};
  margin: 50px;
  color: ${props.BG_BLACK};
  font-size: ${props.FS_NORMAL}px;
  position: absolute;
  top: 250px;
  z-index: 1;
  transition: all 0.2s;

  &:active {
    border: 3px solid;
  }
`;
