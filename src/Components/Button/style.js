import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const Btn = styled.button`
  width: ${props.BTN_WIDTH}px;
  height: ${props.BTN_HEIGHT}px;
  background-color: ${props.BG_GRAY};
  border-radius: ${props.BTN_BORDER_R}px;
  border: ${props.BORDER_WIDTH}px solid black;
  font-size: ${props.FS_BIG}px;
`;
