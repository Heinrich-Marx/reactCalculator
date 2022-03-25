import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Setting } from './Screens/Setting/Setting';
import { Home } from './Screens/Home/Home';
import { ThemeProvider } from 'styled-components';
import { dark, light, colored } from './Styles/Theme';
import { GlobalStyles } from './Styles/GlobalStyles';
import { connect } from 'react-redux';
import React from 'react';
import { ErrorBoundary } from './Containers/ErrorBoundary/ErrorBoundary';

class One extends React.Component {
  switchTheme = () => {
    switch (this.props.value) {
      case 'dark':
        return dark;
      case 'colored':
        return colored;
      default:
        return light;
    }
  };

  render() {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={this.switchTheme()}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.switchTheme.string,
  };
};

const App = connect(mapStateToProps)(One);

export default App;
