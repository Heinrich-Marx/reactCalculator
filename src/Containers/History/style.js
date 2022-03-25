import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';
export const Memory = styled.div`
  width: 20%;
  border-left: ${props.BORDER_WIDTH}px solid black;
  margin: ${props.M_10}px;
  padding: ${props.P_8}px;
  text-align: center;
  font-size: ${props.FS_NORMAL}px;
`;
