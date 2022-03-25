import { Memory } from './style';
import { connect } from 'react-redux';
import React from 'react';
import { UlHistory } from '../../Components/UlHistory/UlHistory';
import PropTypes from 'prop-types';

class One extends React.Component {
  render() {
    return (
      <Memory>
        <h3>History</h3>
        <UlHistory array={this.props.history} />
      </Memory>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    history: state.history.array,
  };
};

export const History = connect(mapStateToProps)(One);

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};
