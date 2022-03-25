import { H2 } from './style';
import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { is: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.isError) return <H2>We have a Mistake</H2>;
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};
