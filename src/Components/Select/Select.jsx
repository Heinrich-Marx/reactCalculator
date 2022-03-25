import React from 'react';
import { themeArr } from '../../Constants/Theme';
import {
  CustomSelectBody,
  CustomSelectItem,
  CustomSelectIcon,
  CustomSelectCurrent,
  CustomSelectHeader,
  CustomSelectWrapper,
} from './style';
import {
  ActionColored,
  ActionDark,
  ActionLight,
} from '../../Actions/ActionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    this.refToBody = React.createRef();
  }

  showList = () => {
    this.setState({ flag: !this.state.flag });
    const bodyRef = this.refToBody.current;
    if (!this.state.flag) {
      bodyRef.style.display = 'block';
      bodyRef.style.position = 'static';
    } else {
      bodyRef.style.display = 'none';
      bodyRef.style.position = 'absolute';
    }
  };

  changeHeader = (str) => {
    const bodyRef = this.refToBody.current;
    bodyRef.style.display = 'none';
    bodyRef.style.position = 'absolute';
    this.setState({ flag: !this.state.flag });
    switch (str) {
      case 'Colored Theme':
        return this.props.colored();
      case 'Dark Theme':
        return this.props.dark();
      default:
        return this.props.light();
    }
  };

  render() {
    return (
      <CustomSelectWrapper>
        <CustomSelectHeader onClick={this.showList}>
          <CustomSelectCurrent>{this.props.value}</CustomSelectCurrent>
          <CustomSelectIcon>&#9660;</CustomSelectIcon>
        </CustomSelectHeader>
        <CustomSelectBody name='selectWrapper' ref={this.refToBody}>
          {themeArr.map(({ id, value, string }) => {
            return (
              <CustomSelectItem
                onClick={() => {
                  this.changeHeader(string);
                }}
                key={id}
                value={value}
              >
                {string}
              </CustomSelectItem>
            );
          })}
        </CustomSelectBody>
      </CustomSelectWrapper>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.switchTheme.value,
  };
};

const mapDispatchToProps = {
  dark: ActionDark,
  colored: ActionColored,
  light: ActionLight,
};

export const Select = connect(mapStateToProps, mapDispatchToProps)(One);

Select.propTypes = {
  value: PropTypes.string,
  dark: PropTypes.objectOf(PropTypes.string),
};
