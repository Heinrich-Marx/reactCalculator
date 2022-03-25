import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const HeaderStyle = styled.header`
  background-color: ${props.BG_GRAY};
  padding: ${props.HEADER_PADDING}px;
  display: flex;
  justify-content: space-between;
`;

export const H1Style = styled.h1`
  font-size: ${props.FS_NORMAL}px;
`;

export const LinkStyle = styled(Link)`
  font-size: ${props.FS_NORMAL}px;
  color: ${props.BG_BLACK};
  text-decoration: none;
  margin-right: ${props.MR_5}px;
`;
