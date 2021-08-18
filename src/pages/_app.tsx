// Modules
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Providers
import { ThemeProvider } from '@material-ui/core';
// Styles
import '../theme/css/styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
// InMemoryCache is used to cache query results after fetching them
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/api/graphql',
});

// Is this a higher order component ?
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
