import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { SWRConfig } from 'swr'
import { IdentityContextProvider } from "react-netlify-identity"
// const url = "https://your-identity-instance.netlify.com/" // supply the url of your Netlify site instance with Identity enabled. VERY IMPORTANT
// return <IdentityContextProvider url={url}>{/* rest of your app */}</IdentityContextProvider>

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

  <ThemeProvider theme={darkTheme}>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
