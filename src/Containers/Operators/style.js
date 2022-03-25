import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const Div = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: ${props.P_8}px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
