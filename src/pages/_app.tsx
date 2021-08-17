// Providers
import { ThemeProvider } from '@material-ui/core';
// Styles
import '../styles/css/styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/mui/theme';

// Is this a higher order component ?
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;