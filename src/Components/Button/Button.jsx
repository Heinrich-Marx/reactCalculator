import { Btn } from './style';
import PropTypes from 'prop-types';

export const Button = ({ value, handleClick }) => {
  return <Btn onClick={handleClick}>{value}</Btn>;
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};
