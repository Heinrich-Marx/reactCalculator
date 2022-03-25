import styled from 'styled-components';
import { props } from '../../Styles/CssVariables';

export const CustomSelectBody = styled.div`
  border: ${props.BORDER_WIDTH}px solid;
  border-color: ${props.BG_BLACK};
  border-top: 0;
  display: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 100%;
`;

export const CustomSelectItem = styled.p`
  cursor: pointer;
  font-size: ${props.FS_SMALL}px;
  line-height: ${props.LINE_HEI_24}px;
  padding: ${props.P_8}px;
  background-color: #fff;
  z-index: 2;
  position: relative;
  transition: all 0.4s;
  &:hover {
  }
`;

export const CustomSelectIcon = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  height: ${props.SELECT_H}px;
  margin-left: auto;
  text-align: center;
  width: ${props.SELECT_W}px;
`;

export const CustomSelectCurrent = styled.span`
  font-size: ${props.FS_NORMAL}px;
  border-radius: ${props.BTN_BORDER_R}px;
  line-height: ${props.LINE_HEI_24}px;
  padding: ${props.P_8}px;
`;

export const CustomSelectHeader = styled.div`
  border: ${props.BORDER_WIDTH}px solid;
  border-color: ${props.BG_BLACK};
  cursor: pointer;
  display: flex;
`;

export const CustomSelectWrapper = styled.div`
  display: block;
  width: ${props.BIG_BTN_W}px;
  margin-left: 50px;
`;
