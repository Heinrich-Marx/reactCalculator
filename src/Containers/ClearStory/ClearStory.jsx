import React from 'react';
import { connect } from 'react-redux';
import {
  ActionClearStore,
  ActionDelAllSymbol,
} from '../../Actions/ActionCreators';
import { Button } from './style';
import PropTypes from 'prop-types';

class One extends React.Component {
  clearStory = () => {
    this.props.clear();
    this.props.deleteAll();
  };

  render() {
    return <Button onClick={this.clearStory}>Clear All History</Button>;
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.operators.value,
  };
};

const mapDispatchToProps = {
  clear: ActionClearStore,
  deleteAll: ActionDelAllSymbol,
};

export const ClearStory = connect(mapStateToProps, mapDispatchToProps)(One);

ClearStory.propTypes = {
  value: PropTypes.string,
};
