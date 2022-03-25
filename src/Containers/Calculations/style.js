import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const Calc = styled.div`
  border-bottom: ${props.BORDER_WIDTH}px solid black;
  text-align: right;
  font-size: ${props.FS_BIG}px;
  margin: ${props.M_10}px;
  padding: ${props.P_8}px;
`;
