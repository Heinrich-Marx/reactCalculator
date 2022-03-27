import { Div } from './style';
import { OperatorsArr } from '../../Constants/Buttons';
import { Button } from '../../Components/Button/Button';
import { connect } from 'react-redux';
import {
  ActionSetValue,
  ActionEqual,
  ActionDelSymbol,
  ActionDelAllSymbol,
  ActionAddHistory,
} from '../../Actions/ActionCreators';
import { reversePolishNot } from '../../Utils/reversePolishNot';
import React from 'react';
import PropTypes from 'prop-types';

class One extends React.Component {
  render() {
    const addNumber = (number) => {
      switch (number) {
        case '=':
          const [result, addToHistory] = reversePolishNot(this.props.value);
          if (addToHistory) {
            this.props.addHistory(this.props.value);
          }
          this.props.getEqual(result);
          break;
        case 'C':
          this.props.delSymbol();
          break;
        case 'CE':
          this.props.delAllSymbol();
          break;
        default:
          this.props.changeValue(number);
      }
    };
    return (
      <Div>
        {OperatorsArr.map(({ id, operator }) => {
          return (
            <Button
              key={id}
              value={operator}
              handleClick={() => addNumber(operator)}
            />
          );
        })}
      </Div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.operators.value,
  };
};

const mapDispatchToProps = {
  changeValue: ActionSetValue,
  getEqual: ActionEqual,
  delSymbol: ActionDelSymbol,
  delAllSymbol: ActionDelAllSymbol,
  addHistory: ActionAddHistory,
};

export const Operators = connect(mapStateToProps, mapDispatchToProps)(One);

Operators.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.objectOf(PropTypes.string),
  getEqual: PropTypes.objectOf(PropTypes.string),
  delSymbol: PropTypes.objectOf(PropTypes.string),
  delAllSymbol: PropTypes.objectOf(PropTypes.string),
  addHistory: PropTypes.objectOf(PropTypes.string),
};
