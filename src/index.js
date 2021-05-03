import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { SWRConfig } from 'swr'
import { IdentityContextProvider } from "react-netlify-identity-widget"
import { getConfig } from './config'
import "@reach/tabs/styles.css";
const { netlifySiteInstance } = getConfig()

const swrConfig = {
  refreshInterval: 3000,
}

let darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

darkTheme = responsiveFontSizes(darkTheme);


ReactDOM.render(
  <IdentityContextProvider url={netlifySiteInstance}>
    <ThemeProvider theme={darkTheme}>
      <SWRConfig value={swrConfig}>
        <App />
      </SWRConfig>
    </ThemeProvider>
  </IdentityContextProvider>
  ,
  document.getElementById('root')
);
