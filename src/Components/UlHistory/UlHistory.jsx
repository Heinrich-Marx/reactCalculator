import { LiHistory } from '../LiHistory/LiHistory';
import PropTypes from 'prop-types';

export const UlHistory = ({ array }) => {
  return array.map((el, index) => {
    return <LiHistory key={index} string={el} />;
  });
};

UlHistory.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
};
