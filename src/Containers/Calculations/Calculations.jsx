import React from 'react';
import { Calc } from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  render() {
    return <Calc name='fieldWithCalc'>{this.props.value}</Calc>;
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.operators.value,
  };
};

export const Calculations = connect(mapStateToProps)(Calculator);

Calculations.propTypes = {
  value: PropTypes.string,
};
