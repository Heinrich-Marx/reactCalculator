import { H1Style, HeaderStyle, LinkStyle } from './style';

export const Header = () => {
  return (
    <HeaderStyle>
      <H1Style>Calculator App</H1Style>
      <div>
        <LinkStyle to='/'>Home</LinkStyle>
        <LinkStyle to='/setting'>Setting</LinkStyle>
      </div>
    </HeaderStyle>
  );
};
