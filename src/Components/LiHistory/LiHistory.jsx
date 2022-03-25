import { Li } from './style';
import PropTypes from 'prop-types';

export const LiHistory = ({ string }) => {
  return <Li>{string}</Li>;
};

LiHistory.propTypes = {
  string: PropTypes.string,
};
