import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';
import { history, configuredStore } from './store';
import './app.global.css';
import Themes from './themes';

const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(
    <ThemeProvider theme={Themes.default}>
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
    </ThemeProvider>,
    document.getElementById('root')
  );
});
